import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import { readSiteContent } from "@/lib/content-store";

const TITLES: Record<string, string> = {
  campus: "Campus",
  classroom: "Classroom",
  "computer-lab": "Computer lab",
  library: "Library",
  sports: "Sports",
  "music-dance": "Music & Dance",
  "composite-science-lab": "Composite Science Lab",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const title = TITLES[slug];
  return {
    title: title ? `${title} - Infrastructure` : "Infrastructure",
  };
}

export default async function InfrastructureDetailPage({ params }: Props) {
  const { slug } = await params;
  const title = TITLES[slug];
  if (!title) notFound();

  const content = await readSiteContent();

  return (
    <PageLayout
      title={title}
      subtitle="Infrastructure"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Infrastructure", href: "/about/infrastructure" },
        { label: title },
      ]}
    >
      {/* <p className="text-lg leading-relaxed text-muted-foreground">
        This section highlights our <strong>{title}</strong> facilities. Descriptions and photos can be maintained from
        the admin panel alongside gallery and document uploads.
      </p> */}

      {slug === "campus" && (
        <h1 className="text-3xl font-bold text-primary mb-6">
          Army Public School Khadakwasla Campus
        </h1>
      )}

      {slug === "campus" && content.infrastructure?.campus && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.infrastructure?.campus?.map((item) => (
            <div key={item.id} className="rounded-lg border bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{item.label}</span>
                <span className="text-muted-foreground">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {slug === "classroom" && (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary mb-6">
            Classroom Facilities
          </h1>
          <p>
            Each classroom is well equipped with the newest quality of study
            furniture, racks, cupboards and many more features for the children
            to stack up their required study and activity material. There are
            also a host of bulletin boards and display boards placed both inside
            and outside the classrooms.
          </p>
          <p>
            The tables and benches are carefully carpentered to ensure that the
            edges are round and smooth so that that it cannot hurt the children.
            It has further been ensured that the furniture is comfortable enough
            to keep the child’s posture straight and upright.
          </p>
          <img
            src="https://www.apskhadakwasla.in/images/classroom.jpg?crc=290862741"
            alt="Classroom"
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      {slug === "computer-lab" && (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary mb-6">Computer Lab</h1>
          <p>
            The school’s Computer Lab is a well-equipped facility with 60
            systems, including 15 Dell PCs, 21 HP PCs, 25 Thin Clients, and 1
            dedicated Server, all with internet connectivity. Students from
            Classes I to XII are introduced to the world of computers through a
            flexible and engaging curriculum. In addition to learning how to use
            computers for everyday tasks, students are also taught to reinforce
            academic concepts through digital tools and interactive learning.
          </p>
          <p>
            The lab is equipped with a wide range of software including Python
            IDLE, Anaconda, NetBeans, GIMP, Synfig, MySQL, MS Office, Tux Paint,
            and more, allowing students to explore programming, graphic design,
            animation, and data handling in a dynamic environment.
          </p>
          <h4 className="text-2xl font-bold text-primary">
            COMPUTER AIDED LEARNING/ TECHNOLOGY AIDED LEARNING
          </h4>
          <p>
            To enhance classroom teaching, the school also features a dedicated
            Audio-Visual Room equipped with a computer, projection screen, and
            Overhead Projector (OHP). This facility enables teachers to
            integrate technology into their lessons, making learning more
            interactive, visual, and impactful.
          </p>
          <p>
            In line with the vision of the Army Welfare Education Society
            (AWES), the school is actively implementing Technology Aided
            Learning as one of its core focus areas. This approach not only
            supports better comprehension of complex topics but also prepares
            students for a technology-driven future.
          </p>
        </div>
      )}

      {slug === "library" && (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary mb-6">Library</h1>
          <p>
            The school library is a vibrant hub of knowledge and learning,
            housing a rich collection of over 9,000 books, 20 magazines, 5 daily
            newspapers, and 12 Kindles. It offers an impeccable blend of
            traditional and digital resources, catering to the diverse interests
            and academic needs of students. The library features a wide spectrum
            of books, ranging from timeless classics to modern science fiction,
            authored by renowned writers across various genres. This extensive
            collection inspires a love for reading among students, which not
            only brings joy but also enhances their vocabulary, comprehension,
            creativity, and critical thinking skills.
          </p>
          <p>
            The selection of books is carried out through a well-planned and
            collaborative process involving subject and language teachers along
            with the librarian, ensuring that the most relevant and enriching
            material is made available to students. The librarian is always
            ready to assist and guide students, creating a welcoming and
            supportive environment. In our continuous efforts to nurture reading
            habits early on, we have also started issuing books to students of
            Classes III and IV, encouraging young learners to explore the world
            of books from an early age.
          </p>
        </div>
      )}

      {slug === "sports" && (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary mb-6">
            Sports Facilities
          </h1>
          <p>
            It is a firm conviction of Army Public School Khadakwasla that
            physical activity through sports and games is an essential
            ingredient for the personality development of every student. We
            believe that academics and sports activity on playfield develops the
            qualities of team work, leadership, dedication, discipline, self-
            confidence and self - esteem. These qualities get ingrained in the
            psyche and enable each student to overcome the trials and
            tribulations of life. Sports equip students to face challenges of an
            increasingly competitive world.
          </p>
          <p>
            We offer a very wide range of sports and games, so that every
            student can find at least one in which she/he can excel.
            <br></br>- Athletics, Fencing, Softball, Kho-Kho, Kabbadi,
            Basketball, Football, Cricket, Yoga and other Sports.
          </p>
        </div>
      )}

      {slug === "music-dance" && (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary mb-6">
            Music & Dance Room
          </h1>
          <h2 className="text-2xl font-bold text-dark mb-4">
            DANCE CLASSES (I-V)
          </h2>
          <p>
            Flexibility and grace are the hallmark of a good personality . To
            keeping this in mind, dance classes are conducted in school and the
            following forms are taught: Zumba, walking hip hop and dance on
            patriotic numbers. The students learn these various forms and it
            adds to their creativity.
          </p>

          <h2 className="text-2xl font-bold text-dark mb-4">(VI-X)</h2>
          <p>
            The option: Students have been given the option to appear for the
            Prarambhika Exam of Kathak from Akhil Bhartiya Gandharva University
            in the month of November and December. This will broader their
            horizon and scope in future.
          </p>

          <h2 className="text-2xl font-bold text-dark mb-4">Music</h2>
          <p>
            Shakespeare once said ,”If music be the food of love then play on….”{" "}
            <br></br>The school tries to incorporate such values in both the
            primary wing and secondary wing.<br></br>A lot of practice is
            provided to the students for perfection in assembly song, school
            song and patriotic songs. Lessons in playing drums and teaching of
            Alankar is also conducted during the music class for the primary
            wing.<br></br>
            The students of classes VI-X have been provided with an additional
            opportunity to appear for Gandharva Music Exam . They are also
            taught to sing various songs in the grace of patriotism with melody
            and rhyme.
          </p>
        </div>
      )}

      {slug === "composite-science-lab" && (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary mb-6">
            Composite Science Lab
          </h1>
          <p>
            The Science Lab at Army public School Khadakwasla provides an
            atmosphere of experiencing and learning science. It's a modern
            Science lab, which can accommodate more than forty students.<br></br> The
            Science lab also provides an open environment for students to
            experiment and do research work. Under the professional guidance and
            assistance given by our science teachers,students are also
            encouraged to exhibit their innovative powers by developing samples
            and models.
          </p>
          <p>
            The equipment for Physics allows students to perform experiments and
            study various principles and laws. The facilities and wide range of
            chemicals and apparatus allow the students a hands-on experience in
            learning Chemistry.
          </p>
        </div>
      )}
    </PageLayout>
  );
}
