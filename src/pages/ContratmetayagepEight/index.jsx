import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
} from "components";
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

const ContratmetayagepEightPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1281px] items-center justify-start mx-auto pb-[88px] w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[1124px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <Sidebar3 className="!sticky !w-[263px] bg-cyan-900_19 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-sm top-[0]" />
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
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-[1029px] md:h-auto items-center justify-start p-2.5 w-full">
                    <Button
                      className="cursor-pointer text-center text-xs w-[370px]"
                      color="cyan_900"
                      size="sm"
                      variant="fill"
                    >
                      ENGAGEMENTS DES PARTIES
                    </Button>
                    <div className="flex flex-col gap-7 h-[985px] md:h-auto items-center justify-start max-w-[926px] w-full">
                      <div className="flex flex-col gap-7 items-start justify-start w-[88%] md:w-full">
                        <div className="flex flex-col gap-2.5 items-center justify-start w-[92%] md:w-full">
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
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-center max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Installer le métayer
                                      <br />
                                      Veiller aux bonnes conditions pour une
                                      exécution paisible et tranquille des
                                      activités mises en œuvre par le métayer ; 
                                      <br />
                                      Informer les héritiers et la famille du
                                      détenteur du droit foncier de l’existence
                                      du présent contrat ;
                                      <br />
                                      Informer le métayer en cas de donation de
                                      la terre ;<br />
                                      Informer prioritairement le métayer en cas
                                      de vente de la parcelle pendant la durée
                                      du contrat .
                                    </>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-[38%] md:w-full">
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
                              className="h-[61px]"
                              src="images/img_group7608.svg"
                              alt="group7608"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col h-[116px] md:h-auto items-start justify-start max-w-[744px] w-full">
                              <div
                                className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-6 items-center justify-start px-2.5 py-0.5 w-[370px] sm:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_psfchome.png')",
                                }}
                              >
                                <Text
                                  className="text-cyan-900 text-xs w-auto"
                                  size="txtInterBold12"
                                >
                                  OBLIGATIONS DU MÉTAYER
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[82px] md:h-auto items-start justify-center max-w-[744px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Entretenir la parcelle et restituer le
                                      terrain en bon état d’entretien à la fin
                                      du contrat.
                                      <br />
                                      Respecter et faire respecter par ses
                                      employés les us et coutumes du village.
                                      <br />
                                      Ne pas invoquer une perte de production en
                                      vue d&#39;obtenir une modification du
                                      partage de la récolte, sauf en cas de
                                      force majeure.
                                      <br />
                                      Informer le détenteur du droit foncier au
                                      moment des activités de récolte.
                                      <br />
                                      Ne sous-louer le terrain, en totalité ou
                                      en partie, qu’avec le consentement écrit
                                      du détenteur du droit foncier
                                    </>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[26px] items-start justify-center max-w-[813px] w-full">
                          <Text
                            className="leading-[20.00px] text-black-900 text-xs"
                            size="txtInterRegular12Black900"
                          >
                            <>
                              Utiliser uniquement le terrain pour les usages
                              suivants (les usages non mentionnés ci-dessous
                              sont interdits, sauf accord préalablement obtenu
                              de la part du détenteur du droit foncier) :
                              <br />
                              (Cocher les cases pertinentes suivantes ou
                              supprimer les options non pertinentes)
                            </>
                          </Text>
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
                          <div className="flex flex-col gap-3.5 items-start justify-start w-[92%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-[24%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <SelectBox
                                  className="leading-[normal] pr-[3px] text-black-900 text-left text-xs w-full"
                                  placeholderClassName="text-black-900"
                                  isSearchable={false}
                                  placeholder="Autres obligations du métayer "
                                  isMulti={false}
                                  options={relationclientOneOptionsList}
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
                      <div className="flex flex-col h-[103px] md:h-auto items-start justify-center max-w-[923px] p-2.5 w-full">
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

export default ContratmetayagepEightPage;