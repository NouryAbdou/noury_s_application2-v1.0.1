import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
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

const ContratcessionpFivePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1105px] items-center justify-start mx-auto pb-1 w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[1041px] md:h-auto items-start justify-start max-w-[1440px] w-full">
          <Sidebar className="!sticky !w-[267px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-white-A700 flex flex-col h-[1041px] md:h-auto items-start justify-start mt-1 px-5 w-[263px]">
              <ContratventePThirteenColumnclarificationDesRGlesDeDroitEtDesProcDuresDeSCurisationFonciRe
                className="flex flex-col gap-2.5 items-start justify-start py-2.5 w-full"
                certificationfonciere="CERTIFICATION FONCIERE (CF)"
              />
            </div>
            <div className="bg-white-A700 h-[831px] mb-[214px] ml-1 w-[1%]"></div>
          </Sidebar>
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
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-[926px] md:h-auto items-center justify-start p-2.5 w-full">
                    <div className="flex flex-col h-[759px] md:h-auto items-center justify-start w-full">
                      <div className="flex flex-col h-[744px] md:h-auto items-start justify-center max-w-[770px] w-full">
                        <div className="flex flex-col gap-[15px] h-[744px] md:h-auto items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
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
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[257px] md:h-auto items-start justify-start max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Le cédant déclare sur l’honneur :<br />
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
                                      Que le terrain, objet du contrat n’est pas
                                      l’objet d’un autre droit quelconque
                                      profitant à une autre personne.
                                      <br />
                                      Qu’il n’existe aucune restriction ni aucun
                                      obstacle, d’ordre légal ou conventionnel,
                                      à la libre disposition du bien objet des
                                      présentes. 
                                      <br />
                                      <br />
                                      Le preneur déclare sur l’honneur :
                                      <br />
                                      Que les informations sur son identité
                                      renseignées sur ce contrat sont justes et
                                      sincères.
                                      <br />
                                      Qu’il a la pleine capacité d’exercer ses
                                      droits et obligations.
                                    </>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col h-[245px] md:h-auto items-center justify-start max-w-[770px] w-full">
                              <Button
                                className="cursor-pointer text-center text-xs w-[370px]"
                                color="cyan_900"
                                size="sm"
                                variant="fill"
                              >
                                4. DISPOSITIONS GENERALES AU CONTRAT
                              </Button>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[221px] md:h-auto items-start justify-center max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                                  <Text
                                    className="leading-[20.00px] text-black-900 text-xs"
                                    size="txtInterRegular12Black900"
                                  >
                                    <>
                                      Le présent contrat devra être exécuté de
                                      bonne foi par chacune des deux parties.
                                      <br />
                                      Le cédant s’engage à informer ses
                                      héritiers et sa famille de l’existence de
                                      ce contrat.
                                      <br />
                                      Les deux parties s’engagent à respecter
                                      les us et coutumes du village liés à la
                                      terre.
                                      <br />
                                      Les deux parties doivent obligatoirement
                                      donner une copie du contrat au Comité
                                      Villageois de Gestion Foncière Rurale
                                      (CVGFR)
                                      <br />
                                      Ce contrat, qui traduit les volontés
                                      respectives des deux parties, est passé
                                      dans le but d’éviter toute contestation
                                      future qui pourrait être soulevée par
                                      l’une d’entre elles, par leur famille ou
                                      par leurs héritiers. 
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
                                      compétente (CVGFR, Chef de Village, etc.)
                                      afin qu’il tranche le litige si le litige
                                      n’a pas été résolu à l’amiable.
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
                                      attendu ou si sa décision est contestée
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
                          <div className="flex flex-col items-center justify-end w-full">
                            <div className="flex flex-col items-center justify-end w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                                  <Button
                                    className="cursor-pointer h-[25px] text-center text-xs w-[370px]"
                                    color="cyan_900"
                                    size="sm"
                                    variant="fill"
                                  >
                                    5. OBJET DU CONTRAT
                                  </Button>
                                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 h-[157px] md:h-auto items-start justify-start max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                                    <Text
                                      className="text-black-900 text-xs w-full"
                                      size="txtInterRegular12Black900"
                                    >
                                      Conformément aux dispositions du contrat
                                      de planter-partager avec partage de la
                                      terre en date du
                                    </Text>
                                    <Input
                                      name="frame7857"
                                      placeholder="jj/mm/aaaa"
                                      className="leading-[normal] p-0 placeholder:text-black-900_b2 text-left text-xs w-full"
                                      wrapClassName="border border-gray-300 border-solid flex md:h-auto rounded-md w-[362px]"
                                      suffix={
                                        <Img
                                          className="h-5 ml-[35px] my-auto"
                                          src="images/img_calendar.svg"
                                          alt="calendar"
                                        />
                                      }
                                      shape="round"
                                      color="white_A700"
                                      size="sm"
                                      variant="fill"
                                    ></Input>
                                    <Text
                                      className="leading-[20.00px] text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      <>
                                        Le cédant abandonne, sans contrepartie
                                        financière, son droit foncier sur le
                                        terrain objet du présent contrat au
                                        preneur qui l’accepte.
                                        <br />
                                        Le cédant n’est donc plus, de manière
                                        définitive, détenteur de droits fonciers
                                        sur ce terrain. Ses héritiers ne
                                        pourront plus revendique
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

export default ContratcessionpFivePage;
