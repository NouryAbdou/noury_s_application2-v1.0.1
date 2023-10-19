import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar5 from "components/Sidebar5";

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

const ContratmiseengarantiepSevenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1101px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[1041px] md:h-auto items-start justify-start max-w-[1440px] w-full">
          <Sidebar5 className="!sticky !w-[263px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="bg-white-A700 flex flex-1 flex-row gap-[-2px] h-[831px] md:h-auto items-start justify-center md:px-5 w-full">
            <Line className="bg-gray-500 h-[300px] rounded-sm w-1" />
            <Line className="bg-black-900_7f h-[831px] w-px" />
          </div>
          <div className="flex flex-1 flex-col h-full items-start justify-start md:px-5 px-[30px] w-full">
            <div className="flex flex-col h-full items-start justify-start p-2.5 w-full">
              <div className="flex flex-col h-[1021px] md:h-auto items-center justify-start w-full">
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
                  <div className="bg-white-A700 flex flex-col h-[936px] md:h-auto items-center justify-start p-2.5 w-full">
                    <div className="flex flex-col h-[818px] md:h-auto items-center justify-start w-full">
                      <div className="flex flex-col h-[804px] md:h-auto items-start justify-center max-w-[770px] w-full">
                        <div className="flex flex-col gap-[23px] h-[804px] md:h-auto items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col h-[348px] md:h-auto items-center justify-start max-w-[770px] w-full">
                              <Button
                                className="cursor-pointer text-center text-xs w-[370px]"
                                color="cyan_900"
                                size="sm"
                                variant="fill"
                              >
                                4. DISPOSITIONS GENERALES AU CONTRAT
                              </Button>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[324px] md:h-auto items-start justify-center max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Le présent contrat devra être exécuté de
                                      bonne foi par chacune des deux parties.
                                      <br />
                                      Les deux parties s’engagent à respecter
                                      les us et coutumes du village.
                                      <br />
                                      Si un Comité Villageois de Gestion
                                      Foncière Rurale (CVGFR) existe dans le
                                      village, les deux parties doivent
                                      obligatoirement lui donner une copie du
                                      contrat. 
                                      <br />
                                      Si l’une des deux parties ne respecte pas
                                      ses obligations, l’autre peut demander la
                                      rupture du contrat.
                                      <br />
                                      La résiliation du contrat peut se faire
                                      avec l&#39;accord des parties avant la fin
                                      du contrat.
                                      <br />
                                      En cas de décès de l’emprunteur, ses
                                      héritiers auront les mêmes obligations que
                                      le défunt envers le prêteur et devront
                                      respecter le présent contrat.
                                      <br />
                                      En cas de décès du prêteur, ses héritiers
                                      bénéficieront du contrat à la place du
                                      défunt dans les mêmes conditions ou
                                      pourront demander la rupture du contrat.
                                      <br />
                                      Le prêteur ne pourra céder son droit
                                      résultant du présent contrat qu’avec
                                      l’accord exprès du détenteur du droit sur
                                      la parcelle. Pour être valable, toute
                                      cession doit être passée et constatée par
                                      écrit. 
                                      <br />
                                      <br />
                                      La résolution des litiges relatifs à
                                      l’interprétation ou l’exécution du présent
                                      contrat doit se faire dans l’ordre
                                      suivant : 
                                      <br />
                                      Recherche d’un règlement à l’amiable entre
                                      les deux parties.
                                      <br />
                                      Saisie de l’instance villageoise
                                      compétente (Comité villageois de gestion
                                      foncière rurale, Chef de Village, etc.)
                                      afin qu’elle tranche le litige si le
                                      litige n’a pas été résolu à l’amiable
                                      entre les 2 parties.
                                      <br />
                                      Saisie du Sous-Préfet de la
                                      Sous-Préfecture où se trouve le terrain si
                                      le litige n’a pas été résolu au niveau
                                      villageois dans les délais attendus ou si
                                      la décision est contestée.
                                      <br />
                                      Saisie du Préfet de la Préfecture où se
                                      trouve le terrain si le Sous-Préfet n’a
                                      pas tranché le litige dans le délai
                                      attendu ou si sa décision est contestée.
                                      <br />
                                      En dernier recours, saisie du Tribunal
                                      compétent si le Préfet n’a pas tranché le
                                      litige dans les délais ou si sa décision
                                      est contestée.
                                    </>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Button
                              className="cursor-pointer h-[26px] text-center text-xs w-[369px]"
                              color="cyan_900"
                              size="sm"
                              variant="fill"
                            >
                              5. OBJET DU CONTRAT
                            </Button>
                            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[54px] md:h-auto items-start justify-center max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                              <Text
                                className="leading-[20.00px] max-w-[734px] md:max-w-full text-black-900 text-xs"
                                size="txtInterRegular12Black900"
                              >
                                L’emprunteur met en garantie la parcelle en
                                production objet du présent contrat contre
                                l’obtention d’un prêt consenti par le prêteur.
                                Ce dernier bénéficie des fruits de la parcelle
                                en production pendant toute la durée du contrat.
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col h-[39px] md:h-auto items-center justify-start max-w-[770px] w-full">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="bg-cyan-900 justify-center pb-1.5 pt-0.5 sm:px-5 px-[35px] text-white-A700 text-xs w-[370px]"
                                      size="txtInterRegular12WhiteA700"
                                    >
                                      MONTANT DU PRÊT CONSENTI
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col items-start justify-start max-w-[765px] ml-0.5 md:ml-[0] w-full">
                                <Text
                                  className="text-black-900 text-xs w-auto"
                                  size="txtInterRegular12Black900"
                                >
                                  La somme du prêt (montant en chiffres et en
                                  lettres) est de
                                </Text>
                              </div>
                              <List
                                className="flex flex-col gap-[23px] mt-1 w-[81%]"
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
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col h-[126px] md:h-auto items-center justify-center max-w-[777px] w-full">
                              <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                                <div className="flex flex-col gap-[38px] justify-start w-full">
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[196px]">
                                    <Text
                                      className="bg-cyan-900 justify-center pb-1.5 pt-0.5 sm:px-5 px-[35px] text-white-A700 text-xs w-[370px]"
                                      size="txtInterRegular12WhiteA700"
                                    >
                                      DURÉE DU CONTRAT
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between max-w-[700px] w-full">
                                      <div className="flex flex-col items-center justify-start">
                                        <Text
                                          className="text-black-900 text-xs"
                                          size="txtInterRegular12Black900"
                                        >
                                          Le prêteur bénéficie des fruits de la
                                          parcelle pendant une durée maximum de
                                        </Text>
                                      </div>
                                      <div className="bg-white-A700 border border-gray-300 border-solid h-[31px] rounded-md w-[32%]"></div>
                                    </div>
                                    <div className="flex flex-col items-center justify-start mt-[3px]">
                                      <Text
                                        className="text-black-900 text-xs"
                                        size="txtInterRegular12Black900"
                                      >
                                        Si l’emprunteur rembourse la totalité du
                                        prêt avant le durée prévue, un accord
                                        devra être trouvé par les parties. 
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

export default ContratmiseengarantiepSevenPage;
