import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import ColumnTitle from "./ColumnTitle";
import Task from "./Task";

const CardsPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[15px] items-center justify-start mx-auto py-[9px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-between max-w-[1859px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
              size="txtPoppinsMedium26"
            >
              My kanban
            </Text>
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
              size="txtPoppinsMedium26"
            >
              User
            </Text>
          </div>
          <Img
            className="h-px mt-[9px]"
            src="images/img_line.svg"
            alt="line_Two"
          />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1864px] mt-[30px] mx-auto md:px-5 w-full">
            <div className="h-10 md:ml-[0] ml-[1206px] relative w-[8%] md:w-full">
              <Text
                className="absolute bg-gray-100 flex h-full inset-y-[0] items-center justify-center my-auto right-[0] rounded-[10px] text-center text-black-900 text-xs w-[120px]"
                size="txtPoppinsRegular12"
              >
                + Crear tarea
              </Text>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-5 sm:gap-3 px-5 w-full">
          <div className="w-full">
            <ColumnTitle bgColor="bg-deep_orange-200" title="Pendiente" />
            <Task />
          </div>
          <div className="w-full">
            <ColumnTitle bgColor="bg-light_blue-500" title="En proceso" />
          </div>
          <div className="w-full">
            <ColumnTitle bgColor="bg-teal-A400" title="Finalizado" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsPagePage;
