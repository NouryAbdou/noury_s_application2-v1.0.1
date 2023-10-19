import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, SelectBox, Text } from "components";
import ContratdonationPEightColumnfaitSix from "components/ContratdonationPEightColumnfaitSix";
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
const relationclientFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CF1Page = () => {
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
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[831px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <Sidebar9 className="!sticky !w-[263px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col h-[831px] md:h-auto items-start justify-start md:px-5 px-[30px] w-full">
            <div className="flex flex-col h-full items-start justify-start p-2.5 w-full">
              <div className="flex flex-col h-full items-center justify-start w-full">
                <div className="flex flex-col gap-2.5 h-full items-start justify-start w-full">
                  <div className="flex flex-col h-[35px] md:h-auto items-center justify-start p-2.5 w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtInterSemiBold24"
                    >
                      PAMOFOR
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[665px] md:h-auto items-center justify-start max-w-[1093px] p-2.5 w-full">
                    <div className="flex flex-col relative w-full">
                      <div className="flex flex-col h-[590px] md:h-auto items-center justify-center max-w-[1073px] mx-auto w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start max-w-[1069px] w-full">
                          <div className="flex flex-col gap-[5px] items-center justify-start max-w-[1069px] w-full">
                            <Button
                              className="cursor-pointer text-center text-xs w-[370px]"
                              color="cyan_900"
                              size="sm"
                              variant="fill"
                            >
                              <>
                                Informations sur l&#39;Operateur technique Agrée
                              </>
                            </Button>
                            <div className="flex flex-col gap-[5px] items-start justify-start max-w-[1063px] w-full">
                              <div className="flex flex-col items-start justify-center w-auto">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterRegular12Black900"
                                >
                                  Nom et raison social
                                </Text>
                                <Input
                                  name="frame7857"
                                  placeholder="Text"
                                  className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
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
                                  Adresse
                                </Text>
                                <Input
                                  name="frame7857_One"
                                  placeholder="Text"
                                  className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
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
                                  Email
                                </Text>
                                <Input
                                  name="frame7857_Two"
                                  placeholder="Text"
                                  className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
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
                                  Téléphone
                                </Text>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Input
                                    name="frame7857_Three"
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
                          </div>
                          <div className="flex flex-col gap-3 h-[313px] md:h-auto items-center justify-start max-w-[1069px] w-full">
                            <Button
                              className="cursor-pointer text-center text-xs w-[370px]"
                              color="cyan_900"
                              size="sm"
                              variant="fill"
                            >
                              SIGNATURE DU DEMANDEUR{" "}
                            </Button>
                            <div className="flex flex-col gap-3 items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-center max-w-[1065px] w-full">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterRegular12Black900"
                                >
                                  Date
                                </Text>
                                <Input
                                  name="frame7857_Four"
                                  placeholder="jj/mm/aaaa"
                                  className="leading-[normal] p-0 placeholder:text-black-900_b2 text-left text-xs w-full"
                                  wrapClassName="border border-gray-300 border-solid flex md:h-auto rounded-md w-[355px]"
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
                              <div className="flex flex-col items-start justify-start max-w-[1068px] px-2.5 w-full">
                                <div className="flex md:flex-col flex-row md:gap-10 gap-[101px] h-[195px] md:h-auto items-start justify-start max-w-[1057px] w-full">
                                  <ContratdonationPEightColumnfaitSix className="flex flex-col items-start justify-start w-auto" />
                                  <div className="h-[35px] px-[18px] py-[5px] relative w-[304px]">
                                    <div className="absolute bg-white-A700 border border-gray-300 border-solid h-[35px] inset-y-[0] left-[0] my-auto rounded-md w-[93%]"></div>
                                    <SelectBox
                                      className="absolute inset-y-[0] leading-[normal] max-w-[286px] my-auto right-[0] text-black-900_b2 text-left text-xs"
                                      placeholderClassName="text-black-900_b2"
                                      isSearchable={false}
                                      placeholder="joindre la photocopie de la piece d&#39;identite du demandeur ou du gestionnaire"
                                      isMulti={false}
                                      options={relationclientFourOptionsList}
                                      name="relationclient_Four"
                                    />
                                  </div>
                                  <Button
                                    className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[197px] rounded-md"
                                    leftIcon={
                                      <Img
                                        className="h-5 mr-0.5"
                                        src="images/img_download.svg"
                                        alt="download"
                                      />
                                    }
                                    color="white_A700"
                                    size="md"
                                    variant="fill"
                                  >
                                    <div className="!text-black-900_b2 leading-[normal] text-left text-xs">
                                      Télécharger pièce jointe
                                    </div>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-[97px] md:h-auto items-center justify-center mt-[-32px] mx-auto p-2.5 w-full z-[1]">
                        <div className="flex flex-col h-[84px] md:h-auto items-center justify-start max-w-[1067px] px-2.5 w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-center md:px-10 sm:px-5 px-[294px] py-0.5 w-full">
                            <Text
                              className="bg-cyan-900 h-10 justify-center sm:pl-5 pl-[35px] py-3 rounded-[10px] text-center text-white-A700 text-xs w-[104px]"
                              size="txtInterMedium12"
                            >
                              Précédent
                            </Text>
                            <Text
                              className="bg-cyan-900 h-10 justify-center sm:pl-5 pl-[35px] py-3 rounded-[10px] text-center text-white-A700 text-xs w-[114px]"
                              size="txtInterMedium12"
                            >
                              Enregistrer
                            </Text>
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

export default CF1Page;
