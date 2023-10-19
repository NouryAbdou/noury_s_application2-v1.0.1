import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const PSFCMdpoubliePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-inter h-[900px] items-center justify-start mx-auto p-[249px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start p-[30px] md:px-5 w-auto sm:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-[321px]"
            size="txtInterRegular32"
          >
            Mot de passe oublié?
          </Text>
          <div className="flex flex-col gap-5 items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="leading-[20.00px] max-w-[370px] md:max-w-full text-base text-gray-700"
                size="txtInterRegular16"
              >
                Saisir votre numéro de téléphone ou email pour continuer
              </Text>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
              <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtInterMedium16"
                >
                  N° de téléphone ou email
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
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
              </div>
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-[370px]"
                onClick={() => navigate("/psfcreinitialisermdp")}
                shape="round"
                color="cyan_900"
                size="xl"
                variant="fill"
              >
                Envoyer
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start p-[5px] w-auto">
              <Text
                className="text-[13px] text-cyan-900_19 w-auto"
                size="txtInterMedium13Cyan90019"
              >
                x Annuler
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PSFCMdpoubliePage;
