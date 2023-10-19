import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Text } from "components";

const Sidebar9 = (props) => {
  const sideBarMenu = [
    {
      label:
        "CLARIFICATION DES RÈGLES DE DROIT ET DES PROCÉDURES DE SÉCURISATION FONCIÈRE",
    },
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
      <Sidebar className={props.className}>
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              backgroundColor: "#135f7619",
              flexDirection: "column",
              paddingLeft: "11px",
              color: "#5d5a6f99",
              fontSize: "12px",
              fontFamily: "Inter",
              borderRadius: "2px",
              paddingTop: "11px",
              paddingBottom: "11px",
              [`&:hover, &.ps-active`]: {
                color: "#ffffff",
                fontWeight: "400 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[432px] pr-10 sm:pr-5 pt-[5px] w-[85%]"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar9.defaultProps = {};

export default Sidebar9;
