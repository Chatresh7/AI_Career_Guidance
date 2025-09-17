'use client'
import { useSearchParams } from 'next/navigation'
import MultiStepForm from '../../components/MultiStepForm'

export default function OnboardingPage() {
  const params = useSearchParams()
  const domain = params.get('domain') || 'General'
  return (
    <div>
      <h2 className="text-2xl font-semibold">Onboarding — {domain}</h2>
      <p className="text-sm text-gray-600 mb-6">
        Tell us about your career awareness so we can personalize your roadmap.
      </p>
      <MultiStepForm domain={domain} />
    </div>
  )
}
