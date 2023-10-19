import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import ContratdonationPEightColumn from "components/ContratdonationPEightColumn";
import ContratdonationPEightColumnfaitSix from "components/ContratdonationPEightColumnfaitSix";
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

const ContratmiseengarantiepElevenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[831px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <Sidebar11 className="!sticky !w-[263px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="bg-white-A700 flex flex-1 flex-row gap-[-2px] h-[831px] md:h-auto items-start justify-center md:px-5 w-full">
            <Line className="bg-gray-500 h-[300px] rounded-sm w-1" />
            <Line className="bg-black-900_7f h-[831px] w-px" />
          </div>
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
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-2.5 w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-center max-w-[790px] w-full">
                        <div className="flex flex-col gap-[15px] h-full items-start justify-start w-full">
                          <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                            <Button
                              className="cursor-pointer text-center text-xs w-[370px]"
                              color="cyan_900"
                              size="sm"
                              variant="fill"
                            >
                              12. SIGNATURE DES TEMOINS
                            </Button>
                            <ContratdonationPEightColumn
                              className="flex flex-col gap-2.5 items-start justify-start px-2.5 w-full"
                              fait="De l’emprunteur"
                              faitThree="Du prêteur"
                            />
                          </div>
                          <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                            <Button
                              className="cursor-pointer text-center text-xs w-[370px]"
                              color="cyan_900"
                              size="sm"
                              variant="fill"
                            >
                              13. SIGNATURE DU PRESIDENT DU CVGFR
                            </Button>
                            <div className="flex flex-col items-start justify-start px-2.5 w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <ContratdonationPEightColumnfaitSix
                                  className="flex flex-col items-start justify-start w-auto"
                                  faitSix="Le Président du CVGFR"
                                  username="Nom et prénom(s)"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-[107px] md:h-auto items-start justify-center p-2.5 w-full">
                        <div className="flex flex-col h-[87px] md:h-auto items-center justify-start max-w-[825px] px-2.5 w-full">
                          <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-0.5 w-full">
                            <Button
                              className="common-pointer cursor-pointer font-medium h-10 mb-[3px] md:ml-[0] ml-[291px] text-center text-xs w-[104px]"
                              onClick={() => navigate("/contratdonationpseven")}
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
                                navigate(
                                  "/psfcpamoformodelepagevalidationcontratsattente",
                                )
                              }
                              shape="round"
                              color="cyan_900"
                              size="lg"
                              variant="fill"
                            >
                              Enregistrer
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
    </>
  );
};

export default ContratmiseengarantiepElevenPage;
