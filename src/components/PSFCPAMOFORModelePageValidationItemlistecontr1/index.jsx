import React from "react";

import { Button, Img, Text } from "components";

const PSFCPAMOFORModelePageValidationItemlistecontr1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[131px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.username}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[125px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.donationtype}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[95px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.collectiftype}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[100px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.date}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[150px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.andianoutype}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[104px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.nzitype}
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
            {props?.enattentetype}
          </Button>
        </div>
        <Img className="h-full w-[100px]" alt="car" src="props?.userimage" />
      </div>
    </>
  );
};

PSFCPAMOFORModelePageValidationItemlistecontr1.defaultProps = {
  username: "SSSVVV-CCCCC",
  donationtype: "Donation",
  collectiftype: "Collectif",
  date: "29/08/2022",
  andianoutype: "Andianou",
  nzitype: "N’Zi",
  enattentetype: "En attente",
  userimage: "images/img_car.svg",
};

export default PSFCPAMOFORModelePageValidationItemlistecontr1;
