import React from "react";

import { Text } from "components";

const PSFCPAMOFORModelePageValidationRowidenqvillage = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[131px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.contractnumber}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[125px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.contractname}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[95px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.contracttype}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[100px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.contractdate}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[150px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.contractvillage}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-[104px]">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterSemiBold16Gray900"
            >
              {props?.contractregion}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-start w-28">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtInterMedium16Black900"
          >
            {props?.contractstatus}
          </Text>
        </div>
        <div className="flex flex-col h-[23px] md:h-auto items-center justify-center w-[100px]">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtInterMedium16Black900"
          >
            {props?.contractaction}
          </Text>
        </div>
      </div>
    </>
  );
};

PSFCPAMOFORModelePageValidationRowidenqvillage.defaultProps = {
  contractnumber: "N° Contrat",
  contractname: "Nom contrat",
  contracttype: "Type",
  contractdate: "Date",
  contractvillage: "Village",
  contractregion: "Région",
  contractstatus: "Statut",
  contractaction: "Action",
};

export default PSFCPAMOFORModelePageValidationRowidenqvillage;
