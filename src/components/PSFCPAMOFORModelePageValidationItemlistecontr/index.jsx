import React from "react";

import { Button, Img, Text } from "components";

const PSFCPAMOFORModelePageValidationItemlistecontr = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[131px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.usersssvvvccccc}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[125px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.usercession}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[95px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.userindividuel}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[100px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.userdate}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[150px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.userandianou}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[104px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.usernzi}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-center w-28">
          <Button
            className="!text-white-A700 cursor-pointer font-inter h-[23px] rounded-[5px] text-[10px] text-center w-full"
            color="deep_orange_400"
            size="sm"
            variant="fill"
          >
            {props?.userenattente}
          </Button>
        </div>
        <Img className="h-full w-[100px]" alt="car" src="props?.userimage" />
      </div>
    </>
  );
};

PSFCPAMOFORModelePageValidationItemlistecontr.defaultProps = {
  usersssvvvccccc: "SSSVVV-CCCCC",
  usercession: "Cession",
  userindividuel: "Individuel",
  userdate: "29/08/2022",
  userandianou: "Andianou",
  usernzi: "N’Zi",
  userenattente: "En attente",
  userimage: "images/img_car.svg",
};

export default PSFCPAMOFORModelePageValidationItemlistecontr;
