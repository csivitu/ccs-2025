'use client'
import { useState, useEffect } from 'react'
import QuestionPanel from '@/components/questions-page/question-panel'
import AnswerPanel from '@/components/questions-page/answer-panel'
import { VscExtensions } from 'react-icons/vsc'
import type { Question } from '@prisma/client'
import { submitQuestion } from '@/app/actions/questions'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { ImSpinner2 } from 'react-icons/im'
export default function QuestionsPage({
  questions,
  answers: initialAnswers,
  sessionId,
}: {
  questions: Question[]
  answers: string[]
  sessionId: string
}) {
  const [mutex, setMutex] = useState(false)
  const handlePrevious = () => {
    setMutex(true)
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
    setMutex(false)
  }

  const [currentIndex, setCurrentIndex] = useState(() => {
    // Find first unanswered question
    const firstUnansweredIndex = initialAnswers.findIndex((answer) => !answer)
    return firstUnansweredIndex === -1 ? 0 : firstUnansweredIndex
  })
  const [answers, setAnswers] = useState<string[]>(initialAnswers)
  const [navbarHeight, setNavbarHeight] = useState(20)
  const handleNext = async () => {
    setMutex(true)
    await submitQuestion({
      questionId: questions[currentIndex].id,
      answer: answers[currentIndex],
      sessionId,
    })

    setMutex(false)
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }

    if (currentIndex === questions.length - 1) {
      // TODO: @padhai-head
      // toast.success("Quiz completed successfully!");
      redirect('/dashboard/domains?completed=true')
    }
  }
  useEffect(() => {
    const banner = document.getElementById('profile-completion-banner')
    if (banner) {
      banner.style.display = 'none'
    }
    const navbar = document.getElementById('navbar-top')
    if (navbar) {
      const navbarHeightPx = navbar.offsetHeight
      const navbarHeightVh = (navbarHeightPx / window.innerHeight) * 100
      setNavbarHeight(navbarHeightVh)
    }
    //god save me from these hacky fixes!!!!!!!!!!!!!!!!!
  }, [])
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && event.shiftKey) {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, answers])
  return (
    <main className="flex-1 relative flex flex-col min-h-screen">
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      {mutex && (
        <div className="w-full h-screen fixed top-0 left-0 bg-black/20 backdrop-blur-sm z-[900] flex items-center justify-center">
          {/* <Image
            src="/logos/navbar-logos/csi lotti.gif"
            width={400}
            height={400}
            alt=""
            className="w-20 md:w-44 aspect-square rounded-xl"
          /> */}
          <ImSpinner2 className="animate-spin w-16 h-auto" />
        </div>
      )}
      <section className="flex flex-row h-full relative">
        <aside
          className={`hidden md:flex flex-col gap-2 h-full z-10 fixed left-0 top-[${navbarHeight}vh] bg-[#09090b]`}
        >
          {[
            '/explorer.webp',
            '/search.webp',
            '/sourcecontrol.webp',
            '/run.webp',
            '/settings.webp',
          ].map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`${index + 1}`}
              className="w-12 h-12 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
            />
          ))}
        </aside>

        {/* Main content with flex-grow */}
        {/* SAAAVVVEEE MEEEE PLEASEEE */}
        <section className="flex flex-col md:flex-row gap-4 min-h-[90vh] flex-grow w-full md:pl-12 relative">
          <div className="flex tab:flex-row mobile:flex-col flex-grow h-full border-r">
            {/* Question Panel with min-height */}
            <div className="flex flex-col w-full md:w-2/5">
              <div className="md:hidden md:mb-4 min-h-[150px] max-h-[300px] overflow-y-auto">
                <QuestionPanel question={questions[currentIndex].question} />
              </div>

              {/* Desktop Question Panel */}
              <div
                className={`hidden tab:flex fixed left-12 top-[${navbarHeight}vh]`}
              >
                <QuestionPanel question={questions[currentIndex].question} />
              </div>
            </div>
            {/* Answer Panel with flex-grow */}
            <div
              className={`border-l border-gray-800 flex-grow  overflow-auto max-h-[80vh] relative`}
              id="answer-panel"
            >
              <AnswerPanel
                currentIndex={currentIndex}
                answers={answers}
                setAnswers={setAnswers}
                topPosition={navbarHeight}
              />
            </div>
          </div>
        </section>
      </section>

      {/* Navigation buttons with dynamic positioning */}
      <div className="sticky bottom-0 border-t border-gray-800 bg-[#09090b] z-[100] py-2 mt-auto w-full px-6">
        <div className="flex justify-between items-center px-2 md:px-0 gap-2">
          <button
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              textDecoration: 'none',
              borderRadius: '15px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(30px)',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '14px',
              letterSpacing: '2px',
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
            className="w-1/2 md:w-1/6"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            type="button"
          >
            &lt;&lt; Previous
          </button>

          <button
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              textDecoration: 'none',
              borderRadius: '15px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(30px)',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '14px',
              letterSpacing: '2px',
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
            type="button"
            className="w-1/2 md:w-1/6"
            onClick={handleNext}
            disabled={
              currentIndex === questions.length - 1 && !answers[currentIndex]
            }
          >
            {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next >>'}
          </button>
        </div>
      </div>
    </main>
  )
}
