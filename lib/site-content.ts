export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  imageUrl: string;
  count?: number;
};

export type PdfDocument = {
  id: string;
  title: string;
  fileUrl: string;
  category?: string;
};

export type HomepageBlock = {
  id: string;
  type: 'text' | 'cta' | 'image_banner';
  title?: string;
  body?: string;
  imageUrl?: string;
  href?: string;
  buttonLabel?: string;
  visible: boolean;
  order: number;
};

/** Header nav — supports optional nested submenu (e.g. Rules) */
export type NavSubItem = {
  label: string;
  href?: string;
  submenu?: NavSubItem[];
};

export type NavItem = {
  label: string;
  href?: string;
  submenu?: NavSubItem[];
};

export type ScoreboardHouse = {
  id: string;
  name: string;
  score: string;
  /** CSS hex e.g. #0d9488 — used for card accent */
  accentColor?: string;
};

/** One tab (Primary or Secondary) in House Positions mode */
export type HouseBoardSegment = {
  houses: ScoreboardHouse[];
  /** Header inside yellow score box */
  scoreboardHeader?: string;
  eventTitle?: string;
  imageUrl?: string;
  participantsText?: string;
};

export type ScoreboardData = {
  enabled: boolean;
  /** cards | event (legacy) | house_positions = Primary/Secondary tabs + split layout */
  layout: 'cards' | 'event' | 'house_positions';
  /** Section title e.g. HOUSE POSITIONS (house_positions) or Score board */
  mainTitle: string;
  eventTitle?: string;
  imageUrl?: string;
  participantsText?: string;
  houses: ScoreboardHouse[];
  /** Used when layout === 'house_positions' */
  primary: HouseBoardSegment;
  secondary: HouseBoardSegment;
};

export type AcademicsCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  /** Lucide icon name — fallback if no imageUrl */
  iconKey?: string;
  imageUrl?: string;
};

export type AcademicsSection = {
  enabled: boolean;
  title: string;
  cards: AcademicsCard[];
};

export type ManagementTeamMember = {
  id: string;
  title: string;
  name: string;
  qualification: string;
  experience: string;
  imageUrl?: string;
};

export type ManagementSection = {
  title: string;
  subtitle: string;
  intro: string[];
  imageUrl: string;
  team: ManagementTeamMember[];
  committeeTitle: string;
  committeeItems: string[];
};

export type CampusItem = {
  id: string;
  label: string;
  value: string;
};

export type AchievementItem = {
  id: string;
  year: string;
  title: string;
  description: string;
  category: string;
};

export type AchievementStat = {
  id: string;
  number: string;
  label: string;
};

export type AcademicResult = {
  id: string;
  exam: string;
  passPercentage: string;
  toppers: string;
};

export type AchievementAcademicSection = {
  imageUrl: string;
  intro: string;
  results: AcademicResult[];
  subjects: string[];
  scholarshipAwards: string[];
};

export type AchievementSport = {
  id: string;
  sport: string;
  medals: string;
  level: string;
};

export type AchievementCoCurricular = {
  id: string;
  category: string;
  achievement: string;
};

export type AchievementAlumnus = {
  id: string;
  name: string;
  achievement: string;
};

export type AchievementStudentSection = {
  imageUrl: string;
  intro: string;
  sports: AchievementSport[];
  coCurricular: AchievementCoCurricular[];
  alumni: AchievementAlumnus[];
};

export type AchievementsSection = {
  awards: AchievementItem[];
  stats: AchievementStat[];
  academic: AchievementAcademicSection;
  student: AchievementStudentSection;
};

export type InfrastructureSection = {
  campus: CampusItem[];
};

