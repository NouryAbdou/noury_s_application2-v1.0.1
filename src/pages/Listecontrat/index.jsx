import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar11 from "components/Sidebar11";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const recrutementOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const servicesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dataProjectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ListecontratPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-start justify-start mx-auto overflow-auto w-auto sm:w-full md:w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <div className="flex flex-col items-end pl-[263px] md:px-5 w-full">
          <Header className="bg-white-A700 flex gap-2.5 items-center justify-center py-2.5 w-full" />
        </div>
        <div className="flex flex-col items-center pr-[263px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Sidebar11 className="!sticky !w-[263px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col font-poppins items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start sm:px-5 px-6 w-full">
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      Add Product
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter gap-5 items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs1 w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-lg w-auto"
                          size="txtInterRegular18"
                        >
                          Basic information
                        </Text>
                        <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Product name
                              </Text>
                              <Input
                                name="frame18249"
                                placeholder="Enter product’s name"
                                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                type="text"
                                shape="round"
                                color="white_A700"
                                size="3xl"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Branch
                              </Text>
                              <Input
                                name="frame18249_One"
                                placeholder="Enter branch"
                                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                size="3xl"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Price
                              </Text>
                              <Input
                                name="frame18249_Two"
                                placeholder="Enter price"
                                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                size="3xl"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Select category
                              </Text>
                              <SelectBox
                                className="!text-blue_gray-800_01 border border-indigo-50 border-solid text-base text-left w-full"
                                placeholderClassName="!text-blue_gray-800_01"
                                indicator={
                                  <Img
                                    className="h-1.5 w-[11px]"
                                    src="images/img_arrowdown_blue_gray_900.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="frame18352"
                                options={dataProjectOptionsList}
                                isSearchable={false}
                                placeholder="Data project"
                                shape="round"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              />
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Product description
                              </Text>
                              <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-col h-[166px] md:h-auto items-start justify-start px-5 py-4 rounded w-full">
                                <Text
                                  className="text-base text-blue_gray-400 w-auto"
                                  size="txtInterRegular16Bluegray400"
                                >
                                  Write something...
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-center w-full">
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-8 sm:px-5 rounded shadow-bs1 w-full">
                        <div className="flex flex-col gap-8 items-center justify-center w-full">
                          <Text
                            className="text-blue_gray-900 text-lg w-full"
                            size="txtInterRegular18"
                          >
                            Product image
                          </Text>
                          <div className="border-2 border-indigo-50 border-solid flex flex-col items-center justify-center p-20 md:px-10 sm:px-5 rounded w-full">
                            <div className="flex flex-col items-center justify-center w-full">
                              <div className="flex flex-col gap-2 items-center justify-center w-full">
                                <Text
                                  className="text-base text-blue_gray-800_01 text-center w-full"
                                  size="txtInterRegular16Bluegray80001"
                                >
                                  Upload image
                                </Text>
                                <Text
                                  className="text-blue_gray-800_01 text-center text-sm w-full"
                                  size="txtInterRegular14"
                                >
                                  Drag or click to upload image
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col h-[406px] md:h-auto items-center justify-center p-8 sm:px-5 rounded shadow-bs1 w-full">
                        <div className="flex flex-col gap-8 items-start justify-start w-full">
                          <Text
                            className="text-blue_gray-900 text-lg w-full"
                            size="txtInterRegular18"
                          >
                            Add link
                          </Text>
                          <div className="flex flex-col gap-6 items-start justify-start w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Product Link
                              </Text>
                              <Input
                                name="frame18249_Three"
                                placeholder="Enter link"
                                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                size="3xl"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-blue_gray-800_01 text-sm w-full"
                                size="txtInterRegular14"
                              >
                                Hashtag
                              </Text>
                              <Input
                                name="frame18249_Four"
                                placeholder="Enter tag"
                                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-base text-left w-full"
                                wrapClassName="border border-indigo-50 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                size="3xl"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                            <div className="h-12 md:pr-10 sm:pr-5 pr-[122px] relative w-[49%] sm:w-full">
                              <div className="bg-deep_orange-300 h-12 my-auto rounded-[24px] w-[49%]"></div>
                              <Text
                                className="absolute h-max inset-y-[0] left-[17%] my-auto text-center text-sm text-white-A700"
                                size="txtInterRegular14WhiteA700"
                              >
                                Save
                              </Text>
                            </div>
                            <div className="md:h-12 h-[53px] relative w-[49%] sm:w-full">
                              <div className="absolute bg-gray-50 h-12 inset-x-[0] mx-auto rounded-[24px] top-[0] w-full"></div>
                              <Text
                                className="absolute bottom-[0] inset-x-[0] leading-[22.00px] mx-auto text-blue_gray-800_01 text-center text-sm w-[19%] sm:w-full"
                                size="txtInterRegular14"
                              >
                                Cancel
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListecontratPage;
