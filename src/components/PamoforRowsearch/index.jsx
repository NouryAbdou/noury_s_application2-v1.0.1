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
const sortbyThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PamoforRowsearch = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          name="search"
          placeholder="Chercher Enquête"
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
          className="!text-gray-700_99 font-inter font-medium leading-[normal] rounded-[10px] text-left text-sm w-[15%] md:w-full"
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
          placeholder="Par: Région"
          color="cyan_900_19"
          size="xl"
          variant="fill"
        />
        <SelectBox
          className="!text-gray-700_99 font-inter font-medium leading-[normal] rounded-[10px] text-left text-sm w-[19%] md:w-full"
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
          placeholder="Par: Département"
          color="cyan_900_19"
          size="xl"
          variant="fill"
        />
        <SelectBox
          className="!text-gray-700_99 font-inter font-medium leading-[normal] rounded-[10px] text-left text-sm w-[22%] md:w-full"
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
          placeholder="Par: Sous-Préfecture"
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
          name="sortby_Three"
          options={sortbyThreeOptionsList}
          isSearchable={false}
          placeholder="Par: Les plus récentes"
          color="cyan_900_19"
          size="xl"
          variant="fill"
        />
      </div>
    </>
  );
};

PamoforRowsearch.defaultProps = {};

export default PamoforRowsearch;
