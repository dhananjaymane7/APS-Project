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
};
