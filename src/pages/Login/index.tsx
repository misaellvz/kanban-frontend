import React from "react";

import { Img, Text } from "components";
import Form from "./Form";

const CoverPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 font-poppins h-[100vh] mx-auto pb-[3px] pl-[3px] relative w-full">
        <div className="absolute h-full inset-y-[0] my-auto md:px-5 right-[0] w-full">
          <div className="absolute flex flex-col items-center justify-start left-[0] w-[50%] h-full">
            <div className="flex justify-center items-center h-full">
              <div className="flex flex-col items-start justify-start w-full px-5">
                <Text
                  className="md:text-5xl text-[78px] text-black-900_ab uppercase"
                  size="txtPoppinsExtraBold150"
                >
                  My Kanban
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 tracking-[-0.20px]"
                  size="txtPoppinsRegular40"
                >
                  Kanban example project
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[957px] inset-y-[0] my-auto object-cover right-[0] w-[76%]"
            src="images/img_cover1.png"
            alt="coverOne"
          />
          <div className="absolute h-full w-[50%] right-0 bg-[rgba(255,255,255,0.8)]">
            <div className="flex justify-center items-center h-full">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPage;
