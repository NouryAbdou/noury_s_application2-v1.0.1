import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";

const personnePhysiqueOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const cinOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CF1OneParties = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start py-[3px] w-full">
          <Text
            className="text-black-900 text-center text-xs"
            size="txtInterRegular12Black900"
          >
            {props?.titletext}
          </Text>
          <div className="flex flex-col items-start justify-center mt-1.5 w-auto">
            <div className="flex flex-col items-center justify-start w-full">
              <SelectBox
                className="border border-gray-300 border-solid font-inter h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                placeholderClassName="text-black-900"
                indicator={
                  <Img
                    className="h-5 w-6"
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="frame7857_One"
                options={personnePhysiqueOptionsList}
                isSearchable={false}
                placeholder="Personne physique"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-center mt-[5px] w-auto md:w-full">
            <div className="flex flex-col gap-[5px] items-start justify-start w-[370px] sm:w-full">
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12Black900"
                >
                  {props?.nometprnoms}
                </Text>
                <Input
                  name="frame7857_Two"
                  placeholder="Text"
                  className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12Black900"
                >
                  {props?.languageOne}
                </Text>
                <Input
                  name="frame7857_Three"
                  placeholder="Text"
                  className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12Black900"
                >
                  {props?.nometprnomsOne}
                </Text>
                <Input
                  name="frame7857_Four"
                  placeholder="Text"
                  className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12Black900"
                >
                  {props?.rgionOne}
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <SelectBox
                    className="!text-black-900_b2 border border-gray-300 border-solid font-inter h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                    placeholderClassName="!text-black-900_b2"
                    indicator={
                      <Img
                        className="h-5 w-6"
                        src="images/img_arrowdown_gray_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame7857_Five"
                    options={cinOptionsList}
                    isSearchable={false}
                    placeholder="CIN"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] items-start justify-start w-[370px] sm:w-full">
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12Black900"
                >
                  {props?.rgionTwo}
                </Text>
                <Input
                  name="frame7857_Six"
                  placeholder="Text"
                  className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12Black900"
                >
                  {props?.rgionThree}
                </Text>
                <Input
                  name="frame7857_Seven"
                  placeholder="jj/mm/aaaa"
                  className="font-inter leading-[normal] p-0 placeholder:text-black-900_b2 text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid flex md:h-auto rounded-md w-[370px] sm:w-full"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] my-auto"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12Black900"
                >
                  {props?.rgionFour}
                </Text>
                <Input
                  name="frame7857_Eight"
                  placeholder="Text"
                  className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12Black900"
                >
                  {props?.rgionFive}
                </Text>
                <Input
                  name="frame7857_Nine"
                  placeholder="Text"
                  className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
          <Text
            className="mt-2 text-black-900 text-xs"
            size="txtInterSemiBold12"
          >
            {props?.ciaprsdnomm}
          </Text>
          <div className="flex flex-col h-[108px] md:h-auto items-start justify-center max-w-[1025px] mb-[94px] mt-1.5 p-2.5 w-full">
            <div className="flex flex-col h-[88px] md:h-auto items-center justify-start max-w-[825px] px-2.5 w-full">
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-0.5 w-full">
                <Button
                  className="cursor-pointer font-inter font-medium h-10 mb-[3px] md:ml-[0] ml-[291px] text-center text-xs w-[104px]"
                  shape="round"
                  color="cyan_900"
                  size="lg"
                  variant="fill"
                >
                  {props?.previousbutton}
                </Button>
                <Button
                  className="cursor-pointer font-inter font-medium h-10 mb-[3px] mr-[281px] text-center text-xs w-[114px]"
                  shape="round"
                  color="cyan_900"
                  size="lg"
                  variant="fill"
                >
                  {props?.nextbutton}
                </Button>
              </div>
              <Button
                className="cursor-pointer font-inter font-medium h-10 text-center text-xs w-[114px]"
                shape="round"
                color="cyan_900"
                size="lg"
                variant="fill"
              >
                {props?.exitbutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CF1OneParties.defaultProps = {
  titletext: "Entre les soussignés",
  nometprnoms: "Nom et prénom(s)",
  languageOne: "Nom et prénom(s) du  père",
  nometprnomsOne: "Nom et prénom(s) de la mère",
  rgionOne: "Nature pièce d’identité",
  rgionTwo: "N° pièce d’identité",
  rgionThree: "Né(e) le",
  rgionFour: "Adresse",
  rgionFive: "Téléphone",
  ciaprsdnomm: "Ci-après dénommé « le preneur » et,",
  previousbutton: "Précédent",
  nextbutton: "Suivant",
  exitbutton: "Sortir",
};

export default CF1OneParties;
