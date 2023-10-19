import React from "react";

import { Button } from "components";

const ContratventePThirteenColumnclarificationDesRGlesDeDroitEtDesProcDuresDeSCurisationFonciRe =
  (props) => {
    return (
      <>
        <div className={props.className}>
          <Button
            className="cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
            color="cyan_900_19"
            size="sm"
            variant="fill"
          >
            {props?.clarificationrules}
          </Button>
          <Button
            className="cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
            color="cyan_900_19"
            size="sm"
            variant="fill"
          >
            {props?.sensibilisationinfo}
          </Button>
          <Button
            className="cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
            color="cyan_900_19"
            size="sm"
            variant="fill"
          >
            {props?.consolidationgestion}
          </Button>
          <Button
            className="cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
            color="cyan_900_19"
            size="sm"
            variant="fill"
          >
            {props?.delimitationvillages}
          </Button>
          {!!props?.certificationfonciere ? (
            <Button
              className="cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
              color="cyan_900_19"
              size="sm"
              variant="fill"
            >
              {props?.certificationfonciere}
            </Button>
          ) : null}
          <Button
            className="cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
            color="cyan_900_19"
            size="sm"
            variant="fill"
          >
            {props?.consolidationdroits}
          </Button>
          <Button
            className="!text-white-A700 cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
            color="cyan_900_19"
            size="sm"
            variant="fill"
          >
            {props?.contractualisation}
          </Button>
          <Button
            className="cursor-pointer font-inter leading-[normal] rounded-sm text-center text-xs w-full"
            color="cyan_900_19"
            size="sm"
            variant="fill"
          >
            {props?.clotureoperations}
          </Button>
        </div>
      </>
    );
  };

ContratventePThirteenColumnclarificationDesRGlesDeDroitEtDesProcDuresDeSCurisationFonciRe.defaultProps =
  {
    clarificationrules:
      "CLARIFICATION DES RÈGLES DE DROIT ET DES PROCÉDURES DE SÉCURISATION FONCIÈRE",
    sensibilisationinfo: "SENSIBILISATION ET INFORMATION",
    consolidationgestion:
      "CONSOLIDATION DES DISPOSITIFS DE GESTION FONCIÈRE LOCALE (CDGFL)",
    delimitationvillages: "DÉLIMITATION DES TERRITOIRES DE VILLAGES (DTV)",
    consolidationdroits: "CONSOLIDATION DES DROITS CONCEDES (CDC)",
    contractualisation: "PROMOTION DE LA CONTRACTUALISATION",
    clotureoperations: "CLOTURE DES OPERATIONS INTEGREES",
  };

export default ContratventePThirteenColumnclarificationDesRGlesDeDroitEtDesProcDuresDeSCurisationFonciRe;
