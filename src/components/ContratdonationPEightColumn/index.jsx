import React from "react";

import { Input, Text } from "components";

const ContratdonationPEightColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-full">
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <Text
              className="text-black-900 text-xs w-[70px]"
              size="txtInterRegular12Black900"
            >
              {props?.fait}
            </Text>
            <div className="flex flex-col items-start justify-center w-full">
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtInterRegular12Black900"
              >
                {props?.donorname}
              </Text>
              <Input
                name="frame7857"
                placeholder="Text"
                className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-row gap-[5px] items-start justify-start w-full">
              <div className="flex flex-col gap-0.5 items-start justify-start w-[218px]">
                <Text
                  className="text-black-900 text-xs w-full"
                  size="txtInterRegular12Black900"
                >
                  {props?.faitOne}
                </Text>
                <div className="bg-white-A700 border border-gray-300 border-solid h-[130px] w-full"></div>
                <Text
                  className="bg-black-900_19 justify-center px-[5px] text-[10px] text-black-900 w-auto"
                  size="txtInterRegular10"
                >
                  {props?.frame7959}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xs w-full"
                  size="txtInterRegular12Black900"
                >
                  {props?.faitTwo}
                </Text>
                <div className="bg-white-A700 border border-gray-300 border-solid h-[130px] w-full"></div>
                <Text
                  className="bg-black-900_19 justify-center px-[5px] text-[10px] text-black-900 w-auto"
                  size="txtInterRegular10"
                >
                  {props?.frame7959one}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <Text
              className="text-black-900 text-xs w-[63px]"
              size="txtInterRegular12Black900"
            >
              {props?.faitThree}
            </Text>
            <div className="flex flex-col items-start justify-center w-full">
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtInterRegular12Black900"
              >
                {props?.takername}
              </Text>
              <Input
                name="frame7857_One"
                placeholder="Text"
                className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-row gap-[5px] items-start justify-start w-full">
              <div className="flex flex-col gap-0.5 items-start justify-start w-[218px]">
                <Text
                  className="text-black-900 text-xs w-full"
                  size="txtInterRegular12Black900"
                >
                  {props?.faitFour}
                </Text>
                <div className="bg-white-A700 border border-gray-300 border-solid h-[130px] w-full"></div>
                <Text
                  className="bg-black-900_19 justify-center px-[5px] text-[10px] text-black-900 w-auto"
                  size="txtInterRegular10"
                >
                  {props?.frame7959two}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xs w-full"
                  size="txtInterRegular12Black900"
                >
                  {props?.faitFive}
                </Text>
                <div className="bg-white-A700 border border-gray-300 border-solid h-[130px] w-full"></div>
                <Text
                  className="bg-black-900_19 justify-center px-[5px] text-[10px] text-black-900 w-auto"
                  size="txtInterRegular10"
                >
                  {props?.frame7959three}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ContratdonationPEightColumn.defaultProps = {
  fait: (
    <>
      Du donateur
      <br />
    </>
  ),
  donorname: "Nom et prénom(s)",
  faitOne: "Signature",
  frame7959: "Effacer",
  faitTwo: "Empreinte",
  frame7959one: "Effacer",
  faitThree: "Du preneur",
  takername: "Nom et prénom(s)",
  faitFour: "Signature",
  frame7959two: "Effacer",
  faitFive: "Empreinte",
  frame7959three: "Effacer",
};

export default ContratdonationPEightColumn;
