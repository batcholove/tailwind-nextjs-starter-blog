import Hero from '@/components/Hero'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Home' })

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="mx-auto max-w-2xl py-16 sm:py-24">
        <Hero />
      </div>
    </div>
  )
}
