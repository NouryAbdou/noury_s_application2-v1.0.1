import React from "react";

import { Text } from "components";

const PSFCPAMOFORModelePageValidationBtnvalidations = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-black-900_b2 text-xs w-full"
              size="txtInterRegular12"
            >
              {props?.validationstatus}
            </Text>
          </div>
        </div>
        {!!props?.frame7960 ? (
          <Text
            className="bg-red-A700 justify-center px-1 rounded-bl-[5px] rounded-br-[5px] rounded-tr-[5px] text-white-A700 text-xs w-auto"
            size="txtInterSemiBold12WhiteA700"
          >
            {props?.frame7960}
          </Text>
        ) : null}
      </div>
    </>
  );
};

PSFCPAMOFORModelePageValidationBtnvalidations.defaultProps = {
  validationstatus: "En attente de validation",
};

export default PSFCPAMOFORModelePageValidationBtnvalidations;
