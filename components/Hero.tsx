'use client'

import Link from './Link'
import Image from './Image'

export default function Hero() {
  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        {/* Avatar */}
        <div className="flex justify-center">
          <Image
            src="/static/images/avatar.jpg"
            alt="Ryan Batch"
            width={120}
            height={120}
            className="h-32 w-32 rounded-full"
          />
        </div>

        {/* Main heading */}
        <div className="space-y-3">
          <h1 className="text-4xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Transformative design starts with listening
          </h1>
          <p className="text-xl leading-8 text-gray-600 dark:text-gray-400">
            I partner with teams and organizations to unlock clarity in complexity and shape
            experiences that resonate with real people.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Learn More
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md border border-gray-900 px-8 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
          >
            View Work
          </Link>
        </div>
      </div>
    </div>
  )
}
