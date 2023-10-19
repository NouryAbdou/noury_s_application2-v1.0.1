import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, SelectBox, Text } from "components";
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
const timeZoneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const descriptionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const relationclientOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContratjacherepSixPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1285px] items-center justify-end mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[1812px] md:h-auto items-start justify-start max-w-[1440px] w-full">
          <Sidebar4 className="!sticky !w-[267px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col h-full items-start justify-start md:px-5 px-[30px] w-full">
            <div className="flex flex-col h-full items-start justify-start p-2.5 w-full">
              <div className="flex flex-col h-[1802px] md:h-auto items-center justify-start w-full">
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
                  <div className="md:h-[1130px] h-[1188px] p-2.5 relative w-full">
                    <div className="absolute bg-white-A700 h-[1130px] inset-x-[0] mx-auto top-[0] w-full"></div>
                    <div className="absolute h-[1178px] md:h-[796px] sm:h-[995px] inset-[0] m-auto w-full">
                      <div className="absolute flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto max-w-[770px] w-full">
                        <div className="flex flex-col gap-[15px] h-[922px] md:h-auto items-start justify-start w-full">
                          <List
                            className="flex flex-col gap-[15px] items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-col items-center justify-start w-full">
                              <div className="flex flex-col h-[252px] md:h-auto items-center justify-start max-w-[770px] w-full">
                                <Button
                                  className="cursor-pointer text-center text-xs w-[370px]"
                                  color="cyan_900"
                                  size="sm"
                                  variant="fill"
                                >
                                  3. DECLARATIONS DES PARTIES
                                </Button>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[228px] md:h-auto items-start justify-start max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
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
                                        Le preneur déclare sur l’honneur :
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
                                        Le preneur peut demander la rupture du
                                        contrat si sa situation de santé ou
                                        familiale l’empêche de respecter ses
                                        engagements. 
                                        <br />
                                        En cas de décès du détenteur du droit
                                        foncier, ses héritiers auront les mêmes
                                        obligations que le défunt envers le
                                        preneur et devront respecter le présent
                                        contrat.
                                        <br />
                                        En cas de décès du preneur, ses
                                        héritiers bénéficieront du contrat à la
                                        place du défunt dans les mêmes
                                        conditions ou pourront demander la
                                        rupture du contrat.
                                        <br />
                                        Si le détenteur du droit foncier vend ou
                                        donne la terre qu’il a mise à la
                                        disposition du preneur, l&#39;acquéreur
                                        ne peut expulser le preneur. Le contrat
                                        entre le preneur et le détenteur initial
                                        du droit foncier est reconduit entre le
                                        preneur et l’acquéreur, dans les termes
                                        en vigueur au moment de la vente ou du
                                        don.
                                        <br />
                                        Le preneur ne pourra céder son droit
                                        résultant du présent contrat qu’avec
                                        l’accord exprès du détenteur du droit
                                        foncier. Pour être valable, toute
                                        cession doit être passée et constatée
                                        par écrit. 
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
                                        compétente (CVGFR, Chef de Village,
                                        etc.) afin qu’elle tranche le litige si
                                        le litige n’a pas été résolu à l’amiable
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
                            <div className="flex flex-1 flex-col items-center justify-start w-full">
                              <Button
                                className="cursor-pointer h-[34px] text-center text-xs w-[369px]"
                                color="cyan_900"
                                size="md"
                                variant="fill"
                              >
                                5. OBJET DU CONTRAT
                              </Button>
                              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[71px] md:h-auto items-start justify-center max-w-[769px] px-[18px] py-[5px] rounded-sm w-full">
                                <Text
                                  className="leading-[20.00px] max-w-[733px] md:max-w-full text-black-900 text-xs"
                                  size="txtInterRegular12Black900"
                                >
                                  Le détenteur du droit foncier et le preneur
                                  s’entendent sur les conditions du maintien en
                                  jachère de la parcelle objet du présent
                                  contrat.
                                </Text>
                              </div>
                            </div>
                          </List>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Button
                              className="cursor-pointer h-[34px] text-center text-xs w-[369px]"
                              color="cyan_900"
                              size="md"
                              variant="fill"
                            >
                              CONTRE PARTIE
                            </Button>
                            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 h-[331px] md:h-auto items-start justify-start max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                              <Text
                                className="text-black-900 text-xs w-full"
                                size="txtInterRegular12Black900"
                              >
                                (Cocher une seule des cases suivantes)
                              </Text>
                              <div className="flex flex-col items-center justify-start w-[77%] md:w-full">
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
                                    name="timeZone"
                                    options={timeZoneOptionsList}
                                    isSearchable={false}
                                    placeholder="La parcelle est maintenue en jachère gratuitement. Aucune contrepartie financière n’est exigée."
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <SelectBox
                                          className="w-full"
                                          getOptionLabel={(e) => (
                                            <div className="flex items-center">
                                              <Img
                                                className="h-5 mr-[35px]"
                                                src="images/img_downarrow24.svg"
                                                alt="down arrow / 24 / Outline"
                                              />
                                              <span>{e.label}</span>
                                            </div>
                                          )}
                                          isMulti={false}
                                          name="relationclient"
                                          isSearchable={false}
                                          options={relationclientOptionsList}
                                          size="md"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[680px] w-full">
                                  <Text
                                    className="text-black-900 text-xs w-auto"
                                    size="txtInterRegular12Black900"
                                  >
                                    Le montant de la prime versée à la signature
                                    du contrat est de
                                  </Text>
                                  <Img
                                    className="h-[35px] w-[145px]"
                                    src="images/img_group7608.svg"
                                    alt="frame7608"
                                  />
                                  <Text
                                    className="text-black-900 text-center text-xs w-auto"
                                    size="txtInterRegular12Black900"
                                  >
                                    FCFA
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
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
                                        name="description"
                                        options={descriptionOptionsList}
                                        isSearchable={false}
                                        placeholder="La parcelle est maintenue en jachère contre le versement par le preneur de primes de jachère à la signature du présent contrat et chaque année."
                                      />
                                      <div className="flex flex-col items-start justify-start mt-[5px] w-auto md:w-full">
                                        <div className="flex sm:flex-col flex-row sm:gap-5 h-[43px] md:h-auto items-center justify-start max-w-[720px] w-full">
                                          <Text
                                            className="text-black-900 text-xs w-auto"
                                            size="txtInterRegular12Black900"
                                          >
                                            Le montant de la prime versée à la
                                            signature du contrat est de
                                          </Text>
                                          <Img
                                            className="h-[35px] w-[145px]"
                                            src="images/img_group7608.svg"
                                            alt="frame7608_One"
                                          />
                                          <Text
                                            className="text-black-900 text-center text-xs w-auto"
                                            size="txtInterRegular12Black900"
                                          >
                                            FCFA
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-center max-w-[720px] w-full">
                                          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[87px] h-[59px] md:h-auto items-center justify-start w-auto sm:w-full">
                                            <Text
                                              className="text-black-900 text-xs w-auto"
                                              size="txtInterRegular12Black900"
                                            >
                                              Le montant de la prime annuelle de
                                              jachère est de
                                            </Text>
                                            <Img
                                              className="h-[35px] w-[145px]"
                                              src="images/img_group7608.svg"
                                              alt="frame7608_Two"
                                            />
                                          </div>
                                          <div className="flex sm:flex-col flex-row gap-[42px] h-[46px] md:h-auto items-center justify-start max-w-[680px] w-full">
                                            <Text
                                              className="text-black-900 text-xs w-auto"
                                              size="txtInterRegular12Black900"
                                            >
                                              Cette prime annuelle doit être
                                              versée au cours du mois de
                                            </Text>
                                            <div className="flex sm:flex-1 flex-col items-center justify-start w-[23%] sm:w-full">
                                              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[35px] md:h-auto items-start justify-center px-[18px] py-[5px] rounded-md w-[151px] sm:w-full">
                                                <SelectBox
                                                  className="leading-[normal] sm:pr-5 pr-[35px] text-black-900 text-left text-xs w-full"
                                                  placeholderClassName="text-black-900"
                                                  isSearchable={false}
                                                  placeholder="-Choisir-"
                                                  isMulti={false}
                                                  options={
                                                    relationclientOneOptionsList
                                                  }
                                                  name="relationclient_One"
                                                  size="xs"
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
                      </div>
                      <div className="absolute bottom-[9%] flex flex-col h-[100px] md:h-auto inset-x-[0] items-center justify-center mx-auto p-2.5 w-full">
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
      </div>
    </>
  );
};

export default ContratjacherepSixPage;
