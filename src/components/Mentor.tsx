import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Image, Skeleton } from "@nextui-org/react";
import { MentorService } from "@src/apis/services/mentorService";
import { MentorDTO } from "@src/models/dtos/mentorDTO";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type MentorCardProps = {
  mentor: MentorDTO;
};

type MentorState = {
  isLoading: boolean;
  items: MentorDTO[];
  error: string;
};

const MentorCard = (props: MentorCardProps) => {
  const { mentor } = props;
  const navigate = useNavigate();

  return (
    <Card
      key={mentor?.mentor_id}
      className="w-56 border-2 py-4 shadow-sm hover:scale-110"
      onClick={() => navigate(`/mentoring/${mentor?.mentor_id}`)}
    >
      <CardHeader className="flex-col flex-wrap items-start px-4 pb-0 pt-2">
        <p className="open-sans-600 text-tiny uppercase">
          {mentor?.university}
        </p>
        <div className="line-clamp-1 max-w-[240px] overflow-hidden text-ellipsis text-default-500">
          <small>{mentor?.courses[0]?.name}</small>
        </div>
        <h4 className="open-sans-600 text-large">
          {mentor?.username}
        </h4>
      </CardHeader>
      <CardBody className="flex items-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="max-h-36 rounded-xl object-cover  cursor-pointer"
          src={mentor?.profile_picture}
          width={270}
          onClick={() => {
            navigate(`/mentoring/${mentor?.mentor_id}`);
          }}
        />
      </CardBody>
    </Card>
  )

}

const SkeletonMentorCard = () => {
  return (
    <Card
      className="w-[200px] space-y-5 border-2 p-4 shadow-none"
      radius="lg"
    >
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  )
}

const WeeklyPopularMentorWrapper = () => {
  const navigate = useNavigate();

  const [popularMentors, setPopularMentors] = useState<MentorState>({
    isLoading: false,
    items: [],
    error: ''
  });

  const fetchPopularMentors = async () => {
    try {
      setPopularMentors({ ...popularMentors, isLoading: true });
      const response: MentorDTO[] = await MentorService.getPopularMentors();
      
      setPopularMentors({ ...popularMentors, isLoading: false, items: response });
    } catch (e) {
      if(e instanceof Error){
        setPopularMentors({ ...popularMentors, isLoading: false, error: e.message });
      }
    }
  }

  const renderPopularMentors = () => {
    if (popularMentors.isLoading) {
      return <SkeletonMentorCard />
    }

    if (popularMentors.items.length === 0) {
      return (
        <section className="w-full mx-8">
          <h1 className="text-center text-2xl">
            { popularMentors.error ? popularMentors.error : "No mentors found" }
          </h1>
        </section>
      )
    }

    return popularMentors.items.map((mentor: MentorDTO) => (
      <MentorCard key={mentor.mentor_id} mentor={mentor} />
    ))
  }

  useEffect(() => {
    fetchPopularMentors();
  }, []);

  return (
    <section className="mt-16">
      <div className="open-sans-600 flex w-full flex-row items-center p-3 text-2xl">
        <h1 className="ml-8 underline-offset-4 decoration-transparent hover:decoration-solid hover:underline cursor-pointer hover:decoration-black ease-in-out transition-all duration-300"
            onClick={() => navigate("/search")}
          >Popular Mentor This Week</h1>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="z-[99] ml-3 mt-1 text-black"
          fade
        />
      </div>

      <div className="relative w-full p-3">
        <div className="no-scrollbar mt-3 flex w-full flex-row overflow-x-auto scroll-smooth p-4">
          <div className="relative flex flex-row gap-6 sm:gap-8 ml-4">
            { renderPopularMentors() }
          </div>
        </div>
      </div>

    </section>
  )
}

export {
  MentorCard,
  SkeletonMentorCard,
  WeeklyPopularMentorWrapper
}