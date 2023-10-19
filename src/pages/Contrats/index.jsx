import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import Header from "components/Header";
import PSFCPAMOFORModelePageValidationContratsAttenteRowsearch from "components/PSFCPAMOFORModelePageValidationContratsAttenteRowsearch";
import PSFCPAMOFORModelePageValidationItemlistecontr from "components/PSFCPAMOFORModelePageValidationItemlistecontr";
import PSFCPAMOFORModelePageValidationItemlistecontr1 from "components/PSFCPAMOFORModelePageValidationItemlistecontr1";
import PSFCPAMOFORModelePageValidationPagination from "components/PSFCPAMOFORModelePageValidationPagination";
import PSFCPAMOFORModelePageValidationRowidenqvillage from "components/PSFCPAMOFORModelePageValidationRowidenqvillage";
import PamoforStatut from "components/PamoforStatut";

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

const ContratsPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    { label: "SENSIBILISATION ET INFORMATION" },
    {
      label: "CONSOLIDATION DES DISPOSITIFS DE GESTION FONCIÈRE LOCALE (CDGFL)",
    },
    { label: "DÉLIMITATION DES TERRITOIRES DE VILLAGES (DTV)" },
    { label: "CERTIFICATION FONCIERE (CF)" },
    { label: "CONSOLIDATION DES DROITS CONCEDES (CDC)" },
    { label: "PROMOTION DE LA CONTRACTUALISATION" },
    { label: "CLOTURE DES OPERATIONS INTEGREES" },
  ];

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
            <Sidebar className="!sticky !w-[263px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-cyan-900_19 flex flex-col items-start justify-start mb-[766px] mt-2.5 mx-auto px-2.5 py-[5px] rounded-sm w-[223px]">
                <Text
                  className="max-w-[203px] md:max-w-full text-gray-700_99 text-xs"
                  size="txtInterRegular12Gray70099"
                >
                  CLARIFICATION DES RÈGLES DE DROIT ET DES PROCÉDURES DE
                  SÉCURISATION FONCIÈRE
                </Text>
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "5px",
                    backgroundColor: "#135f7619",
                    flexDirection: "column",
                    marginTop: "10px",
                    color: "#5d5a6f99",
                    fontSize: "12px",
                    borderRadius: "2px",
                    [`&:hover, &.ps-active`]: {
                      color: "#ffffff",
                      fontWeight: "400 !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-start mb-[421px] mt-[70px] pt-[5px] px-5 w-[85%]"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    PAMOFOR
                  </Text>
                  <Text
                    className="text-black-900 text-center text-sm w-auto"
                    size="txtInterMedium14"
                  >
                    <span className="text-black-900 font-inter font-medium">
                      Enquête :{" "}
                    </span>
                    <span className="text-black-900 font-inter font-bold">
                      RRDDDSSSVVV
                    </span>
                    <span className="text-black-900 font-inter font-medium">
                      {" "}
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-end justify-center sm:px-5 px-8 py-5 rounded shadow-bs1 w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start max-w-[1023px] w-full">
                        <div className="flex flex-col items-center justify-start px-2.5 w-full">
                          <Button
                            className="common-pointer !text-white-A700 cursor-pointer font-medium rounded-sm text-base text-center w-[370px]"
                            onClick={() => navigate("/addcontrat")}
                            color="cyan_900_19"
                            size="xl"
                            variant="fill"
                          >
                            Ajouter un contrat
                          </Button>
                        </div>
                        <PamoforStatut
                          className="gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start w-full"
                          toutes="Tous"
                          soumises="Soumis"
                          rejetees="Rejetés"
                        />
                        <PSFCPAMOFORModelePageValidationContratsAttenteRowsearch className="flex md:flex-col flex-row gap-2 items-start justify-start max-w-[1023px] w-full" />
                        <List
                          className="flex flex-col items-start w-full"
                          orientation="vertical"
                        >
                          <PSFCPAMOFORModelePageValidationRowidenqvillage className="bg-white-A700 border-b border-black-900_7f border-solid flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full" />
                          <PSFCPAMOFORModelePageValidationItemlistecontr
                            className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                            userenattente="En cours"
                          />
                          <PSFCPAMOFORModelePageValidationItemlistecontr1
                            className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                            enattentetype="En cours"
                          />
                          <PSFCPAMOFORModelePageValidationItemlistecontr
                            className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                            usercession="Metayage"
                            userindividuel="Collectif"
                            userenattente="En cours"
                          />
                          <PSFCPAMOFORModelePageValidationItemlistecontr1
                            className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                            enattentetype="En cours"
                          />
                          <PSFCPAMOFORModelePageValidationItemlistecontr
                            className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                            usercession="Donation"
                            userenattente="En cours"
                          />
                          <PSFCPAMOFORModelePageValidationItemlistecontr1
                            className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                            enattentetype="En cours"
                          />
                          <PSFCPAMOFORModelePageValidationItemlistecontr
                            className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                            userenattente="En cours"
                          />
                          <PSFCPAMOFORModelePageValidationItemlistecontr1
                            className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                            enattentetype="En cours"
                          />
                          <PSFCPAMOFORModelePageValidationItemlistecontr
                            className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                            userenattente="En cours"
                          />
                          <PSFCPAMOFORModelePageValidationItemlistecontr1
                            className="bg-cyan-900_0c flex flex-1 md:flex-col flex-row gap-[5px] h-[39px] md:h-auto items-center justify-start max-w-[979px] my-0 px-[15px] py-2 w-full"
                            enattentetype="En cours"
                          />
                        </List>
                        <PSFCPAMOFORModelePageValidationPagination
                          className="flex flex-col gap-[19px] items-center justify-start max-w-[978px] w-full"
                          pagenumber="5"
                        />
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

export default ContratsPage;
