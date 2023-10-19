import React from "react";

import { Button, Img, SelectBox } from "components";

const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PSFCPAMOFOREnqPromoContratAddContratLocationColumnajouter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start px-[18px] py-2.5 rounded-[10px] w-[370px] sm:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              {!!props?.price ? (
                <SelectBox
                  className="font-inter font-medium leading-[normal] pb-1.5 text-base text-gray-900 text-left w-full"
                  placeholderClassName="text-gray-900"
                  value={props?.price}
                  isSearchable={false}
                  placeholder="CONTRAT DE METAYAGE"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrow_down"
                    />
                  }
                  name="price"
                  isMulti={false}
                  options={priceOptionsList}
                  size="xs"
                />
              ) : null}
            </div>
          </div>
          <Button
            className="cursor-pointer font-inter font-medium h-[50px] text-base text-center w-[370px]"
            shape="round"
            color="cyan_900"
            size="xl"
            variant="fill"
          >
            {props?.buttontext}
          </Button>
        </div>
      </div>
    </>
  );
};

PSFCPAMOFOREnqPromoContratAddContratLocationColumnajouter.defaultProps = {
  buttontext: "Ajouter",
};

export default PSFCPAMOFOREnqPromoContratAddContratLocationColumnajouter;
