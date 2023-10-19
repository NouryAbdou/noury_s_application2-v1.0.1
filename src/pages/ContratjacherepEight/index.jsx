import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
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
const relationclientOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientOneOptionsList1 = [
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
const relationclientOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientOneOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientTwoOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientThreeOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientTwoOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContratjacherepEightPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1147px] items-center justify-end mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[2024px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
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
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-[1929px] md:h-auto items-center justify-start p-2.5 w-full">
                    <Button
                      className="cursor-pointer text-center text-xs w-[370px]"
                      color="cyan_900"
                      size="sm"
                      variant="fill"
                    >
                      ENGAGEMENTS DES PARTIES
                    </Button>
                    <div className="flex flex-col gap-[26px] h-[1885px] md:h-auto items-center justify-start max-w-[926px] w-full">
                      <div className="flex flex-col gap-[26px] items-center justify-start w-[81%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start max-w-[744px] w-full">
                              <Input
                                name="price"
                                placeholder="OBLIGATIONS DU DETENTEUR DU DROIT FONCIER"
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
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-3 h-[271px] md:h-auto items-start justify-start max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Vérifier les limites de la parcelle sur le
                                      terrain, en présence du preneur.
                                      <br />
                                      Ne pas autoriser l’exploitation de la
                                      parcelle par quiconque pendant la durée du
                                      contrat.
                                      <br />
                                      Informer les héritiers et la famille du
                                      détenteur du droit foncier de l’existence
                                      du présent contrat ;<br />
                                      Accorder au preneur un nouveau contrat
                                      pour l’exploitation de la parcelle, à
                                      l’issue du présent contrat. Il s’agira
                                      d’un contrat de (préciser le type de
                                      contrat :  location, métayage,
                                      planter-partager, etc).
                                      <br />
                                      Informer le preneur en cas de vente ou de
                                      donation du terrain.
                                    </>
                                  </Text>
                                  <div className="flex flex-col gap-4 items-start justify-start w-[98%] md:w-full">
                                    <div className="flex flex-col items-center justify-start w-2/5 md:w-full">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <SelectBox
                                          className="leading-[normal] text-black-900 text-left text-xs w-full"
                                          placeholderClassName="text-black-900"
                                          isSearchable={false}
                                          placeholder="Autres obligations du détenteur du droit foncier :"
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
                                      alt="group7608"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col h-[433px] md:h-auto items-start justify-start max-w-[744px] w-full">
                                <Input
                                  name="price_One"
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
                                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 h-[409px] md:h-auto items-start justify-start max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                    <Text
                                      className="leading-[20.00px] text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      <>
                                        S’acquitter des obligations mentionnées
                                        à l’article 6.
                                        <br />
                                        Utiliser uniquement le terrain pour les
                                        usages suivants (les usages non
                                        mentionnés ci-dessous sont interdits
                                        sauf accord préalable du détenteur du
                                        droit foncier) :
                                      </>
                                    </Text>
                                    <div className="md:h-[293px] h-[317px] relative w-full">
                                      <div className="flex flex-col h-full items-center justify-start w-[6%]">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <SelectBox
                                            className="w-full"
                                            isSearchable={false}
                                            options={
                                              relationclientOneOptionsList
                                            }
                                            name="relationclient_One"
                                            isMulti={false}
                                          />
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 h-[317px] md:h-auto items-start justify-start max-w-[707px] px-[18px] py-[5px] rounded-md w-full">
                                          <Text
                                            className="text-black-900 text-xs w-auto"
                                            size="txtInterRegular12Black900"
                                          >
                                            Activités principales : Jachère.
                                          </Text>
                                          <div className="flex flex-col gap-2 items-start justify-start w-[98%] md:w-full">
                                            <List
                                              className="flex flex-col gap-2 w-[90%]"
                                              orientation="vertical"
                                            >
                                              <div className="flex flex-col gap-2 items-start justify-start mr-[265px] my-0 w-auto">
                                                <Text
                                                  className="text-black-900 text-xs w-auto"
                                                  size="txtInterRegular12Black900"
                                                >
                                                  Activités associées
                                                </Text>
                                                <div className="flex flex-col gap-2 items-center justify-start w-full">
                                                  <div className="flex flex-row gap-2 items-center justify-start w-[318px]">
                                                    <Text
                                                      className="text-black-900 text-xs w-auto"
                                                      size="txtInterMedium12Black900"
                                                    >
                                                      Légumineuses
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
                                                            options={
                                                              relationclientOptionsList1
                                                            }
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
                                                            options={
                                                              relationclientOneOptionsList1
                                                            }
                                                            isSearchable={false}
                                                            placeholder="NON"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex flex-row gap-2 items-center justify-start w-[318px]">
                                                    <Text
                                                      className="text-black-900 text-xs w-auto"
                                                      size="txtInterMedium12Black900"
                                                    >
                                                      Cultures vivrières
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
                                                            options={
                                                              relationclientTwoOptionsList
                                                            }
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
                                                            options={
                                                              relationclientThreeOptionsList
                                                            }
                                                            isSearchable={false}
                                                            placeholder="NON"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flex flex-col gap-2 items-start justify-start my-0 w-auto sm:w-full">
                                                <Text
                                                  className="text-black-900 text-xs w-auto"
                                                  size="txtInterRegular12Black900"
                                                >
                                                  Autoriser le détenteur du
                                                  droit foncier et sa famille à
                                                  pratiquer sur la parcelle les
                                                  cultures suivantes :
                                                </Text>
                                                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                                                  <div className="flex flex-row gap-2 items-center justify-start w-[318px]">
                                                    <Text
                                                      className="text-black-900 text-xs w-auto"
                                                      size="txtInterMedium12Black900"
                                                    >
                                                      Légumineuses
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
                                                            options={
                                                              relationclientOptionsList2
                                                            }
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
                                                            options={
                                                              relationclientOneOptionsList2
                                                            }
                                                            isSearchable={false}
                                                            placeholder="NON"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex flex-row gap-2 items-center justify-start w-[318px]">
                                                    <Text
                                                      className="text-black-900 text-xs w-auto"
                                                      size="txtInterMedium12Black900"
                                                    >
                                                      Cultures vivrières
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
                                                            options={
                                                              relationclientTwoOptionsList1
                                                            }
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
                                                            options={
                                                              relationclientThreeOptionsList1
                                                            }
                                                            isSearchable={false}
                                                            placeholder="NON"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </List>
                                            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                                              <div className="flex flex-col items-center justify-start w-[26%] md:w-full">
                                                <div className="flex flex-col items-center justify-start w-full">
                                                  <SelectBox
                                                    className="leading-[normal] text-black-900 text-left text-xs w-full"
                                                    placeholderClassName="text-black-900"
                                                    isSearchable={false}
                                                    placeholder="Autres obligations du preneur"
                                                    isMulti={false}
                                                    options={
                                                      relationclientTwoOptionsList2
                                                    }
                                                    name="relationclient_Two"
                                                    size="xs"
                                                  />
                                                </div>
                                              </div>
                                              <Img
                                                className="h-[61px]"
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
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-[101px] md:h-auto items-start justify-center max-w-[923px] p-2.5 w-full">
                        <div className="flex flex-col h-[87px] md:h-auto items-center justify-start max-w-[825px] px-2.5 w-full">
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

export default ContratjacherepEightPage;
