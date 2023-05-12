export type Course = {
  id: number;
  code: string,
  name: string;
  credits: number;
  equivalence: string;
}

export type Semester = {
  id: number;
  title: string;
  courses: Course[];
};