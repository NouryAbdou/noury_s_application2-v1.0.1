import React from "react";

import { Button, Img, SelectBox } from "components";
import PSFCPAMOFOREnqPromoContratAddContratLocationColumnajouter from "components/PSFCPAMOFOREnqPromoContratAddContratLocationColumnajouter";

const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContratmiseengarantiepOnePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto p-[284px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <PSFCPAMOFOREnqPromoContratAddContratLocationColumnajouter className="bg-white-A700 flex flex-col gap-2 h-[263px] md:h-auto items-center justify-start max-w-[720px] mb-[69px] p-[71px] md:px-5 rounded-[15px] w-full" />
      </div>
    </>
  );
};

export default ContratmiseengarantiepOnePage;
