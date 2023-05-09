import { Semester } from "@/types/curriculum";
import SingleOldCourse from "@/components/Semester/SingleOldCourse";

const SingleOldSemester = ({ semester }: { semester: Semester }) => {
  const { title, courses } = semester;
  return (
    <div className="block justify-center items-center">
      <div className="block resize-none w-[180px] h-auto" data-wow-delay=".15s">
        <h3 className="mb-5 text-xl w-full h-full text-center font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <div className="w-full flex-rows resize-none justify-center">
          {courses.map((Course) => (
            <div
              key={Course.id}
              className="w-full mb-5"
            >
              <SingleOldCourse course={Course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleOldSemester;