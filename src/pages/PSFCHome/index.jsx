import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, SelectBox, Text } from "components";
import PSFCHomeCompte from "components/PSFCHomeCompte";

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

const PSFCHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter gap-2.5 h-[900px] items-center justify-start mx-auto w-auto sm:w-full md:w-full"
        style={{ backgroundImage: "url('images/img_psfchome.png')" }}
      >
        <header className="bg-white-A700 flex items-center justify-center md:px-5 py-2.5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-6xl w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[16%] md:w-full">
              <Img
                className="h-[49px] md:h-auto object-cover w-[68%]"
                src="images/img_logocgeds1.png"
                alt="logocgedsOne"
              />
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-center w-[624px] md:w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-black-900_66 text-sm w-auto"
                  size="txtInterBold14"
                >
                  Accueil
                </Text>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer font-bold leading-[normal] min-w-[49px] text-black-900_66 text-center text-sm"
                onClick={() => navigate("/psfcseconnecter")}
                size="xs"
              >
                Projets
              </Button>
              <SelectBox
                className="font-bold leading-[normal] text-black-900_66 text-right text-sm w-1/5 md:w-full"
                placeholderClassName="text-black-900_66"
                indicator={
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="language"
                options={languageOptionsList}
                isSearchable={false}
                placeholder="Relation client  "
              />
              <SelectBox
                className="font-bold leading-[normal] text-black-900_66 text-right text-sm w-[19%] md:w-full"
                placeholderClassName="text-black-900_66"
                indicator={
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="recrutement"
                options={recrutementOptionsList}
                isSearchable={false}
                placeholder="Recrutement"
              />
              <SelectBox
                className="font-bold leading-[normal] text-black-900_66 text-right text-sm w-[14%] md:w-full"
                placeholderClassName="text-black-900_66"
                indicator={
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="services"
                options={servicesOptionsList}
                isSearchable={false}
                placeholder="Services"
              />
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-black-900_66 text-sm w-auto"
                  size="txtInterBold14"
                >
                  Contact
                </Text>
              </div>
            </div>
            <PSFCHomeCompte className="bg-white-A700 flex flex-row items-center justify-start w-auto" />
          </div>
        </header>
        <div className="flex flex-col items-start justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-[60px] w-full">
          <div className="flex md:flex-col flex-row gap-[42px] h-[599px] md:h-auto items-start justify-center max-w-7xl mx-auto w-full">
            <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start w-[445px] sm:w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[271px] text-center text-sm"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <>
                  Axé sur la sécurisation foncière et <br />
                  les travaux cadastraux
                </>
              </Button>
              <div className="flex flex-col gap-[30px] items-start justify-start w-[445px] sm:w-full">
                <Text
                  className="leading-[40.00px] max-w-[445px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtInterBold32"
                >
                  <>Portail de Sécurisation Foncière de la Côte d&#39;Ivoire</>
                </Text>
                <Text
                  className="leading-[30.00px] max-w-[445px] md:max-w-full text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  <>
                    Solution d&#39;automatisation complète du processus
                    technique, qui englobe la planification, la collecte de
                    données sur le terrain, le calcul et la production de tous
                    les livrables essentiels, tels que les cartes, les plans et
                    les rapports.
                  </>
                </Text>
              </div>
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[235px] text-base text-center"
                onClick={() => navigate("/psfcseconnecter")}
                shape="round"
                color="cyan_900_ab"
                size="xl"
                variant="fill"
              >
                Voir les projets
              </Button>
            </div>
            <Img
              className="md:flex-1 h-[438px] sm:h-auto object-cover w-[619px] md:w-full"
              src="images/img_image.png"
              alt="image_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PSFCHomePage;
