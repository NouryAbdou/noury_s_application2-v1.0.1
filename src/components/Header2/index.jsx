import React from "react";

import { Img, SelectBox, Text } from "components";

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

const Header2 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-6xl w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-[16%] md:w-full">
            <Img
              className="h-[49px] md:h-auto object-cover w-[68%]"
              src="images/img_logocgeds1.png"
              alt="logocgedsOne"
            />
          </div>
          <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-center w-[624px] md:w-full">
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="text-black-900_66 text-sm w-auto"
                size="txtInterBold14Black90066"
              >
                Accueil
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="text-black-900_66 text-sm w-auto"
                size="txtInterBold14Black90066"
              >
                Projets
              </Text>
            </div>
            <SelectBox
              className="font-bold font-inter leading-[normal] text-black-900_66 text-right text-sm w-1/5 md:w-full"
              placeholderClassName="text-black-900_66"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="language"
              options={languageOptionsList}
              isSearchable={false}
              placeholder="Relation client  "
            />
            <SelectBox
              className="font-bold font-inter leading-[normal] text-black-900_66 text-right text-sm w-[19%] md:w-full"
              placeholderClassName="text-black-900_66"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="recrutement"
              options={recrutementOptionsList}
              isSearchable={false}
              placeholder="Recrutement"
            />
            <SelectBox
              className="font-bold font-inter leading-[normal] text-black-900_66 text-right text-sm w-[14%] md:w-full"
              placeholderClassName="text-black-900_66"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="services"
              options={servicesOptionsList}
              isSearchable={false}
              placeholder="Services"
            />
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="text-black-900_66 text-sm w-auto"
                size="txtInterBold14Black90066"
              >
                Contact
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-row items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-start p-2.5 w-auto">
              <Text
                className="text-black-900_66 text-sm w-auto"
                size="txtInterSemiBold14Black90066"
              >
                Se connecter
              </Text>
            </div>
            <Img
              className="h-[30px] w-[30px]"
              src="images/img_profile24outline.svg"
              alt="profile24outlin"
            />
          </div>
        </div>
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
