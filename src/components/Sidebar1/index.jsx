import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-full mb-[860px] mt-5 mx-auto w-[265px]"
          src="images/img_frame7948.svg"
          alt="frame7948"
        />
        <div className="flex flex-col gap-2.5 items-start justify-start mb-[733px] mt-10 mx-auto p-2.5 w-auto">
          <div className="bg-white-A700_7f flex flex-row gap-2 items-center justify-start px-2.5 py-[5px] rounded-sm w-[245px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900_b2 text-xs w-full"
                  size="txtInterRegular12"
                >
                  En attente de validation
                </Text>
              </div>
            </div>
            <Text
              className="bg-red-A700 justify-center px-1 rounded-bl-[5px] rounded-br-[5px] rounded-tr-[5px] text-white-A700 text-xs w-auto"
              size="txtInterSemiBold12WhiteA700"
            >
              899
            </Text>
          </div>
          <div className="bg-white-A700_7f flex flex-row gap-2 items-center justify-start px-2.5 py-[5px] rounded-sm w-[245px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900_b2 text-xs w-full"
                  size="txtInterRegular12"
                >
                  Validés
                </Text>
              </div>
            </div>
            <Text
              className="bg-teal-A700 justify-center px-1 rounded-bl-[5px] rounded-br-[5px] rounded-tr-[5px] text-white-A700 text-xs w-auto"
              size="txtInterSemiBold12WhiteA700"
            >
              267
            </Text>
          </div>
          <div className="bg-white-A700_7f flex flex-col items-center justify-start px-2.5 py-[5px] rounded-sm w-[245px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900_b2 text-xs w-full"
                  size="txtInterRegular12"
                >
                  Se déconnecter
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
