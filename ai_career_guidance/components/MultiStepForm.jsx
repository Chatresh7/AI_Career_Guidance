'use client'
import { useState } from 'react'

export default function MultiStepForm({ domain }) {
  const [step, setStep] = useState(1)
  const [awareness, setAwareness] = useState(null)
  const [category, setCategory] = useState(null)

  function next() {
    setStep(s => s + 1)
  }
  function back() {
    setStep(s => Math.max(1, s - 1))
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      {step === 1 && (
        <div>
          <h4 className="font-semibold mb-3">
            How familiar are you with career paths in this domain?
          </h4>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setAwareness('aware')
                next()
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              I am career-aware
            </button>
            <button
              onClick={() => {
                setAwareness('unaware')
                setCategory('beginner')
                next()
              }}
              className="px-4 py-2 border rounded"
            >
              I am career-unaware
            </button>
          </div>
        </div>
      )}

      {step === 2 && awareness === 'aware' && (
        <div>
          <h4 className="font-semibold mb-3">Which statement fits you best?</h4>
          <div className="grid gap-3">
            <button
              onClick={() => {
                setCategory('skill-gap')
                next()
              }}
              className="text-left p-3 border rounded hover:bg-gray-50"
            >
              Skill-gap professional — completed course earlier and need to update skills
            </button>
            <button
              onClick={() => {
                setCategory('experienced')
                next()
              }}
              className="text-left p-3 border rounded hover:bg-gray-50"
            >
              Experienced learner — I have projects/internships and a CV
            </button>
            <button
              onClick={() => {
                setCategory('goal-oriented')
                next()
              }}
              className="text-left p-3 border rounded hover:bg-gray-50"
            >
              Goal-oriented beginner — new but know my career goal
            </button>
          </div>
          <div className="mt-4">
            <button onClick={back} className="text-sm text-gray-600">
              Back
            </button>
          </div>
        </div>
      )}

      {step === 2 && awareness === 'unaware' && (
        <div>
          <h4 className="font-semibold mb-3">No worries — we'll start from basics.</h4>
          <p className="text-sm text-gray-600 mb-4">
            You will get a foundation roadmap and simple starter tasks.
          </p>
          <button
            onClick={next}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Show my roadmap
          </button>
          <div className="mt-4">
            <button onClick={back} className="text-sm text-gray-600">
              Back
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h4 className="font-semibold mb-3">Your personalized starter</h4>
          <p className="text-sm text-gray-600 mb-4">
            Domain: <strong>{domain}</strong> — Profile: <strong>{category}</strong>
          </p>

          <div className="space-y-3">
            <div className="p-3 border rounded">
              <p className="font-medium">Step 1 — Awareness</p>
              <p className="text-sm text-gray-600">
                Intro resources and a short quiz to validate interest.
              </p>
            </div>
            <div className="p-3 border rounded">
              <p className="font-medium">Step 2 — Foundation skills</p>
              <p className="text-sm text-gray-600">
                Curated beginner courses and practice tasks.
              </p>
            </div>
            <div className="p-3 border rounded">
              <p className="font-medium">Step 3 — Hands-on</p>
              <p className="text-sm text-gray-600">
                Mini project to build and add to your portfolio.
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded">
              Start Tracking Progress
            </button>
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 border rounded"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
