'use client';

interface PricingFeature {
  name: {
    en: string;
    th: string;
  };
  basic: string | boolean | 'coming-soon';
  aiEnhanced: string | boolean | 'coming-soon';
  aiTutor: string | boolean | 'coming-soon';
}

const pricingFeatures: PricingFeature[] = [
  {
    name: {
      en: 'Price (per student, 12 month license)',
      th: 'ราคา (ต่อนักเรียน, ใบริโออล 12 เดือน)',
    },
    basic: 'US$36',
    aiEnhanced: 'US$60',
    aiTutor: 'US$120',
  },
  {
    name: {
      en: 'Access to leveled reading materials (fiction and non-fiction)',
      th: 'เข้าถึงจึดการเข้าถึงที่มีระดับเว็นระดับ (fiction และ non-fiction)',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Multiple-choice comprehension questions',
      th: 'คำถาถานเพื่อข้องหลายเข้าใจหลายประเด็น',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Short-answer questions',
      th: 'คำถาถานตอบสั้นสั้นสั้น',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Vocabulary practice',
      th: 'แบบภาษีศัพท์',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Sentence practice (structure and ordering exercises)',
      th: 'แบบอฝัยคำร้อง',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Text-to-speech audio support',
      th: 'แปลงอาอกข้อสร้อยนัยความดึ่น',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Translation support (Thai, Chinese, Vietnamese)',
      th: 'สนับสนุนการแปล (ไทย, จีน, เวียดนาม)',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Progress tracking and XP system',
      th: 'การติดตามผลหน้าและระบบ XP',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Flashcard system for vocabulary and sentences',
      th: 'ระบบแฟล็ชการ์ดสำหรับภาษีศัพท์และประโยคในประโยค',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Classroom management tools for teachers',
      th: 'เครื่องจัดการจัดกลุ่มชั้นแบบห้องเล้ก',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Student progress tracking and reporting for teachers',
      th: 'การติดตามและรายงานผลการศึกษาให้ครู่สอนเรียน',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Web-based access on all devices',
      th: 'เข้าถึงผ่านเว็บทุกเสรื่องบนอุปกรณ์',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Alignment with CEFR',
      th: 'สอดคล้องกับ CEFR',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Whole-school management capabilities',
      th: 'ความสามารถการจัดกลุ่มให้มีผลของโรงเรียน',
    },
    basic: true,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'AI language assistant for explanations (chatbot)',
      th: 'เรื่องสนับแผมภาษา AI (แช็ตบอต)',
    },
    basic: false,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'Ability for teachers to assign specific articles or activities',
      th: 'เรียนสามารถให้ครู่สอนทำแบบกำหนดโดยเรื่องของบทวนข้องเรียน',
    },
    basic: false,
    aiEnhanced: true,
    aiTutor: true,
  },
  {
    name: {
      en: 'AI-powered writing feedback and assistance',
      th: 'คำแนะแหละช่วยเสริมหลักสอนด้วย AI',
    },
    basic: false,
    aiEnhanced: false,
    aiTutor: true,
  },
  {
    name: {
      en: 'Gamification elements (badges, leaderboards)',
      th: 'บันทักการประกอบของเกม',
    },
    basic: 'coming-soon',
    aiEnhanced: 'coming-soon',
    aiTutor: 'coming-soon',
  },
  {
    name: {
      en: 'Parent portal for progress monitoring',
      th: 'พอร์ทัลสำหรับเพื่อติดตามผล',
    },
    basic: 'coming-soon',
    aiEnhanced: 'coming-soon',
    aiTutor: 'coming-soon',
  },
  {
    name: {
      en: 'AI-generated vocabulary quizzes',
      th: 'แบบทดสอบบภาษีศัพท์ AI',
    },
    basic: false,
    aiEnhanced: 'coming-soon',
    aiTutor: 'coming-soon',
  },
  {
    name: {
      en: 'AI-driven personalized learning paths',
      th: 'เส้นทางการเรียนแบบเพิ่มแพงแบบจำเพาะ AI',
    },
    basic: false,
    aiEnhanced: false,
    aiTutor: 'coming-soon',
  },
  {
    name: {
      en: 'Detailed AI-powered analytics on student performance',
      th: 'การวิเคราะเสร็จด้วย AI ของประหลอกนักเรียน',
    },
    basic: false,
    aiEnhanced: false,
    aiTutor: 'coming-soon',
  },
  {
    name: {
      en: 'AI-generated content tailored to individual student needs',
      th: 'เนื้อหา AI สำหรับเหมาะสำรับให้แต่ไหนไหรของนักเรียนแบบเจาะเริ่มรู้',
    },
    basic: false,
    aiEnhanced: false,
    aiTutor: 'coming-soon',
  },
  {
    name: {
      en: 'Virtual AI writing tutor for real-time assistance',
      th: 'เพียงเลิยงเสรียงเขียนแบบสนุนให้เขียนขึ้นจริงในเวลา AI',
    },
    basic: false,
    aiEnhanced: false,
    aiTutor: 'coming-soon',
  },
];

export function PricingTable() {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-right mb-4 text-gray-600">Last updated: October 2024 / ล่าสุดกัน: ตุลาคม 2024</p>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-sky-100">
              <th className="p-4 text-left border-b">Feature / ฟีเจอร์</th>
              <th className="p-4 text-center border-b">Basic Tier / แพกเกจ</th>
              <th className="p-4 text-center border-b">AI Enhanced Tier / เรียนแพก AI</th>
              <th className="p-4 text-center border-b">AI Tutor Tier / เรียนผู้ช่วย AI</th>
            </tr>
          </thead>
          <tbody>
            {pricingFeatures.map((feature, index) => (
              <tr key={index} className="hover:bg-sky-50">
                <td className="p-4 border-b feature-name">
                  {feature.name.en} / {feature.name.th}
                </td>
                <td className="p-4 border-b text-center">
                  {typeof feature.basic === 'boolean' ? (
                    feature.basic ? <span className="check"></span> : ''
                  ) : feature.basic === 'coming-soon' ? (
                    <span className="coming-soon">รอบมี</span>
                  ) : (
                    feature.basic
                  )}
                </td>
                <td className="p-4 border-b text-center">
                  {typeof feature.aiEnhanced === 'boolean' ? (
                    feature.aiEnhanced ? <span className="check"></span> : ''
                  ) : feature.aiEnhanced === 'coming-soon' ? (
                    <span className="coming-soon">รอบมี</span>
                  ) : (
                    feature.aiEnhanced
                  )}
                </td>
                <td className="p-4 border-b text-center">
                  {typeof feature.aiTutor === 'boolean' ? (
                    feature.aiTutor ? <span className="check"></span> : ''
                  ) : feature.aiTutor === 'coming-soon' ? (
                    <span className="coming-soon">รอบมี</span>
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
