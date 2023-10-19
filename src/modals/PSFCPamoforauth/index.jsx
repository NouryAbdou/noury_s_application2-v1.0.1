import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const PSFCPamoforauthModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[68%]"
      overlayClassName="bg-black-900_33 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col h-[391px] md:h-auto items-start justify-start max-w-[965px] mx-auto my-[17px] p-[71px] md:px-5 rounded-[15px] w-full">
          <div className="flex flex-col items-start justify-start p-2 w-auto sm:w-full">
            <div className="flex flex-col gap-[5px] items-center justify-start w-[425px] sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-60"
                size="txtInterRegular32"
              >
                Authentification
              </Text>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-center text-gray-700 w-auto"
                  size="txtInterRegular16"
                >
                  Saisir votre clé d’accès
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Input
                      name="placeholder"
                      placeholder="xx-xx-xx-xx ou user@example.com "
                      className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                      wrapClassName="border border-gray-300 border-solid flex rounded-[10px] w-full"
                      prefix={
                        <Img
                          className="mt-auto mb-0.5 h-[18px] mr-[15px]"
                          src="images/img_account_24_outline_black_900.svg"
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
                  onClick={() => navigate("/pamofor")}
                  shape="round"
                  color="cyan_900"
                  size="xl"
                  variant="fill"
                >
                  Vérifier
                </Button>
              </div>
              <Text
                className="common-pointer text-[13px] text-gray-700 w-auto"
                size="txtInterRegular13"
                onClick={() => navigate("/psfcmdpoublie")}
              >
                Clé perdue?
              </Text>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default PSFCPamoforauthModal;
