import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WeeklyPopularCourses } from "@src/assets/data/userLandingData";
import { encode } from "querystring";
import { useNavigate } from "react-router-dom";

type CourseCardProps = {
  id: string;
  name: string;
  image: string;
};

const CourseCard = (props: CourseCardProps) => {
  const { id, name, image } = props;
  const navigate = useNavigate();
  return (
    <div
      key={id}
      className="flex aspect-square w-72 cursor-pointer flex-col items-center justify-center rounded-xl bg-purple-accent-500 px-14 py-12 shadow-purple-accent-500 drop-shadow-lg duration-200 ease-linear hover:bg-purple-500"
      onClick={() => navigate(`/search/${encodeURIComponent(name)}`)}
    >
      <div className="flex aspect-square w-1/2 items-center justify-center overflow-hidden rounded-full">
        <img src={image} alt={name} className="mr-1" />
      </div>
      <h1 className="open-sans-300 open-sans-600 mt-5 text-center text-lg text-white">
        {name}
      </h1>
    </div>
  );
};

const WeeklyPopularCoursesWrapper = () => {
  const navigate = useNavigate();
  const renderCourseCard = () => {
    return WeeklyPopularCourses.map((course, index) => (
      <CourseCard
        key={index}
        id={course.id}
        name={course.name}
        image={course.image}
      />
    ));
  };

  return (
    <section className="mt-16">
      <div className="open-sans-600 flex w-full flex-row items-center p-3 text-2xl">
        <h1
          className="ml-8 cursor-pointer decoration-transparent underline-offset-4 transition-all duration-300 ease-in-out hover:underline hover:decoration-black hover:decoration-solid"
          onClick={() => navigate("/search")}
        >
          Popular Courses This Week
        </h1>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="z-[99] ml-3 mt-1 text-black"
          fade
        />
      </div>

      <div className="relative w-full p-3">
        <div className="no-scrollbar mt-3 flex w-full flex-row overflow-x-auto scroll-smooth p-4">
          <div className="relative ml-4 flex flex-row gap-6 sm:gap-8">
            {renderCourseCard()}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CourseCard, WeeklyPopularCoursesWrapper };
