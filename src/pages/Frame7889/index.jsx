import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, SelectBox, Text } from "components";

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

const Frame7889Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto p-2.5 w-auto sm:w-full md:w-full">
        <div className="flex flex-col h-full items-center justify-start max-w-[1039px] mx-auto md:px-5 w-full">
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
              <div className="flex flex-col gap-2.5 items-center justify-start w-[13%] md:w-full">
                <Img
                  className="h-[65px] md:h-auto object-cover w-[119px] sm:w-full"
                  src="images/img_logoafor1.png"
                  alt="logoaforOne"
                />
                <Text
                  className="text-base text-black-900 text-center w-32"
                  size="txtInterRegular16Black900"
                >
                  Contrat de vente
                </Text>
              </div>
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
    </>
  );
};

export default Frame7889Page;
