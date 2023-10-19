import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, Line, Text } from "components";
import PSFCSignInColumnbienvenuesurla from "components/PSFCSignInColumnbienvenuesurla";

const PSFCSigninPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-inter h-[1326px] items-start justify-start mx-auto md:px-10 sm:px-5 px-[205px] py-[86px] w-auto sm:w-full md:w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1029px] mx-auto p-[71px] md:px-5 rounded-[15px] w-full">
          <div className="flex flex-col items-start justify-start max-w-[937px] p-2 w-full">
            <div className="flex md:flex-col flex-row gap-[50px] items-start justify-center w-full">
              <PSFCSignInColumnbienvenuesurla className="flex flex-col gap-[25px] items-start justify-start w-[332px]" />
              <Line className="bg-gradient1  h-[641px] md:h-px md:w-full w-px" />
              <div className="flex flex-col gap-[5px] h-[1048px] md:h-auto items-center justify-start">
                <div className="flex flex-col gap-[5px] items-center justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[24%] md:w-full">
                    <div className="flex flex-col h-[88px] md:h-auto items-center justify-start px-[5px] w-[100px]">
                      <Img
                        className="h-[88px] md:h-auto object-cover w-[90px] sm:w-full"
                        src="images/img_coatofarmsof.png"
                        alt="coatofarmsof"
                      />
                    </div>
                    <Text
                      className="text-black-900 text-center text-xl w-auto"
                      size="txtInterRegular20"
                    >
                      Inscription
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-center text-gray-700 w-auto"
                      size="txtInterRegular16"
                    >
                      Créer un nouveau compte pour continuer
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-2.5 items-center justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16"
                        >
                          Nom
                        </Text>
                        <Input
                          name="language"
                          placeholder="xx-xx-xx-xx ou user@example.com "
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300 border-solid flex rounded-[10px] w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-0.5 h-[18px] mr-[15px]"
                              src="images/img_account_24_outline.svg"
                              alt="account / 24 / Outline"
                            />
                          }
                          color="white_A700"
                          size="xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16"
                        >
                          Prénom
                        </Text>
                        <Input
                          name="language_One"
                          placeholder="xx-xx-xx-xx ou user@example.com "
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300 border-solid flex rounded-[10px] w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-0.5 h-[18px] mr-[15px]"
                              src="images/img_account_24_outline.svg"
                              alt="account / 24 / Outline"
                            />
                          }
                          color="white_A700"
                          size="xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16"
                        >
                          Sexe
                        </Text>
                        <Input
                          name="language_Two"
                          placeholder="xx-xx-xx-xx ou user@example.com "
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300 border-solid flex rounded-[10px] w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-0.5 h-[18px] mr-[15px]"
                              src="images/img_account_24_outline.svg"
                              alt="account / 24 / Outline"
                            />
                          }
                          color="white_A700"
                          size="xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16"
                        >
                          Date de naissance
                        </Text>
                        <Input
                          name="language_Three"
                          placeholder="xx-xx-xx-xx ou user@example.com "
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300 border-solid flex rounded-[10px] w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-0.5 h-[18px] mr-[15px]"
                              src="images/img_account_24_outline.svg"
                              alt="account / 24 / Outline"
                            />
                          }
                          color="white_A700"
                          size="xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16"
                        >
                          Téléphone
                        </Text>
                        <Input
                          name="language_Four"
                          placeholder="xx-xx-xx-xx ou user@example.com "
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300 border-solid flex rounded-[10px] w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-0.5 h-[18px] mr-[15px]"
                              src="images/img_account_24_outline.svg"
                              alt="account / 24 / Outline"
                            />
                          }
                          color="white_A700"
                          size="xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16"
                        >
                          Email
                        </Text>
                        <Input
                          name="language_Five"
                          placeholder="xx-xx-xx-xx ou user@example.com "
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300 border-solid flex rounded-[10px] w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-0.5 h-[18px] mr-[15px]"
                              src="images/img_account_24_outline.svg"
                              alt="account / 24 / Outline"
                            />
                          }
                          color="white_A700"
                          size="xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16"
                        >
                          Mot de passe
                        </Text>
                        <Input
                          name="password"
                          placeholder="*************"
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300 border-solid flex rounded-[10px] w-full"
                          prefix={
                            <Img
                              className="h-[18px] mr-[15px] my-px"
                              src="images/img_lockpad_locksafesecurityprotectedlock_alt_24_outline.svg"
                              alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
                            />
                          }
                          suffix={
                            <Img
                              className="h-[18px] ml-[35px] my-px"
                              src="images/img_eye_1_1.svg"
                              alt="eye (1) 1"
                            />
                          }
                          color="white_A700"
                          size="xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16"
                        >
                          Confirmer mot de passe
                        </Text>
                        <Input
                          name="password_One"
                          placeholder="*************"
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300 border-solid flex rounded-[10px] w-full"
                          prefix={
                            <Img
                              className="h-[18px] mr-[15px] my-px"
                              src="images/img_lockpad_locksafesecurityprotectedlock_alt_24_outline.svg"
                              alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
                            />
                          }
                          suffix={
                            <Img
                              className="h-[18px] ml-[35px] my-px"
                              src="images/img_eye_1_1.svg"
                              alt="eye (1) 1"
                            />
                          }
                          color="white_A700"
                          size="xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <CheckBox
                        className="font-medium text-[13px] text-gray-700 text-left"
                        inputClassName="mr-[5px]"
                        name="jacceptelesterm_One"
                        id="jacceptelesterm_One"
                        label="J&#39;accepte les Termes et Conditions"
                        shape="square"
                        size="md"
                      ></CheckBox>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer font-medium text-base text-center w-[370px]"
                      onClick={() => navigate("/psfccompteconfirmationmail")}
                      shape="round"
                      color="cyan_900"
                      size="xl"
                      variant="fill"
                    >
                      S’inscrire
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row gap-1 items-center justify-center w-auto">
                  <Text
                    className="text-[13px] text-gray-700 w-auto"
                    size="txtInterMedium13"
                  >
                    Avez-vous un compte?
                  </Text>
                  <Button
                    className="common-pointer bg-transparent cursor-pointer font-medium h-[30px] leading-[normal] text-[13px] text-center text-cyan-900_19"
                    onClick={() => navigate("/psfcseconnecter")}
                    size="sm"
                  >
                    Se connecter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PSFCSigninPage;
