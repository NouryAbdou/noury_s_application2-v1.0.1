import React from "react";

import { Button, Img, Input, Text } from "components";

const PSFCPAMOFORModelePageValidationContratsPageValidationTwoColumnnometprnoms =
  (props) => {
    return (
      <>
        <div className={props.className}>
          {!!props?.validationlevel ? (
            <Text
              className="text-black-900 text-xs w-auto"
              size="txtInterSemiBold12"
            >
              {props?.validationlevel}
            </Text>
          ) : null}
          <div className="flex flex-col items-start justify-center w-full">
            <Text
              className="text-black-900 text-xs w-auto"
              size="txtInterRegular12Black900"
            >
              {props?.username}
            </Text>
            <Input
              name="frame7857_Eight"
              placeholder="Text"
              className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
              wrapClassName="border border-gray-300 border-solid rounded-md w-full"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <Text
              className="text-black-900 text-xs w-auto"
              size="txtInterRegular12Black900"
            >
              {props?.userfunction}
            </Text>
            <Input
              name="frame7857_Nine"
              placeholder="Text"
              className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
              wrapClassName="border border-gray-300 border-solid rounded-md w-full"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <Text
              className="text-black-900 text-xs w-auto"
              size="txtInterRegular12Black900"
            >
              {props?.usercomment}
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <Input
                name="frame7857_Ten"
                placeholder="Placeholder"
                className="font-inter leading-[normal] md:h-auto p-0 placeholder:text-black-900_b2 sm:h-auto text-left text-xs w-full"
                wrapClassName="border border-gray-300 border-solid rounded-md w-full"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
            </div>
          </div>
          <div className="flex flex-row gap-[5px] items-start justify-start w-full">
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtInterRegular12Black900"
              >
                {props?.usersignature}
              </Text>
              <div className="bg-white-A700 border border-gray-300 border-solid h-[130px] w-full"></div>
              <Text
                className="bg-black-900_19 justify-center px-[5px] text-[10px] text-black-900 w-auto"
                size="txtInterRegular10"
              >
                {props?.usersignatureclear}
              </Text>
            </div>
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtInterRegular12Black900"
              >
                {props?.userfingerprint}
              </Text>
              <div className="bg-white-A700 border border-gray-300 border-solid h-[130px] w-full"></div>
              <Text
                className="bg-black-900_19 justify-center px-[5px] text-[10px] text-black-900 w-auto"
                size="txtInterRegular10"
              >
                {props?.userfingerprintclear}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <Text
              className="text-black-900 text-xs w-auto"
              size="txtInterRegular12Black900"
            >
              {props?.userdate}
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <Input
                name="frame7857_Eleven"
                placeholder="jj/mm/aaaa"
                className="!placeholder:text-black-900 !text-black-900 font-inter leading-[normal] p-0 text-left text-xs w-full"
                wrapClassName="border border-gray-300 border-solid flex md:h-auto rounded-md w-[340px]"
                suffix={
                  <Img
                    className="h-5 ml-[35px] my-auto"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
            </div>
          </div>
          <div className="flex flex-row gap-2.5 items-start justify-center px-2.5 py-[5px] w-full">
            {!!props?.userreject ? (
              <Text
                className="bg-gray-600_01 justify-center px-2.5 py-[3px] rounded-[5px] text-[10px] text-center text-white-A700 w-auto"
                size="txtInterRegular10WhiteA700"
              >
                {props?.userreject}
              </Text>
            ) : null}
            <Button
              className="cursor-pointer font-inter leading-[normal] min-w-[53px] rounded-[5px] text-[10px] text-center"
              color="cyan_900"
              size="sm"
              variant="fill"
            >
              {props?.uservalidate}
            </Button>
          </div>
        </div>
      </>
    );
  };

PSFCPAMOFORModelePageValidationContratsPageValidationTwoColumnnometprnoms.defaultProps =
  {
    username: "Nom et prénom(s)",
    userfunction: "Fonction",
    usercomment: "Commentaire",
    usersignature: "Signature",
    usersignatureclear: "Effacer",
    userfingerprint: "Empreinte",
    userfingerprintclear: "Effacer",
    userdate: "Date",
    uservalidate: "Valider",
  };

export default PSFCPAMOFORModelePageValidationContratsPageValidationTwoColumnnometprnoms;
