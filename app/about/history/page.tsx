import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'School History - Army Public School',
  description: 'Learn about the rich history and heritage of Army Public School Khadakwasla.',
};

export default function HistoryPage() {
  return (
    <PageLayout
      title="Our History"
      subtitle="A Journey of Excellence Since 2012"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'History' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <h2 className="text-3xl font-bold text-primary mb-6">Founding and Growth</h2>
          <p className="mb-6 text-justify">
            Army Public School Khadakwasla was established on 1st April 2012, as part of the prestigious network of
            schools managed by the Army Welfare Education Society (AWES). The school is located in the serene premises
            of the National Defence Academy (NDA), one of the premier institutions of national importance.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-6 mt-8">Our Heritage</h2>
          <p className="mb-6 text-justify">
            Being located within the precincts of NDA, our school embodies the values of discipline, dedication, and
            service that are the hallmarks of the Armed Forces. Our students are nurtured in an environment that
            emphasizes academic excellence alongside character development.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-6 mt-8">Milestones</h2>
          <ul className="list-none space-y-4 mb-6">
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl">2012</span>
              <span>School inauguration with primary section</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl">2014</span>
              <span>Secondary section established</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl">2016</span>
              <span>Senior secondary section launched</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl">2018</span>
              <span>Modern infrastructure and labs inaugurated</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl">2020</span>
              <span>Digital learning platform implemented</span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
