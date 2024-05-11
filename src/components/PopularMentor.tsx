import { Card, CardBody, CardHeader, Image, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "@src/assets/global.css";

const PopularMentor = () => {
  const [mentorList, setMentorList] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      // const data = await getMentor();
      // setMentorList(data.mentors);
      // console.log(data);
      // setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="relative w-full p-3">
        <div className="no-scrollbar mt-3 flex w-full flex-row overflow-x-auto scroll-smooth p-4">
          <div className="relative flex flex-row gap-6 sm:gap-8">
            {loading ? (
              <>
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
              </>
            ) : (
              <>
                {mentorList.map((mentor: any) => (
                  <Card
                    key={mentor?.userid}
                    className="w-56 cursor-pointer border-2 py-4 shadow-sm hover:scale-110"
                  >
                    <CardHeader className="flex-col flex-wrap items-start px-4 pb-0 pt-2">
                      <p className="open-sans-600 text-tiny uppercase">
                        {mentor?.account_detail?.binusian}
                      </p>
                      <div className="line-clamp-1 max-w-[240px] overflow-hidden text-ellipsis text-default-500">
                        <small>{mentor?.mentor_detail?.course_list}</small>
                      </div>
                      <h4 className="open-sans-600 text-large">
                        {mentor?.account_detail?.name}
                      </h4>
                    </CardHeader>
                    <CardBody className="flex items-center overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="max-h-36 rounded-xl object-cover"
                        src={mentor?.account_detail?.profile_picture}
                        width={270}
                        onClick={() => {
                          navigate(`/mentoring/${mentor?.userid}`);
                        }}
                      />
                    </CardBody>
                  </Card>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularMentor;
