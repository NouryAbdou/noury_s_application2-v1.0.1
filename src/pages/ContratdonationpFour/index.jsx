import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
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

const ContratdonationpFourPage = () => {
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
                      <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start max-w-[1087px] p-2.5 w-full">
                        <Button
                          className="cursor-pointer text-center text-xs w-[370px]"
                          color="cyan_900"
                          size="sm"
                          variant="fill"
                        >
                          2. INFORMATIONS SUR LE TERRAIN OBJET DU CONTRAT
                        </Button>
                        <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-center max-w-[840px] w-full">
                            <div className="flex sm:flex-1 flex-col gap-[15px] items-start justify-start w-[370px] sm:w-full">
                              <div className="flex flex-col items-start justify-center w-full">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterSemiBold12"
                                >
                                  Localisation dans le village
                                </Text>
                                <Input
                                  name="frame7857"
                                  placeholder="Text"
                                  className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                                  wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                                  shape="round"
                                  color="white_A700"
                                  size="md"
                                  variant="fill"
                                ></Input>
                              </div>
                              <div className="flex flex-col items-start justify-center w-full">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterSemiBold12"
                                >
                                  Croquis de la parcelle
                                </Text>
                                <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      OUI
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_camera.svg"
                                      alt="camera"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      NON
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_downarrow24.svg"
                                      alt="downarrowTwentyFour"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-center w-[370px] sm:w-full">
                                  <Text
                                    className="text-black-900 text-xs w-full"
                                    size="txtInterRegular12Black900"
                                  >
                                    Si oui, joindre le croquis
                                  </Text>
                                  <Input
                                    name="frame7857_One"
                                    placeholder="Télécharger pièce jointe"
                                    className="leading-[normal] p-0 placeholder:text-black-900_b2 text-left text-xs w-full"
                                    wrapClassName="border border-gray-300 border-solid flex md:h-auto rounded-md w-full"
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
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-center w-[101px]">
                                  <Text
                                    className="text-black-900 text-xs w-auto"
                                    size="txtInterSemiBold12"
                                  >
                                    Superficie en ha :{" "}
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full">
                                  <div className="flex flex-row items-center justify-start w-full">
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_camera.svg"
                                      alt="camera_One"
                                    />
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      Superficie déclarée, précisez en ha
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-center justify-start w-full">
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_downarrow24.svg"
                                      alt="downarrowTwentyFour_One"
                                    />
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      Mesurée, précisez la méthode de la mesure
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[35px] md:h-auto items-start justify-center px-[18px] py-[5px] rounded-md w-full">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-black-900_b2 text-xs"
                                      size="txtInterRegular12"
                                    >
                                      Text
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-center w-[370px] sm:w-full">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterSemiBold12"
                                >
                                  Existence servitude sur terrain objet du
                                  contrat :
                                </Text>
                                <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      OUI
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_camera.svg"
                                      alt="camera_Two"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      NON
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_downarrow24.svg"
                                      alt="downarrowTwentyFour_Two"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-center w-[370px] sm:w-full">
                                  <Text
                                    className="text-black-900 text-xs w-full"
                                    size="txtInterRegular12Black900"
                                  >
                                    Si oui, en préciser la nature :
                                  </Text>
                                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[35px] md:h-auto items-start justify-center px-[18px] py-[5px] rounded-md w-full">
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="text-black-900_b2 text-xs"
                                        size="txtInterRegular12"
                                      >
                                        Text
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex sm:flex-1 flex-col gap-[5px] items-start justify-start w-[370px] sm:w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtInterSemiBold12Gray900"
                              >
                                Statut du terrain :
                              </Text>
                              <div className="flex flex-row gap-2 items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterMedium12Black900"
                                >
                                  Le terrain est certifié
                                </Text>
                                <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      OUI
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_camera.svg"
                                      alt="camera_Three"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      NON
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_downarrow24.svg"
                                      alt="downarrowTwentyFour_Three"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterRegular12Black900"
                                >
                                  Si oui, N° de CF :
                                </Text>
                                <Input
                                  name="frame7857_Two"
                                  placeholder="Text"
                                  className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                                  wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                                  shape="round"
                                  color="white_A700"
                                  size="md"
                                  variant="fill"
                                ></Input>
                              </div>
                              <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-full">
                                <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                  <Text
                                    className="text-black-900 text-xs w-auto"
                                    size="txtInterRegular12Black900"
                                  >
                                    Certificat foncier individuel
                                  </Text>
                                  <Img
                                    className="h-5 w-6"
                                    src="images/img_camera.svg"
                                    alt="camera_Four"
                                  />
                                </div>
                                <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                  <Text
                                    className="text-black-900 text-xs w-auto"
                                    size="txtInterRegular12Black900"
                                  >
                                    Certificat foncier collectif
                                  </Text>
                                  <Img
                                    className="h-5 w-6"
                                    src="images/img_downarrow24.svg"
                                    alt="downarrowTwentyFour_Four"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-center w-full">
                                <Text
                                  className="text-black-900 text-xs w-full"
                                  size="txtInterRegular12Black900"
                                >
                                  Le contrat porte
                                </Text>
                                <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      sur l’ensemble de la parcelle
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_camera.svg"
                                      alt="camera_Five"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      une partie de la parcelle
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_downarrow24.svg"
                                      alt="downarrowTwentyFour_Five"
                                    />
                                  </div>
                                </div>
                                <Text
                                  className="text-black-900 text-xs w-full"
                                  size="txtInterRegular12Black900"
                                >
                                  N° IDUFCI (si attribué) :
                                </Text>
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[35px] md:h-auto items-start justify-center px-[18px] py-[5px] rounded-md w-full">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-black-900_b2 text-xs"
                                      size="txtInterRegular12"
                                    >
                                      Text
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterMedium12Black900"
                                >
                                  Le terrain est titré
                                </Text>
                                <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      OUI
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_camera.svg"
                                      alt="camera_Six"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      NON
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_downarrow24.svg"
                                      alt="downarrowTwentyFour_Six"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-center w-full">
                                <Text
                                  className="text-black-900 text-xs w-full"
                                  size="txtInterRegular12Black900"
                                >
                                  Si oui, N° de TF :
                                </Text>
                                <Input
                                  name="frame7857_Three"
                                  placeholder="Text"
                                  className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                                  wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                                  shape="round"
                                  color="white_A700"
                                  size="md"
                                  variant="fill"
                                ></Input>
                              </div>
                              <div className="flex flex-col items-start justify-center w-full">
                                <Text
                                  className="text-black-900 text-xs w-full"
                                  size="txtInterRegular12Black900"
                                >
                                  Le contrat porte
                                </Text>
                                <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      sur l’ensemble de la parcelle
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_camera.svg"
                                      alt="camera_Seven"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      une partie de la parcelle
                                    </Text>
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_downarrow24.svg"
                                      alt="downarrowTwentyFour_Seven"
                                    />
                                  </div>
                                </div>
                                <Text
                                  className="text-black-900 text-xs w-full"
                                  size="txtInterRegular12Black900"
                                >
                                  N° IDUFCI (si attribué) :
                                </Text>
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[35px] md:h-auto items-start justify-center px-[18px] py-[5px] rounded-md w-full">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-black-900_b2 text-xs"
                                      size="txtInterRegular12"
                                    >
                                      Text
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col h-[108px] md:h-auto items-start justify-center p-2.5 w-full">
                            <div className="flex flex-col h-[88px] md:h-auto items-center justify-start max-w-[825px] px-2.5 w-full">
                              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-0.5 w-full">
                                <Button
                                  className="common-pointer cursor-pointer font-medium h-10 mb-[3px] md:ml-[0] ml-[291px] text-center text-xs w-[104px]"
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
                                  className="common-pointer cursor-pointer font-medium h-10 mb-[3px] mr-[281px] text-center text-xs w-[114px]"
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

export default ContratdonationpFourPage;
