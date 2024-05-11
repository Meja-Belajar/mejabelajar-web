import React, { useEffect } from "react";
import image from "@src/assets/images/aaron-burden-LNwn_A9RGHo-unsplash.jpg";
import ss from "@src/assets/images/mkmui_the_teacher_stands_in_front_of_the_classroom_pointing_at__5af4cbd1-2169-49ba-9e76-127695c1f9a5.png";
import "@src/assets/global.css";

const Carousel = () => {
  useEffect(() => {}, []);

  return (
    <div className="relative">
      <div className="mt-3 w-full">
        <div className="open-sans-600 ml-3 w-full p-3 text-2xl">
          <h1 className="open-sans-600 ml-3">Our Gallery</h1>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="no-scrollbar mt-3 flex w-[98vw] flex-row items-center overflow-hidden overflow-x-auto rounded-lg">
            <div className="relative flex animate-carousel flex-row">
              <div className="flex max-h-[70vh] w-[98vw] items-center object-cover sm:object-none">
                <img src={ss} alt="img" className="h-full w-full sm:h-auto" />
              </div>
              <div className="flex max-h-[70vh] w-[98vw] items-center object-cover sm:object-none">
                <img src={ss} alt="img" className="h-full w-full sm:h-auto" />
              </div>
              <div className="flex max-h-[70vh] w-[98vw] items-center object-cover sm:object-none">
                <img src={ss} alt="img" className="h-full w-full sm:h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
