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

const ContratventepThirteenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto pb-2.5 w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[831px] md:h-auto items-start justify-start max-w-[1440px] w-full">
          <Sidebar className="!sticky !w-[267px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-white-A700 flex flex-col h-[831px] md:h-auto items-start justify-start mt-[5px] px-5 w-[263px]">
              <ContratventePThirteenColumnclarificationDesRGlesDeDroitEtDesProcDuresDeSCurisationFonciRe
                className="flex flex-col gap-2.5 items-start justify-start py-2.5 w-full"
                certificationfonciere="CERTIFICATION FONCIERE (CF)"
              />
            </div>
            <div className="bg-white-A700 h-[831px] mb-[5px] ml-1 w-[1%]"></div>
          </Sidebar>
          <div className="flex flex-1 flex-col h-[831px] md:h-auto items-start justify-start md:px-5 px-[30px] w-full">
            <div className="flex flex-col h-full items-start justify-start p-2.5 w-full">
              <div className="flex flex-col h-full items-center justify-start w-full">
                <div className="flex flex-col gap-2.5 h-full items-start justify-start w-full">
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
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-2.5 w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-center max-w-[790px] w-full">
                        <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[5px] items-center justify-start max-w-[790px] w-full">
                              <Button
                                className="cursor-pointer text-center text-xs w-[370px]"
                                color="cyan_900"
                                size="sm"
                                variant="fill"
                              >
                                7. ENGAGEMENT DES PARTIES
                              </Button>
                              <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-center max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                                    <Text
                                      className="leading-[20.00px] text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      <>
                                        OBLIGATIONS DU VENDEUR
                                        <br />
                                        -Installer l’acheteur sur le terrain
                                        <br />
                                        -Remettre le terrain à l’acheteur après
                                        paiement du prix de la vente et ne créer
                                        aucun obstacle à la prise de possession
                                        et à la pleine jouissance du bien
                                        foncier pour l’acheteur
                                        <br />
                                        -Ne pas réclamer à l’acheteur après la
                                        conclusion de ce contrat d’autres
                                        contreparties que celles prévues au
                                        contrat 
                                        <br />
                                        -Partager le montant reçu pour la vente
                                        avec l’ensemble des éventuels autres
                                        détenteurs de droits fonciers sur la
                                        parcelle.
                                        <br />
                                        -Autres :
                                      </>
                                    </Text>
                                  </div>
                                </div>
                                <Input
                                  name="autresobligatio"
                                  placeholder="Placeholder"
                                  className="md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                                  wrapClassName="border border-gray-300 border-solid mt-[5px] rounded-md w-full"
                                  shape="round"
                                  color="white_A700"
                                  size="sm"
                                  variant="fill"
                                ></Input>
                                <div className="flex flex-col items-center justify-start mt-[5px] w-full">
                                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-center max-w-[770px] px-[18px] py-[5px] rounded-sm w-full">
                                    <Text
                                      className="leading-[20.00px] text-black-900 text-xs"
                                      size="txtInterRegular12Black900"
                                    >
                                      <>
                                        OBLIGATIONS DE L’ACHETEUR
                                        <br />
                                        -Payer le prix du terrain dans sa
                                        totalité et en temps et en heure.
                                        <br />
                                        -Entreprendre les démarches nécessaires
                                        pour l’enregistrement de la mutation.
                                        <br />- Autres :
                                      </>
                                    </Text>
                                  </div>
                                </div>
                                <Input
                                  name="autresobligatio_One"
                                  placeholder="Placeholder"
                                  className="md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                                  wrapClassName="border border-gray-300 border-solid mt-[5px] rounded-md w-full"
                                  shape="round"
                                  color="white_A700"
                                  size="sm"
                                  variant="fill"
                                ></Input>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-end max-w-[790px] w-full">
                              <Button
                                className="cursor-pointer text-center text-xs w-[370px]"
                                color="cyan_900"
                                size="sm"
                                variant="fill"
                              >
                                8. LISTE DES ANNEXES AU PRESENT CONTRAT
                              </Button>
                              <div className="flex flex-col gap-2.5 items-start justify-center p-2.5 w-full">
                                <Text
                                  className="leading-[20.00px] max-w-[770px] md:max-w-full text-black-900 text-xs"
                                  size="txtInterRegular12Black900"
                                >
                                  Les annexes seront obligatoirement jointes aux
                                  originaux et copies du présent contrat.
                                  Exemples de type d’annexes pouvant être
                                  jointes au contrat : croquis du terrain ;
                                  procuration de l’ensemble des détenteurs de
                                  droit foncier sur le terrain à leur
                                  représentant : autres clauses spécifiques au
                                  contrat, etc.
                                </Text>
                                <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                                  <Input
                                    name="declarationpart"
                                    placeholder="Télécharger pièce jointe"
                                    className="font-medium leading-[normal] p-0 placeholder:text-black-900_b2 text-left text-xs w-full"
                                    wrapClassName="border border-gray-300 border-solid flex rounded-md w-[357px]"
                                    suffix={
                                      <Img
                                        className="h-5 ml-[35px] my-auto"
                                        src="images/img_download.svg"
                                        alt="download"
                                      />
                                    }
                                    shape="round"
                                    color="white_A700"
                                    size="sm"
                                    variant="fill"
                                  ></Input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-[108px] md:h-auto items-start justify-center p-2.5 w-full">
                        <div className="flex flex-col h-[88px] md:h-auto items-center justify-start max-w-[825px] px-2.5 w-full">
                          <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-0.5 w-full">
                            <Button
                              className="common-pointer cursor-pointer font-medium h-10 mb-[3px] md:ml-[0] ml-[291px] text-center text-xs w-[104px]"
                              onClick={() => navigate("/contratdonationpfive")}
                              shape="round"
                              color="cyan_900"
                              size="lg"
                              variant="fill"
                            >
                              Précédent
                            </Button>
                            <Button
                              className="common-pointer cursor-pointer font-medium h-10 mb-[3px] mr-[281px] text-center text-xs w-[114px]"
                              onClick={() => navigate("/contratdonationpseven")}
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

export default ContratventepThirteenPage;
