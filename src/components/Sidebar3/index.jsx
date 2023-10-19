import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button } from "components";

const Sidebar3 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-col gap-2.5 items-start justify-start mb-[406px] mx-auto py-2.5 w-[223px]">
          <Button
            className="common-pointer cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
            onClick={() => navigate("/contrats")}
            color="cyan_900_19"
            size="sm"
            variant="fill"
          >
            CLARIFICATION DES RÈGLES DE DROIT ET DES PROCÉDURES DE SÉCURISATION
            FONCIÈRE
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
      </Sidebar>
    </>
  );
};

Sidebar3.defaultProps = {};

export default Sidebar3;
