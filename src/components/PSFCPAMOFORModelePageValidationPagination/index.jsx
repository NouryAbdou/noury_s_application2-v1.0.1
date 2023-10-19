import React from "react";

import { Img, Text } from "components";

const PSFCPAMOFORModelePageValidationPagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[19px] items-center justify-start max-w-[978px] w-full">
          <div className="flex flex-1 flex-col h-[19px] md:h-auto items-start justify-center w-full">
            <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
              <div className="bg-white-A700 flex flex-col h-[19px] md:h-auto items-center justify-center px-2.5 py-[5px] rounded-md w-[42px]">
                <Img
                  className="h-[11px] w-2"
                  src="images/img_arrowleft_cyan_900.svg"
                  alt="arrowleft"
                />
              </div>
              <Text
                className="text-gray-900 text-xs w-auto"
                size="txtInterMedium12Gray900"
              >
                {props?.page}
              </Text>
              {!!props?.pagenumber ? (
                <Text
                  className="bg-white-A700 h-[19px] justify-center pt-1.5 px-4 rounded-lg text-blue_gray-800 text-center text-sm w-[42px]"
                  size="txtInterMedium14Bluegray800"
                >
                  {props?.pagenumber}
                </Text>
              ) : null}
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtInterMedium14Gray900"
              >
                {props?.totalpages}
              </Text>
              <div className="bg-cyan-900 flex flex-col h-[19px] md:h-auto items-center justify-center px-2.5 py-[5px] rounded-md w-[42px]">
                <Img
                  className="h-2.5"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <Text
            className="text-black-900 text-sm w-auto"
            size="txtInterMedium14"
          >
            {props?.numberdata}
          </Text>
        </div>
      </div>
    </>
  );
};

PSFCPAMOFORModelePageValidationPagination.defaultProps = {
  page: "Page",
  totalpages: "of 80",
  numberdata: "65 sur 270",
};

export default PSFCPAMOFORModelePageValidationPagination;
