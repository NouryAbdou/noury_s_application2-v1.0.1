import React from "react";

import { Button } from "components";

const PSFCPAMOFORModelePageValidationContratsAttenteRowtous = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="!text-black-900 cursor-pointer font-inter font-medium h-10 text-center text-sm w-full"
          shape="round"
          color="cyan_900_19"
          size="lg"
          variant="fill"
        >
          {props?.tousstatus}
        </Button>
        <Button
          className="cursor-pointer font-inter font-medium h-10 text-center text-sm w-full"
          shape="round"
          color="cyan_900"
          size="lg"
          variant="fill"
        >
          {props?.enattentestatus}
        </Button>
        <Button
          className="!text-black-900 cursor-pointer font-inter font-medium h-10 text-center text-sm w-full"
          shape="round"
          color="cyan_900_19"
          size="lg"
          variant="fill"
        >
          {props?.validesstatus}
        </Button>
        <Button
          className="!text-black-900 cursor-pointer font-inter font-medium h-10 text-center text-sm w-full"
          shape="round"
          color="cyan_900_19"
          size="lg"
          variant="fill"
        >
          {props?.rejetesstatus}
        </Button>
      </div>
    </>
  );
};

PSFCPAMOFORModelePageValidationContratsAttenteRowtous.defaultProps = {
  tousstatus: "Tous",
  enattentestatus: "En attente",
  validesstatus: "Validés",
  rejetesstatus: "Rejetés",
};

export default PSFCPAMOFORModelePageValidationContratsAttenteRowtous;
