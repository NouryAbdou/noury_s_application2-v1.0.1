import React from "react";

import { Img, Input, SelectBox } from "components";

const sortbyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortbyOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortbyTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PSFCPAMOFORModelePageValidationContratsAttenteRowsearch = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          name="search"
          placeholder="Chercher Contrat"
          className="!placeholder:text-gray-700_99 !text-gray-700_99 font-inter font-medium leading-[normal] p-0 text-left text-sm w-full"
          wrapClassName="flex rounded-[10px] w-[199px] md:w-full"
          suffix={
            <Img
              className="my-auto"
              src="images/img_buttonbutton.svg"
              alt="Frame 18274"
            />
          }
          color="cyan_900_19"
          size="xs"
          variant="fill"
        ></Input>
        <SelectBox
          className="!text-gray-700_99 font-inter font-medium leading-[normal] rounded-[10px] text-left text-sm w-[21%] md:w-full"
          placeholderClassName="!text-gray-700_99"
          indicator={
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown_cyan_900.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="sortby"
          options={sortbyOptionsList}
          isSearchable={false}
          placeholder="Par: Nom de contrat"
          color="cyan_900_19"
          size="xl"
          variant="fill"
        />
        <SelectBox
          className="!text-gray-700_99 font-inter font-medium leading-[normal] rounded-[10px] text-left text-sm w-[21%] md:w-full"
          placeholderClassName="!text-gray-700_99"
          indicator={
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown_cyan_900.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="sortby_One"
          options={sortbyOneOptionsList}
          isSearchable={false}
          placeholder="Par: Type de contrat"
          color="cyan_900_19"
          size="xl"
          variant="fill"
        />
        <SelectBox
          className="!text-gray-700_99 font-inter font-medium leading-[normal] rounded-[10px] text-left text-sm w-1/5 md:w-full"
          placeholderClassName="!text-gray-700_99"
          indicator={
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown_cyan_900.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="sortby_Two"
          options={sortbyTwoOptionsList}
          isSearchable={false}
          placeholder="Par: Les plus récents"
          color="cyan_900_19"
          size="xl"
          variant="fill"
        />
      </div>
    </>
  );
};

PSFCPAMOFORModelePageValidationContratsAttenteRowsearch.defaultProps = {};

export default PSFCPAMOFORModelePageValidationContratsAttenteRowsearch;
