import React from "react";

import { Button, Img, SelectBox, Text } from "components";
import Header from "components/Header";
import PSFCProjetsCarteprojet from "components/PSFCProjetsCarteprojet";

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

const PSFCProjetsPage = () => {
  const psfcProjetsCarteprojetPropList = [
    {},
    { projectname: "PAGDES", userimage: "images/img_rectangle2872_50x50.png" },
    { projectname: "Projet 3", userimage: "images/img_rectangle2872_1.png" },
    { projectname: "PROJET 4", userimage: "images/img_rectangle2872_2.png" },
    {
      projectname: "PROJET 5",
      userimage: "images/img_rectangle2872_3.png",
      projectdescription: (
        <>
          Description projet
          <br />
          Description projet
          <br />
          Description projet
        </>
      ),
    },
    {
      projectname: "PROJET 6",
      userimage: "images/img_rectangle2872_4.png",
      projectdescription: (
        <>
          Description projet
          <br />
          Description projet
          <br />
          Description projet
        </>
      ),
    },
    {
      projectname: "PROJET 7",
      userimage: "images/img_rectangle2872_5.png",
      projectdescription: (
        <>
          Description projet
          <br />
          Description projet
          <br />
          Description projet
        </>
      ),
    },
    {
      projectname: "PROJET 8",
      userimage: "images/img_rectangle2872_6.png",
      projectdescription: (
        <>
          Description projet
          <br />
          Description projet
          <br />
          Description projet
        </>
      ),
    },
    {
      projectname: "PROJET 9",
      userimage: "images/img_rectangle2872_7.png",
      projectdescription: (
        <>
          Description projet
          <br />
          Description projet
          <br />
          Description projet
        </>
      ),
    },
    {
      projectname: "PROJET 10",
      userimage: "images/img_rectangle2872_8.png",
      projectdescription: (
        <>
          Description projet
          <br />
          Description projet
          <br />
          Description projet
        </>
      ),
    },
    {
      projectname: "PROJET 11",
      userimage: "images/img_rectangle2872_9.png",
      projectdescription: (
        <>
          Description projet
          <br />
          Description projet
          <br />
          Description projet
        </>
      ),
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter gap-2.5 h-[900px] items-center justify-start mx-auto w-auto sm:w-full md:w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <Text
            className="bg-teal-900 h-[60px] justify-center max-w-[985px] md:max-w-full pb-3 pl-[30px] pr-[35px] pt-4 sm:px-5 rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-full"
            size="txtInterSemiBold25"
          >
            Projets
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start md:px-10 px-20 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[981px] mx-auto w-full">
              <div className="flex flex-col items-center justify-start p-[5px] w-full">
                <div className="md:gap-5 gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  {psfcProjetsCarteprojetPropList.map((props, index) => (
                    <React.Fragment key={`PSFCProjetsCarteprojet${index}`}>
                      <PSFCProjetsCarteprojet
                        className="bg-cyan-900_19 flex flex-1 flex-col gap-2 h-56 md:h-auto items-center justify-center p-2.5 rounded-[10px] w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PSFCProjetsPage;
