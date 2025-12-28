'use client'

export interface TimelineItem {
  period: string
  title: string
  subtitle?: string
  description: string
}

interface TimelineProps {
  items?: TimelineItem[]
  children?: React.ReactNode
}

export default function Timeline({ items = [] }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="flex gap-6">
          {/* Timeline dot and line */}
          <div className="flex flex-col items-center">
            <div className="relative z-10 h-4 w-4 rounded-full border-2 border-gray-400 bg-white dark:border-gray-500 dark:bg-gray-900" />
            {index < items.length - 1 && (
              <div className="mt-2 h-16 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-4">
            <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase dark:text-gray-400">
              {item.period}
            </p>
            <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
            {item.subtitle && (
              <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{item.subtitle}</p>
            )}
            <p className="mt-2 text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
