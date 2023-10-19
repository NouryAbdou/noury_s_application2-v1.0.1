import React from "react";

import { List, Text } from "components";

const ContratdonationPSevenColumnframe7959 = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-[50px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <Text
              className="text-black-900 text-xs w-[68px]"
              size="txtInterRegular12Black900"
            >
              {props?.donorsignature}
            </Text>
            <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12Black900"
                >
                  {props?.donorsignaturetext}
                </Text>
                <div className="bg-white-A700 border border-gray-300 border-solid h-[130px] w-full"></div>
                <Text
                  className="bg-black-900_19 justify-center px-[5px] text-[10px] text-black-900 w-auto"
                  size="txtInterRegular10"
                >
                  {props?.donorsignatureclear}
                </Text>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12Black900"
                >
                  {props?.takersignaturetext}
                </Text>
                <div className="bg-white-A700 border border-gray-300 border-solid h-[130px] w-full"></div>
                <Text
                  className="bg-black-900_19 justify-center px-[5px] text-[10px] text-black-900 w-auto"
                  size="txtInterRegular10"
                >
                  {props?.takersignatureclear}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <Text
              className="text-black-900 text-xs w-[61px]"
              size="txtInterRegular12Black900"
            >
              {props?.fait}
            </Text>
            <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
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
              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
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
        </List>
      </div>
    </>
  );
};

ContratdonationPSevenColumnframe7959.defaultProps = {
  donorsignature: (
    <>
      Le donateur
      <br />
    </>
  ),
  donorsignaturetext: "Signature",
  donorsignatureclear: "Effacer",
  takersignaturetext: "Empreinte",
  takersignatureclear: "Effacer",
  fait: (
    <>
      Le preneur
      <br />
    </>
  ),
  faitOne: "Signature",
  frame7959: "Effacer",
  faitTwo: "Empreinte",
  frame7959one: "Effacer",
};

export default ContratdonationPSevenColumnframe7959;
