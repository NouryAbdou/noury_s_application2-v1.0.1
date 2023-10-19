import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import CF1OneParties from "components/CF1OneParties";
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

const CF1OnePage = () => {
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
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[865px] items-center justify-end mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[831px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <Sidebar9 className="!sticky !w-[263px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row gap-[-2px] h-[831px] md:h-auto items-start justify-center w-auto">
              <Line className="bg-gray-500 h-[300px] rounded-sm w-1" />
              <Line className="bg-black-900_7f h-[831px] w-px" />
            </div>
          </div>
          <div className="flex flex-1 flex-col h-[796px] md:h-auto items-start justify-start md:px-5 px-[30px] w-full">
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
                  <div className="flex flex-col items-start justify-start px-2.5 w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[569px] sm:w-full">
                      <Text
                        className="text-black-900 text-center text-sm w-auto"
                        size="txtInterMedium14"
                      >
                        <span className="text-black-900 font-inter font-medium">
                          n°
                        </span>
                        <span className="text-black-900 font-inter font-medium">
                          {" "}
                          :{" "}
                        </span>
                        <span className="text-black-900 font-inter font-medium">
                          XXXXX
                        </span>
                        <span className="text-black-900 font-inter font-medium">
                          {" "}
                        </span>
                      </Text>
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtInterRegular12Black900"
                        >
                          Date
                        </Text>
                        <Input
                          name="frame7857"
                          placeholder="jj/mm/aaaa"
                          className="leading-[normal] p-0 placeholder:text-black-900_b2 text-left text-xs w-full"
                          wrapClassName="border border-gray-300 border-solid flex rounded-md w-[370px] sm:w-full"
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
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-[630px] md:h-auto items-center justify-start max-w-[1094px] p-2.5 w-full">
                    <div className="bg-cyan-900 flex flex-col h-[43px] md:h-auto items-center justify-center px-2.5 py-0.5 w-[387px] sm:w-full">
                      <Text
                        className="leading-[20.00px] text-center text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        <>
                          DEMANDE D&#39;ENQUETE EN VUE DE L&#39;ETABLISSEMENT
                          D&#39;UN
                          <br />
                          CERTIFICAT FONIER
                        </>
                      </Text>
                    </div>
                    <CF1OneParties className="flex flex-col items-center justify-start w-[96%] md:w-full" />
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

export default CF1OnePage;
