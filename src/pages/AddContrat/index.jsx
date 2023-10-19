import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, SelectBox } from "components";

const contratDeDonationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddContratPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-black-900_33 flex flex-col items-end justify-start p-[262px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start mb-[110px] mr-[30px] pb-[3px] w-[79%] md:w-full">
            <div className="bg-white-A700 flex flex-col h-[263px] md:h-auto items-center justify-start max-w-[720px] p-[71px] md:px-10 sm:px-5 rounded-[15px] w-full">
              <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                <SelectBox
                  className="!text-gray-900 border border-gray-300 border-solid font-medium leading-[normal] rounded-[10px] text-base text-left w-full"
                  placeholderClassName="!text-gray-900"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame7857"
                  options={contratDeDonationOptionsList}
                  isSearchable={false}
                  placeholder="Contrat de donation"
                  color="white_A700"
                  size="xl"
                  variant="fill"
                />
                <Button
                  className="common-pointer cursor-pointer font-medium h-[50px] text-base text-center w-[370px]"
                  onClick={() => navigate("/contratdonationpone")}
                  shape="round"
                  color="cyan_900"
                  size="xl"
                  variant="fill"
                >
                  Ajouter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContratPage;
