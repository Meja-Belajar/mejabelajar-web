import { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Checkbox, CheckboxGroup, Input } from "@nextui-org/react";
import { motion } from "framer-motion";

import { MentorService } from "@src/apis/services/mentorService";

import { DateUtil } from "@src/utils/dateUtil";

import { animate, exit, initial } from "@src/assets/pageTransitions";

const availableCourse = [
  "Algorithm Design and Analysis",
  "Data Structure and Algorithm",
  "Web Development",
  "Java Programming",
  "Software Engineering",
  "Machine Learning",
  "Character Building",
  "Entrepreneurship",
  "Food and Nutrition",
  "Food Technology",
  "Marketing Strategy",
  "Market Research",
  "Business Management",
  "Cryptocurrency",
  "Blockchain Technology",
  "Human Resource Management",
];

const MentorApplication = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const [aggree, setAggree] = useState<boolean>(false);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [selectedCourse, setSelectedCourse] = useState<string[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!aggree) {
      return alert("Please agree to the terms and conditions.");
    }

    if (selectedCourse.length === 0) {
      return alert("Please select at least one course.");
    }

    if (!file) {
      return alert("Please attach your CV.");
    }

    console.log(selectedCourse);
    try {
      const response = await MentorService.registerMentor({
        user_id: currentUser?.user_id,
        user_name: currentUser?.username,
        university: currentUser?.university,
        email: currentUser?.email,
        phone_number: currentUser?.phone_number,
        description: currentUser?.description,
        profile_picture: currentUser?.profile_picture,
        bod: currentUser?.bod,
        courses: selectedCourse,
      });

      if (response.mentor_id) {
        alert("Application submitted successfully.");
        return window.location.reload();
      }
    } catch (error) {
      return alert("Failed to submit application. Please try again later.");
    }
  };

  return (
    <>
      <motion.main
        initial={initial}
        animate={animate}
        exit={exit}
        className="min-h-screen w-full py-1 md:w-2/3 lg:w-3/4"
      >
        <div className="p-2 md:p-4">
          <div className="mt-8 w-full pb-8 sm:max-w-xl sm:rounded-lg sm:px-6">
            <div className="mb-10 mt-10">
              <h1 className="open-sans-600 text-3xl">Become A Mentor</h1>
            </div>

            <div className="max-w-md py-1 sm:px-6">
              <h1 className="mb-1 text-lg font-semibold">Your current data</h1>
              <p className="mb-5 text-xs">
                If the data is invalid, please update it first through the
                profile page.
              </p>
              <div className="grid grid-cols-2 gap-y-2">
                <p className="font-medium">ID:</p>
                <p>{currentUser?.user_id}</p>
                <p className="font-medium">Username:</p>
                <p>{currentUser?.username}</p>
                <p className="font-medium">University:</p>
                <p>{currentUser?.university}</p>
                <p className="font-medium">Email:</p>
                <p>{currentUser?.email}</p>
                <p className="font-medium">Phone:</p>
                <p>{currentUser?.phone_number}</p>
                <p className="font-medium">BOD:</p>
                <p>{DateUtil.toBOD(DateUtil.fromISO(currentUser?.bod))}</p>
              </div>
            </div>

            <form className="mx-auto mt-5 max-w-lg" onSubmit={handleSubmit}>
              <div className=" mb-2 py-3 sm:px-4">
                <div className="relative flex h-48 items-center justify-center rounded-lg border-2 border-dashed border-blue-700 bg-gray-100">
                  <div className="absolute">
                    <div className="flex flex-col items-center">
                      <i className="fa fa-folder-open fa-4x text-blue-700"></i>
                      <span className="block font-normal text-gray-400">
                        {file ? file.name : "Attach your CV here"}
                      </span>
                    </div>
                  </div>
                  <input
                    type="file"
                    className="h-full w-full cursor-pointer opacity-0"
                    onChange={(e) => setFile(e.target.files?.[0])}
                  />
                </div>
              </div>
              <div className="py-3 sm:px-4">
                <CheckboxGroup
                  label="Select your course"
                  isRequired
                  value={selectedCourse}
                  onChange={setSelectedCourse}
                >
                  {availableCourse.map((course, index) => (
                    <Checkbox key={index} value={course}>
                      {course}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </div>

              <div className="mb-5 mt-6 border-t" />

              <Checkbox onChange={() => setAggree(!aggree)}>
                I confirm that I have read and agree to the terms and
                conditions.
              </Checkbox>

              <Button
                type="submit"
                className="mt-6 w-full bg-purple-accent-500 text-white"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default MentorApplication;
