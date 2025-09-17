// components/DomainGrid.jsx
import Link from 'next/link'

export default function DomainGrid() {
  const domains = ['Engineering', 'Medicine', 'Commerce', 'Arts', 'Science']

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {domains.map((domain) => (
        <Link
          key={domain}
          href={`/domains/${domain.toLowerCase()}`}
          className="p-4 border rounded hover:bg-blue-100 text-center font-semibold"
        >
          {domain}
        </Link>
      ))}
    </div>
  )
}
