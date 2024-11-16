'use client';

interface PricingFeature {
  name: string;
  basic: string | boolean | 'coming-soon';
  aiEnhanced: string | boolean | 'coming-soon';
  aiTutor: string | boolean | 'coming-soon';
}

const pricingFeatures: PricingFeature[] = [
  {
    name: 'Price (per student, 12 month license)',
    basic: 'US$36',
    aiEnhanced: 'US$60',
    aiTutor: 'US$120',
  },
  {
    name: 'Access to leveled reading materials (fiction and non-fiction)',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Multiple-choice comprehension questions',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Short-answer questions',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Vocabulary practice',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Sentence practice (structure and ordering exercises)',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Text-to-speech audio support',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Translation support (Thai, Chinese, Vietnamese)',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Progress tracking and XP system',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Flashcard system for vocabulary and sentences',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Classroom management tools for teachers',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Student progress tracking and reporting for teachers',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Web-based access on all devices',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Alignment with CEFR',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Whole-school management capabilities',
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'AI language assistant for explanations (chatbot)',
    basic: false,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'Ability for teachers to assign specific articles or activities',
    basic: false,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: 'AI-powered writing feedback and assistance',
    basic: false,
    aiEnhanced: false,
    aiTutor: true,
  },
  {
    name: 'Gamification elements (badges, leaderboards)',
    basic: 'coming-soon',
    aiEnhanced: 'coming-soon',
    aiTutor: 'coming-soon',
  },
  {
    name: 'Parent portal for progress monitoring',
    basic: 'coming-soon',
    aiEnhanced: 'coming-soon',
    aiTutor: 'coming-soon',
  },
  {
    name: 'AI-generated vocabulary quizzes',
    basic: false,
    aiEnhanced: 'coming-soon',
    aiTutor: 'coming-soon',
  },
  {
    name: 'AI-driven personalized learning paths',
    basic: false,
    aiEnhanced: false,
    aiTutor: 'coming-soon',
  },
  {
    name: 'Detailed AI-powered analytics on student performance',
    basic: false,
    aiEnhanced: false,
    aiTutor: 'coming-soon',
  },
  {
    name: 'AI-generated content tailored to individual student needs',
    basic: false,
    aiEnhanced: false,
    aiTutor: 'coming-soon',
  },
  {
    name: 'Virtual AI writing tutor for real-time assistance',
    basic: false,
    aiEnhanced: false,
    aiTutor: 'coming-soon',
  },
];

export function PricingTable() {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-right mb-4 text-gray-600">Last updated: October 2024</p>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-sky-100">
              <th className="p-4 text-left border-b">Feature</th>
              <th className="p-4 text-center border-b">Basic Tier</th>
              <th className="p-4 text-center border-b">AI Enhanced Tier</th>
              <th className="p-4 text-center border-b">AI Tutor Tier</th>
            </tr>
          </thead>
          <tbody>
            {pricingFeatures.map((feature, index) => (
              <tr key={index} className="hover:bg-sky-50">
                <td className="p-4 border-b feature-name">
                  {feature.name}
                </td>
                <td className="p-4 border-b text-center">
                  {typeof feature.basic === 'boolean' ? (
                    feature.basic ? <span className="check"></span> : ''
                  ) : feature.basic === 'coming-soon' ? (
                    <span className="coming-soon">Coming Soon</span>
                  ) : (
                    feature.basic
                  )}
                </td>
                <td className="p-4 border-b text-center">
                  {typeof feature.aiEnhanced === 'boolean' ? (
                    feature.aiEnhanced ? <span className="check"></span> : ''
                  ) : feature.aiEnhanced === 'coming-soon' ? (
                    <span className="coming-soon">Coming Soon</span>
                  ) : (
                    feature.aiEnhanced
                  )}
                </td>
                <td className="p-4 border-b text-center">
                  {typeof feature.aiTutor === 'boolean' ? (
                    feature.aiTutor ? <span className="check"></span> : ''
                  ) : feature.aiTutor === 'coming-soon' ? (
                    <span className="coming-soon">Coming Soon</span>
                  ) : (
                    feature.aiTutor
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
