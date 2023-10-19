import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const PSFCPAMOFORmodelepagevalidationcontratspageValidationModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-2/5"
      overlayClassName="bg-black-900_33 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col h-[497px] md:h-auto items-start justify-start p-[50px] md:px-5 rounded-[15px] w-[566px] sm:w-full">
          <div className="flex flex-col h-full items-start justify-start p-2 w-full">
            <div className="flex flex-col gap-2.5 h-full items-start justify-start w-full">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtInterSemiBold20"
              >
                Signature
              </Text>
              <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                <Text
                  className="border-b border-cyan-900 border-solid px-[5px] py-1 text-black-900 text-sm w-auto"
                  size="txtInterMedium14"
                >
                  Dessiner
                </Text>
                <div className="flex flex-col items-center justify-center p-[5px] w-auto">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtInterMedium14"
                  >
                    Écrire
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center p-[5px] w-auto">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtInterMedium14"
                  >
                    Télécharger
                  </Text>
                </div>
              </div>
              <Img
                className="h-[263px] w-[448px]"
                src="images/img_telephoneouemail.svg"
                alt="telephoneouemai"
              />
              <div className="flex flex-row gap-2.5 items-start justify-end w-full">
                <Button
                  className="cursor-pointer leading-[normal] min-w-[59px] rounded-[5px] text-[10px] text-center"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  Annuler
                </Button>
                <Button
                  className="cursor-pointer h-[22px] leading-[normal] min-w-[72px] rounded-[5px] text-[10px] text-center"
                  color="cyan_900"
                  size="sm"
                  variant="fill"
                >
                  Enregistrer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default PSFCPAMOFORmodelepagevalidationcontratspageValidationModal;
