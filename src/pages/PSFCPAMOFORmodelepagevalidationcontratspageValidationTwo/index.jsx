import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
import PSFCPAMOFORModelePageValidationContratsPageValidationTwoColumnnometprnoms from "components/PSFCPAMOFORModelePageValidationContratsPageValidationTwoColumnnometprnoms";
import Sidebar1 from "components/Sidebar1";

const nZiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const bocandaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const bocandaOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const bocandaOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const andianouOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const familleOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const weburlOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PSFCPAMOFORmodelepagevalidationcontratspageValidationTwoPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 h-[900px] md:h-auto items-start justify-start max-w-[1440px] w-full">
          <Sidebar1 className="!sticky !w-[285px] bg-white-A700_ab flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col h-full items-start justify-start pl-2.5 md:pl-5 pr-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-start p-2.5 w-full">
              <div className="flex flex-1 flex-col h-full items-center justify-start pr-5 py-[30px] w-full">
                <div className="flex flex-col h-[786px] md:h-auto items-start justify-start w-full">
                  <div className="bg-white-A700 flex flex-col h-full items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-2.5 h-full items-center justify-start p-2.5 w-full">
                      <Img
                        className="h-[65px] md:h-auto object-cover w-[119px] sm:w-full"
                        src="images/img_logoafor1.png"
                        alt="logoaforOne"
                      />
                      <Text
                        className="text-base text-black-900 text-center w-[151px]"
                        size="txtInterRegular16Black900"
                      >
                        Contrat de donation
                      </Text>
                      <div className="flex flex-col gap-[15px] h-[661px] md:h-auto items-center justify-start w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start w-[56%] md:w-full">
                          <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterRegular12Black900"
                              >
                                Région
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <SelectBox
                                  className="border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                                  placeholderClassName="text-black-900"
                                  indicator={
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_arrowdown_gray_900.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  isMulti={false}
                                  name="frame7857"
                                  options={nZiOptionsList}
                                  isSearchable={false}
                                  placeholder="N’Zi"
                                  shape="round"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterRegular12Black900"
                              >
                                Département
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <SelectBox
                                  className="border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                                  placeholderClassName="text-black-900"
                                  indicator={
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_arrowdown_gray_900.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  isMulti={false}
                                  name="frame7857_One"
                                  options={bocandaOptionsList}
                                  isSearchable={false}
                                  placeholder="Bocanda"
                                  shape="round"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterRegular12Black900"
                              >
                                Sous-Préfecture
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <SelectBox
                                  className="border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                                  placeholderClassName="text-black-900"
                                  indicator={
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_arrowdown_gray_900.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  isMulti={false}
                                  name="frame7857_Two"
                                  options={bocandaOptionsList1}
                                  isSearchable={false}
                                  placeholder="Bocanda"
                                  shape="round"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterRegular12Black900"
                              >
                                Commune
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <SelectBox
                                  className="border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                                  placeholderClassName="text-black-900"
                                  indicator={
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_arrowdown_gray_900.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  isMulti={false}
                                  name="frame7857_Three"
                                  options={bocandaOptionsList2}
                                  isSearchable={false}
                                  placeholder="Bocanda"
                                  shape="round"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterRegular12Black900"
                              >
                                Village
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <SelectBox
                                  className="border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                                  placeholderClassName="text-black-900"
                                  indicator={
                                    <Img
                                      className="h-5 w-6"
                                      src="images/img_arrowdown_gray_900.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  isMulti={false}
                                  name="frame7857_Four"
                                  options={andianouOptionsList}
                                  isSearchable={false}
                                  placeholder="Andianou"
                                  shape="round"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtInterRegular12Black900"
                              >
                                N° Contrat
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <Input
                                  name="frame7857_Five"
                                  placeholder="N° SSSVVV-CCCCC"
                                  className="!placeholder:text-black-900 !text-black-900 md:h-auto p-0 sm:h-auto text-left text-xs w-full"
                                  wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                                  shape="round"
                                  color="white_A700"
                                  size="md"
                                  variant="fill"
                                ></Input>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="bg-cyan-900 h-3.5 justify-center sm:px-5 px-[35px] text-white-A700 text-xs w-[370px]"
                            size="txtInterMedium12"
                          >
                            TITRE DES PARTIES DU CONTRAT
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[5px] h-full items-center justify-start w-full">
                          <Text
                            className="text-black-900 text-xs w-[116px]"
                            size="txtInterRegular12Black900"
                          >
                            Entre les soussignés
                          </Text>
                          <div className="flex flex-col items-start justify-center w-auto">
                            <div className="flex flex-col items-center justify-start w-full">
                              <SelectBox
                                className="border border-gray-300 border-solid h-[35px] leading-[normal] rounded-md text-left text-xs w-full"
                                placeholderClassName="text-black-900"
                                indicator={
                                  <Img
                                    className="h-5 w-6"
                                    src="images/img_arrowdown_gray_900.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="frame7857_Six"
                                options={familleOptionsList}
                                isSearchable={false}
                                placeholder="Famille"
                                shape="round"
                                color="white_A700"
                                size="lg"
                                variant="fill"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center w-auto">
                            <div className="flex flex-col gap-[5px] h-[172px] md:h-auto items-start justify-start w-auto">
                              <div className="flex flex-col items-start justify-center w-auto">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterRegular12Black900"
                                >
                                  Nom de la famille
                                </Text>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Input
                                    name="frame7857_Seven"
                                    placeholder="Kra"
                                    className="!placeholder:text-black-900 !text-black-900 md:h-auto p-0 sm:h-auto text-left text-xs w-full"
                                    wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                                    shape="round"
                                    color="white_A700"
                                    size="md"
                                    variant="fill"
                                  ></Input>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-center w-auto">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterRegular12Black900"
                                >
                                  Nombre de personnes famille
                                </Text>
                                <Input
                                  name="group7608"
                                  placeholder="9"
                                  className="!placeholder:text-black-900 !text-black-900 p-0 text-left text-xs w-full"
                                  wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                                  shape="round"
                                  color="white_A700"
                                  size="md"
                                  variant="fill"
                                ></Input>
                              </div>
                              <div className="flex flex-col h-[52px] md:h-auto items-start justify-center w-[370px] sm:w-full">
                                <Text
                                  className="leading-[20.00px] max-w-[370px] md:max-w-full text-black-900 text-xs"
                                  size="txtInterMedium12Black900"
                                >
                                  <span className="text-black-900 font-inter text-left font-normal">
                                    <>
                                      Procuration
                                      <br />
                                    </>
                                  </span>
                                  <span className="text-black-900 font-inter text-left text-[10px] font-normal">
                                    (Ce document doit clairement désigner le
                                    représentant de la famille ou du groupement
                                    informel et lister l’ensemble des détenteurs
                                    de droits sur la parcelle avec leur
                                    signature ou empreinte.)
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col h-[684px] md:h-auto items-center justify-start px-2.5 py-[30px] w-[402px] sm:w-full">
                <div className="flex flex-col gap-5 h-[654px] md:h-auto items-start justify-start w-full">
                  <div className="bg-white-A700 border border-cyan-900_7f border-solid flex flex-col items-start justify-start w-full">
                    <div className="bg-cyan-900_33 flex flex-col items-center justify-end px-2.5 w-full">
                      <div className="flex flex-row gap-0.5 h-6 md:h-auto items-center justify-end w-[100px]">
                        <Text
                          className="text-black-900 text-center text-xs w-auto"
                          size="txtInterRegular12Black900"
                        >
                          Imprimer
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_printer.svg"
                          alt="printer"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start px-5 py-[5px] w-full">
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtInterRegular12Black900"
                      >
                        Enquête : RRDDDSSSVVV
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtInterRegular12Black900"
                      >
                        Contrat : N° SSSVVV-CCCCC
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtInterRegular12Black900"
                      >
                        <>Date d&#39;enregistrement : 29/08/2023</>
                      </Text>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtInterSemiBold12"
                      >
                        <span className="text-black-900 font-inter text-left font-semibold">
                          Pièces jointes
                        </span>
                        <span className="text-black-900 font-inter text-left font-normal">
                          {" "}
                          :
                        </span>
                      </Text>
                      <SelectBox
                        className="leading-[normal] text-black-900 text-left text-xs w-[58%] sm:w-full"
                        placeholderClassName="text-black-900"
                        indicator={
                          <Img
                            className="h-[15px] w-[15px]"
                            src="images/img_download.svg"
                            alt="download"
                          />
                        }
                        isMulti={false}
                        name="weburl"
                        options={weburlOptionsList}
                        isSearchable={false}
                        placeholder="Procuration_PF0088980.pdf"
                      />
                    </div>
                  </div>
                  <PSFCPAMOFORModelePageValidationContratsPageValidationTwoColumnnometprnoms
                    className="bg-white-A700 border border-cyan-900_7f border-solid flex flex-col gap-[5px] items-start justify-start px-5 py-[5px] w-full"
                    validationlevel="Niveau de validation : CGEDS"
                    userreject="Rejeter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PSFCPAMOFORmodelepagevalidationcontratspageValidationTwoPage;
