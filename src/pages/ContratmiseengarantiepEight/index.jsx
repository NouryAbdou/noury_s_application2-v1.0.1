import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  List,
  SelectBox,
  Text,
} from "components";
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
const relationclientOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientOneOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const descriptionFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContratmiseengarantiepEightPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[2105px] items-center justify-start mx-auto pb-3 w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[2024px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <div className="bg-white-A700 flex flex-col h-[1041px] md:h-auto items-start justify-start px-5 w-[263px]">
            <ContratventePThirteenColumnclarificationDesRGlesDeDroitEtDesProcDuresDeSCurisationFonciRe className="flex flex-col gap-2.5 items-start justify-start py-2.5 w-full" />
          </div>
          <Img
            className="h-full w-1"
            src="images/img_scrollbar.svg"
            alt="scrollbar"
          />
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
                                placeholder="8.1 OBLIGATIONS DU DETENTEUR DU DROIT FONCIER"
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
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 h-[246px] md:h-auto items-start justify-start max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Installer le planteur sur le terrain
                                      <br />
                                      Veiller aux bonnes conditions pour une
                                      exécution paisible et tranquille des
                                      activités mises en œuvre par le
                                      locataire  
                                      <br />
                                      Procéder au partage de la terre à
                                      l’échéance prévue à l’article 7 ;
                                      <br />
                                      Informer les héritiers et la famille du
                                      détenteur du droit foncier de l’existence
                                      du présent contrat;
                                      <br />
                                      Ne pas vendre ou donner le terrain avant
                                      le partage de la terre.
                                    </>
                                  </Text>
                                  <div className="flex flex-col gap-[22px] items-start justify-start w-[98%] md:w-full">
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
                                      className="h-[76px]"
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
                              <div className="flex flex-col items-start justify-start max-w-[744px] w-full">
                                <Input
                                  name="price_One"
                                  placeholder="8.2OBLIGATIONS DE L’EMPRUNTEUR"
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
                                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 h-[231px] md:h-auto items-start justify-start max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                    <Text
                                      className="leading-[20.00px] text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      <>
                                        Ne pas céder son droit d’exploitation de
                                        la parcelle à un tiers avant la fin du
                                        contrat ;
                                        <br />
                                        L’emprunteur s’engage à informer ses
                                        héritiers et sa famille de l’existence
                                        de ce contrat.
                                        <br />
                                        Informer le détenteur du droit foncier
                                        du présent contrat et obtenir son
                                        consentement écrit avant la signature du
                                        contrat (s’il n’est pas lui-même le
                                        détenteur du droit foncier) ;
                                      </>
                                    </Text>
                                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                                      <div className="flex flex-col items-center justify-start w-[6%] md:w-full">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <SelectBox
                                            className="leading-[normal] text-black-900 text-left text-xs w-full"
                                            placeholderClassName="text-black-900"
                                            isSearchable={false}
                                            placeholder="Autres"
                                            isMulti={false}
                                            options={
                                              relationclientOneOptionsList
                                            }
                                            name="relationclient_One"
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
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col h-[564px] md:h-auto items-start justify-start max-w-[744px] w-full">
                              <Input
                                name="price_Two"
                                placeholder="8.3 OBLIGATIONS DU PRETEUR"
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
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 h-[522px] md:h-auto items-start justify-start max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Verser à l’emprunteur la somme prévue au
                                      contrat ;
                                      <br />
                                      Permettre au détenteur du droit foncier et
                                      à l’emprunteur de visiter la parcelle ;
                                      <br />
                                      Restituer le terrain en bon état
                                      d’entretien à la fin du contrat ;
                                      <br />
                                      Utiliser uniquement le terrain pour les
                                      usages suivants (les usages non mentionnés
                                      ci-dessous sont interdits sauf accord
                                      préalablement obtenu de la part du
                                      détenteur du droit foncier) :
                                      <br />
                                      (Cocher les cases pertinentes suivantes)
                                    </>
                                  </Text>
                                  <div className="overflow-x-auto w-full">
                                    <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                                      <CheckBox
                                        className="text-[13px] text-gray-700 text-left"
                                        inputClassName="mr-[5px]"
                                        name="gardermasession"
                                        id="gardermasession"
                                        label=" Cultures vivrières ou fourragères (Précision éventuelle sur les types de cultures vivrières autorisées) :"
                                        shape="square"
                                        size="md"
                                      ></CheckBox>
                                      <CheckBox
                                        className="text-[13px] text-gray-700 text-left"
                                        inputClassName="mr-[5px]"
                                        name="gardermasession_One"
                                        id="gardermasession_One"
                                        label="Cultures pérennes (Précision éventuelle sur les types de cultures pérennes autorisées) :"
                                        shape="square"
                                        size="md"
                                      ></CheckBox>
                                      <CheckBox
                                        className="text-[13px] text-gray-700 text-left"
                                        inputClassName="mr-[5px]"
                                        name="gardermasession_Two"
                                        id="gardermasession_Two"
                                        label="Autres activités (préciser) :"
                                        shape="square"
                                        size="md"
                                      ></CheckBox>
                                      <div className="flex flex-col gap-3.5 items-start justify-start w-[91%] md:w-full">
                                        <div className="flex flex-col items-center justify-start w-[26%] md:w-full">
                                          <div className="flex flex-col items-center justify-start w-full">
                                            <SelectBox
                                              className="leading-[normal] text-black-900 text-left text-xs w-full"
                                              placeholderClassName="text-black-900"
                                              isSearchable={false}
                                              placeholder="Autres obligations du prêteur"
                                              isMulti={false}
                                              options={
                                                relationclientTwoOptionsList
                                              }
                                              name="relationclient_Two"
                                              size="xs"
                                            />
                                          </div>
                                        </div>
                                        <Img
                                          className="h-[61px]"
                                          src="images/img_group7608.svg"
                                          alt="group7608_Two"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start max-w-[744px] w-full">
                                <Input
                                  name="price_Three"
                                  placeholder="8.2OBLIGATIONS DE L’EMPRUNTEUR"
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
                                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 h-[412px] md:h-auto items-start justify-start max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                    <List
                                      className="flex flex-col gap-2 items-center w-full"
                                      orientation="vertical"
                                    >
                                      <div className="flex flex-1 flex-col h-6 md:h-auto items-center justify-start max-w-[707px] py-[9px] w-full">
                                        <div className="flex md:flex-col flex-row gap-[19px] items-start justify-center w-auto">
                                          <Text
                                            className="text-black-900 text-xs w-[519px]"
                                            size="txtInterMedium12Black900"
                                          >
                                            Est-il prévu qu’un loyer soit versé
                                            au détenteur du droit foncier au
                                            cours du présent contrat
                                          </Text>
                                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                            <div className="flex flex-col h-[21px] md:h-auto items-center justify-start w-auto">
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
                                                  name="relationclient"
                                                  options={
                                                    relationclientOptionsList1
                                                  }
                                                  isSearchable={false}
                                                  placeholder="OUI"
                                                />
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start w-[51%]">
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
                                      </div>
                                      <div className="flex flex-1 flex-col h-6 md:h-auto items-center justify-center max-w-[707px] py-[9px] w-full">
                                        <div className="flex flex-row gap-[15px] items-center justify-start max-w-[707px] w-full">
                                          <Text
                                            className="text-black-900 text-xs w-[163px]"
                                            size="txtInterMedium12Black900"
                                          >
                                            Si oui le loyer sera payé par :
                                          </Text>
                                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                            <div className="flex flex-col h-[23px] md:h-auto items-center justify-center w-auto">
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
                                                  name="relationclient"
                                                  options={
                                                    relationclientOptionsList2
                                                  }
                                                  isSearchable={false}
                                                  placeholder="L’emprunteur"
                                                />
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start w-[45%]">
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
                                                  name="relationclient_One"
                                                  options={
                                                    relationclientOneOptionsList2
                                                  }
                                                  isSearchable={false}
                                                  placeholder="Le prêteur"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 flex-col h-6 md:h-auto items-center justify-center max-w-[707px] py-[9px] w-full">
                                        <div className="flex flex-row gap-7 items-center justify-start max-w-[707px] w-full">
                                          <Text
                                            className="text-black-900 text-xs w-[150px]"
                                            size="txtInterMedium12Black900"
                                          >
                                            Le loyer est payé de façon
                                          </Text>
                                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                            <div className="flex flex-col h-[23px] md:h-auto items-center justify-center w-auto">
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
                                                  name="relationclient"
                                                  options={
                                                    relationclientOptionsList3
                                                  }
                                                  isSearchable={false}
                                                  placeholder="Mensuelle"
                                                />
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start w-[47%]">
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
                                                  name="relationclient_One"
                                                  options={
                                                    relationclientOneOptionsList3
                                                  }
                                                  isSearchable={false}
                                                  placeholder="Annuelle"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </List>
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <div className="flex flex-col items-start justify-start max-w-[704px] ml-0.5 md:ml-[0] w-full">
                                        <Text
                                          className="text-black-900 text-xs w-auto"
                                          size="txtInterRegular12Black900"
                                        >
                                          La somme du loyer est de
                                        </Text>
                                      </div>
                                      <List
                                        className="flex flex-col gap-[23px] mt-1 w-[87%]"
                                        orientation="vertical"
                                      >
                                        <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-[613px] md:w-full">
                                          <div className="flex flex-col items-center justify-start w-[73px]">
                                            <Text
                                              className="text-black-900 text-xs w-auto"
                                              size="txtInterRegular12Black900"
                                            >
                                              En chiffre
                                            </Text>
                                          </div>
                                          <div className="bg-white-A700 border border-gray-300 border-solid h-[31px] rounded-md w-[85%]"></div>
                                        </div>
                                        <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-[615px] md:w-full">
                                          <div className="flex flex-col items-center justify-start w-[74px]">
                                            <Text
                                              className="text-black-900 text-xs w-auto"
                                              size="txtInterRegular12Black900"
                                            >
                                              En lettre
                                            </Text>
                                          </div>
                                          <div className="bg-white-A700 border border-gray-300 border-solid h-[31px] rounded-md w-[85%]"></div>
                                        </div>
                                      </List>
                                    </div>
                                    <Text
                                      className="leading-[20.00px] max-w-[698px] md:max-w-full text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      Si le contrat prend fin entre deux
                                      échéances du loyer, une part de loyer doit
                                      être versée au détenteur du droit foncier.
                                      Cette part de loyer est calculée
                                      proportionnellement au ratio du nombre de
                                      jours écoulés depuis la dernière échéance
                                      de loyer sur le nombre de jours entre 2
                                      échéances.
                                    </Text>
                                    <div className="flex flex-col gap-3.5 items-start justify-start w-[97%] md:w-full">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <SelectBox
                                            className="leading-[normal] text-black-900 text-left text-xs w-full"
                                            placeholderClassName="text-black-900"
                                            isSearchable={false}
                                            placeholder="Si une révision du montant du loyer est prévue, en préciser les conditions (fréquence de révision, indexation du prix, etc.)"
                                            isMulti={false}
                                            options={descriptionFourOptionsList}
                                            name="description_Four"
                                            size="xs"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        className="h-[61px]"
                                        src="images/img_group7608.svg"
                                        alt="group7608_Three"
                                      />
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

export default ContratmiseengarantiepEightPage;
