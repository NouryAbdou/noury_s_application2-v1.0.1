import React from "react";

import { Button, Img, Text } from "components";

const PamoforItemlisteenq1 = (props) => {
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
              {props?.userlocation}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[95px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.userdate}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[153px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.userlocationone}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[150px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.userlocationtwo}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[104px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-[13px] text-gray-900 w-auto"
              size="txtInterRegular13Gray900"
            >
              {props?.userlocationthree}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-28">
          <Button
            className="!text-white-A700 cursor-pointer font-inter h-[23px] rounded-[5px] text-[10px] text-center w-full"
            color="orange_200"
            size="sm"
            variant="fill"
          >
            {props?.userstatus}
          </Button>
        </div>
        <Img className="h-full w-[50px]" src="images/img_sort.svg" alt="sort" />
      </div>
    </>
  );
};

PamoforItemlisteenq1.defaultProps = {
  username: "RRDDDSSSVVV",
  userlocation: "Andianou",
  userdate: "21/08/2022",
  userlocationone: "Bocanda",
  userlocationtwo: "Bocanda",
  userlocationthree: "N’Zi",
  userstatus: "En cours",
};

export default PamoforItemlisteenq1;
