import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
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

const ContratdonationpOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-start justify-start mx-auto overflow-auto w-auto sm:w-full md:w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <div className="flex flex-col items-end pl-[263px] md:px-5 w-full">
          <Header className="bg-white-A700 flex gap-2.5 items-center justify-center py-2.5 w-full" />
        </div>
        <div className="flex flex-col items-center pr-[263px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Sidebar11 className="!sticky !w-[263px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    PAMOFOR
                  </Text>
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
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-end justify-center sm:px-5 px-8 py-5 rounded shadow-bs1 w-full">
                      <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start max-w-[1043px] p-2.5 w-full">
                        <Img
                          className="h-[65px] md:h-auto object-cover w-[119px] sm:w-full"
                          src="images/img_logoafor1.png"
                          alt="logoaforOne"
                        />
                        <Text
                          className="text-base text-black-900 text-center w-full"
                          size="txtInterRegular16Black900"
                        >
                          Contrat de donation
                        </Text>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex flex-col gap-2.5 items-start justify-start w-[370px] sm:w-full">
                            <div className="flex flex-col items-start justify-center w-full">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterRegular12Black900"
                              >
                                Région
                              </Text>
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
                            <div className="flex flex-col items-start justify-center w-full">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterRegular12Black900"
                              >
                                Département
                              </Text>
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
                                Sous-Préfecture
                              </Text>
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
                                Village
                              </Text>
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
                            <div className="flex flex-col items-start justify-center w-full">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterRegular12Black900"
                              >
                                N° Contrat
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ContratdonationpOnePage;
