import React from "react";

import { Img, Text } from "components";

const PSFCProjetsCarteprojet = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[50px] md:h-auto items-center justify-center px-2.5 w-full">
          <Img
            className="h-[50px] md:h-auto object-cover w-[50px]"
            alt="rectangle2872"
            src="props?.userimage"
          />
        </div>
        <div className="flex flex-col gap-2.5 items-center justify-center px-2.5 w-full">
          <div className="flex flex-col items-center justify-center p-[5px] w-[133px]">
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtInterSemiBold16"
            >
              {props?.projectname}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center p-[5px] w-[202px]">
            <Text
              className="leading-[20.00px] max-w-[192px] md:max-w-full text-center text-gray-700 text-xs"
              size="txtInterRegular12Gray700"
            >
              {props?.projectdescription}
            </Text>
          </div>
        </div>
        <div className="border border-cyan-900 border-solid flex flex-col h-5 md:h-auto items-center justify-center p-[5px] rounded-[5px] w-10">
          <Img className="h-0.5" src="images/img_vector.svg" alt="vector" />
        </div>
      </div>
    </>
  );
};

PSFCProjetsCarteprojet.defaultProps = {
  userimage: "images/img_rectangle2872.png",
  projectname: "PAMOFOR",
  projectdescription: (
    <>
      Projet d&#39;Amélioration et de Mise en Œuvre de la politique Foncière
      Rurale
    </>
  ),
};

export default PSFCProjetsCarteprojet;
