import React from "react";

import { Button, Img, Line, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar11 from "components/Sidebar11";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const recrutementOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const servicesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContratventepTwoPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex flex-row items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <Sidebar11 className="!sticky !w-[263px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="bg-white-A700 flex flex-1 flex-row gap-[-2px] h-[831px] md:h-auto items-start justify-center md:px-5 w-full">
            <Line className="bg-gray-500 h-[300px] rounded-sm w-1" />
            <Line className="bg-black-900_7f h-[831px] w-px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContratventepTwoPage;
