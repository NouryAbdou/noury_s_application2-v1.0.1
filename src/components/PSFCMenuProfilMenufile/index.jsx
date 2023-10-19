import React from "react";

import { Img, Text } from "components";

const PSFCMenuProfilMenufile = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-[185px]">
            <Text
              className="text-base text-center text-white-A700 w-auto"
              size="txtInterRegular16WhiteA700"
            >
              {props?.username}
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between w-[185px]">
            <Text
              className="text-base text-center text-white-A700 w-auto"
              size="txtInterRegular16WhiteA700"
            >
              {props?.logouttext}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </div>
        </div>
      </div>
    </>
  );
};

PSFCMenuProfilMenufile.defaultProps = {
  username: "Mon compte",
  logouttext: "Se déconnecter",
};

export default PSFCMenuProfilMenufile;
