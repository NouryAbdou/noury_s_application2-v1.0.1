import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
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

const ContratventepTwelvePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[988px] items-center justify-start mx-auto pb-0.5 pr-0.5 w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[917px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] mx-auto md:px-5 w-full">
          <Sidebar3 className="!sticky !w-[263px] bg-cyan-900_19 flex h-screen md:hidden justify-start overflow-auto rounded-sm top-[0]" />
          <div className="bg-white-A700 flex flex-1 flex-row gap-[-2px] h-[917px] md:h-auto items-start justify-center w-full">
            <Line className="bg-gray-500 h-[300px] rounded-sm w-1" />
            <Line className="bg-black-900_7f h-[917px] w-px" />
          </div>
          <div className="flex flex-1 flex-col h-[917px] md:h-auto items-start justify-start max-w-[1163px] sm:px-5 px-[30px] w-full">
            <div className="flex flex-col h-[851px] md:h-auto items-start justify-start max-w-[1037px] p-2.5 w-full">
              <div className="flex flex-col h-[842px] md:h-auto items-center justify-start max-w-[1027px] w-full">
                <div className="flex flex-col gap-2.5 h-[842px] md:h-auto items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-center px-2.5 w-full">
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
                  <div className="sm:h-[715px] h-[762px] md:h-[817px] p-2.5 relative w-[1027px] md:w-full">
                    <div className="absolute bg-white-A700 h-[654px] inset-x-[0] mx-auto top-[0] w-full"></div>
                    <div className="absolute flex flex-col gap-5 md:h-auto h-max inset-[0] items-center justify-start m-auto w-full">
                      <div className="flex flex-col h-[644px] md:h-auto items-start justify-center max-w-[797px] w-full">
                        <div className="flex flex-col gap-2.5 h-[644px] md:h-auto items-start justify-start max-w-[785px] w-full">
                          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                            <div className="flex flex-col h-[140px] md:h-auto items-center justify-start max-w-[770px] w-full">
                              <Button
                                className="cursor-pointer text-center text-xs w-[370px]"
                                color="cyan_900"
                                size="sm"
                                variant="fill"
                              >
                                3. DECLARATIONS DES PARTIES
                              </Button>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-center max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Le vendeur déclare sur l’honneur :<br />
                                      -Que les informations sur son identité
                                      renseignées sur ce contrat sont justes et
                                      sincères.
                                      <br />
                                      -Qu’il a la pleine capacité d’exercer ses
                                      droits et obligations.
                                      <br />
                                      -Que les droits qu’il dit avoir pour
                                      conclure le présent contrat existent et
                                      sont réguliers et qu’il n’agit pas en
                                      fraude des droits appartenant à sa famille
                                      ou en fraude des droits d’une autre
                                      personne.
                                      <br />
                                      -Que le terrain, objet du contrat n’est
                                      pas l’objet d’un autre droit quelconque
                                      profitant à une autre personne.
                                      <br />
                                      -Qu’il n’existe aucune restriction ni
                                      aucun obstacle, d’ordre légal ou
                                      conventionnel, à la libre disposition du
                                      bien objet des présentes. 
                                      <br />
                                      <br />
                                      L’acheteur déclare sur l’honneur :
                                      <br />
                                      -Que les informations sur son identité
                                      renseignées sur ce contrat sont justes et
                                      sincères.
                                      <br />
                                      -Qu’il a la pleine capacité d’exercer ses
                                      droits et obligations.
                                    </>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col h-[153px] md:h-auto items-center justify-start max-w-[780px] w-full">
                                <Button
                                  className="cursor-pointer text-center text-xs w-[370px]"
                                  color="cyan_900"
                                  size="sm"
                                  variant="fill"
                                >
                                  4. DISPOSITIONS GENERALES AU CONTRAT
                                </Button>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[129px] md:h-auto items-start justify-center max-w-[774px] px-[18px] py-[5px] rounded-sm w-full">
                                    <Text
                                      className="leading-[20.00px] text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      <>
                                        -Le présent contrat devra être exécuté
                                        de bonne foi par chacune des deux
                                        parties.
                                        <br />
                                        -Le vendeur s’engage à informer ses
                                        héritiers et sa famille de l’existence
                                        de ce contrat.
                                        <br />
                                        -Les deux parties s’engagent à respecter
                                        les us et coutumes du village liés à la
                                        terre.
                                        <br />
                                        -Les deux parties doivent
                                        obligatoirement donner une copie du
                                        contrat au Comité Villageois de Gestion
                                        Foncière Rurale (CVGFR)
                                        <br />
                                        -Ce contrat, qui traduit les volontés
                                        respectives des deux parties, est passé
                                        dans le but d’éviter toute contestation
                                        future qui pourrait être soulevée par
                                        l’une d’entre elles, par leur famille ou
                                        par leurs héritiers. 
                                        <br />
                                        -La résolution des litiges relatifs à
                                        l’interprétation ou l’exécution du
                                        présent contrat doit se faire dans
                                        l’ordre suivant : 
                                        <br />
                                        Recherche d’un règlement à l’amiable
                                        entre les deux parties.
                                        <br />
                                        Saisie de l’instance villageoise
                                        compétente (CVGFR, Chef de Village,
                                        etc.) afin qu’il tranche le litige si le
                                        litige n’a pas été résolu à l’amiable.
                                        <br />
                                        Saisie du Sous-Préfet de la
                                        Sous-Préfecture où se trouve le terrain
                                        si le litige n’a pas été résolu au
                                        niveau villageois dans les délais
                                        attendus ou si la décision est
                                        contestée 
                                        <br />
                                        Saisie du Préfet de la Préfecture où se
                                        trouve le terrain si le Sous-Préfet n’a
                                        pas tranché le litige dans le délai
                                        attendu ou si sa décision est contestée.
                                        <br />
                                        En dernier recours, saisie du Tribunal
                                        compétent si le Préfet n’a pas tranché
                                        le litige dans les délais ou si sa
                                        décision est contestée.
                                        <br />
                                        <br />
                                      </>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[94px] relative w-full">
                              <div className="flex flex-col h-full items-center justify-start m-auto max-w-[780px] w-full">
                                <div className="bg-cyan-900 flex flex-col items-center justify-center px-2.5 py-0.5 w-[370px] sm:w-full">
                                  <Text
                                    className="text-white-A700 text-xs w-auto"
                                    size="txtInterRegular12WhiteA700"
                                  >
                                    5. OBJET DU CONTRAT
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-center max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                                    <Text
                                      className="leading-[20.00px] max-w-[734px] md:max-w-full text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      Le vendeur cède tous ses droits fonciers
                                      sur le terrain objet du présent contrat à
                                      l’acheteur qui l’accepte contre paiement.
                                      Après versement du paiement, le vendeur
                                      n’est donc plus, de manière définitive, le
                                      détenteur de droits fonciers sur ce
                                      terrain. Ses héritiers ne pourront plus
                                      revendiquer de droit sur le terrain.
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto max-w-[780px] w-full">
                                <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                  <Button
                                    className="cursor-pointer h-6 text-center text-xs w-[370px]"
                                    color="cyan_900"
                                    size="sm"
                                    variant="fill"
                                  >
                                    5. OBJET DU CONTRAT
                                  </Button>
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-center max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                                      <Text
                                        className="leading-[20.00px] max-w-[734px] md:max-w-full text-black-900 text-xs"
                                        size="txtInterRegular12Black900"
                                      >
                                        Le vendeur cède tous ses droits fonciers
                                        sur le terrain objet du présent contrat
                                        à l’acheteur qui l’accepte contre
                                        paiement. Après versement du paiement,
                                        le vendeur n’est donc plus, de manière
                                        définitive, le détenteur de droits
                                        fonciers sur ce terrain. Ses héritiers
                                        ne pourront plus revendiquer de droit
                                        sur le terrain.
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col h-[226px] md:h-auto items-center justify-start max-w-[764px] w-full">
                              <Text
                                className="bg-cyan-900 h-[15px] justify-center sm:px-5 px-[35px] text-white-A700 text-xs w-[364px]"
                                size="txtInterRegular12WhiteA700"
                              >
                                6. PRIX DE LA VENTE
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <Input
                                  name="timeZone"
                                  placeholder="Le terrain, objet du présent contrat, est vendu pour un montant de (en chiffres et lettres) :"
                                  className="!placeholder:text-black-900 !text-black-900 p-0 text-left text-xs w-full"
                                  wrapClassName="border border-gray-300 border-solid rounded-sm w-full"
                                  shape="round"
                                  color="white_A700"
                                  size="sm"
                                  variant="fill"
                                ></Input>
                                <List
                                  className="sm:flex-col flex-row gap-2.5 grid md:grid-cols-1 grid-cols-2 justify-center px-2.5 w-full"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-1 md:flex-1 flex-col items-start justify-center w-auto md:w-full">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      Montant en chiffres
                                    </Text>
                                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[35px] md:h-auto items-start justify-center px-[18px] py-[5px] rounded-md w-full sm:w-full">
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
                                  <div className="flex flex-1 md:flex-1 flex-col items-start justify-center w-auto md:w-full">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      Montant en lettres
                                    </Text>
                                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[35px] md:h-auto items-start justify-center px-[18px] py-[5px] rounded-md w-full sm:w-full">
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
                                </List>
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-center max-w-[759px] px-[18px] py-[7px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Ce montant sera payé au vendeur. Après
                                      paiement, l’acheteur est dégagé de toute
                                      obligation financière envers le vendeur.
                                      <br />
                                      La totalité du paiement devra être
                                      effectuée avant le :{" "}
                                    </>
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start px-2.5 w-full">
                                  <div className="flex flex-col items-start justify-center w-auto">
                                    <Text
                                      className="text-black-900 text-xs w-auto"
                                      size="txtInterRegular12Black900"
                                    >
                                      Date
                                    </Text>
                                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[35px] md:h-auto items-start justify-center px-[18px] py-[5px] rounded-md w-[370px] sm:w-full">
                                      <div className="flex flex-row gap-0.5 h-[23px] md:h-auto items-center justify-start w-full">
                                        <Text
                                          className="text-black-900_b2 text-xs w-auto"
                                          size="txtInterRegular12"
                                        >
                                          jj/mm/aaaa
                                        </Text>
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_calendar.svg"
                                          alt="calendar"
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
                      <div className="flex flex-col h-[88px] md:h-auto items-start justify-center p-2.5 w-full">
                        <div className="flex flex-col h-[78px] md:h-auto items-center justify-start max-w-[825px] px-2.5 w-full">
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
                            className="common-pointer cursor-pointer font-medium h-[31px] text-center text-xs w-[114px]"
                            onClick={() => navigate("/contrats")}
                            shape="round"
                            color="cyan_900"
                            size="md"
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

export default ContratventepTwelvePage;
