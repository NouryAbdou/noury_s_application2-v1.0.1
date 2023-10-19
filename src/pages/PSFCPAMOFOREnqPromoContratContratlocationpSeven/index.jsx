import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar2 from "components/Sidebar2";

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
const relationclientFiveOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const timeZoneThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PSFCPAMOFOREnqPromoContratContratlocationpSevenPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label:
        "CLARIFICATION DES RÈGLES DE DROIT ET DES PROCÉDURES DE SÉCURISATION FONCIÈRE",
    },
    { label: "DÉLIMITATION DES TERRITOIRES DE VILLAGES (DTV)" },
    { label: "CERTIFICATION FONCIERE (CF)" },
    { label: "CONSOLIDATION DES DROITS CONCEDES (CDC)" },
  ];

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[831px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <Sidebar2 className="!sticky !w-[273px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
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
                      6. Loyer
                    </Button>
                    <div className="flex flex-col gap-[5px] h-[595px] md:h-auto items-start justify-center max-w-[1004px] w-full">
                      <div className="flex flex-col h-[469px] md:h-auto items-start justify-start max-w-[684px] w-full">
                        <div className="flex flex-col gap-[21px] items-start justify-start max-w-[678px] w-full">
                          <div className="flex flex-col items-start justify-center w-auto">
                            <Text
                              className="text-black-900 text-xs w-auto"
                              size="txtInterRegular12Black900"
                            >
                              Le loyer est payable par le locataire au détenteur
                              du droit foncier.
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-[15px] items-center justify-center max-w-screen-sm w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-center w-[328px]">
                              <div className="flex flex-col items-start justify-center w-auto">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterRegular12Black900"
                                >
                                  L’échéance de paiement du loyer est fixée :{" "}
                                </Text>
                              </div>
                              <div className="bg-white-A700 border border-gray-300 border-solid h-[31px] rounded-md w-[19%]"></div>
                            </div>
                            <div className="flex flex-row gap-[23px] items-center justify-between w-[297px]">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterRegular12Black900"
                              >
                                de chaque{" "}
                              </Text>
                              <div className="flex flex-row gap-3 h-[23px] md:h-auto items-center justify-start py-[9px] w-auto">
                                <div className="flex flex-col items-center justify-start w-[31%]">
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
                                      placeholder="Année"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[26%]">
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
                                      placeholder="Mois"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[34%]">
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
                                      name="relationclient_Two"
                                      options={relationclientTwoOptionsList}
                                      isSearchable={false}
                                      placeholder="Récolte"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[7px] h-[198px] md:h-auto items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-60">
                              <Text
                                className="text-black-900 text-xs w-60"
                                size="txtInterRegular12Black900"
                              >
                                Le Loyer est payable de la façon suivante :
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <SelectBox
                                    className="leading-[normal] text-black-900 text-left text-xs w-full"
                                    placeholderClassName="text-black-900"
                                    getOptionLabel={(e) => (
                                      <div className="flex items-center">
                                        <Img
                                          className="h-5 mr-0.5"
                                          src="images/img_camera.svg"
                                          alt="camera"
                                        />
                                        <span>{e.label}</span>
                                      </div>
                                    )}
                                    isMulti={false}
                                    name="relationclient_Three"
                                    options={relationclientThreeOptionsList}
                                    isSearchable={false}
                                    placeholder="En Espèce au prix de"
                                  />
                                </div>
                              </div>
                              <Img
                                className="h-7"
                                src="images/img_group7608.svg"
                                alt="group7608"
                              />
                              <Text
                                className="text-black-900 text-xs"
                                size="txtInterRegular12Black900"
                              >
                                FCFA
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-[59%] md:w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <SelectBox
                                    className="leading-[normal] text-black-900 text-left text-xs w-full"
                                    placeholderClassName="text-black-900"
                                    getOptionLabel={(e) => (
                                      <div className="flex items-center">
                                        <Img
                                          className="h-5 mr-0.5"
                                          src="images/img_down_arrow_24_outline.svg"
                                          alt="down arrow / 24 / Outline"
                                        />
                                        <span>{e.label}</span>
                                      </div>
                                    )}
                                    isMulti={false}
                                    name="relationclient_Five"
                                    options={relationclientFiveOptionsList}
                                    isSearchable={false}
                                    placeholder="En nature, sous la forme suivante :"
                                  />
                                </div>
                              </div>
                              <Img
                                className="h-[72px]"
                                src="images/img_group7608.svg"
                                alt="group7608_One"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-5 items-start justify-start w-[92%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <SelectBox
                                  className="leading-[normal] text-black-900 text-left text-xs w-full"
                                  placeholderClassName="text-black-900"
                                  isSearchable={false}
                                  placeholder="Si une révision du loyer est prévue, en préciser les conditions (fréquence de révision, indexation du prix, etc.)"
                                  isMulti={false}
                                  options={timeZoneThreeOptionsList}
                                  name="timeZone_Three"
                                  size="xs"
                                />
                              </div>
                            </div>
                            <Img
                              className="h-[72px]"
                              src="images/img_group7608.svg"
                              alt="group7608_Two"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-[111px] md:h-auto items-start justify-center max-w-[1004px] p-2.5 w-full">
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

export default PSFCPAMOFOREnqPromoContratContratlocationpSevenPage;
