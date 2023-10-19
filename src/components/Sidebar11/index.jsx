import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button } from "components";

const Sidebar11 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar className={props.className}>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[766px] mt-2.5 mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          CLARIFICATION DES RÈGLES DE DROIT ET DES PROCÉDURES DE SÉCURISATION
          FONCIÈRE
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[716px] mt-[75px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          SENSIBILISATION ET INFORMATION
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[651px] mt-[125px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          CONSOLIDATION DES DISPOSITIFS DE GESTION FONCIÈRE LOCALE (CDGFL)
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[601px] mt-[190px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          DÉLIMITATION DES TERRITOIRES DE VILLAGES (DTV)
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[566px] mt-60 mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          CERTIFICATION FONCIERE (CF)
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[516px] mt-[275px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          CONSOLIDATION DES DROITS CONCEDES (CDC)
        </Button>
        <Button
          className="common-pointer !text-white-A700 cursor-pointer font-inter leading-[normal] mb-[466px] mt-[325px] mx-auto rounded-sm text-center text-xs w-[223px]"
          onClick={() => navigate("/contrats")}
          color="cyan_900_19"
          size="sm"
          variant="fill"
        >
          PROMOTION DE LA CONTRACTUALISATION
        </Button>
        <Button
          className="common-pointer cursor-pointer font-inter leading-[normal] mb-[416px] mt-[375px] mx-auto rounded-sm text-center text-xs w-[223px]"
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

Sidebar11.defaultProps = {};

export default Sidebar11;
