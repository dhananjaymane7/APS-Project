import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Discipline - Army Public School Khadakwasla",
  description: "School discipline policies and guidelines.",
};

export default function DisciplinePage() {
  return (
    <PageLayout
      title="Discipline"
      subtitle="Student conduct expectations and school discipline guidelines"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Discipline" },
      ]}
    >
      <div className="prose prose-neutral max-w-none space-y-6">
        <p>
          The school emphasizes a high standard of discipline and also demands
          from students serious application to their studies as well as other
          pursuits. This calls for co-operation from the parents. They must
          honour the school rules and regulations themselves and ensure that
          their wards do the same.
        </p>

        <p>
          Warning Cards The Principal may, in the interest of the school, order
          the withdrawal of a student from the school should the student's
          conduct or behavior be detrimental to the general discipline of the
          school. Children who habitually violate the school code of conduct
          will be issued warning cards. The issue of three such cards will
          result in suspension or in extreme cases, even expulsion.
        </p>
      </div>
    </PageLayout>
  );
}
