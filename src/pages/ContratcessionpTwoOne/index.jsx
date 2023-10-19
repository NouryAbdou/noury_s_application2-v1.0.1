import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import ContratdonationPThreeColumnentresoussigns from "components/ContratdonationPThreeColumnentresoussigns";
import Header from "components/Header";
import Sidebar8 from "components/Sidebar8";

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

const ContratcessionpTwoOnePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[831px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <Sidebar8 className="!sticky !w-[267px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col h-full items-start justify-start md:px-5 px-[30px] w-full">
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
                    <Button
                      className="cursor-pointer font-medium text-center text-xs w-[370px]"
                      shape="square"
                      color="cyan_900"
                      size="sm"
                      variant="fill"
                    >
                      TITRE DES PARTIES DU CONTRAT
                    </Button>
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <ContratdonationPThreeColumnentresoussigns
                        className="flex flex-col items-center justify-start pt-[3px] w-full"
                        ciaprsdnomm="Ci-après dénommé « le planteur »."
                      />
                      <div className="flex flex-col items-start justify-center w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtInterRegular12Black900"
                        >
                          Né(e) le
                        </Text>
                        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[35px] md:h-auto items-start justify-center px-[18px] py-[5px] rounded-md w-full">
                          <div className="flex flex-row gap-0.5 h-[23px] md:h-auto items-center justify-start w-full">
                            <Text
                              className="text-black-900_b2 text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              jj/mm/aaaa
                            </Text>
                            <Img
                              className="h-5 w-5"
                              src="images/img_calendar.svg"
                              alt="calendar_One"
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
    </>
  );
};

export default ContratcessionpTwoOnePage;
