import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";
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

const ContratmetayagepSevenPage = () => {
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
                    <div className="flex flex-col gap-[5px] h-[642px] md:h-auto items-start justify-center max-w-[751px] w-full">
                      <div className="flex flex-col gap-2.5 h-[386px] md:h-auto items-center justify-start max-w-[751px] w-full">
                        <div className="flex flex-col items-start justify-start max-w-[741px] w-full">
                          <div className="flex flex-col h-[178px] md:h-auto items-start justify-start max-w-[741px] w-full">
                            <div className="overflow-x-auto w-full">
                              <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                                <Button
                                  className="cursor-pointer h-[25px] text-center text-xs w-[373px]"
                                  color="cyan_900"
                                  size="sm"
                                  variant="fill"
                                >
                                  DUREE DU CONTRAT
                                </Button>
                                <div className="flex flex-col h-[111px] md:h-auto items-center justify-center max-w-[777px] w-full">
                                  <div className="flex flex-col items-start justify-start w-[76%] md:w-full">
                                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[521px] sm:w-full">
                                      <div className="flex flex-col items-center justify-start">
                                        <Text
                                          className="text-black-900 text-xs"
                                          size="txtInterRegular12Black900"
                                        >
                                          Le présent contrat est conclu pour une
                                          durée :{" "}
                                        </Text>
                                      </div>
                                      <div className="bg-white-A700 border border-gray-300 border-solid h-[31px] rounded-md w-[47%]"></div>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <Text
                                        className="leading-[20.00px] text-black-900 text-xs"
                                        size="txtInterRegular12Black900"
                                      >
                                        <>
                                          à partir de la date de signature du
                                          présent contrat par les 2 parties. 
                                          <br />
                                          Cette durée est modifiable d’un commun
                                          accord des parties par avenant au
                                          présent contrat.
                                          <br />
                                          Au terme du contrat, les parties
                                          établissent un nouveau contrat. 
                                        </>
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col h-[198px] md:h-auto items-start justify-start max-w-[751px] w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start max-w-[744px] w-full">
                              <Text
                                className="bg-cyan-900 justify-center pb-1.5 pt-0.5 sm:px-5 px-[35px] text-white-A700 text-xs w-[370px]"
                                size="txtInterRegular12WhiteA700"
                              >
                                RÉSILIATION
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-center max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Si l’une des deux parties ne respecte pas
                                      ses obligations, l’autre peut demander la
                                      rupture du contrat.
                                      <br />
                                      La résiliation du contrat peut se faire
                                      avec l&#39;accord des deux parties avant
                                      la fin du contrat.
                                      <br />
                                      Si l’une des parties souhaite mettre fin
                                      au contrat, elle devra informer l’autre
                                      trois (03) mois à l’avance. 
                                      <br />
                                      En cas de résiliation par le détenteur de
                                      droit foncier avant la récolte, le métayer
                                      bénéficiera d’une juste compensation pour
                                      le travail effectué.
                                    </>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-28 md:h-auto items-start justify-center max-w-[731px] p-2.5 w-full">
                        <div className="flex flex-col h-[92px] md:h-auto items-center justify-start max-w-[731px] px-2.5 w-full">
                          <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-0.5 w-full">
                            <Button
                              className="common-pointer cursor-pointer font-medium h-10 mb-[3px] md:ml-[0] ml-[254px] text-center text-xs w-[104px]"
                              onClick={() => navigate("/contratdonationpthree")}
                              shape="round"
                              color="cyan_900"
                              size="lg"
                              variant="fill"
                            >
                              Précédent
                            </Button>
                            <Button
                              className="common-pointer cursor-pointer font-medium h-10 mb-[3px] mr-[244px] text-center text-xs w-[114px]"
                              onClick={() => navigate("/contratdonationpfive")}
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
    </>
  );
};

export default ContratmetayagepSevenPage;
