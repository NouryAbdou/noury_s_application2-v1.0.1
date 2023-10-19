import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, CheckBox, Img, Line, List, SelectBox, Text } from "components";
import Header2 from "components/Header2";
import Sidebar9 from "components/Sidebar9";

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
const choisirOptionsList5 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const choisirOptionsList6 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const choisirOptionsList7 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const choisirOptionsList8 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const choisirOptionsList9 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const choisirOptionsList10 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const choisirOptionsList11 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CF1TwoPage = () => {
  const sideBarMenu = [
    {
      label:
        "CLARIFICATION DES RÈGLES DE DROIT ET DES PROCÉDURES DE SÉCURISATION FONCIÈRE",
    },
    { label: "SENSIBILISATION ET INFORMATION" },
    {
      label: "CONSOLIDATION DES DISPOSITIFS DE GESTION FONCIÈRE LOCALE (CDGFL)",
    },
    { label: "DÉLIMITATION DES TERRITOIRES DE VILLAGES (DTV)" },
    { label: "CERTIFICATION FONCIERE (CF)" },
    { label: "CONSOLIDATION DES DROITS CONCEDES (CDC)" },
    { label: "PROMOTION DE LA CONTRACTUALISATION" },
    { label: "CLOTURE DES OPERATIONS INTEGREES" },
  ];

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter gap-[25px] h-[1097px] items-start justify-end mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <div className="flex flex-col items-center w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 h-[908px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
            <Sidebar9 className="!sticky !w-[263px] bg-cyan-900_19 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-sm top-[0]" />
            <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
              <div className="bg-white-A700 flex flex-col h-[819px] md:h-auto items-start justify-center w-full">
                <Line className="bg-gray-500 h-[300px] rounded-[1px] w-[3px]" />
              </div>
            </div>
            <div className="flex flex-1 flex-col h-full items-start justify-start md:px-5 px-[30px] w-full">
              <div className="flex flex-col items-start justify-start p-2.5 w-full">
                <div className="flex flex-col h-[898px] md:h-auto items-center justify-start w-full">
                  <div className="flex flex-col gap-2.5 h-full items-start justify-start w-full">
                    <div className="flex flex-col h-[35px] md:h-auto items-center justify-start p-2.5 w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtInterSemiBold24"
                      >
                        PAMOFOR
                      </Text>
                    </div>
                    <div className="md:h-[600px] h-[752px] p-2.5 relative w-[1093px] md:w-full">
                      <div className="absolute bg-white-A700 flex flex-col md:h-auto h-max inset-[0] items-center justify-start m-auto max-w-[1093px] p-2.5 w-full">
                        <div className="flex flex-col items-center justify-start w-[35%] md:w-full">
                          <Button
                            className="cursor-pointer text-center text-xs w-[370px]"
                            color="cyan_900"
                            size="sm"
                            variant="fill"
                          >
                            Désignation du bien foncier coutumier
                          </Button>
                        </div>
                      </div>
                      <div className="absolute bottom-[1%] flex flex-col inset-x-[0] items-center justify-end mx-auto w-full">
                        <div className="flex flex-col h-[738px] md:h-auto items-center justify-start max-w-[1087px] w-full">
                          <div className="flex flex-col gap-[27px] h-[738px] md:h-auto items-start justify-start max-w-[1087px] w-full">
                            <List
                              className="flex flex-col gap-[27px] w-[35%]"
                              orientation="vertical"
                            >
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
                            </List>
                            <CheckBox
                              className="text-[13px] text-black-900 text-left"
                              inputClassName="mr-[5px]"
                              name="gardermasession"
                              id="gardermasession"
                              label="Indications complémentaires éventuelles sur la localisation "
                              shape="square"
                              size="md"
                            ></CheckBox>
                            <div className="flex flex-col items-center justify-start max-w-[654px] w-full">
                              <div className="flex flex-row gap-2.5 items-center justify-start max-w-[654px] w-full">
                                <Text
                                  className="text-[13px] text-black-900 w-auto"
                                  size="txtInterRegular13Black900"
                                >
                                  Superficie estimée{" "}
                                </Text>
                                <div className="bg-white-A700 border border-gray-300 border-solid h-[31px] rounded-md w-[35%]"></div>
                              </div>
                            </div>
                            <List
                              className="flex flex-col gap-[27px] w-[35%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-col items-start justify-center w-auto">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterRegular12Black900"
                                >
                                  Nord
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
                                  Sud
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
                            </List>
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterRegular12Black900"
                              >
                                Est
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
                                  name="frame7857_One"
                                  options={choisirOptionsList5}
                                  isSearchable={false}
                                  placeholder="-Choisir-"
                                  shape="round"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center w-auto">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterRegular12Black900"
                                >
                                  Ouest
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
                                    name="frame7857_Two"
                                    options={choisirOptionsList6}
                                    isSearchable={false}
                                    placeholder="-Choisir-"
                                    shape="round"
                                    color="white_A700"
                                    size="lg"
                                    variant="fill"
                                  />
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
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[679px] items-end md:px-10 sm:px-5 px-[261px] w-full">
          <div className="flex flex-col h-[87px] md:h-auto items-center justify-center max-w-[825px] px-2.5 w-full">
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-0.5 w-full">
              <Button
                className="cursor-pointer font-medium h-10 mb-[3px] md:ml-[0] ml-[291px] text-center text-xs w-[104px]"
                shape="round"
                color="cyan_900"
                size="lg"
                variant="fill"
              >
                Précédent
              </Button>
              <Button
                className="cursor-pointer font-medium h-10 mb-[3px] mr-[281px] text-center text-xs w-[114px]"
                shape="round"
                color="cyan_900"
                size="lg"
                variant="fill"
              >
                Suivant
              </Button>
            </div>
            <Button
              className="cursor-pointer font-medium h-10 text-center text-xs w-[114px]"
              shape="round"
              color="cyan_900"
              size="lg"
              variant="fill"
            >
              Sortir
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start mr-[140px] w-auto">
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
                    options={choisirOptionsList7}
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
                    options={choisirOptionsList8}
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
                    options={choisirOptionsList9}
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
                    options={choisirOptionsList10}
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
                    options={choisirOptionsList11}
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
        </div>
      </div>
    </>
  );
};

export default CF1TwoPage;
