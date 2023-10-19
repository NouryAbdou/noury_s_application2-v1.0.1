import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import PSFCPAMOFORModelePageValidationContratsAttenteRowsearch from "components/PSFCPAMOFORModelePageValidationContratsAttenteRowsearch";
import PSFCPAMOFORModelePageValidationContratsAttenteRowtous from "components/PSFCPAMOFORModelePageValidationContratsAttenteRowtous";
import PSFCPAMOFORModelePageValidationItemlistecontr from "components/PSFCPAMOFORModelePageValidationItemlistecontr";
import PSFCPAMOFORModelePageValidationItemlistecontr1 from "components/PSFCPAMOFORModelePageValidationItemlistecontr1";
import PSFCPAMOFORModelePageValidationPagination from "components/PSFCPAMOFORModelePageValidationPagination";
import PSFCPAMOFORModelePageValidationRowidenqvillage from "components/PSFCPAMOFORModelePageValidationRowidenqvillage";
import Sidebar1 from "components/Sidebar1";

const sortbyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortbyOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortbyTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PSFCPAMOFORmodelepagevalidationcontratsattentePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 h-[900px] md:h-auto items-start justify-start max-w-[1440px] w-full">
          <Sidebar1 className="!sticky !w-[285px] bg-white-A700_ab flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
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
                  <PSFCPAMOFORModelePageValidationContratsAttenteRowtous className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-auto md:w-full" />
                  <PSFCPAMOFORModelePageValidationContratsAttenteRowsearch className="flex md:flex-col flex-row gap-2 items-start justify-start w-full" />
                  <List
                    className="flex flex-col items-start w-full"
                    orientation="vertical"
                  >
                    <PSFCPAMOFORModelePageValidationRowidenqvillage className="bg-white-A700 border-b border-black-900_7f border-solid flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                    <PSFCPAMOFORModelePageValidationItemlistecontr
                      className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                      userimage="images/img_frame7946.svg"
                    />
                    <PSFCPAMOFORModelePageValidationItemlistecontr1
                      className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                      userimage="images/img_frame7946.svg"
                    />
                    <PSFCPAMOFORModelePageValidationItemlistecontr
                      className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                      userimage="images/img_frame7946.svg"
                    />
                    <PSFCPAMOFORModelePageValidationItemlistecontr1
                      className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                      userimage="images/img_frame7946.svg"
                    />
                    <PSFCPAMOFORModelePageValidationItemlistecontr
                      className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                      userimage="images/img_frame7946.svg"
                    />
                    <PSFCPAMOFORModelePageValidationItemlistecontr1
                      className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                      userimage="images/img_frame7946.svg"
                    />
                    <PSFCPAMOFORModelePageValidationItemlistecontr
                      className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                      userimage="images/img_frame7946.svg"
                    />
                    <PSFCPAMOFORModelePageValidationItemlistecontr1
                      className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                      userimage="images/img_frame7946.svg"
                    />
                    <PSFCPAMOFORModelePageValidationItemlistecontr
                      className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                      userimage="images/img_frame7946.svg"
                    />
                    <PSFCPAMOFORModelePageValidationItemlistecontr1
                      className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                      userimage="images/img_frame7946.svg"
                    />
                  </List>
                </div>
                <PSFCPAMOFORModelePageValidationPagination
                  className="flex flex-col gap-[19px] items-center justify-start"
                  pagenumber="5"
                  numberdata="65 sur 899"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PSFCPAMOFORmodelepagevalidationcontratsattentePage;
