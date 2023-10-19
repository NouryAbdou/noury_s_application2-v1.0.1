import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header1 from "components/Header1";
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
const relationclientOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientFiveOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientSixOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientSevenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientNineOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientTenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientElevenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientTwelveOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientThirteenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientFourteenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientFifteenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientSixteenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientSeventeenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientEighteenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientNineteenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContratmiseengarantiepFiveTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header1 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
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
                  <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start p-2.5 w-full">
                    <Button
                      className="cursor-pointer text-center text-xs w-[370px]"
                      color="cyan_900"
                      size="sm"
                      variant="fill"
                    >
                      2. INFORMATIONS SUR LE TERRAIN OBJET DU CONTRAT
                    </Button>
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] h-[557px] md:h-auto items-start justify-center w-auto md:w-full">
                        <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-center w-auto">
                            <Text
                              className="text-black-900 text-xs w-auto"
                              size="txtInterSemiBold12"
                            >
                              Localisation dans le village
                            </Text>
                            <Img
                              className="h-[35px] w-[370px]"
                              src="images/img_group7608.svg"
                              alt="group7608"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterSemiBold12"
                              >
                                Croquis de la parcelle
                              </Text>
                              <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                <div className="flex flex-col items-center justify-start w-[43%]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <SelectBox
                                      className="leading-[normal] text-black-900 text-left text-xs w-full"
                                      placeholderClassName="text-black-900"
                                      indicator={
                                        <Img
                                          className="h-5 w-6"
                                          src="images/img_camera.svg"
                                          alt="camera"
                                        />
                                      }
                                      isMulti={false}
                                      name="relationclient"
                                      options={relationclientOptionsList}
                                      isSearchable={false}
                                      placeholder="OUI"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[48%]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <SelectBox
                                      className="leading-[normal] text-black-900 text-left text-xs w-full"
                                      placeholderClassName="text-black-900"
                                      indicator={
                                        <Img
                                          className="h-5 w-6"
                                          src="images/img_downarrow24.svg"
                                          alt="down arrow / 24 / Outline"
                                        />
                                      }
                                      isMulti={false}
                                      name="relationclient_One"
                                      options={relationclientOneOptionsList}
                                      isSearchable={false}
                                      placeholder="NON"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-center mt-[5px] w-auto">
                              <Text
                                className="text-black-900 text-xs w-full"
                                size="txtInterRegular12Black900"
                              >
                                Si oui, joindre le croquis
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <Input
                                  name="frame7857"
                                  placeholder="Télécharger pièce jointe"
                                  className="!placeholder:text-black-900 !text-black-900 leading-[normal] p-0 text-left text-xs w-full"
                                  wrapClassName="border border-gray-300 border-solid flex md:h-auto rounded-md w-[370px] sm:w-full"
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
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterSemiBold12"
                              >
                                Superficie en ha :{" "}
                              </Text>
                            </div>
                            <List
                              className="flex flex-col gap-px items-center w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-col items-start justify-center mr-[146px] my-0 w-auto">
                                <div className="flex flex-row items-center justify-start w-auto">
                                  <Img
                                    className="h-5 w-6"
                                    src="images/img_camera.svg"
                                    alt="camera"
                                  />
                                  <Text
                                    className="text-black-900 text-xs w-auto"
                                    size="txtInterRegular12Black900"
                                  >
                                    Superficie déclarée, précisez en ha
                                  </Text>
                                </div>
                                <Img
                                  className="h-[35px] w-[202px]"
                                  src="images/img_group7608.svg"
                                  alt="group7608"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center my-0 w-auto">
                                <div className="flex flex-row items-center justify-start w-auto">
                                  <Img
                                    className="h-5 w-6"
                                    src="images/img_downarrow24.svg"
                                    alt="downarrowTwentyFour"
                                  />
                                  <Text
                                    className="text-black-900 text-xs w-auto"
                                    size="txtInterRegular12Black900"
                                  >
                                    Mesurée, précisez la méthode de la mesure
                                  </Text>
                                </div>
                                <Img
                                  className="h-[35px] w-[370px]"
                                  src="images/img_group7608.svg"
                                  alt="group7608"
                                />
                              </div>
                            </List>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterSemiBold12"
                              >
                                Existence servitude sur terrain objet du contrat
                                :
                              </Text>
                              <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                <div className="flex flex-col items-center justify-start w-[43%]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <SelectBox
                                      className="leading-[normal] text-black-900 text-left text-xs w-full"
                                      placeholderClassName="text-black-900"
                                      indicator={
                                        <Img
                                          className="h-5 w-6"
                                          src="images/img_camera.svg"
                                          alt="camera"
                                        />
                                      }
                                      isMulti={false}
                                      name="relationclient_Two"
                                      options={relationclientTwoOptionsList}
                                      isSearchable={false}
                                      placeholder="OUI"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[48%]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <SelectBox
                                      className="leading-[normal] text-black-900 text-left text-xs w-full"
                                      placeholderClassName="text-black-900"
                                      indicator={
                                        <Img
                                          className="h-5 w-6"
                                          src="images/img_downarrow24.svg"
                                          alt="down arrow / 24 / Outline"
                                        />
                                      }
                                      isMulti={false}
                                      name="relationclient_Three"
                                      options={relationclientThreeOptionsList}
                                      isSearchable={false}
                                      placeholder="NON"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-black-900 text-xs w-full"
                                size="txtInterRegular12Black900"
                              >
                                Si oui, en préciser la nature :
                              </Text>
                              <Img
                                className="h-[35px] w-[370px]"
                                src="images/img_group7608.svg"
                                alt="group7608_One"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-gray-900 text-xs"
                              size="txtInterSemiBold12Gray900"
                            >
                              Statut du terrain :
                            </Text>
                            <div className="flex flex-col items-start justify-start mt-1.5 w-full">
                              <div className="flex flex-row gap-2 items-center justify-start w-[318px]">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterMedium12Black900"
                                >
                                  Le terrain est certifié
                                </Text>
                                <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                  <div className="flex flex-col items-center justify-start w-[43%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <SelectBox
                                        className="leading-[normal] text-black-900 text-left text-xs w-full"
                                        placeholderClassName="text-black-900"
                                        indicator={
                                          <Img
                                            className="h-5 w-6"
                                            src="images/img_camera.svg"
                                            alt="camera"
                                          />
                                        }
                                        isMulti={false}
                                        name="relationclient_Four"
                                        options={relationclientFourOptionsList}
                                        isSearchable={false}
                                        placeholder="OUI"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[48%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <SelectBox
                                        className="leading-[normal] text-black-900 text-left text-xs w-full"
                                        placeholderClassName="text-black-900"
                                        indicator={
                                          <Img
                                            className="h-5 w-6"
                                            src="images/img_downarrow24.svg"
                                            alt="down arrow / 24 / Outline"
                                          />
                                        }
                                        isMulti={false}
                                        name="relationclient_Five"
                                        options={relationclientFiveOptionsList}
                                        isSearchable={false}
                                        placeholder="NON"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    Si oui, N° de CF :
                                  </Text>
                                  <Img
                                    className="h-[35px]"
                                    src="images/img_group7608.svg"
                                    alt="group7608_Two"
                                  />
                                </div>
                                <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                  <div className="flex flex-col items-center justify-start w-1/2">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <SelectBox
                                        className="leading-[normal] text-black-900 text-left text-xs w-full"
                                        placeholderClassName="text-black-900"
                                        indicator={
                                          <Img
                                            className="h-5 w-6"
                                            src="images/img_camera.svg"
                                            alt="camera"
                                          />
                                        }
                                        isMulti={false}
                                        name="relationclient_Six"
                                        options={relationclientSixOptionsList}
                                        isSearchable={false}
                                        placeholder="Certificat foncier individuel"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[48%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <SelectBox
                                        className="leading-[normal] text-black-900 text-left text-xs w-full"
                                        placeholderClassName="text-black-900"
                                        indicator={
                                          <Img
                                            className="h-5 w-6"
                                            src="images/img_downarrow24.svg"
                                            alt="down arrow / 24 / Outline"
                                          />
                                        }
                                        isMulti={false}
                                        name="relationclient_Seven"
                                        options={relationclientSevenOptionsList}
                                        isSearchable={false}
                                        placeholder="Certificat foncier collectif"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    Le contrat porte
                                  </Text>
                                  <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                    <div className="flex flex-col items-center justify-start w-[52%]">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <SelectBox
                                          className="leading-[normal] text-black-900 text-left text-xs w-full"
                                          placeholderClassName="text-black-900"
                                          indicator={
                                            <Img
                                              className="h-5 w-6"
                                              src="images/img_camera.svg"
                                              alt="camera"
                                            />
                                          }
                                          isMulti={false}
                                          name="relationclient_Eight"
                                          options={
                                            relationclientEightOptionsList
                                          }
                                          isSearchable={false}
                                          placeholder="sur l’ensemble de la parcelle"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-[46%]">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <SelectBox
                                          className="leading-[normal] text-black-900 text-left text-xs w-full"
                                          placeholderClassName="text-black-900"
                                          indicator={
                                            <Img
                                              className="h-5 w-6"
                                              src="images/img_downarrow24.svg"
                                              alt="down arrow / 24 / Outline"
                                            />
                                          }
                                          isMulti={false}
                                          name="relationclient_Nine"
                                          options={
                                            relationclientNineOptionsList
                                          }
                                          isSearchable={false}
                                          placeholder="une partie de la parcelle"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start mt-1 w-full">
                                    <Text
                                      className="text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      N° IDUFCI (si attribué) :
                                    </Text>
                                    <Img
                                      className="h-[35px] mt-0.5"
                                      src="images/img_group7608.svg"
                                      alt="group7608_Three"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start mt-[18px] w-full">
                              <div className="flex flex-row gap-2 items-center justify-start w-[318px]">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterMedium12Black900"
                                >
                                  Le terrain est titré
                                </Text>
                                <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                  <div className="flex flex-col items-center justify-start w-[43%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <SelectBox
                                        className="leading-[normal] text-black-900 text-left text-xs w-full"
                                        placeholderClassName="text-black-900"
                                        indicator={
                                          <Img
                                            className="h-5 w-6"
                                            src="images/img_camera.svg"
                                            alt="camera"
                                          />
                                        }
                                        isMulti={false}
                                        name="relationclient_Ten"
                                        options={relationclientTenOptionsList}
                                        isSearchable={false}
                                        placeholder="OUI"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[48%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <SelectBox
                                        className="leading-[normal] text-black-900 text-left text-xs w-full"
                                        placeholderClassName="text-black-900"
                                        indicator={
                                          <Img
                                            className="h-5 w-6"
                                            src="images/img_downarrow24.svg"
                                            alt="down arrow / 24 / Outline"
                                          />
                                        }
                                        isMulti={false}
                                        name="relationclient_Eleven"
                                        options={
                                          relationclientElevenOptionsList
                                        }
                                        isSearchable={false}
                                        placeholder="NON"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-center mt-0.5 w-auto">
                                <Text
                                  className="text-black-900 text-xs w-full"
                                  size="txtInterRegular12Black900"
                                >
                                  Si oui, N° de TF :
                                </Text>
                                <Img
                                  className="h-[35px] w-[370px]"
                                  src="images/img_group7608.svg"
                                  alt="group7608_Four"
                                />
                              </div>
                              <div className="h-24 md:h-[100px] mt-1.5 relative w-full">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                                  <Text
                                    className="text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    N° IDUFCI (si attribué) :
                                  </Text>
                                  <Img
                                    className="h-[35px] mt-0.5"
                                    src="images/img_group7608.svg"
                                    alt="group7608_Five"
                                  />
                                </div>
                                <Text
                                  className="absolute left-[0] text-black-900 text-xs top-[0]"
                                  size="txtInterRegular12Black900"
                                >
                                  Le contrat porte
                                </Text>
                                <div className="flex flex-row gap-3 md:h-auto h-full items-center justify-between mt-4 mx-auto py-[9px] w-auto">
                                  <div className="flex flex-col items-center justify-start w-[52%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <SelectBox
                                        className="font-medium leading-[normal] text-gray-900 text-left text-xs w-full"
                                        placeholderClassName="text-gray-900"
                                        indicator={
                                          <Img
                                            className="h-5 w-6"
                                            src="images/img_camera.svg"
                                            alt="camera"
                                          />
                                        }
                                        isMulti={false}
                                        name="relationclient_Twelve"
                                        options={
                                          relationclientTwelveOptionsList
                                        }
                                        isSearchable={false}
                                        placeholder="sur l’ensemble de la parcelle"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[46%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <SelectBox
                                        className="font-medium leading-[normal] text-gray-900 text-left text-xs w-full"
                                        placeholderClassName="text-gray-900"
                                        indicator={
                                          <Img
                                            className="h-5 w-6"
                                            src="images/img_downarrow24.svg"
                                            alt="down arrow / 24 / Outline"
                                          />
                                        }
                                        isMulti={false}
                                        name="relationclient_Thirteen"
                                        options={
                                          relationclientThirteenOptionsList
                                        }
                                        isSearchable={false}
                                        placeholder="une partie de la parcelle"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute h-24 md:h-[94px] inset-[0] justify-center m-auto w-full">
                                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                                    <Text
                                      className="text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      N° IDUFCI (si attribué) :
                                    </Text>
                                    <Img
                                      className="h-[35px] mt-0.5"
                                      src="images/img_group7608.svg"
                                      alt="group7608_Six"
                                    />
                                  </div>
                                  <Text
                                    className="absolute left-[0] text-black-900 text-xs top-[0]"
                                    size="txtInterRegular12Black900"
                                  >
                                    Le contrat porte
                                  </Text>
                                  <div className="flex flex-row gap-3 md:h-auto h-full items-center justify-between mt-4 mx-auto py-[9px] w-auto">
                                    <div className="flex flex-col items-center justify-start w-[52%]">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <SelectBox
                                          className="font-medium leading-[normal] text-gray-900 text-left text-xs w-full"
                                          placeholderClassName="text-gray-900"
                                          indicator={
                                            <Img
                                              className="h-5 w-6"
                                              src="images/img_camera.svg"
                                              alt="camera"
                                            />
                                          }
                                          isMulti={false}
                                          name="relationclient_Fourteen"
                                          options={
                                            relationclientFourteenOptionsList
                                          }
                                          isSearchable={false}
                                          placeholder="sur l’ensemble de la parcelle"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-[46%]">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <SelectBox
                                          className="font-medium leading-[normal] text-gray-900 text-left text-xs w-full"
                                          placeholderClassName="text-gray-900"
                                          indicator={
                                            <Img
                                              className="h-5 w-6"
                                              src="images/img_downarrow24.svg"
                                              alt="down arrow / 24 / Outline"
                                            />
                                          }
                                          isMulti={false}
                                          name="relationclient_Fifteen"
                                          options={
                                            relationclientFifteenOptionsList
                                          }
                                          isSearchable={false}
                                          placeholder="une partie de la parcelle"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
                                    <Text
                                      className="text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      Le contrat porte
                                    </Text>
                                    <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                      <div className="flex flex-col items-center justify-start w-[52%]">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <SelectBox
                                            className="font-medium leading-[normal] text-gray-900 text-left text-xs w-full"
                                            placeholderClassName="text-gray-900"
                                            indicator={
                                              <Img
                                                className="h-5 w-6"
                                                src="images/img_camera.svg"
                                                alt="camera"
                                              />
                                            }
                                            isMulti={false}
                                            name="relationclient_Sixteen"
                                            options={
                                              relationclientSixteenOptionsList
                                            }
                                            isSearchable={false}
                                            placeholder="sur l’ensemble de la parcelle"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-center justify-start w-[46%]">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <SelectBox
                                            className="font-medium leading-[normal] text-gray-900 text-left text-xs w-full"
                                            placeholderClassName="text-gray-900"
                                            indicator={
                                              <Img
                                                className="h-5 w-6"
                                                src="images/img_downarrow24.svg"
                                                alt="down arrow / 24 / Outline"
                                              />
                                            }
                                            isMulti={false}
                                            name="relationclient_Seventeen"
                                            options={
                                              relationclientSeventeenOptionsList
                                            }
                                            isSearchable={false}
                                            placeholder="une partie de la parcelle"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start mt-1 w-full">
                                      <Text
                                        className="text-black-900 text-xs"
                                        size="txtInterRegular12Black900"
                                      >
                                        N° IDUFCI (si attribué) :
                                      </Text>
                                      <Img
                                        className="h-[35px] mt-0.5"
                                        src="images/img_group7608.svg"
                                        alt="group7608_Seven"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-black-900 text-xs"
                              size="txtInterRegular12Black900"
                            >
                              Si terrain non certifié et non titré, préciser son
                              statut :
                            </Text>
                            <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                              <div className="flex flex-col items-center justify-start w-[38%]">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <SelectBox
                                    className="font-medium leading-[normal] text-gray-900 text-left text-xs w-full"
                                    placeholderClassName="text-gray-900"
                                    indicator={
                                      <Img
                                        className="h-5 w-6"
                                        src="images/img_camera.svg"
                                        alt="camera"
                                      />
                                    }
                                    isMulti={false}
                                    name="relationclient_Eighteen"
                                    options={relationclientEighteenOptionsList}
                                    isSearchable={false}
                                    placeholder="Coutumier"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[58%]">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <SelectBox
                                    className="font-medium leading-[normal] text-gray-900 text-left text-xs w-full"
                                    placeholderClassName="text-gray-900"
                                    indicator={
                                      <Img
                                        className="h-5 w-6"
                                        src="images/img_downarrow24.svg"
                                        alt="down arrow / 24 / Outline"
                                      />
                                    }
                                    isMulti={false}
                                    name="relationclient_Nineteen"
                                    options={relationclientNineteenOptionsList}
                                    isSearchable={false}
                                    placeholder="Concédé (sans TF)"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start mt-[5px] w-full">
                              <Text
                                className="text-black-900 text-xs"
                                size="txtInterRegular12Black900"
                              >
                                Autre (préciser)
                              </Text>
                              <Img
                                className="h-[35px]"
                                src="images/img_group7608.svg"
                                alt="group7608_Eight"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-[111px] md:h-auto items-start justify-center max-w-[1021px] p-2.5 w-full">
                        <div className="flex flex-col h-[91px] md:h-auto items-center justify-start max-w-[825px] px-2.5 w-full">
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
        </div>
      </div>
    </>
  );
};

export default ContratmiseengarantiepFiveTwoPage;
