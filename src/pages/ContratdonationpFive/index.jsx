import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, SelectBox, Text } from "components";
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

const ContratdonationpFivePage = () => {
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
                      <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1087px] p-2.5 w-full">
                        <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-center max-w-[770px] w-full">
                            <List
                              className="flex flex-col gap-[15px] items-start w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                                <div className="flex flex-col items-center justify-start max-w-[770px] w-full">
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
                                          Le donateur déclare sur l’honneur :
                                          <br />- Que les informations sur son
                                          identité renseignées sur ce contrat
                                          sont justes et sincères.
                                          <br />- Qu’il a la pleine capacité
                                          d’exercer ses droits et obligations.
                                          <br />- Que les droits qu’il dit avoir
                                          pour conclure le présent contrat
                                          existent et sont réguliers et qu’il
                                          n’agit pas en fraude des droits
                                          appartenant à sa famille ou en fraude
                                          des droits d’une autre personne.
                                          <br />- Que le terrain, objet du
                                          contrat n’est pas l’objet d’un autre
                                          droit quelconque profitant à une autre
                                          personne
                                          <br />- Qu’il n’existe aucune
                                          restriction ni aucun obstacle, d’ordre
                                          légal ou conventionnel, à la libre
                                          disposition du bien objet des
                                          présentes.
                                          <br />
                                          Le preneur déclare sur l’honneur :
                                          <br />- Que les informations sur son
                                          identité renseignées sur ce contrat
                                          sont justes et sincères.
                                          <br />- Qu’il a la pleine capacité
                                          d’exercer ses droits et obligations.
                                        </>
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                                <div className="flex flex-col items-center justify-start max-w-[770px] w-full">
                                  <Button
                                    className="cursor-pointer text-center text-xs w-[370px]"
                                    color="cyan_900"
                                    size="sm"
                                    variant="fill"
                                  >
                                    4. DISPOSITIONS GENERALES AU CONTRAT
                                  </Button>
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[130px] md:h-auto items-start justify-center max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                                      <Text
                                        className="leading-[20.00px] text-black-900 text-xs"
                                        size="txtInterRegular12Black900"
                                      >
                                        <>
                                          - Le présent contrat devra être
                                          exécuté de bonne foi par chacune des
                                          deux parties.
                                          <br />- Le donateur s’engage à
                                          informer ses héritiers et sa famille
                                          de l’existence de ce contrat.
                                          <br />- Les deux parties s’engagent à
                                          respecter les us et coutumes du
                                          village liés à la terre.
                                          <br />- Les deux parties doivent
                                          obligatoirement donner une copie du
                                          contrat au Comité Villageois de
                                          Gestion Foncière Rurale (CVGFR).
                                          <br />- Ce contrat, qui traduit les
                                          volontés respectives des deux parties,
                                          est passé dans le but d’éviter toute
                                          contestation future qui pourrait être
                                          soulevée par l’une d’entre elles, par
                                          leur famille ou par leurs héritiers.
                                          <br />- La résolution des litiges
                                          relatifs à l’interprétation ou
                                          l’exécution du présent contrat doit se
                                          faire dans l’ordre suivant :<br />
                                          1) Recherche d’un règlement à
                                          l’amiable entre les deux parties.
                                          <br />
                                          2) Saisie de l’instance villageoise
                                          compétente (CVGFR, Chef de village,
                                          etc.) afin qu’il tranche le litige si
                                          le litige n’a pas été résolu à
                                          l’amiable.
                                          <br />
                                          3) Saisie du Sous-Préfet de la
                                          Sous-Préfecture où se trouve le
                                          terrain si le CVGFR n’a pas tranche le
                                          litige dans les délais ou si sa
                                          décision est contestée.
                                          <br />
                                          4) Saisie du Préfet de la Préfecture
                                          où se trouve le terrain si le
                                          Sous-Préfet n’a pas tranché le litige
                                          dans le délai imparti ou si sa
                                          décision est contestée.
                                          <br />
                                          5) En dernier recours, saisie du
                                          Tribunal compétent si le Préfet n’a
                                          pas tranché dans les délais ou si sa
                                          décision est contestée.
                                        </>
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                                <div className="flex flex-col items-center justify-start max-w-[770px] w-full">
                                  <Button
                                    className="cursor-pointer text-center text-xs w-[370px]"
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
                                        Le donateur donne gratuitement tous ses
                                        droits fonciers sur le terrain objet du
                                        présent contrat au preneur qui
                                        l’accepte. Le donateur n’est donc plus,
                                        de manière définitive, détenteur de
                                        droits fonciers sur ce terrain. Ses
                                        héritiers ne pourront plus revendiquer
                                        de droit sur le terrain.
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </List>
                          </div>
                          <div className="flex flex-col h-[108px] md:h-auto items-start justify-center p-2.5 w-full">
                            <div className="flex flex-col h-[88px] md:h-auto items-center justify-start max-w-[825px] px-2.5 w-full">
                              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-0.5 w-full">
                                <Button
                                  className="common-pointer cursor-pointer font-medium h-10 mb-[3px] md:ml-[0] ml-[291px] text-center text-xs w-[104px]"
                                  onClick={() =>
                                    navigate("/contratdonationpfour")
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
                                    navigate("/contratdonationpsix")
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

export default ContratdonationpFivePage;
