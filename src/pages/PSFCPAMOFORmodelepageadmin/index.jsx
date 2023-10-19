import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";
import PSFCPAMOFORModelePageValidationFiltreenq from "components/PSFCPAMOFORModelePageValidationFiltreenq";
import PSFCPAMOFORModelePageValidationItemlistecontr from "components/PSFCPAMOFORModelePageValidationItemlistecontr";
import PSFCPAMOFORModelePageValidationItemlistecontr1 from "components/PSFCPAMOFORModelePageValidationItemlistecontr1";
import PSFCPAMOFORModelePageValidationPagination from "components/PSFCPAMOFORModelePageValidationPagination";
import PSFCPAMOFORModelePageValidationRowidenqvillage from "components/PSFCPAMOFORModelePageValidationRowidenqvillage";
import PSFCPAMOFORModelePageValidationStatutsenq from "components/PSFCPAMOFORModelePageValidationStatutsenq";

import { CloseSVG } from "../../assets/images";

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

const PSFCPAMOFORmodelepageadminPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label:
        "CLARIFICATION DES RÈGLES DE DROIT ET DES PROCÉDURES DE SÉCURISATION FONCIÈRE",
    },
    { label: "DÉLIMITATION DES TERRITOIRES DE VILLAGES (DTV)" },
    { label: "CERTIFICATION FONCIERE (CF)" },
    { label: "CONSOLIDATION DES DROITS CONCEDES (CDC)" },
  ];
  const sideBarMenu1 = [
    { label: "CLOTURE DES OPERATIONS INTEGREES" },
    { label: "Validés" },
    { label: "Se déconnecter" },
  ];
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[831px] md:h-auto items-start justify-start max-w-[1440px] mt-[5px] w-full">
          <Sidebar className="!sticky !w-[273px] bg-white-A700_ab flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <Img
              className="h-full mb-[791px] mt-5 mx-auto w-[253px]"
              src="images/img_frame7948.svg"
              alt="frame7948"
            />
            <Button
              className="cursor-pointer h-[25px] leading-[normal] mb-[691px] mt-[115px] mx-auto rounded-sm text-center text-xs w-[233px]"
              color="white_A700_7f"
              size="sm"
              variant="fill"
            >
              SENSIBILISATION ET INFORMATION
            </Button>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "5px",
                  backgroundColor: "#ffffff7f",
                  flexDirection: "column",
                  color: "#000000b2",
                  fontSize: "12px",
                  borderRadius: "2px",
                  [`&:hover, &.ps-active`]: { fontWeight: "400 !important" },
                },
              }}
              className="flex flex-col items-center justify-start mb-[290px] mt-[45px] px-5 py-[5px] w-[86%]"
            >
              <div className="flex flex-col gap-[-15px] items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <Button
                className="common-pointer cursor-pointer h-10 leading-[normal] mt-2.5 rounded-sm text-center text-xs w-full"
                onClick={() => navigate("/contrats")}
                color="cyan_900"
                size="sm"
                variant="fill"
              >
                PROMOTION DE LA CONTRACTUALISATION
              </Button>
              <div className="flex flex-col gap-[-16px] items-center justify-end mt-2.5 w-full">
                {sideBarMenu1?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <Line className="bg-gradient  h-px mb-[98px] rotate-[90deg] w-full" />
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col h-[693px] md:h-auto items-start justify-start max-w-[1120px] p-2.5 md:px-5 w-full">
            <div className="flex flex-col gap-2.5 h-[673px] md:h-auto items-center justify-start max-w-[978px] w-full">
              <div className="flex flex-col gap-2.5 h-[614px] md:h-auto items-start justify-start w-full">
                <div className="flex flex-col items-start justify-center px-2.5 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    PAMOFOR
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start px-2.5 w-full">
                  <div className="flex flex-col items-start justify-start w-[569px] sm:w-full">
                    <Text
                      className="text-black-900 text-center text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      Validation des documents
                    </Text>
                  </div>
                </div>
                <PSFCPAMOFORModelePageValidationStatutsenq className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full" />
                <PSFCPAMOFORModelePageValidationFiltreenq className="flex flex-col gap-2.5 items-center justify-start w-full" />
                <List
                  className="flex flex-col items-start w-full"
                  orientation="vertical"
                >
                  <PSFCPAMOFORModelePageValidationRowidenqvillage className="bg-white-A700 border-b border-black-900_7f border-solid flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                  <PSFCPAMOFORModelePageValidationItemlistecontr className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                  <PSFCPAMOFORModelePageValidationItemlistecontr1
                    className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                    enattentetype="Validé"
                  />
                  <PSFCPAMOFORModelePageValidationItemlistecontr className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                  <PSFCPAMOFORModelePageValidationItemlistecontr1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                  <PSFCPAMOFORModelePageValidationItemlistecontr className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                  <PSFCPAMOFORModelePageValidationItemlistecontr1
                    className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                    enattentetype="Validé"
                  />
                  <PSFCPAMOFORModelePageValidationItemlistecontr className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                  <PSFCPAMOFORModelePageValidationItemlistecontr1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                  <PSFCPAMOFORModelePageValidationItemlistecontr
                    className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                    userenattente="Rejeté"
                  />
                  <PSFCPAMOFORModelePageValidationItemlistecontr1 className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                </List>
              </div>
              <PSFCPAMOFORModelePageValidationPagination
                className="flex flex-col gap-[19px] items-center justify-start"
                pagenumber="5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PSFCPAMOFORmodelepageadminPage;
