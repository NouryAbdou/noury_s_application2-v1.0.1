import React from "react";

import { Button } from "components";

const PamoforStatut = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="!text-black-900 cursor-pointer flex-1 font-inter font-medium h-10 text-center text-sm w-full"
          shape="round"
          color="cyan_900_19"
          size="lg"
          variant="fill"
        >
          {props?.toutes}
        </Button>
        <Button
          className="cursor-pointer flex-1 font-inter font-medium h-10 text-center text-sm w-full"
          shape="round"
          color="cyan_900"
          size="lg"
          variant="fill"
        >
          {props?.encours}
        </Button>
        <Button
          className="!text-black-900 cursor-pointer flex-1 font-inter font-medium h-10 text-center text-sm w-full"
          shape="round"
          color="cyan_900_19"
          size="lg"
          variant="fill"
        >
          {props?.asoumettre}
        </Button>
        <Button
          className="!text-black-900 cursor-pointer flex-1 font-inter font-medium h-10 text-center text-sm w-full"
          shape="round"
          color="cyan_900_19"
          size="lg"
          variant="fill"
        >
          {props?.soumises}
        </Button>
        <Button
          className="!text-black-900 cursor-pointer flex-1 font-inter font-medium h-10 text-center text-sm w-full"
          shape="round"
          color="cyan_900_19"
          size="lg"
          variant="fill"
        >
          {props?.rejetees}
        </Button>
      </div>
    </>
  );
};

PamoforStatut.defaultProps = {
  toutes: "Toutes",
  encours: "En cours",
  asoumettre: "A soumettre",
  soumises: "Soumises",
  rejetees: "Rejetées",
};

export default PamoforStatut;
