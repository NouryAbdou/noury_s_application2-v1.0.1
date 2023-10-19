import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, SelectBox } from "components";
import PSFCPAMOFOREnqPromoContratAddContratLocationColumnajouter from "components/PSFCPAMOFOREnqPromoContratAddContratLocationColumnajouter";

const contratDeLocationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PSFCPAMOFOREnqPromoContrataddContratlocationModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-1/2"
      overlayClassName="bg-black-900_33 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <PSFCPAMOFOREnqPromoContratAddContratLocationColumnajouter className="bg-white-A700 flex flex-col gap-2 h-[263px] md:h-auto items-center justify-start max-w-[720px] mb-[69px] p-[71px] md:px-5 rounded-[15px] w-full" />
      </div>
    </ModalProvider>
  );
};

export default PSFCPAMOFOREnqPromoContrataddContratlocationModal;
