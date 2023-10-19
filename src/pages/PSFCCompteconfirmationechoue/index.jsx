import React from "react";

import { Button, Img, Text } from "components";

const PSFCCompteconfirmationechouePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto p-[185px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[30px] md:px-5 w-auto md:w-full">
          <div className="flex flex-col items-start justify-start md:px-10 px-12 sm:px-5 py-[59px] rounded-[20px] shadow-bs2 w-[548px] sm:w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] h-[349px] md:h-auto items-start justify-start w-[452px] sm:w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Img
                  className="h-[159px] w-[159px]"
                  src="images/img_iconclose.svg"
                  alt="iconclose"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-800_01 text-center text-xl w-full"
                    size="txtInterRegular20Bluegray80001"
                  >
                    La vérification du compte a échoué.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-[370px]"
                  shape="round"
                  color="cyan_900"
                  size="xl"
                  variant="fill"
                >
                  Renvoyer le lien
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PSFCCompteconfirmationechouePage;
