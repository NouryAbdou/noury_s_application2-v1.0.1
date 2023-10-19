import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
import Header from "components/Header";

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
const choisirOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const choisirOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const choisirOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const choisirOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const choisirOptionsList4 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddEnquetePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter gap-2.5 h-[900px] items-center justify-start mx-auto w-auto sm:w-full md:w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <Text
            className="bg-teal-900 h-[60px] justify-center max-w-[985px] md:max-w-full pb-3 pl-[30px] pr-[35px] pt-4 sm:px-5 rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-full"
            size="txtInterSemiBold25"
          >
            Projets
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start max-w-7xl mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col h-[693px] md:h-auto items-start justify-center p-2.5 w-full">
            <div className="flex flex-col h-[673px] md:h-auto items-center justify-start max-w-[978px] w-full">
              <div className="flex flex-col gap-2.5 h-[603px] md:h-auto items-start justify-start w-full">
                <div className="flex flex-col items-start justify-center w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    PAMOFOR
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-2.5 w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtInterSemiBold16"
                  >
                    Nouvelle enquête
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 items-start justify-start p-2.5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-center p-2.5 w-full">
                    <div className="flex sm:flex-1 flex-col gap-2.5 h-[315px] md:h-auto items-start justify-start w-[370px] sm:w-full">
                      <div className="flex flex-col items-start justify-center w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtInterRegular12Black900"
                        >
                          Région
                        </Text>
                        <SelectBox
                          className="!text-black-900_b2 border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                          placeholderClassName="!text-black-900_b2"
                          indicator={
                            <Img
                              className="h-5 w-6"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame7857"
                          options={choisirOptionsList}
                          isSearchable={false}
                          placeholder="-Choisir-"
                          shape="round"
                          color="white_A700"
                          size="lg"
                          variant="fill"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtInterRegular12Black900"
                        >
                          Département
                        </Text>
                        <SelectBox
                          className="!text-black-900_b2 border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                          placeholderClassName="!text-black-900_b2"
                          indicator={
                            <Img
                              className="h-5 w-6"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame7857_One"
                          options={choisirOptionsList1}
                          isSearchable={false}
                          placeholder="-Choisir-"
                          shape="round"
                          color="white_A700"
                          size="lg"
                          variant="fill"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtInterRegular12Black900"
                        >
                          Sous-Préfecture (CSPGFR)
                        </Text>
                        <SelectBox
                          className="!text-black-900_b2 border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                          placeholderClassName="!text-black-900_b2"
                          indicator={
                            <Img
                              className="h-5 w-6"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame7857_Two"
                          options={choisirOptionsList2}
                          isSearchable={false}
                          placeholder="-Choisir-"
                          shape="round"
                          color="white_A700"
                          size="lg"
                          variant="fill"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtInterRegular12Black900"
                        >
                          Commune
                        </Text>
                        <SelectBox
                          className="!text-black-900_b2 border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                          placeholderClassName="!text-black-900_b2"
                          indicator={
                            <Img
                              className="h-5 w-6"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame7857_Three"
                          options={choisirOptionsList3}
                          isSearchable={false}
                          placeholder="-Choisir-"
                          shape="round"
                          color="white_A700"
                          size="lg"
                          variant="fill"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtInterRegular12Black900"
                        >
                          Village (CVGFR)
                        </Text>
                        <SelectBox
                          className="!text-black-900_b2 border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                          placeholderClassName="!text-black-900_b2"
                          indicator={
                            <Img
                              className="h-5 w-6"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame7857_Four"
                          options={choisirOptionsList4}
                          isSearchable={false}
                          placeholder="-Choisir-"
                          shape="round"
                          color="white_A700"
                          size="lg"
                          variant="fill"
                        />
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-2.5 h-[315px] md:h-auto items-start justify-start w-[370px] sm:w-full">
                      <div className="flex flex-col items-start justify-center w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtInterRegular12Black900"
                        >
                          Nom du commissaire enquêteur
                        </Text>
                        <Input
                          name="frame7857_Five"
                          placeholder="Text"
                          className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                          wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                          shape="round"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-center w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtInterRegular12Black900"
                        >
                          Prénom du commissaire enquêteur
                        </Text>
                        <Input
                          name="frame7857_Six"
                          placeholder="Text"
                          className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                          wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                          shape="round"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-center p-2.5 w-full">
                    <Button
                      className="common-pointer cursor-pointer font-medium h-10 text-center text-xs w-[104px]"
                      onClick={() => navigate("/pamofor")}
                      shape="round"
                      color="cyan_900"
                      size="lg"
                      variant="fill"
                    >
                      Annuler
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-medium h-10 text-center text-xs w-[114px]"
                      onClick={() => navigate("/enquete")}
                      shape="round"
                      color="cyan_900"
                      size="lg"
                      variant="fill"
                    >
                      Créer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEnquetePage;
