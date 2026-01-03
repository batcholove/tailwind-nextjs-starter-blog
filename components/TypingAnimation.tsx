'use client'

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  prefix: string
  phrases: string[]
  speed?: number
  backspaceSpeed?: number
  delayBetweenPhrases?: number
}

export default function TypingAnimation({
  prefix,
  phrases,
  speed = 100,
  backspaceSpeed = 50,
  delayBetweenPhrases = 1000,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  const currentPhrase = phrases[currentPhraseIndex]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      // Typing phase
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(prefix + currentPhrase.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, speed)
      } else {
        // Finished typing, wait before backspacing
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, delayBetweenPhrases)
      }
    } else {
      // Backspacing phase
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(prefix + currentPhrase.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, backspaceSpeed)
      } else {
        // Finished backspacing, move to next phrase
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [
    charIndex,
    isTyping,
    currentPhrase,
    prefix,
    speed,
    backspaceSpeed,
    delayBetweenPhrases,
    phrases.length,
  ])

  return (
    <span className="text-primary-500 dark:text-primary-400">
      {displayText}
      <span className="cursor-blink">|</span>
    </span>
  )
}
