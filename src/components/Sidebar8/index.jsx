import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Line } from "components";

const Sidebar8 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-white-A700 flex flex-col h-[831px] md:h-auto items-start justify-start px-5 w-[263px]">
          <div className="flex flex-col gap-2.5 items-start justify-start py-2.5 w-full">
            <Button
              className="common-pointer cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
              onClick={() => navigate("/contrats")}
              color="cyan_900_19"
              size="sm"
              variant="fill"
            >
              CLARIFICATION DES RÈGLES DE DROIT ET DES PROCÉDURES DE
              SÉCURISATION FONCIÈRE
            </Button>
            <Button
              className="common-pointer cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
              onClick={() => navigate("/contrats")}
              color="cyan_900_19"
              size="sm"
              variant="fill"
            >
              SENSIBILISATION ET INFORMATION
            </Button>
            <Button
              className="common-pointer cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
              onClick={() => navigate("/contrats")}
              color="cyan_900_19"
              size="sm"
              variant="fill"
            >
              CONSOLIDATION DES DISPOSITIFS DE GESTION FONCIÈRE LOCALE (CDGFL)
            </Button>
            <Button
              className="common-pointer cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
              onClick={() => navigate("/contrats")}
              color="cyan_900_19"
              size="sm"
              variant="fill"
            >
              DÉLIMITATION DES TERRITOIRES DE VILLAGES (DTV)
            </Button>
            <Button
              className="common-pointer cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
              onClick={() => navigate("/contrats")}
              color="cyan_900_19"
              size="sm"
              variant="fill"
            >
              CERTIFICATION FONCIERE (CF)
            </Button>
            <Button
              className="common-pointer cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
              onClick={() => navigate("/contrats")}
              color="cyan_900_19"
              size="sm"
              variant="fill"
            >
              CONSOLIDATION DES DROITS CONCEDES (CDC)
            </Button>
            <Button
              className="common-pointer !text-white-A700 cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
              onClick={() => navigate("/contrats")}
              color="cyan_900_19"
              size="sm"
              variant="fill"
            >
              PROMOTION DE LA CONTRACTUALISATION
            </Button>
            <Button
              className="common-pointer cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
              onClick={() => navigate("/contrats")}
              color="cyan_900_19"
              size="sm"
              variant="fill"
            >
              CLOTURE DES OPERATIONS INTEGREES
            </Button>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-row gap-[-2px] h-[831px] md:h-auto items-start justify-center w-auto">
          <Line className="bg-gray-500 h-[300px] rounded-sm w-1" />
          <Line className="bg-black-900_7f h-[831px] w-px" />
        </div>
      </Sidebar>
    </>
  );
};

Sidebar8.defaultProps = {};

export default Sidebar8;