export type SiteContent = {
  heroSlides: HeroSlide[];
  welcome: {
    title: string;
    paragraphs: string[];
  };
  principalMessage: {
    title: string;
    subtitle: string;
    name: string;
    message: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
  };
  importantLinks: { label: string; href: string }[];
  gallery: GalleryItem[];
  documents: PdfDocument[];
  homepageBlocks: HomepageBlock[];
  announcementBanner: string;
  navigation: NavItem[];
  scoreboard: ScoreboardData;
  academicsSection: AcademicsSection;
  managementSection: ManagementSection;
  achievements: AchievementsSection;
  infrastructure: InfrastructureSection;
};

export const defaultNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    submenu: [
      { label: 'History', href: '/about/history' },
      { label: "Principal's Message", href: '/about/principal' },
      { label: 'Management', href: '/about/management' },
      { label: 'Affidavit', href: '/about/affidavit' },
      { label: 'Affiliation', href: '/about/affiliation' },
      { label: 'Annual Report', href: '/about/annual-report' },
      {
        label: 'Rules',
        submenu: [
          { label: 'School rules', href: '/about/rules' },
          { label: 'Code of conduct', href: '/about/rules#conduct' },
        ],
      },
    ],
  },
  {
    label: 'Infrastructure',
    submenu: [
      { label: 'Campus', href: '/about/infrastructure/campus' },
      { label: 'Classroom', href: '/about/infrastructure/classroom' },
      { label: 'Computer lab', href: '/about/infrastructure/computer-lab' },
      { label: 'Library', href: '/about/infrastructure/library' },
      { label: 'Sports', href: '/about/infrastructure/sports' },
      { label: 'Music & Dance', href: '/about/infrastructure/music-dance' },
      { label: 'Composite Science Lab', href: '/about/infrastructure/composite-science-lab' },
    ],
  },
  {
    label: 'Academics',
    submenu: [
      { label: 'General', href: '/academics/general' },
      { label: 'Text book', href: '/academics/textbook' },
      { label: 'Teachers Training', href: '/academics/teachers-training' },
      { label: 'Students Strength', href: '/academics/students-strength' },
      { label: 'Assessment', href: '/academics/assessment' },
      { label: 'Holiday', href: '/academics/holiday' },
      { label: 'Academic Calendar', href: '/academics/calendar' },
      { label: 'Circulars', href: '/academics/circulars' },
      { label: 'CBSE Circulars', href: '/academics/cbse-circulars' },
      { label: 'Open House', href: '/academics/open-house' },
    ],
  },
  {
    label: 'CCA',
    submenu: [
      { label: 'Co-Curricular Schedule', href: '/cca/schedule' },
      { label: 'Student Creative Corner', href: '/cca/creative-corner' },
    ],
  },
  {
    label: 'Achievements',
    submenu: [
      { label: 'Awards', href: '/achievements/awards' },
      { label: 'Academic Achievements', href: '/achievements/academic' },
      { label: 'Student Achievements', href: '/achievements/student' },
    ],
  },
  {
    label: 'Admissions',
    submenu: [
      { label: 'Admission Rules', href: '/admissions/rules' },
      { label: 'Admission Procedure', href: '/admissions/procedure' },
      { label: 'Entrance Syllabus', href: '/admissions/syllabus' },
      { label: 'Admission Checklist', href: '/admissions/checklist' },
      { label: 'Fee Details', href: '/admissions/fees' },
    ],
  },
  {
    label: 'HPD',
    submenu: [
      { label: 'Value Education Annual Plan', href: '/hpd/value-education-annual-plan' },
      { label: 'Life Skill Annual Plan', href: '/hpd/life-skill-annual-plan' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Recruitment', href: '/recruitment' },
  { label: 'Contact Us', href: '/contact' },
];

export const defaultScoreboard: ScoreboardData = {
  enabled: true,
  layout: 'house_positions',
  mainTitle: 'HOUSE POSITIONS',
  eventTitle: '',
  imageUrl: '',
  participantsText: '',
  houses: [
    { id: 'h1', name: 'Tagore House', score: '212', accentColor: '#0d9488' },
    { id: 'h2', name: 'Raman House', score: '195', accentColor: '#f59e0b' },
    { id: 'h3', name: 'Ashoka House', score: '204', accentColor: '#dc2626' },
    { id: 'h4', name: 'Shivaji House', score: '201', accentColor: '#2563eb' },
  ],
  primary: {
    scoreboardHeader: 'SCOREBOARD',
    houses: [
      { id: 'p1', name: 'Shivaji House', score: '01', accentColor: '#0a305f' },
      { id: 'p2', name: 'RanaPratap House', score: '02', accentColor: '#dc2626' },
      { id: 'p3', name: 'Ashoka House', score: '03', accentColor: '#16a34a' },
      { id: 'p4', name: 'Ranjit House', score: '04', accentColor: '#2563eb' },
    ],
    eventTitle: 'INTER HOUSE FOLK SONG COMPETITION',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=500&fit=crop',
    participantsText:
      'Pragati Sonar, Vaibhavi Sonawane, Devansh Ghadage, Avanti Salunke, Prachi Singh, Shravani Devare, Lara Gawade Kumari Saloni, Abhijeet Dhokrat, Jyoti Sarode',
  },
  secondary: {
    scoreboardHeader: 'SCOREBOARD',
    houses: [
      { id: 's1', name: 'Ashoka House', score: '01', accentColor: '#16a34a' },
      { id: 's2', name: 'RanaPratap House', score: '02', accentColor: '#dc2626' },
      { id: 's3', name: 'Ranjit House', score: '03', accentColor: '#2563eb' },
      { id: 's4', name: 'Shivaji House', score: '04', accentColor: '#0a305f' },
    ],
    eventTitle: 'INTER HOUSE ENGLISH DECLAMATION',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop',
    participantsText: 'Akshara Chavan 8 D\nHiba Naaz Khan 8 D',
  },
};

export const defaultAcademicsSection: AcademicsSection = {
  enabled: true,
  title: 'Academics',
  cards: [
    {
      id: 'a1',
      title: 'General',
      description: 'Overview of academic programs and curriculum structure.',
      href: '/academics/general',
      iconKey: 'graduationCap',
    },
    {
      id: 'a2',
      title: 'Textbooks',
      description: 'Prescribed textbooks and reading materials for all classes.',
      href: '/academics/textbook',
      iconKey: 'bookOpen',
    },
    {
      id: 'a3',
      title: 'Academic Calendar',
      description: 'Important dates, holidays, and academic schedules.',
      href: '/academics/calendar',
      iconKey: 'calendarDays',
    },
  ],
};

export const defaultSiteContent: SiteContent = {
  heroSlides: [
    {
      id: '1',
      title: 'Welcome to Army Public School',
      subtitle: 'Excellence in Education, Character Development, and Holistic Growth',
      imageUrl:
        'https://images.unsplash.com/photo-1427504494785-cdae8dfddee0?w=1200&h=400&fit=crop',
    },
    {
      id: '2',
      title: 'Academic Excellence',
      subtitle: 'Inspiring minds, building futures',
      imageUrl:
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=400&fit=crop',
    },
    {
      id: '3',
      title: 'Holistic Development',
      subtitle: 'Sports, Arts, and Co-Curricular Activities',
      imageUrl:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop',
    },
  ],
  welcome: {
    title: 'Welcome to APS',
    paragraphs: [
      'Army Public School Khadakwasla is located in the serene, pristine and picturesque premises of National Defence Academy (NDA). It is 16 kms from Pune city and 4 kms from the famous Khadakwasla lake.',
      'The school started on 1st April 2012 and is a part of a wide network of schools governed by Army Welfare Education Society, which aims to provide quality education to wards of defence personnel.',
      'Army Public School Khadakwasla provides excellent standards of education in a safe, supportive and friendly environment and nurtures students to develop their true potential through a rich academic programme combined with a variety of co-curricular activities.',
    ],
  },
  principalMessage: {
    title: "Principal's Message",
    subtitle: 'A warm welcome from our leadership',
    name: 'Principal',
    message:
      "Greetings, dear students, parents, and educators.\n\nAt APS Khadakwasla, we believe in the power of education to transform lives and shape a brighter future. As we embark on this academic journey together, I am thrilled to share our commitment to providing an inspiring and holistic learning environment for all.\n\nWith the recent implementation of the National Education Policy (NEP), we are embracing innovative pedagogical approaches that cater to individual learning styles, foster critical thinking, and nurture a lifelong love for learning.\n\nAs the principal, my vision is to empower our students to become confident, compassionate, and responsible global citizens.",
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    ctaText: 'Read More',
    ctaLink: '/about/principal',
  },
  importantLinks: [
    { label: 'AWES', href: 'https://www.awesindia.com' },
    { label: 'CBSE', href: 'https://www.cbse.gov.in' },
    { label: 'Newsletter', href: '#' },
    { label: 'Mandatory Public Disclosure', href: '#' },
  ],
  gallery: [
    {
      id: '1',
      title: 'School Events',
      imageUrl:
        'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=400&h=300&fit=crop',
      count: 24,
    },
    {
      id: '2',
      title: 'Sports & Games',
      imageUrl:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      count: 18,
    },
    {
      id: '3',
      title: 'Academic Activities',
      imageUrl:
        'https://images.unsplash.com/photo-1427504494785-cdae8dfddee0?w=400&h=300&fit=crop',
      count: 32,
    },
    {
      id: '4',
      title: 'Cultural Programs',
      imageUrl:
        'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop',
      count: 28,
    },
    {
      id: '5',
      title: 'School Infrastructure',
      imageUrl:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
      count: 15,
    },
    {
      id: '6',
      title: 'Student Activities',
      imageUrl:
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop',
      count: 42,
    },
  ],
  documents: [
    {
      id: 'd1',
      title: 'Sample notice (replace via admin)',
      fileUrl: '#',
      category: 'notice',
    },
  ],
  homepageBlocks: [
    {
      id: 'b1',
      type: 'text',
      title: 'School highlight',
      body: 'Visit the admissions section for the latest updates and circulars.',
      visible: true,
      order: 0,
    },
  ],
  announcementBanner: '',
  navigation: defaultNavigation,
  scoreboard: defaultScoreboard,
  academicsSection: defaultAcademicsSection,
  managementSection: {
    title: 'School Management',
    subtitle: 'Leadership, committee, and administration',
    intro: [
      'Army Public School Khadakwasla is managed by a dedicated leadership team committed to academic excellence and student welfare.',
      'The school management committee ensures strong governance, disciplined administration, and a nurturing environment for every child.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=500&fit=crop',
    team: [
      {
        id: 'm1',
        title: 'Principal',
        name: 'Mrs. Yasmia Kaur',
        qualification: 'B.Ed, M.Ed',
        experience: '15+ years',
        imageUrl: '',
      },
      {
        id: 'm2',
        title: 'Vice Principal (Academics)',
        name: 'Dr. R.K. Sharma',
        qualification: 'M.Sc, Ph.D, B.Ed',
        experience: '12+ years',
        imageUrl: '',
      },
      {
        id: 'm3',
        title: 'Vice Principal (Administration)',
        name: 'Col. Arun Kumar (Retd.)',
        qualification: 'B.A, M.A, B.Ed',
        experience: '20+ years',
        imageUrl: '',
      },
      {
        id: 'm4',
        title: 'Head - Primary Section',
        name: 'Ms. Priya Singh',
        qualification: 'B.Ed, D.Ed',
        experience: '10+ years',
        imageUrl: '',
      },
    ],
    committeeTitle: 'Composition of School Management Committee',
    committeeItems: [
      'Chairman',
      'One Senior A/Q Staff Offr',
      'One Commanding Officer Major/Minor Unit',
      'Two Parent Rep',
      'Two Teacher Rep',
      'Two Educationists',
      'Staff Officer to Chairman',
      'Secretary (Principal)',
    ],
  },
  achievements: {
    awards: [
      {
        id: 'a1',
        year: '2024',
        title: 'National Science Olympiad',
        description: 'Students achieved 1st position in the National Science Olympiad competition.',
        category: 'Academic',
      },
      {
        id: 'a2',
        year: '2024',
        title: 'Inter-School Sports Championship',
        description: 'Won overall championship in district-level inter-school sports competition.',
        category: 'Sports',
      },
      {
        id: 'a3',
        year: '2023',
        title: 'Math Genius Award',
        description: 'Three students selected for state-level mathematics competition.',
        category: 'Academic',
      },
    ],
    stats: [
      { id: 's1', number: '98%', label: 'Pass Rate' },
      { id: 's2', number: '45+', label: 'Scholarships' },
      { id: 's3', number: '120+', label: 'Awards Won' },
      { id: 's4', number: '85%', label: 'Merit Students' },
    ],
    academic: {
      imageUrl: '',
      intro: 'Our students have earned numerous scholarships and merit-based awards from various national and state-level organizations. This is a testament to their dedication and academic excellence.',
      results: [
        { id: 'r1', exam: 'Class X (2024)', passPercentage: '98%', toppers: '3' },
        { id: 'r2', exam: 'Class XII (2024)', passPercentage: '97%', toppers: '2' },
        { id: 'r3', exam: 'Class X (2023)', passPercentage: '96%', toppers: '4' },
      ],
      subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 'Physics', 'Chemistry', 'Biology'],
      scholarshipAwards: [
        'National Scholarship Scheme - 5 students',
        'State Merit Scholarship - 12 students',
        'Excellence in Science - 8 awardees',
        'Mathematics Excellence - 6 awardees',
        'Language Skills Recognition - 10 awardees',
      ],
    },
    student: {
      imageUrl: '',
      intro: 'Our students continue to shine across sports, co-curricular activities, and leadership roles. These achievements reflect their dedication and hard work.',
      sports: [
        { id: 'sp1', sport: 'Cricket', medals: 'Gold', level: 'State Level' },
        { id: 'sp2', sport: 'Badminton', medals: '2 Gold, 1 Silver', level: 'National' },
        { id: 'sp3', sport: 'Basketball', medals: 'Silver', level: 'State Level' },
        { id: 'sp4', sport: 'Athletics', medals: '5 Gold Medals', level: 'District' },
      ],
      coCurricular: [
        { id: 'cc1', category: 'Debate', achievement: '1st Prize, National Inter-School Debate' },
        { id: 'cc2', category: 'Drama', achievement: 'Best Performance Award, State Cultural Fest' },
        { id: 'cc3', category: 'Music', achievement: 'Gold Medal, National Music Competition' },
        { id: 'cc4', category: 'Art & Design', achievement: '2nd Prize, All India Art Exhibition' },
      ],
      alumni: [
        { id: 'al1', name: 'Raj Kumar Singh', achievement: 'NDA Qualified, Commissioned Officer' },
        { id: 'al2', name: 'Priya Sharma', achievement: 'NEET Qualified, Medical Student' },
        { id: 'al3', name: 'Arun Patel', achievement: 'IIT-JEE Qualified, Engineer' },
        { id: 'al4', name: 'Neha Verma', achievement: 'UPSC Exam Qualifier, IAS Officer' },
      ],
    },
  },
  infrastructure: {
    campus: [
      { id: 'classrooms', label: 'Class rooms', value: '34' },
      { id: 'computer-labs', label: 'Computer labs', value: '2' },
      { id: 'science-lab', label: 'Science lab', value: '1' },
      { id: 'library', label: 'Library', value: '1' },
    ],
  },
};
