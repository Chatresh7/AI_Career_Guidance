import Link from 'next/link'
import DomainGrid from '../components/DomainGrid'

export default function Home() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold">AI Career Coach</h1>
        <p className="mt-2 text-gray-600">
          Personalized career guidance for every domain — engineering, medicine, commerce and more.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Choose your domain</h2>
        <DomainGrid />
      </section>

      <footer className="mt-12 text-sm text-gray-500">
        Built for hackathon demos — deploy to Vercel for production.
      </footer>
    </div>
  )
}
