'use client'
import Link from 'next/link'

const domains = [
  { id: 'engineering', name: 'Engineering & Technology' },
  { id: 'medicine', name: 'Medicine & Healthcare' },
  { id: 'commerce', name: 'Commerce & Management' },
  { id: 'arts', name: 'Arts & Design' },
  { id: 'law', name: 'Law & Social Sciences' },
  { id: 'data', name: 'Data & Analytics' },
]

export default function DomainGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {domains.map(d => (
        <Link
          key={d.id}
          href={`/onboarding?domain=${d.id}`}
          className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-semibold">{d.name}</h3>
          <p className="text-sm text-gray-500 mt-2">
            Start personalized guidance for {d.name}.
          </p>
        </Link>
      ))}
    </div>
  )
}
