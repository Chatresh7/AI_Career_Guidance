// Placeholder helper - in production, call server-side API route with secret key
export async function fetchCareerRoadmap(profile) {
  // For hackathon MVP, return static suggestions based on profile
  if (profile.category === 'skill-gap') {
    return {
      title: 'Upskill Roadmap',
      steps: ['Brush up fundamentals', 'Take updated industry course', 'Build a small portfolio project']
    }
  }
  if (profile.category === 'experienced') {
    return {
      title: 'Advance & Specialize',
      steps: ['Choose a specialization', 'Contribute to open-source or research', 'Apply for internships/roles']
    }
  }
  if (profile.category === 'goal-oriented' || profile.category === 'beginner') {
    return {
      title: 'Foundation Roadmap',
      steps: ['Intro courses + domain basics', 'Small practical tasks', 'Create a showcase project']
    }
  }
  return { title: 'General Roadmap', steps: ['Explore careers', 'Try sample tasks', 'Decide direction'] }
}
