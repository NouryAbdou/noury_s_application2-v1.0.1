import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button } from "components";

const Sidebar5 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar className={props.className}>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[980px] mt-1.5 mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          CLARIFICATION DES RÈGLES DE DROIT ET DES PROCÉDURES DE SÉCURISATION
          FONCIÈRE
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[930px] mt-[71px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          SENSIBILISATION ET INFORMATION
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[865px] mt-[121px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          CONSOLIDATION DES DISPOSITIFS DE GESTION FONCIÈRE LOCALE (CDGFL)
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[815px] mt-[186px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          DÉLIMITATION DES TERRITOIRES DE VILLAGES (DTV)
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[780px] mt-[236px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          CERTIFICATION FONCIERE (CF)
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[730px] mt-[271px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          CONSOLIDATION DES DROITS CONCEDES (CDC)
        </Button>
        <Button
          className="common-pointer !text-white-A700 cursor-pointer font-inter leading-[normal] mb-[680px] mt-[321px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          PROMOTION DE LA CONTRACTUALISATION
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[630px] mt-[371px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          CLOTURE DES OPERATIONS INTEGREES
        </Button>
      </Sidebar>
    </>
  );
};

Sidebar5.defaultProps = {};

export default Sidebar5;
