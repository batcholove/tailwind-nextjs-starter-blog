'use client'

import React from 'react'

const { useState } = React

export default function ClickableImage({ src, alt, ...props }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleModalKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer border-0 bg-transparent p-0 transition-opacity hover:opacity-90"
        aria-label={`View full size: ${alt}`}
      >
        <img src={src} alt={alt} className="h-auto max-w-full" {...props} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false)
            }
          }}
          onKeyDown={handleModalKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer modal"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white transition-colors hover:text-gray-300"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="relative flex h-full max-h-[90vh] w-full max-w-4xl items-center justify-center">
            <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      )}
    </>
  )
}
