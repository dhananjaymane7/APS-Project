import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "School History - Army Public School",
  description:
    "Learn about the rich history and heritage of Army Public School Khadakwasla.",
};

export default function HistoryPage() {
  return (
    <PageLayout
      title="Our History"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "History" },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          
          <p className="mb-6 text-justify">
            NDA English School was established on 1st February 1955. In 1975, it
            was taken over by the National Defence Academy (NDA) from the Pune
            Jesuits Society. The following year, in 1976, the school was
            registered under the Society Registration Act and later under the
            Zilla Parishad in 1980. A major milestone came in 2012 when the
            school was upgraded to Army Public School (APS) Khadakwasla, with
            Class VI as the highest class at the time.
          </p>
          <p className="mb-6 text-justify">
            The school continued to grow steadily, receiving affiliation from
            the Central Board of Secondary Education (CBSE) on 10th February
            2014. In 2016, it was further upgraded to include Class X, effective
            from 1st April. Another significant achievement came on 11th August
            2021, when APS Khadakwasla was upgraded to a Senior Secondary
            School, offering education up to Class XII
          </p>
          At present, the school comprises 38 well-equipped classrooms and
          provides quality education from Classes I to XII. With a student
          strength of over 1,700, APS Khadakwasla continues to uphold its legacy
          of academic excellence and holistic development in a disciplined and
          nurturing environment.
        </div>
      </div>
    </PageLayout>
  );
}
