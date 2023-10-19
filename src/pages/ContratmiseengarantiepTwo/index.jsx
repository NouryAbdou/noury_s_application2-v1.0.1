import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SelectBox, Text } from "components";
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

const ContratmiseengarantiepTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[831px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <Sidebar11 className="!sticky !w-[263px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="bg-white-A700 flex flex-1 flex-row gap-[-2px] h-[831px] md:h-auto items-start justify-center md:px-5 w-full">
            <Line className="bg-gray-500 h-[300px] rounded-sm w-1" />
            <Line className="bg-black-900_7f h-[831px] w-px" />
          </div>
          <div className="flex flex-1 flex-col items-start justify-center pl-2.5 md:pl-5 pr-5 pt-5 w-full">
            <div className="flex flex-col h-[761px] md:h-auto items-center justify-start w-full">
              <div className="flex flex-col gap-2.5 h-full items-start justify-start w-full">
                <div className="flex flex-col h-[35px] md:h-auto items-center justify-start p-2.5 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    PAMOFOR
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start px-2.5 w-full">
                  <div className="flex flex-col items-start justify-start w-[569px] sm:w-full">
                    <Text
                      className="text-black-900 text-center text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      <span className="text-black-900 font-inter font-medium">
                        Enquête :{" "}
                      </span>
                      <span className="text-black-900 font-inter font-bold">
                        RRDDDSSSVVV
                      </span>
                      <span className="text-black-900 font-inter font-medium">
                        {" "}
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start p-2.5 w-full">
                  <Img
                    className="h-[65px] md:h-auto object-cover w-[119px] sm:w-full"
                    src="images/img_logoafor1.png"
                    alt="logoaforOne"
                  />
                  <Text
                    className="text-base text-center text-gray-900 w-[157px]"
                    size="txtInterMedium16"
                  >
                    CONTRAT DE TERRE
                  </Text>
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <List
                        className="flex flex-col gap-2.5 items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-xs w-auto"
                            size="txtInterRegular12Black900"
                          >
                            Région
                          </Text>
                          <div className="flex flex-col items-center justify-start w-full">
                            <SelectBox
                              className="border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                              placeholderClassName="text-black-900"
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
                        </div>
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-xs w-auto"
                            size="txtInterRegular12Black900"
                          >
                            Département
                          </Text>
                          <div className="flex flex-col items-center justify-start w-full">
                            <SelectBox
                              className="border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                              placeholderClassName="text-black-900"
                              indicator={
                                <Img
                                  className="h-5 w-6"
                                  src="images/img_arrowdown_gray_900.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="frame7857"
                              options={choisirOptionsList1}
                              isSearchable={false}
                              placeholder="-Choisir-"
                              shape="round"
                              color="white_A700"
                              size="lg"
                              variant="fill"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-xs w-auto"
                            size="txtInterRegular12Black900"
                          >
                            Sous-Préfecture
                          </Text>
                          <div className="flex flex-col items-center justify-start w-full">
                            <SelectBox
                              className="border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                              placeholderClassName="text-black-900"
                              indicator={
                                <Img
                                  className="h-5 w-6"
                                  src="images/img_arrowdown_gray_900.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="frame7857"
                              options={choisirOptionsList2}
                              isSearchable={false}
                              placeholder="-Choisir-"
                              shape="round"
                              color="white_A700"
                              size="lg"
                              variant="fill"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-xs w-auto"
                            size="txtInterRegular12Black900"
                          >
                            Commune
                          </Text>
                          <div className="flex flex-col items-center justify-start w-full">
                            <SelectBox
                              className="border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                              placeholderClassName="text-black-900"
                              indicator={
                                <Img
                                  className="h-5 w-6"
                                  src="images/img_arrowdown_gray_900.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="frame7857"
                              options={choisirOptionsList3}
                              isSearchable={false}
                              placeholder="-Choisir-"
                              shape="round"
                              color="white_A700"
                              size="lg"
                              variant="fill"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-xs w-auto"
                            size="txtInterRegular12Black900"
                          >
                            Village
                          </Text>
                          <div className="flex flex-col items-center justify-start w-full">
                            <SelectBox
                              className="border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                              placeholderClassName="text-black-900"
                              indicator={
                                <Img
                                  className="h-5 w-6"
                                  src="images/img_arrowdown_gray_900.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="frame7857"
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
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-xs w-auto"
                            size="txtInterRegular12Black900"
                          >
                            N° Contrat
                          </Text>
                          <Img
                            className="h-[35px] w-[370px]"
                            src="images/img_group7608.svg"
                            alt="group7608"
                          />
                        </div>
                      </List>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-center p-2.5 w-full">
                      <Button
                        className="common-pointer cursor-pointer font-medium h-10 text-center text-xs w-[104px]"
                        onClick={() => navigate("/contrats")}
                        shape="round"
                        color="cyan_900"
                        size="lg"
                        variant="fill"
                      >
                        Annuler
                      </Button>
                      <Button
                        className="common-pointer cursor-pointer font-medium h-10 text-center text-xs w-[114px]"
                        onClick={() => navigate("/contratdonationptwo")}
                        shape="round"
                        color="cyan_900"
                        size="lg"
                        variant="fill"
                      >
                        Suivant
                      </Button>
                    </div>
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

export default ContratmiseengarantiepTwoPage;
