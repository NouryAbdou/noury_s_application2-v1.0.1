import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const Sidebar2 = (props) => {
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

  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-full mb-[811px] mx-auto w-[253px]"
          src="images/img_frame7948.svg"
          alt="frame7948"
        />
        <Button
          className="cursor-pointer font-inter h-[25px] leading-[normal] mb-[711px] mt-[95px] mx-auto rounded-sm text-center text-xs w-[233px]"
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
              fontFamily: "Inter",
              borderRadius: "2px",
              [`&:hover, &.ps-active`]: { fontWeight: "400 !important" },
            },
          }}
          className="flex flex-col items-center justify-start mb-[531px] mt-[25px] pt-[5px] px-5 w-[86%]"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        <Button
          className="common-pointer cursor-pointer font-inter h-10 leading-[normal] mb-[476px] mt-[315px] mx-auto rounded-sm text-center text-xs w-[233px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900"
          size="sm"
          variant="fill"
        >
          PROMOTION DE LA CONTRACTUALISATION
        </Button>
        <Line className="bg-gradient  h-px mx-auto my-[415px] rotate-[90deg] w-[93%]" />
      </Sidebar>
    </>
  );
};

Sidebar2.defaultProps = {};

export default Sidebar2;
