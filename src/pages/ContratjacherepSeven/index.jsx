import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, SelectBox, Text } from "components";
import ContratventePThirteenColumnclarificationDesRGlesDeDroitEtDesProcDuresDeSCurisationFonciRe from "components/ContratventePThirteenColumnclarificationDesRGlesDeDroitEtDesProcDuresDeSCurisationFonciRe";
import Header from "components/Header";

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

const ContratjacherepSevenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1054px] items-center justify-end mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[1021px] md:h-auto items-start justify-start max-w-[1440px] w-full">
          <Sidebar className="!sticky !w-[267px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-white-A700 flex flex-col h-[831px] md:h-auto items-start justify-start mt-1 px-5 w-[263px]">
              <ContratventePThirteenColumnclarificationDesRGlesDeDroitEtDesProcDuresDeSCurisationFonciRe
                className="flex flex-col gap-2.5 items-start justify-start py-2.5 w-full"
                certificationfonciere="CERTIFICATION FONCIERE (CF)"
              />
            </div>
            <div className="bg-white-A700 h-[833px] mb-0.5 ml-1 w-[1%]"></div>
          </Sidebar>
          <div className="flex flex-1 flex-col h-[1021px] md:h-auto items-start justify-start md:px-5 px-[30px] w-full">
            <div className="flex flex-col h-[1021px] md:h-auto items-start justify-start p-2.5 w-full">
              <div className="flex flex-col h-[1011px] md:h-auto items-center justify-start w-full">
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
                  <div className="bg-white-A700 flex flex-col h-[926px] md:h-auto items-center justify-start p-2.5 w-full">
                    <div className="md:h-[304px] sm:h-[341px] h-[777px] relative w-full">
                      <div className="absolute flex flex-col h-[737px] md:h-auto inset-x-[0] items-center justify-center max-w-[770px] mx-auto top-[0] w-full">
                        <div className="flex flex-col gap-[15px] h-[652px] md:h-auto items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start max-w-[770px] w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-[49%] md:w-full">
                                <Button
                                  className="cursor-pointer text-center text-xs w-[370px]"
                                  color="cyan_900"
                                  size="sm"
                                  variant="fill"
                                >
                                  DUREE DU CONTRAT
                                </Button>
                              </div>
                              <div className="flex flex-col h-[126px] md:h-auto items-center justify-center max-w-[777px] w-full">
                                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                                  <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-start w-[545px] sm:w-full">
                                    <div className="flex flex-col items-center justify-start">
                                      <Text
                                        className="text-black-900 text-xs"
                                        size="txtInterRegular12Black900"
                                      >
                                        Le présent contrat est conclu pour une
                                        durée de :{" "}
                                      </Text>
                                    </div>
                                    <div className="bg-white-A700 border border-gray-300 border-solid h-[31px] rounded-md w-[45%]"></div>
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
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start max-w-[770px] w-full">
                              <Button
                                className="cursor-pointer text-center text-xs w-[370px]"
                                color="cyan_900"
                                size="sm"
                                variant="fill"
                              >
                                RESILIATION
                              </Button>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-center max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
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
                                      six (06) mois à l’avance. 
                                      <br />
                                      Le preneur peut demander la rupture du
                                      contrat en cas d’incapacité ou de force
                                      majeure qui l’empêche de respecter ses
                                      engagements. 
                                      <br />
                                      En cas de résiliation par le détenteur de
                                      droit foncier, le locataire bénéficiera
                                      d’une juste compensation fixée d’un commun
                                      accord entre les parties ou par une
                                      juridiction compétente.
                                    </>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col h-[100px] md:h-auto inset-x-[0] items-center justify-center mx-auto p-2.5 w-full">
                        <div className="flex flex-col h-[87px] md:h-auto items-center justify-start max-w-[825px] px-2.5 w-full">
                          <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-0.5 w-full">
                            <Button
                              className="common-pointer cursor-pointer font-medium h-10 mb-[3px] md:ml-[0] ml-[291px] text-center text-xs w-[104px]"
                              onClick={() => navigate("/contratdonationpfour")}
                              shape="round"
                              color="cyan_900"
                              size="lg"
                              variant="fill"
                            >
                              Précédent
                            </Button>
                            <Button
                              className="common-pointer cursor-pointer font-medium h-10 mb-[3px] mr-[281px] text-center text-xs w-[114px]"
                              onClick={() => navigate("/contratdonationpsix")}
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

export default ContratjacherepSevenPage;
