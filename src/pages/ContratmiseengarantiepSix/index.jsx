import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar4 from "components/Sidebar4";

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
const timeZoneOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const descriptionOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContratmiseengarantiepSixPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[960px] items-center justify-end mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[1021px] md:h-auto items-start justify-start max-w-[1440px] w-full">
          <Sidebar4 className="!sticky !w-[267px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col h-full items-start justify-start md:px-5 px-[30px] w-full">
            <div className="flex flex-col h-full items-start justify-start p-2.5 w-full">
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
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-[805px] md:h-auto items-center justify-start p-2.5 w-full">
                    <div className="flex flex-col h-[647px] md:h-auto items-center justify-start w-full">
                      <div className="flex flex-col h-[647px] md:h-auto items-start justify-center max-w-[770px] w-full">
                        <div className="flex flex-col h-[614px] md:h-auto items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col h-[614px] md:h-auto items-center justify-start max-w-[770px] w-full">
                              <Button
                                className="cursor-pointer text-center text-xs w-[370px]"
                                color="cyan_900"
                                size="sm"
                                variant="fill"
                              >
                                3. DECLARATIONS DES PARTIES
                              </Button>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 h-[570px] md:h-auto items-center justify-start max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Le détenteur du droit foncier déclare sur
                                      l’honneur :<br />
                                      Que les informations sur son identité
                                      renseignées sur ce contrat sont justes et
                                      sincères.
                                      <br />
                                      Qu’il a la pleine capacité d’exercer ses
                                      droits et obligations.
                                      <br />
                                      Que les droits qu’il dit avoir pour
                                      conclure le présent contrat existent et
                                      sont réguliers et qu’il n’agit pas en
                                      fraude des droits appartenant à sa famille
                                      ou en fraude des droits d’une autre
                                      personne.
                                      <br />
                                      Qu’il n’existe aucune restriction ni aucun
                                      obstacle, d’ordre légal ou conventionnel,
                                      à la libre disposition du bien objet des
                                      présentes. 
                                      <br />
                                      L’emprunteur déclare sur l’honneur :<br />
                                      Que les informations sur son identité
                                      renseignées sur ce contrat sont justes et
                                      sincères.
                                      <br />
                                      Qu’il a la pleine capacité d’exercer ses
                                      droits et obligations.
                                      <br />
                                      Que les droits qu’il dit avoir pour
                                      conclure le présent contrat existent et
                                      sont réguliers et qu’il n’agit pas en
                                      fraude des droits appartenant à sa famille
                                      ou en fraude des droits d’une autre
                                      personne.
                                      <br />
                                      Qu’il n’existe aucune restriction ni aucun
                                      obstacle, d’ordre légal ou conventionnel,
                                      à la libre disposition du bien objet des
                                      présentes. 
                                      <br />
                                      Et (choisir une seule option) :
                                    </>
                                  </Text>
                                  <div className="flex flex-col gap-2 items-start justify-center max-w-[742px] w-full">
                                    <div className="flex flex-col h-[75px] md:h-auto items-start justify-center py-[9px] w-auto md:w-full">
                                      <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                                        <Text
                                          className="text-black-900 text-xs"
                                          size="txtInterMedium12Black900"
                                        >
                                          Le terrain est titré
                                        </Text>
                                        <div className="flex flex-col items-start justify-start w-full">
                                          <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-auto md:w-full">
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
                                                name="timeZone_One"
                                                options={timeZoneOneOptionsList}
                                                isSearchable={false}
                                                placeholder="qu’il est le détenteur du droit foncier sur la parcelle ou le représentant des détenteurs de ce droit  foncier."
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                                            <div className="flex flex-col items-center justify-start w-full">
                                              <SelectBox
                                                className="leading-[normal] text-black-900 text-left text-xs w-full"
                                                placeholderClassName="text-black-900"
                                                getOptionLabel={(e) => (
                                                  <div className="flex items-center">
                                                    <Img
                                                      className="h-5 mr-0.5"
                                                      src="images/img_downarrow24.svg"
                                                      alt="down arrow / 24 / Outline"
                                                    />
                                                    <span>{e.label}</span>
                                                  </div>
                                                )}
                                                isMulti={false}
                                                name="description_One"
                                                options={
                                                  descriptionOneOptionsList
                                                }
                                                isSearchable={false}
                                                placeholder="qu’il détient un droit de mise en valeur de la parcelle en vertu d’un accord passé avec le détenteur du droit foncier (son tuteur)."
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <Text
                                      className="text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      <>
                                        Le prêteur déclare sur l’honneur :
                                        <br />
                                        Que les informations sur son identité
                                        renseignées sur ce contrat sont justes
                                        et sincères.
                                        <br />
                                        Qu’il a la pleine capacité d’exercer ses
                                        droits et obligations.
                                      </>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col h-[100px] md:h-auto items-start justify-center p-2.5 w-full">
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
    </>
  );
};

export default ContratmiseengarantiepSixPage;
