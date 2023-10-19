import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const PSFCMdprinitialisavecsuccsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto p-[175px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[30px] md:px-5 w-auto md:w-full">
          <div className="flex flex-col items-start justify-start md:px-10 px-12 sm:px-5 py-[59px] rounded-[20px] shadow-bs2 w-[548px] sm:w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] h-[370px] md:h-auto items-start justify-start w-[452px] sm:w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Img
                  className="h-[180px] w-[180px]"
                  src="images/img_completed1.svg"
                  alt="completedOne"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-800_01 text-center text-xl w-full"
                    size="txtInterRegular20Bluegray80001"
                  >
                    Mot de passe réinitialisé avec succès
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <Button
                  className="common-pointer cursor-pointer font-medium text-base text-center w-[370px]"
                  onClick={() => navigate("/psfcreinitialisermdp")}
                  shape="round"
                  color="cyan_900"
                  size="xl"
                  variant="fill"
                >
                  Se connecter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PSFCMdprinitialisavecsuccsPage;
