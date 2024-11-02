'use client';

type ComparisonMark = '✔' | '✘' | '⚬';

interface ComparisonCell {
  value: string | ComparisonMark;
  title?: string;
  className?: string;
}

interface ComparisonRow {
  feature: string;
  readingAdvantage: ComparisonCell;
  razKids: ComparisonCell;
  lexiaCore5: ComparisonCell;
  acceleratedReader: ComparisonCell;
  achieve3000: ComparisonCell;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Grade Range',
    readingAdvantage: { value: '4-12' },
    razKids: { value: 'K-5' },
    lexiaCore5: { value: 'K-5' },
    acceleratedReader: { value: 'K-12' },
    achieve3000: { value: '2-12' },
  },
  {
    feature: 'Price (per student/year)',
    readingAdvantage: { value: '$36-120' },
    razKids: { value: '$4.30 - $10' },
    lexiaCore5: { value: '$40 - $60' },
    acceleratedReader: { value: '$5 - $10' },
    achieve3000: { value: '$45 - $60' },
  },
  {
    feature: 'Fiction',
    readingAdvantage: { value: '✔', title: 'Wide variety of fiction texts', className: 'text-green-600' },
    razKids: { value: '✔', title: 'Leveled eBooks available', className: 'text-green-600' },
    lexiaCore5: { value: '⚬', title: 'Limited fiction content', className: 'text-orange-500' },
    acceleratedReader: { value: '✔', title: 'Uses external library books', className: 'text-green-600' },
    achieve3000: { value: '⚬', title: 'Some fiction content available', className: 'text-orange-500' },
  },
  {
    feature: 'Nonfiction',
    readingAdvantage: { value: '✔', title: 'Wide variety of nonfiction texts', className: 'text-green-600' },
    razKids: { value: '✔', title: 'Leveled eBooks available', className: 'text-green-600' },
    lexiaCore5: { value: '⚬', title: 'Limited nonfiction content', className: 'text-orange-500' },
    acceleratedReader: { value: '✔', title: 'Uses external library books', className: 'text-green-600' },
    achieve3000: { value: '✔', title: 'Focuses on nonfiction content', className: 'text-green-600' },
  },
  {
    feature: 'Includes Reading Material',
    readingAdvantage: { value: '✔', title: 'Extensive built-in library', className: 'text-green-600' },
    razKids: { value: '✔', title: 'Large library of eBooks', className: 'text-green-600' },
    lexiaCore5: { value: '✔', title: 'Includes reading passages', className: 'text-green-600' },
    acceleratedReader: { value: '✘', title: 'Uses external library books', className: 'text-red-600' },
    achieve3000: { value: '✔', title: 'Provides articles and texts', className: 'text-green-600' },
  },
  {
    feature: 'Device Compatibility',
    readingAdvantage: { value: 'Web (all devices)' },
    razKids: { value: 'Web, iOS, Android' },
    lexiaCore5: { value: 'Web, iOS, Android' },
    acceleratedReader: { value: 'Web, iOS' },
    achieve3000: { value: 'Web, iOS, Android' },
  },
  {
    feature: 'Audio Support',
    readingAdvantage: { value: '✔', title: 'Text-to-speech for all content', className: 'text-green-600' },
    razKids: { value: '✔', title: 'Audio available for all books', className: 'text-green-600' },
    lexiaCore5: { value: '⚬', title: 'Limited audio support', className: 'text-orange-500' },
    acceleratedReader: { value: '✘', title: 'No built-in audio support', className: 'text-red-600' },
    achieve3000: { value: '✔', title: 'Audio support for articles', className: 'text-green-600' },
  },
  {
    feature: 'AI Assistant',
    readingAdvantage: { value: '✔', title: 'AI-powered writing feedback and language explanations', className: 'text-green-600' },
    razKids: { value: '✘', className: 'text-red-600' },
    lexiaCore5: { value: '✘', className: 'text-red-600' },
    acceleratedReader: { value: '✘', className: 'text-red-600' },
    achieve3000: { value: '✘', className: 'text-red-600' },
  },
  {
    feature: 'ELL L2 Support',
    readingAdvantage: { value: 'Thai, Chinese, Vietnamese' },
    razKids: { value: 'Spanish' },
    lexiaCore5: { value: 'None' },
    acceleratedReader: { value: 'None' },
    achieve3000: { value: 'Spanish' },
  },
];

export function ComparisonTable() {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Reading Program Comparison</h2>
        <p className="text-gray-600">Last updated: October 2023</p>
      </div>
      <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-sky-100">
          <tr>
            <th className="px-6 py-4 text-left">Feature</th>
            <th className="px-6 py-4 text-center">Reading Advantage</th>
            <th className="px-6 py-4 text-center">Raz-Kids</th>
            <th className="px-6 py-4 text-center">Lexia Core5</th>
            <th className="px-6 py-4 text-center">Accelerated Reader</th>
            <th className="px-6 py-4 text-center">Achieve3000</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {comparisonData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4">{row.feature}</td>
              <td className={`px-6 py-4 text-center ${row.readingAdvantage.className}`} title={row.readingAdvantage.title}>
                {row.readingAdvantage.value}
              </td>
              <td className={`px-6 py-4 text-center ${row.razKids.className}`} title={row.razKids.title}>
                {row.razKids.value}
              </td>
              <td className={`px-6 py-4 text-center ${row.lexiaCore5.className}`} title={row.lexiaCore5.title}>
                {row.lexiaCore5.value}
              </td>
              <td className={`px-6 py-4 text-center ${row.acceleratedReader.className}`} title={row.acceleratedReader.title}>
                {row.acceleratedReader.value}
              </td>
              <td className={`px-6 py-4 text-center ${row.achieve3000.className}`} title={row.achieve3000.title}>
                {row.achieve3000.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
