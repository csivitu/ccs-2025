"use client";

export function LoadingSpinner({
  width = 21,
  height = 21,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      className="text-primary mt-[2px] h-4 w-4 animate-spin"
      fill="none"
      height={height}
      viewBox="0 0 21 21"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Loading</title>
      <clipPath id="modal-spinner">
        <path d="M10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C11.3284 18 12 18.6716 12 19.5C12 20.3284 11.3284 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5C21 11.3284 20.3284 12 19.5 12C18.6716 12 18 11.3284 18 10.5C18 6.35786 14.6421 3 10.5 3Z"></path>
      </clipPath>
      <foreignObject
        clipPath="url(#modal-spinner)"
        height="21"
        width="21"
        x="0"
        y="0"
      >
        <div
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(72, 146, 254, 0) 0deg, currentColor 282.04deg, rgba(72, 146, 254, 0) 319.86deg, rgba(72, 146, 254, 0) 360deg)",
            height: "21px",
            width: "21px",
          }}
        ></div>
      </foreignObject>
    </svg>
  );
}
