'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useIsMobile } from '@/hooks/use-mobile'

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const val = useIsMobile()
  useEffect(() => {
    if (!containerRef.current) return
    console.log(val)
    const scene = new THREE.Scene()

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setClearColor(0x000000, 0)
    const container = containerRef.current
    renderer.setSize(container.offsetHeight, container.offsetHeight)
    scene.background = null
    container.innerHTML = ''
    container.appendChild(renderer.domElement)

    const light1 = new THREE.PointLight(0x5a54ff, 0.75)
    light1.position.set(0, 0, 10)

    const light2 = new THREE.PointLight(0x4158f6, 0.75)
    light2.position.set(-10, 5, 5)
    const light3 = new THREE.PointLight(0x803bff, 0.7)
    light3.position.set(10, -5, 5)

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5)
    //scene.add(ambientLight);

    //scene.add(light1, light2, light3);

    const atmosphereShader = {
      atmosphere: {
        uniforms: {},
        vertexShader: [
          'varying vec3 vNormal;',
          'void main() {',
          'vNormal = normalize( normalMatrix * normal );',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
          '}',
        ].join('\n'),
        fragmentShader: [
          'varying vec3 vNormal;',
          'void main() {',
          'float intensity = pow( 0.99 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 6.0 );',
          'gl_FragColor = vec4( 1.0, 1.0, 1.0, 0.3 ) * intensity;',
          '}',
        ].join('\n'),
      },
    }
    let atmRad = val ? 2.2 : 2
    const atmosphereGeometry = new THREE.SphereGeometry(atmRad, 64, 64)
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(
        atmosphereShader['atmosphere'].uniforms,
      ),
      vertexShader: atmosphereShader['atmosphere'].vertexShader,
      fragmentShader: atmosphereShader['atmosphere'].fragmentShader,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    })

    const atm = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    atm.scale.set(1.1, 1.1, 1.1)
    atm.position.set(0, 0, 0)
    scene.add(atm)

    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64)
    const sphereMaterial = new THREE.MeshDepthMaterial()
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.castShadow = true
    sphere.receiveShadow = true
    sphere.position.set(0, 0, 0)
    scene.add(sphere)

    const loader = new THREE.TextureLoader()
    const overlayMaterial = new THREE.MeshBasicMaterial({
      map: loader.load('/globe.png'),
      transparent: true,
      color: 0xffffff,
    })

    const overlaySphereGeometry = new THREE.SphereGeometry(2, 64, 64)
    const overlaySphere = new THREE.Mesh(overlaySphereGeometry, overlayMaterial)
    overlaySphere.castShadow = true
    overlaySphere.receiveShadow = true
    sphere.add(overlaySphere)

    const numPoints = 100
    const start = new THREE.Vector3(0, 1.5, 1.3)
    const middle = new THREE.Vector3(0.6, 0.6, 3.2)
    const end = new THREE.Vector3(1.5, -1, 0.8)
    const curveQuad = new THREE.QuadraticBezierCurve3(start, middle, end)
    const tubeMaterial = new THREE.MeshBasicMaterial({
      color: 0xd965fa,
    })

    const tubes = Array(8)
      .fill(null)
      .map(() => {
        const tube = new THREE.TubeGeometry(
          curveQuad,
          numPoints,
          0.01,
          20,
          false,
        )
        tube.setDrawRange(0, 10000)
        const curveMesh = new THREE.Mesh(tube, tubeMaterial)
        sphere.add(curveMesh)
        return tube
      })

    const curveRotations = [
      { y: 0, z: 0, x: 0 },
      { y: 0.75, z: 0.75, x: -0.1 },
      { y: 2.1, z: 0.5, x: 0.2 },
      { y: 2.3, z: 0.8, x: 0.2 },
      { y: 2.9, z: 1.1, x: 2 },
      { y: 7.1, z: 1, x: 4.4 },
      { y: 2.1, z: 3, x: 4.4 },
      { y: 2.5, z: 1, x: 1.1 },
    ]

    sphere.children.slice(1, 9).forEach((mesh, i) => {
      const rotation = curveRotations[i]
      mesh.rotation.set(rotation.x, rotation.y, rotation.z)
    })

    const cylinderGeometry = new THREE.CylinderGeometry(0.01, 0.01, 4.25, 32)
    const cylinderMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ddff,
      transparent: true,
      opacity: 0.5,
    })

    const cylinderRotations = [
      { x: 0.75, z: 0 },
      { x: 0.74, z: -0.05 },
      { x: 0.72, z: -0.07 },
      { x: -1, z: 2 },
      { x: 0.8, z: 0.5 },
      { x: 1.1, z: 0 },
      { x: 2, z: 3 },
      { x: 0.8, z: 2.5 },
    ]

    cylinderRotations.forEach((rotation) => {
      const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)
      sphere.add(cylinder)
      cylinder.rotation.x = rotation.x
      cylinder.rotation.z = rotation.z
    })

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)

    camera.position.z = val ? 3.6 : 5

    let isDragging = false
    let previousMousePosition = {
      x: 0,
      y: 0,
    }
    let sphereRotation = {
      x: 0,
      y: 0,
    }

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true
      previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY,
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const deltaMove = {
        x: e.offsetX - previousMousePosition.x,
        y: e.offsetY - previousMousePosition.y,
      }

      sphereRotation.x += deltaMove.y * 0.004
      sphereRotation.y += deltaMove.x * 0.004

      sphereRotation.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, sphereRotation.x),
      )

      sphere.rotation.x = sphereRotation.x
      sphere.rotation.y = sphereRotation.y

      previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY,
      }
    }

    const handleMouseUp = () => {
      isDragging = false
    }

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      const touch = e.touches[0]
      const rect = container.getBoundingClientRect()
      previousMousePosition = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      }
      isDragging = true
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      if (!isDragging) return

      const touch = e.touches[0]
      const rect = container.getBoundingClientRect()
      const deltaMove = {
        x: touch.clientX - rect.left - previousMousePosition.x,
        y: touch.clientY - rect.top - previousMousePosition.y,
      }

      sphereRotation.x += deltaMove.y * 0.004
      sphereRotation.y += deltaMove.x * 0.004
      sphereRotation.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, sphereRotation.x),
      )

      sphere.rotation.x = sphereRotation.x
      sphere.rotation.y = sphereRotation.y

      previousMousePosition = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      }
    }

    const handleTouchEnd = () => {
      isDragging = false
    }

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove)
    container.addEventListener('touchend', handleTouchEnd)
    container.addEventListener('mouseleave', handleMouseUp)

    let renderCount = 0
    let currentGrowing = 0

    function growTube(index: number, count: number) {
      count = Math.ceil(count / 3) * 3
      tubes[index].setDrawRange(0, count)
      if (index > 2) {
        tubes[index - 3].setDrawRange(count, 10000)
      } else {
        tubes[tubes.length - 3 + index].setDrawRange(count, 10000)
      }
    }

    function animate() {
      if (renderCount < 10000) {
        renderCount += 80
        growTube(currentGrowing, renderCount)
      } else {
        renderCount = 0
        currentGrowing =
          currentGrowing >= tubes.length - 1 ? 0 : currentGrowing + 1
      }

      if (!isDragging) {
        sphereRotation.y += 0.001
        sphere.rotation.y = sphereRotation.y
      }

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (containerRef.current) {
        renderer.setSize(
          containerRef.current.offsetHeight,
          containerRef.current.offsetHeight,
        )
      }
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('mouseleave', handleMouseUp)
      renderer.dispose()
    }
  }, [val])

  return <div ref={containerRef} className="w-full h-full" id="globeCanvas" />
}
