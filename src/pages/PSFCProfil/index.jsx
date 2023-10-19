import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
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
const enqueteurOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PSFCProfilPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div
          className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[900px] md:h-auto items-center justify-start max-w-[1440px] w-full"
          style={{ backgroundImage: "url('images/img_psfchome.png')" }}
        >
          <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
          <div className="flex flex-col font-poppins items-start justify-center max-w-7xl mx-auto md:px-5 py-5 w-full">
            <div className="flex flex-col items-start justify-start max-w-[1199px] sm:px-5 px-6 w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-full"
                  size="txtPoppinsMedium20"
                >
                  Profil
                </Text>
                <div className="flex md:flex-col flex-row font-inter gap-5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs1 w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-blue_gray-900 text-lg w-full"
                            size="txtInterRegular18"
                          >
                            Informations de compte
                          </Text>
                        </div>
                        <div className="flex flex-col gap-6 items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Nom
                              </Text>
                              <Input
                                name="frame18249"
                                placeholder="Sam"
                                className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Prénom
                              </Text>
                              <Input
                                name="email"
                                placeholder="xyz@gmail.com"
                                className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                type="email"
                                shape="round"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Email
                              </Text>
                              <Input
                                name="frame18249_One"
                                placeholder="Sam"
                                className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Téléphone
                              </Text>
                              <Input
                                name="frame18249_Two"
                                placeholder="Brown"
                                className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[21px] items-start justify-start w-full">
                      <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs1 w-full">
                        <div className="flex flex-col gap-8 items-start justify-start w-full">
                          <Text
                            className="text-blue_gray-900 text-lg w-full"
                            size="txtInterRegular18"
                          >
                            Adresse
                          </Text>
                          <div className="flex flex-col gap-6 items-start justify-start w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Région
                              </Text>
                              <Input
                                name="frame18252"
                                placeholder="N’Zi"
                                className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Ville
                              </Text>
                              <Input
                                name="frame18252_One"
                                placeholder="Bocanda"
                                className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs1 w-full">
                        <div className="flex flex-col gap-8 items-start justify-start w-full">
                          <Text
                            className="text-blue_gray-900 text-lg w-full"
                            size="txtInterRegular18"
                          >
                            Modifier mot de passe
                          </Text>
                          <div className="flex flex-col gap-6 items-start justify-start w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Mot de passe actuel
                              </Text>
                              <Input
                                name="password"
                                placeholder="************"
                                className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                size="lg"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Nouveau mot de passe
                              </Text>
                              <Input
                                name="password_One"
                                placeholder="************"
                                className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                size="lg"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex sm:flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs1 w-[370px] sm:w-full">
                    <div className="flex flex-col md:gap-10 gap-[102px] items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-8 items-start justify-start w-full">
                          <Text
                            className="text-blue_gray-900 text-lg w-full"
                            size="txtInterRegular18"
                          >
                            Utilisateur
                          </Text>
                          <div className="flex flex-col items-center justify-center p-2.5 w-full">
                            <div className="h-[130px] relative w-[47%]">
                              <Img
                                className="absolute h-[130px] inset-[0] justify-center m-auto rounded-[50%] w-[130px]"
                                src="images/img_ellipse28.png"
                                alt="ellipseTwentyEight"
                              />
                              <Button
                                className="absolute bottom-[12%] flex h-[30px] items-center justify-center right-[0] w-[30px]"
                                shape="circle"
                                color="cyan_900"
                                size="md"
                                variant="fill"
                              >
                                <Img
                                  className="h-[15px]"
                                  src="images/img_ticket.svg"
                                  alt="ticket"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-800_01 text-sm w-full"
                              size="txtInterRegular14"
                            >
                              Fonction
                            </Text>
                            <Input
                              name="frame18249_Three"
                              placeholder="Commissaire enquêteur"
                              className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full"
                              wrapClassName="border border-indigo-50 border-solid w-full"
                              shape="round"
                              color="white_A700"
                              size="2xl"
                              variant="fill"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-800_01 text-sm w-full"
                              size="txtInterRegular14"
                            >
                              Rôle
                            </Text>
                            <SelectBox
                              className="!text-blue_gray-800_01 border border-indigo-50 border-solid text-base text-left w-full"
                              placeholderClassName="!text-blue_gray-800_01"
                              indicator={
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_arrowdown_blue_gray_900_20x20.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="group"
                              options={enqueteurOptionsList}
                              isSearchable={false}
                              placeholder="Enquêteur"
                              shape="round"
                              color="white_A700"
                              size="2xl"
                              variant="fill"
                            />
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer rounded-[24px] text-center text-sm w-full"
                        color="cyan_900"
                        size="xl"
                        variant="fill"
                      >
                        Enregistrer
                      </Button>
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

export default PSFCProfilPage;
