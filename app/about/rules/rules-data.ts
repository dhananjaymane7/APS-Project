export type RuleSection = {
  id: string;
  title: string;
  items: string[];
};

export const rulesData: RuleSection[] = [
  {
    id: "section-a",
    title: "A) School Calendar/ Diary and Identity Card",
    items: [
      "i) Identity card must be worn to school on all days. Loss of an identity card is a punishable offence.",
      "ii) The school diary must be brought to the school every day.",
      "iii) All entries in the diary from the school must be shown to parents and entries made by the parents to be brought to the notice of the Class Teacher/relevant school staff.",
      "iv) Any child representing the school must be in proper uniform / be appropriately attired for the concerned activity and must be in possession of his/her Identity Card.",
    ],
  },
  {
    id: "section-b",
    title: "B) Attendance",
    items: [
      "i) Regular attendance in school is most essential. The minimum requirement of attendance in an academic year is 75%.",
      "ii) Leave of absence is given to students on prior application from parents.",
      "iii) All leave applications are to be submitted on separate sheets of paper for the class teacher’s record and also to be mentioned in the diary.",
      "iv) Students absent on account of illness are to submit valid medical certificate on return.",
      "v) Students suffering from any communicable disease must observe the prescribed period of quarantine before returning to school. They must also produce a medical fitness certificate at that time.",
      "vi) Repeated absence without leave or unexplained absence for more than 10 consecutive days renders the student liable to have his/her name struck off the rolls. Re-admission will be granted only on payment of fresh admission fee.",
    ],
  },
  {
    id: "section-c",
    title: "C) Discipline",
    items: [
      "i) The school aims at behavioral excellence and the inculcation of discipline, individually and in groups, while in school premises, functions as well as during the organized trips.",
      "ii) They should always remember that the school is judged by their conduct. They should greet their teachers and elders whenever they meet them.",
      "iii) Irregular attendance, neglect of homework, disobedience or disrespect towards staff or bad moral influence would lead to strict disciplinary action.",
      "iv) Any damage to school property will be made good by the offending student(s) and would entail disciplinary action.",
      "v) Classrooms would be locked when not in use. The class monitor will have a key of the classroom. The entire class would be responsible for any damage to class property.",
      "vi) Bullying and use of foul language are punishable offences.",
      "vii) Students are not allowed to use /attend the office telephone without the permission of the office in charge.",
      "viii) No half days are permitted to students in any circumstances.",
      "ix) Students should not visit public places in school uniform. Except during organized trips. They are responsible to the school authorities for their conduct both in school and outside. Misbehavior in public places will be dealt with severely.",
      "x) Students will be allowed entry to the school only in school uniform.",
      "xi) Mobile phones or any such gadget is not permitted in school or outside during the conduct of school events.",
    ],
  },
  {
    id: "section-d",
    title: "D) Punctuality",
    items: [
      "i) All students must be present in school 10 minutes before the scheduled time. The school gate will close at 7.40 am. All late arrivals, without justified reasons, will be sent back home. Three late arrivals in a month would lead to strict disciplinary action.",
      "ii) Students are required to go to the assembly in an orderly manner as soon as the first bell rings at 7.40 am.",
    ],
  },
  {
    id: "section-e",
    title: "E) Mandatory working days for the students",
    items: [
      "i) Independence Day",
      "ii) Republic Day",
      "iii) First and last working days before and after term breaks.",
    ],
  },
  {
    id: "section-f",
    title: "F) Turn out and uniform code",
    items: [
      "i) Neat, washed and ironed uniforms are to be worn by all students.",
      "ii) The students must present a neat and tidy appearance with well-groomed hair. The hair should not touch the shirt collar at the nape of the neck in the case of boys.",
      "iii) Girls are not allowed to keep long hair lose. ‘Flicks’ and ‘fringes’ are not permitted. Hair longer than collar must be plaited into two.",
      "iv) Boys and girls must necessarily wear their trousers and skirts, respectively at the mid waist level. Wearing of low slung trousers/ skirts will be viewed as a severe violation of the school uniform code and action will be taken against offenders.",
    ],
  },
  {
    id: "section-g",
    title: "G) Warning cards:  A system of warning cards has been introduced in the school:",
    items: [
      "i) ross indiscipline by a student or repeated remarks in the diary would entail the signing of a ‘green card’ by the Principal.<br>The father/parent of the defaulting student will be summoned to the Principal’s office and this card will be handed over to him/her.",
      "ii) A second act of gross indiscipline will result in the issue of a ‘Green card’ with a severe warning.",
      "iii) A Green card may be issued as a result of severe and gross indiscipline at the first instance itself.",
      "iv) Any further act of gross indiscipline by the same student will result in expulsion from APS, on the authority of the Chairman, APS.",
    ],
  },
  {
    id: "section-h",
    title: "H) Library Rules",
    items: [
      "i) A student is expected to make full use of library. Students should go to the library as per their time-table.",
      "ii) A student can borrow one book at a time. Everyone to examine the book before leaving the library. Any mark or damage should be reported to the librarian.",
      "iii) Books are issued for seven days. If a book is not returned within seven days, a fine of Rs.4 per day will be imposed. Hence the student not returning the book on the due date has to return it the very next day during 'Break'.",
      "iv) Any book that is lost must be replaced at once or its current price must be paid.",
      "v) Students are required to keep a record of their reading.",
      "vi) Students are not allowed to take any book /notebook other than the book issued to them while visiting the library.",
    ],
  },
];

export const disciplineSection = rulesData.find((section) => section.id === 'section-c')!;
