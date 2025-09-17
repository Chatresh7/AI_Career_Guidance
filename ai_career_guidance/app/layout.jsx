import './globals.css'

export const metadata = {
  title: 'AI Career Guidance',
  description: 'Personalized career guidance and performance tracker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-gray-50 text-gray-900">
          <div className="max-w-5xl mx-auto p-6">{children}</div>
        </main>
      </body>
    </html>
  )
}
