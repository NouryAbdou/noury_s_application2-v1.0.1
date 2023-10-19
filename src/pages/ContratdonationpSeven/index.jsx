import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import ContratdonationPSevenColumnframe7959 from "components/ContratdonationPSevenColumnframe7959";
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

const ContratdonationpSevenPage = () => {
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
                      <div className="bg-white-A700 flex flex-col h-[629px] md:h-auto items-center justify-start max-w-[1087px] p-2.5 w-full">
                        <div className="flex flex-col gap-[5px] h-full items-center justify-start w-full">
                          <div className="flex flex-col h-[423px] md:h-auto items-start justify-center max-w-[790px] w-full">
                            <div className="flex flex-col gap-[15px] h-full items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start max-w-[790px] p-2.5 w-full">
                                  <Button
                                    className="cursor-pointer text-center text-xs w-[370px]"
                                    color="cyan_900"
                                    size="sm"
                                    variant="fill"
                                  >
                                    8. NOMBRE D’EXEMPLAIRES
                                  </Button>
                                  <div className="flex flex-col items-start justify-center w-full">
                                    <Text
                                      className="bg-white-A700 h-[30px] justify-center sm:pr-5 pr-[35px] py-[7px] rounded-sm text-black-900 text-xs w-full"
                                      size="txtInterRegular12Black900"
                                    >
                                      Le présent contrat est établi en 2
                                      exemplaires originaux destinés au donateur
                                      et au preneur. Une copie est destinée au
                                      CVGFR.
                                    </Text>
                                    <div className="flex sm:flex-col flex-row gap-2.5 h-[85px] md:h-auto items-start justify-start w-full">
                                      <div className="flex flex-1 md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                                        <Text
                                          className="text-black-900 text-xs w-[31px]"
                                          size="txtInterRegular12Black900"
                                        >
                                          Fait à{" "}
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
                                        <Text
                                          className="text-black-900 text-xs w-[105px]"
                                          size="txtInterRegular12Black900"
                                        >
                                          (Lieu de signature)
                                        </Text>
                                      </div>
                                      <div className="flex flex-1 md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                                        <Text
                                          className="text-black-900 text-xs w-[13px]"
                                          size="txtInterRegular12Black900"
                                        >
                                          Le
                                        </Text>
                                        <Input
                                          name="datecontrat"
                                          placeholder="jj/mm/aaaa"
                                          className="!placeholder:text-black-900 !text-black-900 leading-[normal] p-0 text-left text-xs w-full"
                                          wrapClassName="border border-gray-300 border-solid flex rounded-md w-full"
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
                                        <Text
                                          className="text-black-900 text-xs w-[108px]"
                                          size="txtInterRegular12Black900"
                                        >
                                          (Date de signature)
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                <Button
                                  className="cursor-pointer text-center text-xs w-[370px]"
                                  color="cyan_900"
                                  size="sm"
                                  variant="fill"
                                >
                                  9. SIGNATURE DES PARTIES
                                </Button>
                                <ContratdonationPSevenColumnframe7959 className="flex flex-col gap-2.5 items-start justify-start pt-2.5 px-2.5 w-full" />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col h-[107px] md:h-auto items-start justify-center p-2.5 w-full">
                            <div className="flex flex-col h-[87px] md:h-auto items-center justify-start max-w-[825px] px-2.5 w-full">
                              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-0.5 w-full">
                                <Button
                                  className="common-pointer cursor-pointer font-medium h-10 mb-[3px] md:ml-[0] ml-[291px] text-center text-xs w-[104px]"
                                  onClick={() =>
                                    navigate("/contratdonationpsix")
                                  }
                                  shape="round"
                                  color="cyan_900"
                                  size="lg"
                                  variant="fill"
                                >
                                  Précédent
                                </Button>
                                <Button
                                  className="common-pointer cursor-pointer font-medium h-10 mb-[3px] mr-[281px] text-center text-xs w-[114px]"
                                  onClick={() =>
                                    navigate("/contratdonationpeight")
                                  }
                                  shape="round"
                                  color="cyan_900"
                                  size="lg"
                                  variant="fill"
                                >
                                  Suivant
                                </Button>
                              </div>
                              <Button
                                className="common-pointer cursor-pointer font-medium h-10 text-center text-xs w-[114px]"
                                onClick={() => navigate("/contrats")}
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
        </div>
      </div>
    </>
  );
};

export default ContratdonationpSevenPage;
