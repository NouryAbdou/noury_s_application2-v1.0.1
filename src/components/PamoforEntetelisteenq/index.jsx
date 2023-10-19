import React from "react";

import { Text } from "components";

const PamoforEntetelisteenq = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col h-full items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.enquirynumber}
            </Text>
          </div>
        </div>
        <div className="flex flex-1 flex-col h-full items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.village}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[95px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.date}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[153px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.subprefecture}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[150px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.department}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[104px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.region}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-28">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtInterMedium16Black900"
          >
            {props?.status}
          </Text>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[50px]">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtInterMedium16Black900"
          >
            {props?.action}
          </Text>
        </div>
      </div>
    </>
  );
};

PamoforEntetelisteenq.defaultProps = {
  enquirynumber: "N° Enquête",
  village: "Village",
  date: "Date",
  subprefecture: "Sous-Préfecture",
  department: "Département",
  region: "Région",
  status: "Statut",
  action: "Action",
};

export default PamoforEntetelisteenq;
