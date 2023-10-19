import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import PSFCPAMOFORModelePageValidationBtnvalidations from "components/PSFCPAMOFORModelePageValidationBtnvalidations";
import PSFCPAMOFORModelePageValidationFiltreenq from "components/PSFCPAMOFORModelePageValidationFiltreenq";
import PSFCPAMOFORModelePageValidationItemlistecontr from "components/PSFCPAMOFORModelePageValidationItemlistecontr";
import PSFCPAMOFORModelePageValidationItemlistecontr1 from "components/PSFCPAMOFORModelePageValidationItemlistecontr1";
import PSFCPAMOFORModelePageValidationPagination from "components/PSFCPAMOFORModelePageValidationPagination";
import PSFCPAMOFORModelePageValidationRowidenqvillage from "components/PSFCPAMOFORModelePageValidationRowidenqvillage";
import PSFCPAMOFORModelePageValidationStatutsenq from "components/PSFCPAMOFORModelePageValidationStatutsenq";

import { CloseSVG } from "../../assets/images";

const sortbydepOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortbydepOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortbydepTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PSFCPAMOFORmodelepagevalidationPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 h-[900px] md:h-auto items-start justify-start max-w-[1440px] w-full">
          <Sidebar className="!sticky !w-[273px] bg-white-A700_ab flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <Img
              className="h-full mb-[860px] mt-5 mx-auto w-[253px]"
              src="images/img_frame7948.svg"
              alt="frame7948"
            />
            <div className="flex flex-col gap-2.5 items-start justify-start mb-[733px] ml-2.5 mt-10 p-2.5 w-auto">
              <PSFCPAMOFORModelePageValidationBtnvalidations
                className="bg-white-A700_7f flex flex-row gap-2 items-center justify-start px-2.5 py-[5px] rounded-sm w-[245px]"
                frame7960="899"
              />
              <PSFCPAMOFORModelePageValidationBtnvalidations
                className="bg-white-A700_7f flex flex-row gap-2 items-center justify-start px-2.5 py-[5px] rounded-sm w-[245px]"
                validationstatus="Validés"
                frame7960="267"
              />
              <PSFCPAMOFORModelePageValidationBtnvalidations
                className="bg-white-A700_7f flex flex-col gap-2 items-center justify-start px-2.5 py-[5px] rounded-sm w-[245px]"
                validationstatus="Se déconnecter"
              />
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col items-start justify-start pl-2.5 md:pl-5 pr-5 w-full">
            <div className="flex flex-col h-[693px] md:h-auto items-start justify-start max-w-[1120px] p-2.5 w-full">
              <div className="flex flex-col gap-2.5 h-[673px] md:h-auto items-center justify-start max-w-[978px] py-[30px] w-full">
                <div className="flex flex-col gap-2.5 h-[614px] md:h-auto items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-center px-2.5 w-full">
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
                        Validation des documents
                      </Text>
                    </div>
                  </div>
                  <PSFCPAMOFORModelePageValidationStatutsenq className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full" />
                  <PSFCPAMOFORModelePageValidationFiltreenq className="flex flex-col gap-2.5 items-center justify-start w-full" />
                  <List
                    className="flex flex-col items-start w-full"
                    orientation="vertical"
                  >
                    <PSFCPAMOFORModelePageValidationRowidenqvillage className="bg-white-A700 border-b border-black-900_7f border-solid flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                    <PSFCPAMOFORModelePageValidationItemlistecontr className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                    <PSFCPAMOFORModelePageValidationItemlistecontr1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                    <PSFCPAMOFORModelePageValidationItemlistecontr className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                    <PSFCPAMOFORModelePageValidationItemlistecontr1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                    <PSFCPAMOFORModelePageValidationItemlistecontr className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                    <PSFCPAMOFORModelePageValidationItemlistecontr1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                    <PSFCPAMOFORModelePageValidationItemlistecontr className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                    <PSFCPAMOFORModelePageValidationItemlistecontr1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                    <PSFCPAMOFORModelePageValidationItemlistecontr className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                    <PSFCPAMOFORModelePageValidationItemlistecontr1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                  </List>
                </div>
                <PSFCPAMOFORModelePageValidationPagination
                  className="flex flex-col gap-[19px] items-center justify-start"
                  pagenumber="5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PSFCPAMOFORmodelepagevalidationPage;
