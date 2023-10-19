import React from "react";

import { Button } from "components";

const PSFCPAMOFORModelePageValidationStatutsenq = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="!text-gray-700_99 cursor-pointer font-inter font-medium h-10 min-w-[75px] text-center text-sm"
          shape="round"
          color="white_A700"
          size="lg"
          variant="fill"
        >
          {props?.allstatus}
        </Button>
        <Button
          className="!text-white-A700_99 cursor-pointer font-inter font-medium h-10 min-w-[111px] text-center text-sm"
          shape="round"
          color="cyan_900"
          size="lg"
          variant="fill"
        >
          {props?.pendingstatus}
        </Button>
        <Button
          className="!text-gray-700_99 cursor-pointer font-inter font-medium h-10 min-w-[91px] text-center text-sm"
          shape="round"
          color="white_A700"
          size="lg"
          variant="fill"
        >
          {props?.approvedstatus}
        </Button>
        <Button
          className="!text-gray-700_99 cursor-pointer font-inter font-medium h-10 min-w-[92px] text-center text-sm"
          shape="round"
          color="white_A700"
          size="lg"
          variant="fill"
        >
          {props?.rejectedstatus}
        </Button>
      </div>
    </>
  );
};

PSFCPAMOFORModelePageValidationStatutsenq.defaultProps = {};

export default PSFCPAMOFORModelePageValidationStatutsenq;
