import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, List, SelectBox, Text } from "components";
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

const ContratterrepSixPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1105px] items-center justify-start mx-auto pb-1 w-full"
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
                  <div className="bg-white-A700 flex flex-col md:h-auto p-2.5 relative w-full">
                    <div className="flex flex-col h-[737px] md:h-auto items-center justify-start mx-auto w-full">
                      <div className="flex flex-col h-[737px] md:h-auto items-start justify-center max-w-[770px] w-full">
                        <div className="flex flex-col gap-[15px] h-[652px] md:h-auto items-start justify-start w-full">
                          <List
                            className="flex flex-col gap-[15px] items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-col items-center justify-start w-full">
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
                                        Le détenteur du droit foncier déclare
                                        sur l’honneur :<br />
                                        Que les informations sur son identité
                                        renseignées sur ce contrat sont justes
                                        et sincères.
                                        <br />
                                        Qu’il a la pleine capacité d’exercer ses
                                        droits et obligations.
                                        <br />
                                        Que les droits qu’il dit avoir pour
                                        conclure le présent contrat existent et
                                        sont réguliers et qu’il n’agit pas en
                                        fraude des droits appartenant à sa
                                        famille ou en fraude des droits d’une
                                        autre personne.
                                        <br />
                                        Que le terrain, objet du contrat n’est
                                        pas l’objet d’un autre droit quelconque
                                        profitant à une autre personne.
                                        <br />
                                        Qu’il n’existe aucune restriction ni
                                        aucun obstacle, d’ordre légal ou
                                        conventionnel, à la libre disposition du
                                        bien objet des présentes. 
                                        <br />
                                        <br />
                                        Le planteur déclare sur l’honneur :
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
                            <div className="flex flex-1 flex-col items-center justify-start w-full">
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
                                        En cas de décès du détenteur du droit
                                        foncier, ses héritiers auront les mêmes
                                        obligations que le défunt envers le
                                        planteur et devront respecter le présent
                                        contrat.
                                        <br />
                                        En cas de décès du planteur, ses
                                        héritiers bénéficieront du contrat à la
                                        place du défunt dans les mêmes
                                        conditions ou pourront demander la
                                        rupture du contrat.
                                        <br />
                                        Le planteur ne pourra céder son droit
                                        résultant du présent contrat qu’avec
                                        l’accord exprès du détenteur du droit
                                        foncier. Pour être valable, toute
                                        cession de ses droits au présent contrat
                                        doit être passée et constatée par
                                        écrit. 
                                        <br />
                                        <br />
                                        La résolution des litiges relatifs à
                                        l’interprétation ou l’exécution du
                                        présent contrat doit se faire dans
                                        l’ordre suivant : 
                                        <br />
                                        Recherche d’un règlement à l’amiable
                                        entre les deux parties.
                                        <br />
                                        Saisie de l’instance villageoise
                                        compétente (Comité villageois de gestion
                                        foncière rurale, Chef de Village, etc.)
                                        afin qu’elle tranche le litige si le
                                        litige n’a pas été résolu à l’amiable
                                        entre les 2 parties.
                                        <br />
                                        Saisie du Sous-Préfet de la
                                        Sous-Préfecture où se trouve le terrain
                                        si le litige n’a pas été résolu au
                                        niveau villageois dans les délais
                                        attendus ou si la décision est
                                        contestée.
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
                                      </>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-3 items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
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
                                      Le détenteur du droit foncier met le
                                      terrain, objet du présent contrat, à
                                      disposition du planteur pour la création
                                      d’une plantation avec partage de la terre.
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col h-[200px] md:h-auto items-center justify-start max-w-[777px] w-full">
                                    <div className="md:h-[115px] sm:h-[146px] h-[170px] relative w-full">
                                      <div className="absolute flex flex-col h-[151px] md:h-auto inset-x-[0] items-center justify-start max-w-[775px] mx-auto top-[0] w-full">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <div className="flex flex-col items-center justify-start">
                                            <Text
                                              className="bg-cyan-900 justify-center pb-1.5 pt-0.5 sm:px-5 px-[35px] text-white-A700 text-xs w-[370px]"
                                              size="txtInterRegular12WhiteA700"
                                            >
                                              DURÉE DU CONTRAT
                                            </Text>
                                          </div>
                                          <div className="flex flex-col h-[126px] md:h-auto items-center justify-center max-w-[777px] w-full">
                                            <div className="flex flex-col items-start justify-start w-full">
                                              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[521px] sm:w-full">
                                                <div className="flex flex-col items-center justify-start">
                                                  <Text
                                                    className="text-black-900 text-xs"
                                                    size="txtInterRegular12Black900"
                                                  >
                                                    Le présent contrat est
                                                    conclu pour une durée :{" "}
                                                  </Text>
                                                </div>
                                                <div className="bg-white-A700 border border-gray-300 border-solid h-[31px] rounded-md w-[47%]"></div>
                                              </div>
                                              <div className="flex flex-col items-center justify-start w-full">
                                                <Text
                                                  className="leading-[20.00px] text-black-900 text-xs"
                                                  size="txtInterRegular12Black900"
                                                >
                                                  <>
                                                    à partir de la date de
                                                    signature du présent contrat
                                                    par les 2 parties. 
                                                    <br />
                                                    Le présent contrat prend fin
                                                    au moment du partage de la
                                                    plantation et de la terre. 
                                                  </>
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <CheckBox
                                        className="mx-auto"
                                        inputClassName="absolute mr-[5px]"
                                        name="componentOne"
                                        id="componentOne"
                                      ></CheckBox>
                                    </div>
                                    <CheckBox
                                      className=""
                                      inputClassName="mr-[5px]"
                                      name="componentOne_One"
                                      id="componentOne_One"
                                    ></CheckBox>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col h-[100px] md:h-auto items-center justify-center mt-[-9px] mx-auto p-2.5 w-full z-[1]">
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

export default ContratterrepSixPage;
