'use client'

import React, { useState, useEffect } from 'react'
import { CheckCircle, Circle, Play, Lock, Star, Clock, BookOpen, Target, Award, ArrowRight } from 'lucide-react'

const RoadmapVisualizer = ({ domain, userAnalysis, currentPhase = 1 }) => {
  const [roadmapData, setRoadmapData] = useState(null)
  const [selectedPhase, setSelectedPhase] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  // Generate roadmap based on domain and user analysis
  const generateRoadmap = async () => {
    if (roadmapData) return // Don't regenerate if already exists

    setIsGenerating(true)

    try {
      // Check if we have analysis data to generate custom roadmap
      if (userAnalysis?.analysis?.roadmapPrompt) {
        const response = await fetch('/api/generateRoadmap', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: userAnalysis.analysis.roadmapPrompt,
            domain: domain,
            mindsetType: userAnalysis.analysis.mindsetType,
            learningStyle: userAnalysis.analysis.learningStyle
          })
        })

        if (response.ok) {
          const data = await response.json()
          setRoadmapData(data.roadmap)
        } else {
          throw new Error('Failed to generate custom roadmap')
        }
      } else {
        // Fallback to default roadmap structure
        setRoadmapData(getDefaultRoadmap(domain))
      }
    } catch (error) {
      console.error('Roadmap generation error:', error)
      setRoadmapData(getDefaultRoadmap(domain))
    } finally {
      setIsGenerating(false)
    }
  }

  useEffect(() => {
    generateRoadmap()
  }, [domain, userAnalysis])

  const getDefaultRoadmap = (domain) => {
    const roadmaps = {
      commerce: {
        title: 'Commerce & Business Career Path',
        totalPhases: 5,
        estimatedDuration: '10-15 months',
        phases: [
          {
            id: 1,
            title: 'Business Fundamentals',
            duration: '2-3 months',
            status: currentPhase > 1 ? 'completed' : currentPhase === 1 ? 'current' : 'locked',
            description: 'Core business concepts and financial literacy',
            skills: ['Business Mathematics', 'Accounting Principles', 'Economics Fundamentals', 'Business Communication', 'Market Research'],
            milestones: ['Complete business fundamentals course', 'Financial modeling basics', 'Business plan creation', 'Excel proficiency'],
            resources: ['Khan Academy Business', 'Coursera Business courses', 'Financial modeling tutorials', 'Business case studies']
          },
          {
            id: 2,
            title: 'Finance & Analytics',
            duration: '3-4 months',
            status: currentPhase > 2 ? 'completed' : currentPhase === 2 ? 'current' : 'locked',
            description: 'Advanced financial analysis and business intelligence',
            skills: ['Financial Analysis', 'Data Analytics', 'Business Intelligence Tools', 'Investment Principles', 'Risk Management'],
            milestones: ['Financial certification (CFA Level 1/FRM)', 'Advanced Excel/Power BI', 'Portfolio analysis project', 'Business analytics project'],
            resources: ['CFA Institute materials', 'Bloomberg Terminal training', 'Tableau/Power BI courses', 'Financial news (WSJ, FT)']
          },
          {
            id: 3,
            title: 'Marketing & Strategy',
            duration: '2-3 months',
            status: currentPhase > 3 ? 'completed' : currentPhase === 3 ? 'current' : 'locked',
            description: 'Marketing expertise and strategic business thinking',
            skills: ['Digital Marketing', 'Brand Management', 'Strategic Planning', 'Customer Analytics', 'Market Research'],
            milestones: ['Google Ads/Analytics certification', 'Marketing campaign execution', 'Strategic business presentation', 'Customer research project'],
            resources: ['Google Marketing Platform', 'HubSpot Academy', 'Marketing analytics tools', 'Business strategy books']
          },
          {
            id: 4,
            title: 'Leadership & Management',
            duration: '2-3 months',
            status: currentPhase > 4 ? 'completed' : currentPhase === 4 ? 'current' : 'locked',
            description: 'Management skills and business leadership',
            skills: ['Team Leadership', 'Project Management', 'Operations Management', 'Business Development', 'Negotiation Skills'],
            milestones: ['PMP/Agile certification', 'Team management experience', 'Business development project', 'Leadership assessment'],
            resources: ['PMI certification', 'Leadership workshops', 'Business development courses', 'Management consulting cases']
          },
          {
            id: 5,
            title: 'Career Specialization',
            duration: '1-2 months',
            status: currentPhase >= 5 ? 'current' : 'locked',
            description: 'Specialized career path in finance, marketing, or consulting',
            skills: ['Industry Expertise', 'Professional Networking', 'Business Ethics', 'Global Business', 'Innovation Management'],
            milestones: ['Industry-specific certifications', 'Professional network building', 'Job placement success', 'Career advancement'],
            resources: ['Industry associations', 'Professional networking events', 'Executive education', 'Career placement services']
          }
        ]
      },
      engineering: {
        title: 'Commerce & Business Career Path',
        totalPhases: 5,
        estimatedDuration: '10-15 months',
        phases: [
          {
            id: 1,
            title: 'Business Fundamentals',
            duration: '2-3 months',
            status: currentPhase > 1 ? 'completed' : currentPhase === 1 ? 'current' : 'locked',
            description: 'Core business concepts and financial literacy',
            skills: ['Business Mathematics', 'Accounting Principles', 'Economics Fundamentals', 'Business Communication', 'Market Research'],
            milestones: ['Complete business fundamentals course', 'Financial modeling basics', 'Business plan creation', 'Excel proficiency'],
            resources: ['Khan Academy Business', 'Coursera Business courses', 'Financial modeling tutorials', 'Business case studies']
          },
          {
            id: 2,
            title: 'Finance & Analytics',
            duration: '3-4 months',
            status: currentPhase > 2 ? 'completed' : currentPhase === 2 ? 'current' : 'locked',
            description: 'Advanced financial analysis and business intelligence',
            skills: ['Financial Analysis', 'Data Analytics', 'Business Intelligence Tools', 'Investment Principles', 'Risk Management'],
            milestones: ['Financial certification (CFA Level 1/FRM)', 'Advanced Excel/Power BI', 'Portfolio analysis project', 'Business analytics project'],
            resources: ['CFA Institute materials', 'Bloomberg Terminal training', 'Tableau/Power BI courses', 'Financial news (WSJ, FT)']
          },
          {
            id: 3,
            title: 'Marketing & Strategy',
            duration: '2-3 months',
            status: currentPhase > 3 ? 'completed' : currentPhase === 3 ? 'current' : 'locked',
            description: 'Marketing expertise and strategic business thinking',
            skills: ['Digital Marketing', 'Brand Management', 'Strategic Planning', 'Customer Analytics', 'Market Research'],
            milestones: ['Google Ads/Analytics certification', 'Marketing campaign execution', 'Strategic business presentation', 'Customer research project'],
            resources: ['Google Marketing Platform', 'HubSpot Academy', 'Marketing analytics tools', 'Business strategy books']
          },
          {
            id: 4,
            title: 'Leadership & Management',
            duration: '2-3 months',
            status: currentPhase > 4 ? 'completed' : currentPhase === 4 ? 'current' : 'locked',
            description: 'Management skills and business leadership',
            skills: ['Team Leadership', 'Project Management', 'Operations Management', 'Business Development', 'Negotiation Skills'],
            milestones: ['PMP/Agile certification', 'Team management experience', 'Business development project', 'Leadership assessment'],
            resources: ['PMI certification', 'Leadership workshops', 'Business development courses', 'Management consulting cases']
          },
          {
            id: 5,
            title: 'Career Specialization',
            duration: '1-2 months',
            status: currentPhase >= 5 ? 'current' : 'locked',
            description: 'Specialized career path in finance, marketing, or consulting',
            skills: ['Industry Expertise', 'Professional Networking', 'Business Ethics', 'Global Business', 'Innovation Management'],
            milestones: ['Industry-specific certifications', 'Professional network building', 'Job placement success', 'Career advancement'],
            resources: ['Industry associations', 'Professional networking events', 'Executive education', 'Career placement services']
          }
        ]
      },
      medicine: {
        title: 'Medical Career Path',
        totalPhases: 4,
        estimatedDuration: '18-24 months',
        phases: [
          {
            id: 1,
            title: 'Pre-Medical Foundation',
            duration: '6-8 months',
            status: currentPhase > 1 ? 'completed' : currentPhase === 1 ? 'current' : 'locked',
            description: 'Build strong medical sciences foundation and exam preparation',
            skills: ['Human Biology & Anatomy', 'Chemistry & Biochemistry', 'Physics for Medicine', 'Medical Terminology', 'Research Methods'],
            milestones: ['Complete MCAT/medical entrance exam prep', 'Volunteer at healthcare facilities', 'Shadow physicians', 'Complete prerequisite courses'],
            resources: ['Khan Academy Medicine', 'MCAT prep materials', 'Medical textbooks', 'Hospital volunteer programs']
          },
          {
            id: 2,
            title: 'Medical Knowledge & Clinical Skills',
            duration: '6-8 months',
            status: currentPhase > 2 ? 'completed' : currentPhase === 2 ? 'current' : 'locked',
            description: 'Core medical knowledge and patient care fundamentals',
            skills: ['Pathophysiology', 'Pharmacology', 'Medical Ethics', 'Patient Communication', 'Clinical Reasoning'],
            milestones: ['Medical school application/admission', 'Clinical skills certification', 'Research project completion', 'Medical ethics training'],
            resources: ['Medical school curriculum', 'Clinical skills labs', 'Medical journals (NEJM, JAMA)', 'Patient care simulations']
          },
          {
            id: 3,
            title: 'Specialization & Advanced Practice',
            duration: '4-6 months',
            status: currentPhase > 3 ? 'completed' : currentPhase === 3 ? 'current' : 'locked',
            description: 'Choose medical specialization and develop expertise',
            skills: ['Specialized Medical Knowledge', 'Advanced Clinical Skills', 'Medical Research', 'Healthcare Leadership', 'Evidence-Based Medicine'],
            milestones: ['Specialty selection decision', 'Advanced clinical rotations', 'Medical licensing exam prep', 'Research publications'],
            resources: ['Specialty-specific courses', 'Residency programs', 'Medical conferences', 'Professional medical associations']
          },
          {
            id: 4,
            title: 'Professional Medical Practice',
            duration: '2-4 months',
            status: currentPhase >= 4 ? 'current' : 'locked',
            description: 'Transition to professional medical practice and continuous learning',
            skills: ['Medical Practice Management', 'Healthcare Technology', 'Continuing Medical Education', 'Patient Safety', 'Healthcare Quality Improvement'],
            milestones: ['Medical license acquisition', 'Residency match/placement', 'Professional practice setup', 'Board certification prep'],
            resources: ['Medical licensing boards', 'Residency programs', 'Medical practice management', 'CME programs']
          }
        ]
      },
      arts: {
        title: 'Creative Arts Career Path',
        totalPhases: 5,
        estimatedDuration: '12-18 months',
        phases: [
          {
            id: 1,
            title: 'Creative Fundamentals',
            duration: '2-3 months',
            status: currentPhase > 1 ? 'completed' : currentPhase === 1 ? 'current' : 'locked',
            description: 'Core artistic principles and creative thinking',
            skills: ['Design Principles', 'Color Theory', 'Typography', 'Composition', 'Creative Problem Solving'],
            milestones: ['Complete art fundamentals course', 'Create 20 design pieces', 'Learn design software basics', 'Build creative workflow'],
            resources: ['Adobe Creative Suite', 'Design courses (Skillshare)', 'Art history materials', 'Creative communities']
          },
          {
            id: 2,
            title: 'Digital Design & Technology',
            duration: '3-4 months',
            status: currentPhase > 2 ? 'completed' : currentPhase === 2 ? 'current' : 'locked',
            description: 'Master digital design tools and techniques',
            skills: ['Adobe Creative Suite', 'UI/UX Design', 'Digital Illustration', 'Photo Editing', 'Motion Graphics'],
            milestones: ['Adobe certification', 'UI/UX design portfolio', 'Digital art collection', 'Client project completion'],
            resources: ['Adobe tutorials', 'Figma/Sketch courses', 'Design inspiration sites', 'UI/UX bootcamps']
          },
          {
            id: 3,
            title: 'Specialization & Style Development',
            duration: '3-4 months',
            status: currentPhase > 3 ? 'completed' : currentPhase === 3 ? 'current' : 'locked',
            description: 'Develop unique artistic style and specialized skills',
            skills: ['Brand Identity Design', 'Web Design', 'Content Creation', 'Artistic Style', 'Creative Direction'],
            milestones: ['Signature style development', 'Specialized portfolio', 'Creative awards/recognition', 'Art exhibition/showcase'],
            resources: ['Advanced design courses', 'Art galleries/museums', 'Creative workshops', 'Design competitions']
          },
          {
            id: 4,
            title: 'Business & Marketing for Creatives',
            duration: '2-3 months',
            status: currentPhase > 4 ? 'completed' : currentPhase === 4 ? 'current' : 'locked',
            description: 'Creative business skills and self-promotion',
            skills: ['Creative Entrepreneurship', 'Portfolio Marketing', 'Client Relations', 'Pricing Strategies', 'Social Media Marketing'],
            milestones: ['Professional portfolio website', 'Social media presence', 'Client testimonials', 'Creative business plan'],
            resources: ['Creative business courses', 'Marketing for artists', 'Freelance platforms', 'Creative networking events']
          },
          {
            id: 5,
            title: 'Professional Creative Career',
            duration: '1-2 months',
            status: currentPhase >= 5 ? 'current' : 'locked',
            description: 'Launch professional creative career or freelance business',
            skills: ['Professional Networking', 'Creative Industry Knowledge', 'Project Management', 'Creative Leadership', 'Continuous Learning'],
            milestones: ['Full-time creative position', 'Established freelance business', 'Creative team leadership', 'Industry recognition'],
            resources: ['Creative agencies', 'Freelance platforms', 'Creative industry events', 'Professional development']
          }
        ]
      },
      science: {
        title: 'Science Research & Application Career Path',
        totalPhases: 5,
        estimatedDuration: '15-20 months',
        phases: [
          {
            id: 1,
            title: 'Scientific Foundations',
            duration: '3-4 months',
            status: currentPhase > 1 ? 'completed' : currentPhase === 1 ? 'current' : 'locked',
            description: 'Core scientific principles and research methodology',
            skills: ['Scientific Method', 'Mathematics for Science', 'Laboratory Techniques', 'Data Collection', 'Scientific Writing'],
            milestones: ['Complete lab safety training', 'First research project', 'Scientific paper review', 'Lab technique mastery'],
            resources: ['Scientific journals', 'Lab training materials', 'Research methodology courses', 'University labs']
          },
          {
            id: 2,
            title: 'Research Methods & Analysis',
            duration: '4-5 months',
            status: currentPhase > 2 ? 'completed' : currentPhase === 2 ? 'current' : 'locked',
            description: 'Advanced research techniques and data analysis',
            skills: ['Statistical Analysis', 'Research Design', 'Data Visualization', 'Scientific Instrumentation', 'Experimental Design'],
            milestones: ['Statistical software proficiency (R/Python)', 'Independent research project', 'Data analysis portfolio', 'Research presentation'],
            resources: ['R/Python tutorials', 'Statistical analysis courses', 'Research databases', 'Scientific conferences']
          },
          {
            id: 3,
            title: 'Specialization & Advanced Research',
            duration: '4-5 months',
            status: currentPhase > 3 ? 'completed' : currentPhase === 3 ? 'current' : 'locked',
            description: 'Deep specialization in chosen scientific field',
            skills: ['Field-Specific Expertise', 'Advanced Laboratory Techniques', 'Grant Writing', 'Peer Review', 'Collaborative Research'],
            milestones: ['Specialized research publication', 'Conference presentation', 'Grant proposal submission', 'Research collaboration'],
            resources: ['Specialized journals', 'Advanced lab equipment', 'Research grants', 'Scientific collaborations']
          },
          {
            id: 4,
            title: 'Professional Development',
            duration: '2-3 months',
            status: currentPhase > 4 ? 'completed' : currentPhase === 4 ? 'current' : 'locked',
            description: 'Scientific career development and industry skills',
            skills: ['Science Communication', 'Project Management', 'Industry Applications', 'Regulatory Knowledge', 'Technology Transfer'],
            milestones: ['Science communication portfolio', 'Industry internship/experience', 'Professional certifications', 'Career network building'],
            resources: ['Science communication courses', 'Industry partnerships', 'Professional associations', 'Career development workshops']
          },
          {
            id: 5,
            title: 'Scientific Career Launch',
            duration: '2-3 months',
            status: currentPhase >= 5 ? 'current' : 'locked',
            description: 'Launch career in research, industry, or academia',
            skills: ['Career Planning', 'Job Search Strategies', 'Interview Skills', 'Salary Negotiation', 'Continuous Professional Development'],
            milestones: ['PhD/Masters application success', 'Industry job placement', 'Research position acquisition', 'Career advancement plan'],
            resources: ['Academic career services', 'Industry job boards', 'Scientific recruiters', 'Career mentorship programs']
          }
        ]
      }
    }

    return roadmaps[domain] || roadmaps.engineering // Fallback to engineering
  }

  const getPhaseIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case 'current':
        return <Play className="w-6 h-6 text-blue-500" />
      case 'locked':
        return <Lock className="w-6 h-6 text-gray-400" />
      default:
        return <Circle className="w-6 h-6 text-gray-300" />
    }
  }

  const getPhaseColor = (status) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50'
      case 'current':
        return 'border-blue-500 bg-blue-50'
      case 'locked':
        return 'border-gray-300 bg-gray-50'
      default:
        return 'border-gray-200 bg-white'
    }
  }

  if (isGenerating) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Generating your personalized roadmap...</p>
        </div>
      </div>
    )
  }

  if (!roadmapData) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Unable to load roadmap data.</p>
        <button 
          onClick={generateRoadmap}
          className="btn-primary mt-4"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Roadmap Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{roadmapData.title}</h3>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {roadmapData.estimatedDuration}
          </span>
          <span className="flex items-center gap-1">
            <Target className="w-4 h-4" />
            {roadmapData.totalPhases} Phases
          </span>
          {userAnalysis?.analysis?.mindsetType && (
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {userAnalysis.analysis.mindsetType}
            </span>
          )}
        </div>
      </div>

      {/* Phase Timeline */}
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200"></div>
        <div 
          className="absolute left-8 top-8 w-0.5 bg-gradient-to-b from-green-500 to-blue-500 transition-all duration-1000"
          style={{ height: `${((currentPhase - 1) / roadmapData.totalPhases) * 100}%` }}
        ></div>

        {/* Phases */}
        <div className="space-y-6">
          {roadmapData.phases.map((phase, index) => (
            <div key={phase.id} className={`relative ml-16 p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${getPhaseColor(phase.status)}`}
                 onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}>
              
              {/* Phase Icon */}
              <div className="absolute -left-[4.5rem] top-6 w-12 h-12 bg-white rounded-full border-4 border-current flex items-center justify-center">
                {getPhaseIcon(phase.status)}
              </div>

              {/* Phase Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{phase.title}</h4>
                  <p className="text-sm text-gray-600">{phase.duration} • Phase {phase.id} of {roadmapData.totalPhases}</p>
                </div>
                <div className="flex items-center gap-2">
                  {phase.status === 'current' && (
                    <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      Current Phase
                    </div>
                  )}
                  {phase.status === 'completed' && (
                    <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Completed
                    </div>
                  )}
                </div>
              </div>

              {/* Phase Description */}
              <p className="text-gray-700 mb-4">{phase.description}</p>

              {/* Phase Details (Expandable) */}
              {selectedPhase === phase.id && (
                <div className="mt-6 space-y-4 border-t border-gray-200 pt-4">
                  {/* Skills */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Skills to Develop
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Milestones */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Key Milestones
                    </h5>
                    <ul className="space-y-1">
                      {phase.milestones.map((milestone, milestoneIndex) => (
                        <li key={milestoneIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {milestone}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Recommended Resources
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {phase.resources.map((resource, resourceIndex) => (
                        <span key={resourceIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  {phase.status === 'current' && (
                    <div className="pt-4">
                      <button className="btn-primary inline-flex items-center gap-2">
                        Continue Learning <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Footer */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Your Learning Journey</h4>
            <p className="text-gray-600 text-sm">
              This roadmap is personalized based on your {userAnalysis?.analysis?.mindsetType || 'learning style'} and career goals.
              {userAnalysis?.analysis?.learningStyle && ` Optimized for ${userAnalysis.analysis.learningStyle.toLowerCase()} learning.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapVisualizer