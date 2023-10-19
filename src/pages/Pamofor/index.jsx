import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import Header from "components/Header";
import PSFCPAMOFORModelePageValidationPagination from "components/PSFCPAMOFORModelePageValidationPagination";
import PamoforEntetelisteenq from "components/PamoforEntetelisteenq";
import PamoforItemlisteenq from "components/PamoforItemlisteenq";
import PamoforItemlisteenq1 from "components/PamoforItemlisteenq1";
import PamoforRowsearch from "components/PamoforRowsearch";
import PamoforStatut from "components/PamoforStatut";

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
const sortbyThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PamoforPage = () => {
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
        <div className="flex flex-col items-center justify-start max-w-7xl mx-auto md:px-5 py-2.5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start sm:px-5 px-6 w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    PAMOFOR
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-end justify-center sm:px-5 px-8 py-5 rounded shadow-bs1 w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start max-w-[978px] w-full">
                      <div className="flex flex-col items-center justify-center p-2.5 w-full">
                        <Button
                          className="common-pointer !text-white-A700 cursor-pointer font-medium rounded-sm text-base text-center w-[370px]"
                          onClick={() => navigate("/addenquete")}
                          color="cyan_900_19"
                          size="xl"
                          variant="fill"
                        >
                          Créer une nouvelle enquête
                        </Button>
                      </div>
                      <PamoforStatut className="gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start w-full" />
                      <PamoforRowsearch className="flex md:flex-col flex-row gap-2 items-start justify-start w-auto md:w-full" />
                      <List
                        className="flex flex-col items-start w-full"
                        orientation="vertical"
                      >
                        <PamoforEntetelisteenq className="bg-white-A700 border-b border-black-900_7f border-solid flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start my-0 px-[15px] py-2 w-full" />
                        <PamoforItemlisteenq className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                        <PamoforItemlisteenq1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                        <PamoforItemlisteenq className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                        <PamoforItemlisteenq1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                        <PamoforItemlisteenq className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                        <PamoforItemlisteenq1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                        <PamoforItemlisteenq className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                        <PamoforItemlisteenq1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                        <PamoforItemlisteenq className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                        <PamoforItemlisteenq1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                      </List>
                      <PSFCPAMOFORModelePageValidationPagination
                        className="flex flex-col gap-[19px] items-center justify-start max-w-[978px] w-full"
                        pagenumber="5"
                      />
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

export default PamoforPage;
