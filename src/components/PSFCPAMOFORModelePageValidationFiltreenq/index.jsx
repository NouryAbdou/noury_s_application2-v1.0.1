import React from "react";

import { Img, Input, SelectBox } from "components";

import { CloseSVG } from "../../assets/images";

const sortbydepOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortbydepOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortbydepTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PSFCPAMOFORModelePageValidationFiltreenq = (props) => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-full">
          <Input
            name="searchbar"
            placeholder="Chercher Contrat"
            value={searchbarvalue}
            onChange={(e) => setSearchbarvalue(e)}
            className="!placeholder:text-gray-700_99 !text-gray-700_99 font-inter font-medium leading-[normal] p-0 text-left text-sm w-full"
            wrapClassName="flex md:flex-1 rounded-[10px] w-[194px] md:w-full"
            suffix={
              <div className="h-[34px] ml-4 w-[34px] bg-cyan-900 rounded-lg">
                {searchbarvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer h-[34px] rounded-lg my-auto"
                    onClick={() => setSearchbarvalue("")}
                    fillColor="#5d5a6f99"
                    height={34}
                    width={34}
                    viewBox="0 0 34 34"
                  />
                ) : (
                  <Img
                    className="cursor-pointer h-[34px] rounded-lg my-auto"
                    src="images/img_buttonbutton.svg"
                    alt="button:Button"
                  />
                )}
              </div>
            }
            color="white_A700"
            size="xs"
            variant="fill"
          ></Input>
          <SelectBox
            className="!text-gray-700_99 md:flex-1 font-inter font-medium leading-[normal] rounded-[10px] text-left text-sm w-1/5 md:w-full"
            placeholderClassName="!text-gray-700_99"
            indicator={
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_cyan_900.svg"
                alt="arrow_down"
              />
            }
            isMulti={false}
            name="sortbydep"
            options={sortbydepOptionsList}
            isSearchable={false}
            placeholder="Par : Nom de contrat"
            color="white_A700"
            size="xl"
            variant="fill"
          />
          <SelectBox
            className="!text-gray-700_99 md:flex-1 font-inter font-medium leading-[normal] rounded-[10px] text-left text-sm w-1/5 md:w-full"
            placeholderClassName="!text-gray-700_99"
            indicator={
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_cyan_900.svg"
                alt="arrow_down"
              />
            }
            isMulti={false}
            name="sortbydep_One"
            options={sortbydepOneOptionsList}
            isSearchable={false}
            placeholder="Par :Type de contrat"
            color="white_A700"
            size="xl"
            variant="fill"
          />
          <SelectBox
            className="!text-gray-700_99 md:flex-1 font-inter font-medium leading-[normal] rounded-[10px] text-left text-sm w-[21%] md:w-full"
            placeholderClassName="!text-gray-700_99"
            indicator={
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_cyan_900.svg"
                alt="arrow_down"
              />
            }
            isMulti={false}
            name="sortbydep_Two"
            options={sortbydepTwoOptionsList}
            isSearchable={false}
            placeholder="Par : Les plus récents"
            color="white_A700"
            size="xl"
            variant="fill"
          />
        </div>
      </div>
    </>
  );
};

PSFCPAMOFORModelePageValidationFiltreenq.defaultProps = {};

export default PSFCPAMOFORModelePageValidationFiltreenq;
