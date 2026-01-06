import Hero from '@/components/Hero'
import PhilosophySection from '@/components/PhilosophySection'
import FeaturedWorkSection from '@/components/FeaturedWorkSection'
import CapabilitiesSection from '@/components/CapabilitiesSection'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Home' })

export default function Page() {
  return (
    <>
      {/* Hero Section with full-width background */}
      <section
        id="hero-section"
        className="flex h-screen w-full items-center justify-center bg-cover bg-bottom bg-no-repeat px-4 sm:px-6 xl:px-0"
        style={{
          backgroundImage: 'url(/static/images/hero-image-bkgd.png)',
        }}
      >
        <div className="mx-4 max-w-3xl sm:mx-8 lg:mx-auto xl:max-w-5xl">
          <Hero />
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Featured Work Section */}
      <FeaturedWorkSection />
    </>
  )
}
