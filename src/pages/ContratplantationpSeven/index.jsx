import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar3 from "components/Sidebar3";

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

const ContratplantationpSevenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1281px] items-center justify-start mx-auto pb-3 w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[1200px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <Sidebar3 className="!sticky !w-[263px] bg-cyan-900_19 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-sm top-[0]" />
          <div className="bg-white-A700 flex flex-1 flex-row gap-[-2px] h-[831px] md:h-auto items-start justify-center md:px-5 w-full">
            <Line className="bg-gray-500 h-[300px] rounded-sm w-1" />
            <Line className="bg-black-900_7f h-[831px] w-px" />
          </div>
          <div className="flex flex-1 flex-col h-full items-start justify-start md:px-5 px-[30px] w-full">
            <div className="flex flex-col h-[1200px] md:h-auto items-start justify-start p-2.5 w-full">
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
                  <div className="bg-white-A700 flex flex-col h-[1105px] md:h-auto items-center justify-start p-2.5 w-full">
                    <div className="flex flex-col h-[1069px] md:h-auto items-start justify-center max-w-[802px] w-full">
                      <div className="flex flex-col h-[1025px] md:h-auto items-center justify-start max-w-[802px] w-full">
                        <div className="flex flex-col md:gap-10 gap-[97px] items-center justify-start max-w-[802px] w-full">
                          <div className="md:h-[590px] h-[652px] sm:h-[688px] relative w-[98%] md:w-full">
                            <div className="absolute flex flex-col h-[487px] md:h-auto inset-x-[0] items-center justify-start max-w-[777px] mx-auto top-[0] w-full">
                              <div className="flex flex-col h-60 md:h-auto items-start justify-start max-w-[777px] w-full">
                                <div className="flex flex-col items-center justify-start">
                                  <Text
                                    className="bg-cyan-900 h-[23px] justify-center pb-[5px] pt-0.5 sm:px-5 px-[35px] text-white-A700 text-xs w-[373px]"
                                    size="txtInterRegular12WhiteA700"
                                  >
                                    MODALITÉS DE PARTAGE DE LA PLANTATION
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[60px] inset-x-[0] items-center justify-center max-w-[774px] mx-auto w-full">
                              <div className="flex flex-col gap-[9px] h-[210px] md:h-auto items-center justify-center max-w-[774px] w-full">
                                <div className="flex flex-col gap-[7px] items-start justify-center w-auto md:w-full">
                                  <Text
                                    className="text-black-900 text-xs w-[331px]"
                                    size="txtInterRegular12Black900"
                                  >
                                    La plantation sera partagée selon les
                                    modalités suivantes :
                                  </Text>
                                  <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex sm:flex-col flex-row gap-6 items-center justify-start max-w-[739px] w-full">
                                        <div className="bg-white-A700 border border-gray-300 border-solid h-[31px] rounded-md w-[17%]"></div>
                                        <div className="flex flex-col items-center justify-start w-[291px]">
                                          <Text
                                            className="text-black-900 text-xs w-auto"
                                            size="txtInterRegular12Black900"
                                          >
                                              % de la plantation pour le
                                            détenteur du droit foncier
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[78%] md:w-full">
                                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-[598px] md:w-full">
                                      <div className="bg-white-A700 border border-gray-300 border-solid h-[31px] rounded-md w-[21%]"></div>
                                      <div className="flex flex-col items-center justify-start w-[291px]">
                                        <Text
                                          className="text-black-900 text-xs w-auto"
                                          size="txtInterRegular12Black900"
                                        >
                                            % de la plantation pour le détenteur
                                          du droit foncier
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <Text
                                    className="text-black-900 text-xs w-[347px]"
                                    size="txtInterRegular12Black900"
                                  >
                                    Le partage aura lieu : (Cocher une seule des
                                    cases suivantes)
                                  </Text>
                                </div>
                                <CheckBox
                                  className="text-[13px] text-black-900 text-left"
                                  inputClassName="mr-[5px]"
                                  name="gardermasession"
                                  id="gardermasession"
                                  label="dans la première année de la production des cultures pérennes mentionnées à l’article 9."
                                  shape="square"
                                  size="md"
                                ></CheckBox>
                                <CheckBox
                                  className=""
                                  inputClassName="border border-gray-300 border-solid h-[31px] mr-[5px] w-[31px]"
                                  name="componentOne"
                                  id="componentOne"
                                  shape="round"
                                  color="white_A700"
                                  variant="fill"
                                ></CheckBox>
                              </div>
                              <CheckBox
                                className=""
                                inputClassName="border border-gray-300 border-solid h-[74px] mr-[5px] w-[74px]"
                                name="componentOne_One"
                                id="componentOne_One"
                                shape="round"
                                color="white_A700"
                                variant="fill"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[7px] h-[295px] md:h-auto items-start justify-start max-w-[751px] w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col h-[198px] md:h-auto items-center justify-start max-w-[744px] w-full">
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
                                        Si l’une des deux parties ne respecte
                                        pas ses obligations, l’autre peut
                                        demander la rupture du contrat. 
                                        <br />
                                        La résiliation du contrat peut se faire
                                        avec l&#39;accord des deux parties avant
                                        la fin du contrat.
                                        <br />
                                        Si l’une des parties souhaite mettre fin
                                        au contrat, elle devra informer l’autre
                                        six (06) mois à l’avance. 
                                        <br />
                                        Le planteur peut demander la rupture du
                                        contrat en cas d’incapacité ou de force
                                        majeure qui l’empêche de respecter ses
                                        engagements. 
                                        <br />
                                        En cas de résiliation par le détenteur
                                        de droit foncier, le planteur
                                        bénéficiera d’une juste compensation
                                        fixée d’un commun accord entre les
                                        parties ou par une juridiction
                                        compétente.
                                      </>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col h-[90px] md:h-auto items-start justify-center max-w-[731px] p-2.5 w-full">
                              <div className="flex flex-col h-20 md:h-auto items-center justify-start max-w-[731px] px-2.5 w-full">
                                <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-0.5 w-full">
                                  <Button
                                    className="common-pointer cursor-pointer font-medium h-10 mb-[3px] md:ml-[0] ml-[254px] text-center text-xs w-[104px]"
                                    onClick={() =>
                                      navigate("/contratdonationpthree")
                                    }
                                    shape="round"
                                    color="cyan_900"
                                    size="lg"
                                    variant="fill"
                                  >
                                    Précédent
                                  </Button>
                                  <Button
                                    className="common-pointer cursor-pointer font-medium h-10 mb-[3px] mr-[244px] text-center text-xs w-[114px]"
                                    onClick={() =>
                                      navigate("/contratdonationpfive")
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
                                  className="common-pointer cursor-pointer font-medium h-[33px] text-center text-xs w-[114px]"
                                  onClick={() => navigate("/contrats")}
                                  shape="round"
                                  color="cyan_900"
                                  size="md"
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
      </div>
    </>
  );
};

export default ContratplantationpSevenPage;
