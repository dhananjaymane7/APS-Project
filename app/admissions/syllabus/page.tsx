import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Entrance Syllabus - Army Public School',
};

export default function SyllabusPage() {
  return (
    <PageLayout
      title="Entrance Examination Syllabus"
      subtitle="Preparation Guide for Admission Tests"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Admissions', href: '/admissions/rules' },
        { label: 'Syllabus' },
      ]}
    >
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-primary">
          <p className="text-muted-foreground leading-relaxed mb-6">
            The entrance examination is designed to assess the academic proficiency and aptitude of candidates
            applying for admission to various classes. Below is the syllabus for different class levels.
          </p>

          <div className="space-y-8">
            {[
              {
                class: 'Classes III-V',
                subjects: [
                  'English: Reading, Comprehension, Vocabulary, Grammar',
                  'Mathematics: Number System, Basic Arithmetic, Geometry Basics',
                  'General Knowledge: Science, Geography, History',
                ],
              },
              {
                class: 'Classes VI-VIII',
                subjects: [
                  'English: Reading, Writing, Grammar, Literature',
                  'Mathematics: Algebra, Geometry, Number System, Mensuration',
                  'Science: Physics, Chemistry, Biology Basics',
                  'Social Studies: History, Geography, Civics',
                ],
              },
              {
                class: 'Classes IX-X',
                subjects: [
                  'English: Literature, Grammar, Comprehension, Essay',
                  'Mathematics: Algebra, Geometry, Trigonometry, Statistics',
                  'Science: Physics, Chemistry, Biology (CBSE Syllabus)',
                  'Social Studies: History, Geography, Economics, Civics',
                ],
              },
              {
                class: 'Classes XI-XII',
                subjects: [
                  'English: English Language and Literature (Stream Specific)',
                  'Mathematics / Economics: Depending on Selected Stream',
                  'Physics: As per CBSE Curriculum',
                  'Chemistry: As per CBSE Curriculum',
                  'Biology: As per CBSE Curriculum',
                  'Other Subjects: Based on Stream Selection',
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 border border-border"
              >
                <h3 className="text-xl font-bold text-primary mb-4">{item.class}</h3>
                <ul className="space-y-2">
                  {item.subjects.map((subject, j) => (
                    <li key={j} className="flex gap-2 text-muted-foreground">
                      <span className="text-accent">✓</span>
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Exam Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Test Duration', content: '60-90 minutes depending on class' },
            { title: 'Question Type', content: 'Multiple Choice, Short Answer, Essay Type' },
            { title: 'Total Marks', content: '100-150 marks depending on class' },
            { title: 'Passing Score', content: '40% or above required' },
            { title: 'Negative Marking', content: 'No negative marking for most questions' },
            { title: 'Result Declaration', content: 'Within 2-3 weeks of examination' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
              <h3 className="font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
