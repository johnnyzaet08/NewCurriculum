export type Course = {
  id: string;
  name: string;
  credits: number;
}

export type Semester = {
  id: number;
  title: string;
  courses: Course[];
};