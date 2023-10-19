import React from "react";

import { Button, Img, SelectBox, Text } from "components";
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

const EnquetePage = () => {
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
                      <div className="bg-white-A700 border border-black-900_7f border-solid flex sm:flex-col flex-row gap-10 items-start justify-start max-w-[980px] p-2.5 w-full">
                        <div className="flex flex-col items-start justify-start py-[5px]">
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterRegular14Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-semibold">
                              Région
                            </span>
                            <span className="text-black-900 font-inter text-left font-normal">
                              : N’Zi
                            </span>
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterRegular14Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-semibold">
                              Département
                            </span>
                            <span className="text-black-900 font-inter text-left font-normal">
                              {" "}
                              : Bocanda
                            </span>
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterRegular14Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-semibold">
                              Sous-Préfecture (CSPGFR)
                            </span>
                            <span className="text-black-900 font-inter text-left font-normal">
                              : Bocanda
                            </span>
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterSemiBold14"
                          >
                            <span className="text-black-900 font-inter text-left font-semibold">
                              Commune
                            </span>
                            <span className="text-black-900 font-inter text-left font-normal">
                              {" "}
                              : Bocanda
                            </span>
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterSemiBold14"
                          >
                            <span className="text-black-900 font-inter text-left font-semibold">
                              Village (CVGFR)
                            </span>
                            <span className="text-black-900 font-inter text-left font-normal">
                              {" "}
                              : Andianou
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start py-[5px]">
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterRegular14Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-semibold">
                              N° Enquête{" "}
                            </span>
                            <span className="text-black-900 font-inter text-left font-normal">
                              : RRDDDSSSVVV
                            </span>
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterRegular14Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-semibold">
                              Date d’enquête
                            </span>
                            <span className="text-black-900 font-inter text-left font-normal">
                              {" "}
                              : 22/09/2022
                            </span>
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterRegular14Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-semibold">
                              Nom du commissaire enquêteur{" "}
                            </span>
                            <span className="text-black-900 font-inter text-left font-normal">
                              : KRA
                            </span>
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterSemiBold14"
                          >
                            <span className="text-black-900 font-inter text-left font-semibold">
                              Prénom du commissaire enquêteur{" "}
                            </span>
                            <span className="text-black-900 font-inter text-left font-normal">
                              : Albert{" "}
                            </span>
                          </Text>
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

export default EnquetePage;
