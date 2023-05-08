import { Course, Semester } from "@/types/curriculum";

const course0: Course = {
  id: "CI0205",
  name: "Prueba avanzada inglés",
  credits: 0,
};

const course1: Course = {
  id: "MA0101",
  name: "Matemática general",
  credits: 4,
};

const course2: Course = {
  id: "CE1101",
  name: "Introducción a la programación",
  credits: 3,
};

const course3: Course = {
  id: "CE1102",
  name: "Taller de programación",
  credits: 2,
};

const course4: Course = {
  id: "CS1502",
  name: "Int. técnica ciencia y tecnología",
  credits: 2,
};

const course5: Course = {
  id: "MA1102",
  name: "Cálculo diferencial e integral",
  credits: 2,
};

const course6: Course = {
  id: "MA1403",
  name: "Matemática discreta",
  credits: 2,
};

const course7: Course = {
  id: "QUI1102",
  name: "Laboratorio de química básica I",
  credits: 2,
};

const course8: Course = {
  id: "QUI1106",
  name: "Química básica I",
  credits: 2,
};

const course9: Course = {
  id: "SE1100",
  name: "Actividad cultural I",
  credits: 2,
};

const course10: Course = {
  id: "SE1200",
  name: "Actividad deportiva I",
  credits: 2,
};

const course11: Course = {
  id: "CE1103",
  name: "Algoritmos y estructuras de datos I",
  credits: 2,
};

const course12: Course = {
  id: "CI1403",
  name: "Comunicación técnica",
  credits: 2,
};

const course13: Course = {
  id: "FH1000",
  name: "Centros de formación humanística",
  credits: 2,
};

const course14: Course = {
  id: "FI1101",
  name: "Física general I",
  credits: 2,
};

const course15: Course = {
  id: "FI1201",
  name: "Laboratorio física general I",
  credits: 2,
};

const course16: Course = {
  id: "MA1103",
  name: "Cálculo y algebra lineal",
  credits: 2,
};

const course17: Course = {
  id: "QUI1104",
  name: "Laboratorio de química básica II",
  credits: 2,
};

const course18: Course = {
  id: "QUI1107",
  name: "Química básica II",
  credits: 2,
};

const course19: Course = {
  id: "SE1400",
  name: "Actividad cultural-deportiva",
  credits: 2,
};

const course20: Course = {
  id: "CE2103",
  name: "Algoritmos y estructuras de datos III",
  credits: 2,
};



const oldCurriculumData: Semester[] = [
  {
    id: 0,
    title: "Semestre 0",
    courses: [course0,course1],    
  },
  {
    id: 1,
    title: "Semestre 1",
    courses: [course2,course3,course4,course5,course6,course7,course8,course9,course10],    
  },
  {
    id: 2,
    title: "Semestre 2",
    courses: [course11,course12,course13,course14,course15,course16,course17,course18,course19],    
  },
  {
    id: 3,
    title: "Semestre 3",
    courses: [course20],    
  },
  {
    id: 4,
    title: "Semestre 4",
    courses: [course0],    
  },
  {
    id: 5,
    title: "Semestre 5",
    courses: [course0],    
  },
  {
    id: 6,
    title: "Semestre 6",
    courses: [course0],    
  },
  {
    id: 7,
    title: "Semestre 7",
    courses: [course0],    
  },
  {
    id: 8,
    title: "Semestre 8",
    courses: [course0],    
  },
  {
    id: 9,
    title: "Semestre 9",
    courses: [course0],    
  },
  {
    id: 10,
    title: "Semestre 10",
    courses: [course0],    
  },
];
export default oldCurriculumData;