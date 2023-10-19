import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar7 from "components/Sidebar7";

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
const languageTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContratcessionpSevenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1097px] items-center justify-end mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[1312px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <Sidebar7 className="!sticky !w-[267px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
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
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-[1217px] md:h-auto items-center justify-start p-2.5 w-full">
                    <div className="flex flex-col gap-2.5 items-center justify-start w-[87%] md:w-full">
                      <Button
                        className="cursor-pointer text-center text-xs w-[370px]"
                        color="cyan_900"
                        size="sm"
                        variant="fill"
                      >
                        ENGAGEMENTS DES PARTIES
                      </Button>
                      <div className="flex flex-col gap-[26px] h-[440px] md:h-auto items-center justify-start max-w-[926px] w-full">
                        <div className="flex flex-col items-center justify-start w-[81%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start max-w-[744px] w-full">
                              <Input
                                name="titrepartiescon"
                                placeholder="OBLIGATIONS DU CEDANT"
                                className="!placeholder:text-cyan-900 !text-cyan-900 font-bold p-0 text-left text-xs w-full"
                                wrapClassName="bg-cover bg-no-repeat h-6 w-1/2"
                                style={{
                                  backgroundImage:
                                    "url('images/img_psfchome.png')",
                                }}
                                shape="square"
                                color="white_A700"
                                size="xs"
                                variant="fill"
                              ></Input>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-3 h-[180px] md:h-auto items-start justify-start max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Ne créer aucun obstacle à la prise de
                                      possession et à la pleine jouissance de la
                                      parcelle pour le preneur
                                      <br />
                                      Ne pas réclamer au preneur après la
                                      conclusion de ce contrat d’autres
                                      contreparties que celles prévues au
                                      contrat
                                    </>
                                  </Text>
                                  <div className="flex flex-col gap-4 items-start justify-start w-[98%] md:w-full">
                                    <div className="flex flex-col items-center justify-start w-[6%] md:w-full">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <SelectBox
                                          className="leading-[normal] text-black-900 text-left text-xs w-full"
                                          placeholderClassName="text-black-900"
                                          isSearchable={false}
                                          placeholder="Autres "
                                          isMulti={false}
                                          options={languageTwoOptionsList}
                                          name="language_Two"
                                          size="xs"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      className="h-16"
                                      src="images/img_group7608.svg"
                                      alt="group7608"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[81%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col h-[194px] md:h-auto items-start justify-start max-w-[744px] w-full">
                                <Input
                                  name="price"
                                  placeholder="OBLIGATIONS  DU PRENEUR"
                                  className="!placeholder:text-cyan-900 !text-cyan-900 font-bold p-0 text-left text-xs w-full"
                                  wrapClassName="bg-cover bg-no-repeat h-6 w-1/2"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_psfchome.png')",
                                  }}
                                  shape="square"
                                  color="white_A700"
                                  size="xs"
                                  variant="fill"
                                ></Input>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 h-[170px] md:h-auto items-start justify-start max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                    <Text
                                      className="text-black-900 text-xs w-[449px]"
                                      size="txtInterRegular12Black900"
                                    >
                                      Entreprendre les démarches nécessaires
                                      pour l’enregistrement de la mutation
                                    </Text>
                                    <div className="flex flex-col gap-4 items-start justify-start w-[98%] md:w-full">
                                      <div className="flex flex-col items-center justify-start w-[6%] md:w-full">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <SelectBox
                                            className="leading-[normal] text-black-900 text-left text-xs w-full"
                                            placeholderClassName="text-black-900"
                                            isSearchable={false}
                                            placeholder="Autres"
                                            isMulti={false}
                                            options={relationclientOptionsList}
                                            name="relationclient"
                                            size="xs"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        className="h-16"
                                        src="images/img_group7608.svg"
                                        alt="group7608_One"
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
                    <div className="flex flex-col gap-4 items-center justify-start w-[87%] md:w-full">
                      <Button
                        className="cursor-pointer h-7 text-center text-xs w-[370px]"
                        color="cyan_900"
                        size="md"
                        variant="fill"
                      >
                        ANNEXES AU PRESENT CONTRAT
                      </Button>
                      <div className="flex flex-col h-[225px] md:h-auto items-center justify-start max-w-[926px] w-full">
                        <div className="flex flex-col items-center justify-start w-[81%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start max-w-[744px] w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-3 h-[180px] md:h-auto items-start justify-start max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="text-black-900 text-xs w-full"
                                    size="txtInterRegular12Black900"
                                  >
                                    Une copie du contrat de planter-partager de
                                    la terre initialement conclu entre les deux
                                    parties
                                  </Text>
                                  <Input
                                    name="frame7857"
                                    placeholder="Télécharger pièce jointe"
                                    className="leading-[normal] p-0 placeholder:text-black-900_b2 text-left text-xs w-full"
                                    wrapClassName="border border-gray-300 border-solid flex md:h-auto rounded-md w-auto"
                                    suffix={
                                      <Img
                                        className="h-5 ml-[35px] my-auto"
                                        src="images/img_download.svg"
                                        alt="download"
                                      />
                                    }
                                    shape="round"
                                    color="white_A700"
                                    size="sm"
                                    variant="fill"
                                  ></Input>
                                  <Input
                                    name="frame7858"
                                    placeholder="Autres"
                                    className="leading-[normal] p-0 placeholder:text-black-900_b2 text-left text-xs w-full"
                                    wrapClassName="border border-gray-300 border-solid flex md:h-auto rounded-md w-auto"
                                    suffix={
                                      <Img
                                        className="h-5 ml-[35px] my-auto"
                                        src="images/img_download.svg"
                                        alt="download"
                                      />
                                    }
                                    shape="round"
                                    color="white_A700"
                                    size="sm"
                                    variant="fill"
                                  ></Input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col h-[105px] md:h-auto items-center justify-start max-w-[825px] px-2.5 w-full">
                      <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-0.5 w-full">
                        <Button
                          className="common-pointer cursor-pointer font-medium h-10 mb-[3px] md:ml-[0] ml-[291px] text-center text-xs w-[104px]"
                          onClick={() => navigate("/contratdonationpthree")}
                          shape="round"
                          color="cyan_900"
                          size="lg"
                          variant="fill"
                        >
                          Précédent
                        </Button>
                        <Button
                          className="common-pointer cursor-pointer font-medium h-10 mb-[3px] mr-[281px] text-center text-xs w-[114px]"
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
    </>
  );
};

export default ContratcessionpSevenPage;
