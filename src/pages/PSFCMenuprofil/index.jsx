import React from "react";

import { Img, Text } from "components";
import PSFCMenuProfilMenufile from "components/PSFCMenuProfilMenufile";

const PSFCMenuprofilPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div
          className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[900px] md:h-auto items-center justify-start max-w-[1440px] w-full"
          style={{ backgroundImage: "url('images/img_psfchome.png')" }}
        >
          <div className="flex flex-col items-start justify-end max-w-6xl mx-auto md:px-5 w-full">
            <PSFCMenuProfilMenufile className="bg-cyan-900 flex flex-col gap-[5px] items-start justify-start px-5 py-2.5 rounded shadow-bs w-[230px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PSFCMenuprofilPage;
