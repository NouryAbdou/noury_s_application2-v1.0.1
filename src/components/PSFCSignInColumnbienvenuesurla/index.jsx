import React from "react";

import { Img, Text } from "components";

const PSFCSignInColumnbienvenuesurla = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start pb-0.5 pr-0.5 w-full">
          <Img
            className="h-[49px] md:h-auto object-cover w-[37%]"
            src="images/img_logocgeds1.png"
            alt="logocgedsOne"
          />
        </div>
        <Text
          className="leading-[30.00px] max-w-[332px] md:max-w-full text-black-900 text-xl"
          size="txtInterRegular20"
        >
          {props?.welcometext}
        </Text>
        <Img
          className="h-[249px] sm:h-auto object-cover w-full"
          src="images/img_kisspngfederal.png"
          alt="kisspngfederal"
        />
      </div>
    </>
  );
};

PSFCSignInColumnbienvenuesurla.defaultProps = {
  welcometext: "Bienvenue sur la plateforme de sécurisation foncière",
};

export default PSFCSignInColumnbienvenuesurla;
