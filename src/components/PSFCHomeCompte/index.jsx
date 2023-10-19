import React from "react";

import { Img, Text } from "components";

const PSFCHomeCompte = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start p-2.5 w-auto">
          {!!props?.seconnecter ? (
            <Text
              className="text-black-900_66 text-sm w-auto"
              size="txtInterSemiBold14Black90066"
            >
              {props?.seconnecter}
            </Text>
          ) : null}
        </div>
        <Img
          className="h-[30px] w-[30px]"
          src="images/img_profile24outline.svg"
          alt="profile24outlin"
        />
      </div>
    </>
  );
};

PSFCHomeCompte.defaultProps = {};

export default PSFCHomeCompte;
