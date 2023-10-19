import React from "react";

import { Input, Text } from "components";

const ContratdonationPEightColumnfaitSix = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.faitSix ? (
          <Text
            className="text-black-900 text-xs w-auto"
            size="txtInterRegular12Black900"
          >
            {props?.faitSix}
          </Text>
        ) : null}
        <div className="flex flex-col items-start justify-center w-full">
          {!!props?.username ? (
            <Text
              className="text-black-900 text-xs w-auto"
              size="txtInterRegular12Black900"
            >
              {props?.username}
            </Text>
          ) : null}
          {!!props?.frame7857two ? (
            <Input
              name="frame7857_Two"
              placeholder="Text"
              value={props?.frame7857two}
              className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
              wrapClassName="border border-gray-300 border-solid rounded-md w-full"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            ></Input>
          ) : null}
        </div>
        <div className="flex flex-row gap-[5px] items-start justify-start w-[341px] md:w-full">
          <div className="flex flex-col gap-0.5 items-start justify-start w-[218px]">
            <Text
              className="text-black-900 text-xs w-full"
              size="txtInterRegular12Black900"
            >
              {props?.faitSeven}
            </Text>
            <div className="bg-white-A700 border border-gray-300 border-solid h-[130px] w-full"></div>
            <Text
              className="bg-black-900_19 justify-center px-[5px] text-[10px] text-black-900 w-auto"
              size="txtInterRegular10"
            >
              {props?.clearsignature}
            </Text>
          </div>
          <div className="flex flex-col gap-0.5 items-start justify-start w-full">
            <Text
              className="text-black-900 text-xs w-full"
              size="txtInterRegular12Black900"
            >
              {props?.faitEight}
            </Text>
            <div className="bg-white-A700 border border-gray-300 border-solid h-[130px] w-full"></div>
            <Text
              className="bg-black-900_19 justify-center px-[5px] text-[10px] text-black-900 w-auto"
              size="txtInterRegular10"
            >
              {props?.clearempreinte}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ContratdonationPEightColumnfaitSix.defaultProps = {
  faitSeven: "Signature",
  clearsignature: "Effacer",
  faitEight: "Empreinte",
  clearempreinte: "Effacer",
};

export default ContratdonationPEightColumnfaitSix;
