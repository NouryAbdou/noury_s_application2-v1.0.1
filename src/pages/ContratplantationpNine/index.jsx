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
const relationclientOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContratplantationpNinePage = () => {
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
                      <div className="flex flex-col h-[385px] md:h-auto items-center justify-start max-w-[751px] w-full">
                        <div className="flex flex-col h-[274px] md:h-auto items-start justify-start max-w-[751px] w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start max-w-[744px] w-full">
                              <Button
                                className="cursor-pointer text-center text-xs w-[370px]"
                                color="cyan_900"
                                size="sm"
                                variant="fill"
                              >
                                AUTRES DISPOSITIONS
                              </Button>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 items-start justify-center max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Les installations effectuées par le
                                      planteur pour la création et l’entretien
                                      de la plantation restent sa propriété. Il
                                      peut les céder au propriétaire de la terre
                                      rurale à un prix qui sera fixé entre les
                                      parties à l’expiration du présent contrat
                                      lorsqu’il s’agit d’installations fixes et
                                      non déplaçables.
                                      <br />
                                      <br />
                                      Le détenteur du droit foncier dispose d’un
                                      droit de surveillance et de contrôle des
                                      travaux de création et d’entretien de la
                                      plantation et d’un droit d’information de
                                      la part du planteur sur les activités
                                      qu’il envisage de réaliser, qu’il réalise
                                      ou qu’il a réalisées.
                                    </>
                                  </Text>
                                  <div className="overflow-x-auto w-full">
                                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                                      <div className="flex flex-col items-center justify-start w-[7%] md:w-full">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <SelectBox
                                            className="leading-[normal] text-black-900 text-left text-xs w-full"
                                            placeholderClassName="text-black-900"
                                            isSearchable={false}
                                            placeholder="AUTRES"
                                            isMulti={false}
                                            options={relationclientOptionsList}
                                            name="relationclient"
                                            size="xs"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        className="h-[61px]"
                                        src="images/img_group7608.svg"
                                        alt="group7608"
                                      />
                                    </div>
                                  </div>
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

export default ContratplantationpNinePage;
