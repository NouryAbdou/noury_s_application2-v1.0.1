import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const CF1 = React.lazy(() => import("pages/CF1"));
const CF1Two = React.lazy(() => import("pages/CF1Two"));
const CF1One = React.lazy(() => import("pages/CF1One"));
const ContratcessionpNine = React.lazy(() =>
  import("pages/ContratcessionpNine"),
);
const ContratcessionpEight = React.lazy(() =>
  import("pages/ContratcessionpEight"),
);
const ContratcessionpSeven = React.lazy(() =>
  import("pages/ContratcessionpSeven"),
);
const ContratcessionpFive = React.lazy(() =>
  import("pages/ContratcessionpFive"),
);
const ContratcessionpFour = React.lazy(() =>
  import("pages/ContratcessionpFour"),
);
const ContratcessionpThree = React.lazy(() =>
  import("pages/ContratcessionpThree"),
);
const ContratcessionpTwoOne = React.lazy(() =>
  import("pages/ContratcessionpTwoOne"),
);
const ContratcessionpTwo = React.lazy(() => import("pages/ContratcessionpTwo"));
const ContratcessionpOne = React.lazy(() => import("pages/ContratcessionpOne"));
const ContratjacherepEleven = React.lazy(() =>
  import("pages/ContratjacherepEleven"),
);
const ContratjacherepTen = React.lazy(() => import("pages/ContratjacherepTen"));
const ContratjacherepNine = React.lazy(() =>
  import("pages/ContratjacherepNine"),
);
const ContratjacherepEight = React.lazy(() =>
  import("pages/ContratjacherepEight"),
);
const ContratjacherepSeven = React.lazy(() =>
  import("pages/ContratjacherepSeven"),
);
const ContratjacherepSix = React.lazy(() => import("pages/ContratjacherepSix"));
const ContratmiseengarantiepFiveOne = React.lazy(() =>
  import("pages/ContratmiseengarantiepFiveOne"),
);
const ContratmiseengarantiepFour = React.lazy(() =>
  import("pages/ContratmiseengarantiepFour"),
);
const ContratmiseengarantiepThreeTwo = React.lazy(() =>
  import("pages/ContratmiseengarantiepThreeTwo"),
);
const ContratmiseengarantiepTwoOne = React.lazy(() =>
  import("pages/ContratmiseengarantiepTwoOne"),
);
const ContratmiseengarantiepOneOne = React.lazy(() =>
  import("pages/ContratmiseengarantiepOneOne"),
);
const ContratmiseengarantiepEleven = React.lazy(() =>
  import("pages/ContratmiseengarantiepEleven"),
);
const ContratmiseengarantiepTen = React.lazy(() =>
  import("pages/ContratmiseengarantiepTen"),
);
const ContratmiseengarantiepNine = React.lazy(() =>
  import("pages/ContratmiseengarantiepNine"),
);
const ContratmiseengarantiepEight = React.lazy(() =>
  import("pages/ContratmiseengarantiepEight"),
);
const ContratmiseengarantiepSeven = React.lazy(() =>
  import("pages/ContratmiseengarantiepSeven"),
);
const ContratmiseengarantiepSix = React.lazy(() =>
  import("pages/ContratmiseengarantiepSix"),
);
const ContratmiseengarantiepFiveTwo = React.lazy(() =>
  import("pages/ContratmiseengarantiepFiveTwo"),
);
const ContratmiseengarantiepFive = React.lazy(() =>
  import("pages/ContratmiseengarantiepFive"),
);
const ContratmiseengarantiepFourOne = React.lazy(() =>
  import("pages/ContratmiseengarantiepFourOne"),
);
const ContratmiseengarantiepFourTwo = React.lazy(() =>
  import("pages/ContratmiseengarantiepFourTwo"),
);
const ContratmiseengarantiepThreeOne = React.lazy(() =>
  import("pages/ContratmiseengarantiepThreeOne"),
);
const ContratmiseengarantiepThree = React.lazy(() =>
  import("pages/ContratmiseengarantiepThree"),
);
const ContratmiseengarantiepTwoTwo = React.lazy(() =>
  import("pages/ContratmiseengarantiepTwoTwo"),
);
const ContratmiseengarantiepTwo = React.lazy(() =>
  import("pages/ContratmiseengarantiepTwo"),
);
const ContratmiseengarantiepOneTwo = React.lazy(() =>
  import("pages/ContratmiseengarantiepOneTwo"),
);
const ContratmiseengarantiepOne = React.lazy(() =>
  import("pages/ContratmiseengarantiepOne"),
);
const ContratterrepTwelve = React.lazy(() =>
  import("pages/ContratterrepTwelve"),
);
const ContratterrepEleven = React.lazy(() =>
  import("pages/ContratterrepEleven"),
);
const ContratterrepTen = React.lazy(() => import("pages/ContratterrepTen"));
const ContratterrepNine = React.lazy(() => import("pages/ContratterrepNine"));
const ContratterrepEight = React.lazy(() => import("pages/ContratterrepEight"));
const ContratterrepSeven = React.lazy(() => import("pages/ContratterrepSeven"));
const ContratterrepSix = React.lazy(() => import("pages/ContratterrepSix"));
const ContratterrepFive = React.lazy(() => import("pages/ContratterrepFive"));
const ContratterrepFour = React.lazy(() => import("pages/ContratterrepFour"));
const ContratterrepThree = React.lazy(() => import("pages/ContratterrepThree"));
const ContratterrepTwo = React.lazy(() => import("pages/ContratterrepTwo"));
const ContratterrepOne = React.lazy(() => import("pages/ContratterrepOne"));
const ContratplantationpTwelve = React.lazy(() =>
  import("pages/ContratplantationpTwelve"),
);
const ContratplantationpEleven = React.lazy(() =>
  import("pages/ContratplantationpEleven"),
);
const ContratplantationpTen = React.lazy(() =>
  import("pages/ContratplantationpTen"),
);
const ContratplantationpNine = React.lazy(() =>
  import("pages/ContratplantationpNine"),
);
const ContratplantationpEight = React.lazy(() =>
  import("pages/ContratplantationpEight"),
);
const ContratplantationpSeven = React.lazy(() =>
  import("pages/ContratplantationpSeven"),
);
const ContratplantationpSix = React.lazy(() =>
  import("pages/ContratplantationpSix"),
);
const ContratplantationpFive = React.lazy(() =>
  import("pages/ContratplantationpFive"),
);
const ContratplantationpFour = React.lazy(() =>
  import("pages/ContratplantationpFour"),
);
const ContratplantationpThree = React.lazy(() =>
  import("pages/ContratplantationpThree"),
);
const ContratplantationpTwo = React.lazy(() =>
  import("pages/ContratplantationpTwo"),
);
const ContratplantationpOne = React.lazy(() =>
  import("pages/ContratplantationpOne"),
);
const ContratrecoltepTwelve = React.lazy(() =>
  import("pages/ContratrecoltepTwelve"),
);
const ContratrecoltepEleven = React.lazy(() =>
  import("pages/ContratrecoltepEleven"),
);
const ContratrecoltepTen = React.lazy(() => import("pages/ContratrecoltepTen"));
const ContratrecoltepNine = React.lazy(() =>
  import("pages/ContratrecoltepNine"),
);
const ContratrecoltepEight = React.lazy(() =>
  import("pages/ContratrecoltepEight"),
);
const ContratrecoltepSeven = React.lazy(() =>
  import("pages/ContratrecoltepSeven"),
);
const ContratrecoltepSix = React.lazy(() => import("pages/ContratrecoltepSix"));
const ContratrecolepFive = React.lazy(() => import("pages/ContratrecolepFive"));
const ContratrecolepFour = React.lazy(() => import("pages/ContratrecolepFour"));
const ContratrecolepThree = React.lazy(() =>
  import("pages/ContratrecolepThree"),
);
const ContratrecolepTwo = React.lazy(() => import("pages/ContratrecolepTwo"));
const ContratrecoltepOne = React.lazy(() => import("pages/ContratrecoltepOne"));
const ContratpretpNine = React.lazy(() => import("pages/ContratpretpNine"));
const ContratpretpEight = React.lazy(() => import("pages/ContratpretpEight"));
const ContratpretpTen = React.lazy(() => import("pages/ContratpretpTen"));
const ContratpretpSeven = React.lazy(() => import("pages/ContratpretpSeven"));
const ContratpretpSix = React.lazy(() => import("pages/ContratpretpSix"));
const ContratpretpFive = React.lazy(() => import("pages/ContratpretpFive"));
const ContratpretpFour = React.lazy(() => import("pages/ContratpretpFour"));
const ContratpretpThree = React.lazy(() => import("pages/ContratpretpThree"));
const ContratpretpTwo = React.lazy(() => import("pages/ContratpretpTwo"));
const ContratpretpOne = React.lazy(() => import("pages/ContratpretpOne"));
const ContratmetayagepTen = React.lazy(() =>
  import("pages/ContratmetayagepTen"),
);
const ContratmetayagepNine = React.lazy(() =>
  import("pages/ContratmetayagepNine"),
);
const ContratmetayagepEight = React.lazy(() =>
  import("pages/ContratmetayagepEight"),
);
const ContratmetayagepSeven = React.lazy(() =>
  import("pages/ContratmetayagepSeven"),
);
const ContratventepFiveOne = React.lazy(() =>
  import("pages/ContratventepFiveOne"),
);
const ContratmetayagepFour = React.lazy(() =>
  import("pages/ContratmetayagepFour"),
);
const ContratmetayagepThree = React.lazy(() =>
  import("pages/ContratmetayagepThree"),
);
const ContratmetayagepTwo = React.lazy(() =>
  import("pages/ContratmetayagepTwo"),
);
const ContratmetayagepOne = React.lazy(() =>
  import("pages/ContratmetayagepOne"),
);
const ContratmetayagepSix = React.lazy(() =>
  import("pages/ContratmetayagepSix"),
);
const Frame7889 = React.lazy(() => import("pages/Frame7889"));
const ContratventepFifteen = React.lazy(() =>
  import("pages/ContratventepFifteen"),
);
const ContratventepFourteen = React.lazy(() =>
  import("pages/ContratventepFourteen"),
);
const ContratventepThirteen = React.lazy(() =>
  import("pages/ContratventepThirteen"),
);
const ContratventepTwelve = React.lazy(() =>
  import("pages/ContratventepTwelve"),
);
const ContratventepEleven = React.lazy(() =>
  import("pages/ContratventepEleven"),
);
const ContratventepTen = React.lazy(() => import("pages/ContratventepTen"));
const ContratventepNine = React.lazy(() => import("pages/ContratventepNine"));
const ContratventepEight = React.lazy(() => import("pages/ContratventepEight"));
const ContratventepSeven = React.lazy(() => import("pages/ContratventepSeven"));
const ContratventepSix = React.lazy(() => import("pages/ContratventepSix"));
const ContratventepFive = React.lazy(() => import("pages/ContratventepFive"));
const ContratventepFour = React.lazy(() => import("pages/ContratventepFour"));
const ContratventepThree = React.lazy(() => import("pages/ContratventepThree"));
const ContratventepTwo = React.lazy(() => import("pages/ContratventepTwo"));
const ContratventepOne = React.lazy(() => import("pages/ContratventepOne"));
const Frame7888 = React.lazy(() => import("pages/Frame7888"));
const PSFCPAMOFOREnqPromoContratContratlocationpEleven = React.lazy(() =>
  import("pages/PSFCPAMOFOREnqPromoContratContratlocationpEleven"),
);
const PSFCPAMOFOREnqPromoContratContratlocationpTen = React.lazy(() =>
  import("pages/PSFCPAMOFOREnqPromoContratContratlocationpTen"),
);
const PSFCPAMOFOREnqPromoContratContratlocationpNine = React.lazy(() =>
  import("pages/PSFCPAMOFOREnqPromoContratContratlocationpNine"),
);
const PSFCPAMOFOREnqPromoContratContratlocationpEight = React.lazy(() =>
  import("pages/PSFCPAMOFOREnqPromoContratContratlocationpEight"),
);
const PSFCPAMOFOREnqPromoContratContratlocationpSeven = React.lazy(() =>
  import("pages/PSFCPAMOFOREnqPromoContratContratlocationpSeven"),
);
const PSFCPAMOFOREnqPromoContratContratlocationpSix = React.lazy(() =>
  import("pages/PSFCPAMOFOREnqPromoContratContratlocationpSix"),
);
const PSFCPAMOFOREnqPromoContratContratlocationpFive = React.lazy(() =>
  import("pages/PSFCPAMOFOREnqPromoContratContratlocationpFive"),
);
const PSFCPAMOFOREnqPromoContratContratlocationpFour = React.lazy(() =>
  import("pages/PSFCPAMOFOREnqPromoContratContratlocationpFour"),
);
const PSFCPAMOFOREnqPromoContratContratlocationpThree = React.lazy(() =>
  import("pages/PSFCPAMOFOREnqPromoContratContratlocationpThree"),
);
const Enquete = React.lazy(() => import("pages/Enquete"));
const AddEnquete = React.lazy(() => import("pages/AddEnquete"));
const PSFCCompteconfirmationechoue = React.lazy(() =>
  import("pages/PSFCCompteconfirmationechoue"),
);
const PSFCCompteconfirmationvalid = React.lazy(() =>
  import("pages/PSFCCompteconfirmationvalid"),
);
const PSFCCompteconfirmationmail = React.lazy(() =>
  import("pages/PSFCCompteconfirmationmail"),
);
const PSFCMdprinitialisavecsuccs = React.lazy(() =>
  import("pages/PSFCMdprinitialisavecsuccs"),
);
const PSFCComptecravecsuccs = React.lazy(() =>
  import("pages/PSFCComptecravecsuccs"),
);
const PSFCProfil = React.lazy(() => import("pages/PSFCProfil"));
const PSFCMenuprofil = React.lazy(() => import("pages/PSFCMenuprofil"));
const ContratdonationpEight = React.lazy(() =>
  import("pages/ContratdonationpEight"),
);
const ContratdonationpSeven = React.lazy(() =>
  import("pages/ContratdonationpSeven"),
);
const ContratdonationpSix = React.lazy(() =>
  import("pages/ContratdonationpSix"),
);
const ContratdonationpFive = React.lazy(() =>
  import("pages/ContratdonationpFive"),
);
const ContratdonationpFour = React.lazy(() =>
  import("pages/ContratdonationpFour"),
);
const ContratdonationpThree = React.lazy(() =>
  import("pages/ContratdonationpThree"),
);
const ContratdonationpTwo = React.lazy(() =>
  import("pages/ContratdonationpTwo"),
);
const ContratdonationpOne = React.lazy(() =>
  import("pages/ContratdonationpOne"),
);
const AddContrat = React.lazy(() => import("pages/AddContrat"));
const Contrats = React.lazy(() => import("pages/Contrats"));
const Pamofor = React.lazy(() => import("pages/Pamofor"));
const PSFCProjets = React.lazy(() => import("pages/PSFCProjets"));
const PSFCReinitialisermdp = React.lazy(() =>
  import("pages/PSFCReinitialisermdp"),
);
const PSFCMdpoublie = React.lazy(() => import("pages/PSFCMdpoublie"));
const PSFCSeconnecter = React.lazy(() => import("pages/PSFCSeconnecter"));
const PSFCSignin = React.lazy(() => import("pages/PSFCSignin"));
const PSFCPAMOFORmodelepagevalidationcontratspageValidationOne = React.lazy(
  () =>
    import("pages/PSFCPAMOFORmodelepagevalidationcontratspageValidationOne"),
);
const PSFCPAMOFORmodelepagevalidationcontratspageValidationFour = React.lazy(
  () =>
    import("pages/PSFCPAMOFORmodelepagevalidationcontratspageValidationFour"),
);
const PSFCPAMOFORmodelepagevalidationcontratspageValidationThree = React.lazy(
  () =>
    import("pages/PSFCPAMOFORmodelepagevalidationcontratspageValidationThree"),
);
const PSFCPAMOFORmodelepagevalidationcontratspageValidationTwo = React.lazy(
  () =>
    import("pages/PSFCPAMOFORmodelepagevalidationcontratspageValidationTwo"),
);
const PSFCPAMOFORmodelepagevalidationcontratsrejets = React.lazy(() =>
  import("pages/PSFCPAMOFORmodelepagevalidationcontratsrejets"),
);
const PSFCPAMOFORmodelepagevalidationcontratsvalids = React.lazy(() =>
  import("pages/PSFCPAMOFORmodelepagevalidationcontratsvalids"),
);
const PSFCPAMOFORmodelepagevalidationcontratsattente = React.lazy(() =>
  import("pages/PSFCPAMOFORmodelepagevalidationcontratsattente"),
);
const Listecontrat = React.lazy(() => import("pages/Listecontrat"));
const PSFCPAMOFORmodelepageadmin = React.lazy(() =>
  import("pages/PSFCPAMOFORmodelepageadmin"),
);
const PSFCPAMOFORmodelepagevalidation = React.lazy(() =>
  import("pages/PSFCPAMOFORmodelepagevalidation"),
);
const PSFCHome = React.lazy(() => import("pages/PSFCHome"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<PSFCHome />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/psfcpamoformodelepagevalidation"
            element={<PSFCPAMOFORmodelepagevalidation />}
          />
          <Route
            path="/psfcpamoformodelepageadmin"
            element={<PSFCPAMOFORmodelepageadmin />}
          />
          <Route path="/listecontrat" element={<Listecontrat />} />
          <Route
            path="/psfcpamoformodelepagevalidationcontratsattente"
            element={<PSFCPAMOFORmodelepagevalidationcontratsattente />}
          />
          <Route
            path="/psfcpamoformodelepagevalidationcontratsvalids"
            element={<PSFCPAMOFORmodelepagevalidationcontratsvalids />}
          />
          <Route
            path="/psfcpamoformodelepagevalidationcontratsrejets"
            element={<PSFCPAMOFORmodelepagevalidationcontratsrejets />}
          />
          <Route
            path="/psfcpamoformodelepagevalidationcontratspagevalidationtwo"
            element={
              <PSFCPAMOFORmodelepagevalidationcontratspageValidationTwo />
            }
          />
          <Route
            path="/psfcpamoformodelepagevalidationcontratspagevalidationthree"
            element={
              <PSFCPAMOFORmodelepagevalidationcontratspageValidationThree />
            }
          />
          <Route
            path="/psfcpamoformodelepagevalidationcontratspagevalidationfour"
            element={
              <PSFCPAMOFORmodelepagevalidationcontratspageValidationFour />
            }
          />
          <Route
            path="/psfcpamoformodelepagevalidationcontratspagevalidationone"
            element={
              <PSFCPAMOFORmodelepagevalidationcontratspageValidationOne />
            }
          />
          <Route path="/psfcsignin" element={<PSFCSignin />} />
          <Route path="/psfcseconnecter" element={<PSFCSeconnecter />} />
          <Route path="/psfcmdpoublie" element={<PSFCMdpoublie />} />
          <Route
            path="/psfcreinitialisermdp"
            element={<PSFCReinitialisermdp />}
          />
          <Route path="/psfcprojets" element={<PSFCProjets />} />
          <Route path="/pamofor" element={<Pamofor />} />
          <Route path="/contrats" element={<Contrats />} />
          <Route path="/addcontrat" element={<AddContrat />} />
          <Route
            path="/contratdonationpone"
            element={<ContratdonationpOne />}
          />
          <Route
            path="/contratdonationptwo"
            element={<ContratdonationpTwo />}
          />
          <Route
            path="/contratdonationpthree"
            element={<ContratdonationpThree />}
          />
          <Route
            path="/contratdonationpfour"
            element={<ContratdonationpFour />}
          />
          <Route
            path="/contratdonationpfive"
            element={<ContratdonationpFive />}
          />
          <Route
            path="/contratdonationpsix"
            element={<ContratdonationpSix />}
          />
          <Route
            path="/contratdonationpseven"
            element={<ContratdonationpSeven />}
          />
          <Route
            path="/contratdonationpeight"
            element={<ContratdonationpEight />}
          />
          <Route path="/psfcmenuprofil" element={<PSFCMenuprofil />} />
          <Route path="/psfcprofil" element={<PSFCProfil />} />
          <Route
            path="/psfccomptecravecsuccs"
            element={<PSFCComptecravecsuccs />}
          />
          <Route
            path="/psfcmdprinitialisavecsuccs"
            element={<PSFCMdprinitialisavecsuccs />}
          />
          <Route
            path="/psfccompteconfirmationmail"
            element={<PSFCCompteconfirmationmail />}
          />
          <Route
            path="/psfccompteconfirmationvalid"
            element={<PSFCCompteconfirmationvalid />}
          />
          <Route
            path="/psfccompteconfirmationechoue"
            element={<PSFCCompteconfirmationechoue />}
          />
          <Route path="/addenquete" element={<AddEnquete />} />
          <Route path="/enquete" element={<Enquete />} />
          <Route
            path="/psfcpamoforenqpromocontratcontratlocationpthree"
            element={<PSFCPAMOFOREnqPromoContratContratlocationpThree />}
          />
          <Route
            path="/psfcpamoforenqpromocontratcontratlocationpfour"
            element={<PSFCPAMOFOREnqPromoContratContratlocationpFour />}
          />
          <Route
            path="/psfcpamoforenqpromocontratcontratlocationpfive"
            element={<PSFCPAMOFOREnqPromoContratContratlocationpFive />}
          />
          <Route
            path="/psfcpamoforenqpromocontratcontratlocationpsix"
            element={<PSFCPAMOFOREnqPromoContratContratlocationpSix />}
          />
          <Route
            path="/psfcpamoforenqpromocontratcontratlocationpseven"
            element={<PSFCPAMOFOREnqPromoContratContratlocationpSeven />}
          />
          <Route
            path="/psfcpamoforenqpromocontratcontratlocationpeight"
            element={<PSFCPAMOFOREnqPromoContratContratlocationpEight />}
          />
          <Route
            path="/psfcpamoforenqpromocontratcontratlocationpnine"
            element={<PSFCPAMOFOREnqPromoContratContratlocationpNine />}
          />
          <Route
            path="/psfcpamoforenqpromocontratcontratlocationpten"
            element={<PSFCPAMOFOREnqPromoContratContratlocationpTen />}
          />
          <Route
            path="/psfcpamoforenqpromocontratcontratlocationpeleven"
            element={<PSFCPAMOFOREnqPromoContratContratlocationpEleven />}
          />
          <Route path="/frame7888" element={<Frame7888 />} />
          <Route path="/contratventepone" element={<ContratventepOne />} />
          <Route path="/contratventeptwo" element={<ContratventepTwo />} />
          <Route path="/contratventepthree" element={<ContratventepThree />} />
          <Route path="/contratventepfour" element={<ContratventepFour />} />
          <Route path="/contratventepfive" element={<ContratventepFive />} />
          <Route path="/contratventepsix" element={<ContratventepSix />} />
          <Route path="/contratventepseven" element={<ContratventepSeven />} />
          <Route path="/contratventepeight" element={<ContratventepEight />} />
          <Route path="/contratventepnine" element={<ContratventepNine />} />
          <Route path="/contratventepten" element={<ContratventepTen />} />
          <Route
            path="/contratventepeleven"
            element={<ContratventepEleven />}
          />
          <Route
            path="/contratventeptwelve"
            element={<ContratventepTwelve />}
          />
          <Route
            path="/contratventepthirteen"
            element={<ContratventepThirteen />}
          />
          <Route
            path="/contratventepfourteen"
            element={<ContratventepFourteen />}
          />
          <Route
            path="/contratventepfifteen"
            element={<ContratventepFifteen />}
          />
          <Route path="/frame7889" element={<Frame7889 />} />
          <Route
            path="/contratmetayagepsix"
            element={<ContratmetayagepSix />}
          />
          <Route
            path="/contratmetayagepone"
            element={<ContratmetayagepOne />}
          />
          <Route
            path="/contratmetayageptwo"
            element={<ContratmetayagepTwo />}
          />
          <Route
            path="/contratmetayagepthree"
            element={<ContratmetayagepThree />}
          />
          <Route
            path="/contratmetayagepfour"
            element={<ContratmetayagepFour />}
          />
          <Route
            path="/contratventepfiveone"
            element={<ContratventepFiveOne />}
          />
          <Route
            path="/contratmetayagepseven"
            element={<ContratmetayagepSeven />}
          />
          <Route
            path="/contratmetayagepeight"
            element={<ContratmetayagepEight />}
          />
          <Route
            path="/contratmetayagepnine"
            element={<ContratmetayagepNine />}
          />
          <Route
            path="/contratmetayagepten"
            element={<ContratmetayagepTen />}
          />
          <Route path="/contratpretpone" element={<ContratpretpOne />} />
          <Route path="/contratpretptwo" element={<ContratpretpTwo />} />
          <Route path="/contratpretpthree" element={<ContratpretpThree />} />
          <Route path="/contratpretpfour" element={<ContratpretpFour />} />
          <Route path="/contratpretpfive" element={<ContratpretpFive />} />
          <Route path="/contratpretpsix" element={<ContratpretpSix />} />
          <Route path="/contratpretpseven" element={<ContratpretpSeven />} />
          <Route path="/contratpretpten" element={<ContratpretpTen />} />
          <Route path="/contratpretpeight" element={<ContratpretpEight />} />
          <Route path="/contratpretpnine" element={<ContratpretpNine />} />
          <Route path="/contratrecoltepone" element={<ContratrecoltepOne />} />
          <Route path="/contratrecoleptwo" element={<ContratrecolepTwo />} />
          <Route
            path="/contratrecolepthree"
            element={<ContratrecolepThree />}
          />
          <Route path="/contratrecolepfour" element={<ContratrecolepFour />} />
          <Route path="/contratrecolepfive" element={<ContratrecolepFive />} />
          <Route path="/contratrecoltepsix" element={<ContratrecoltepSix />} />
          <Route
            path="/contratrecoltepseven"
            element={<ContratrecoltepSeven />}
          />
          <Route
            path="/contratrecoltepeight"
            element={<ContratrecoltepEight />}
          />
          <Route
            path="/contratrecoltepnine"
            element={<ContratrecoltepNine />}
          />
          <Route path="/contratrecoltepten" element={<ContratrecoltepTen />} />
          <Route
            path="/contratrecoltepeleven"
            element={<ContratrecoltepEleven />}
          />
          <Route
            path="/contratrecolteptwelve"
            element={<ContratrecoltepTwelve />}
          />
          <Route
            path="/contratplantationpone"
            element={<ContratplantationpOne />}
          />
          <Route
            path="/contratplantationptwo"
            element={<ContratplantationpTwo />}
          />
          <Route
            path="/contratplantationpthree"
            element={<ContratplantationpThree />}
          />
          <Route
            path="/contratplantationpfour"
            element={<ContratplantationpFour />}
          />
          <Route
            path="/contratplantationpfive"
            element={<ContratplantationpFive />}
          />
          <Route
            path="/contratplantationpsix"
            element={<ContratplantationpSix />}
          />
          <Route
            path="/contratplantationpseven"
            element={<ContratplantationpSeven />}
          />
          <Route
            path="/contratplantationpeight"
            element={<ContratplantationpEight />}
          />
          <Route
            path="/contratplantationpnine"
            element={<ContratplantationpNine />}
          />
          <Route
            path="/contratplantationpten"
            element={<ContratplantationpTen />}
          />
          <Route
            path="/contratplantationpeleven"
            element={<ContratplantationpEleven />}
          />
          <Route
            path="/contratplantationptwelve"
            element={<ContratplantationpTwelve />}
          />
          <Route path="/contratterrepone" element={<ContratterrepOne />} />
          <Route path="/contratterreptwo" element={<ContratterrepTwo />} />
          <Route path="/contratterrepthree" element={<ContratterrepThree />} />
          <Route path="/contratterrepfour" element={<ContratterrepFour />} />
          <Route path="/contratterrepfive" element={<ContratterrepFive />} />
          <Route path="/contratterrepsix" element={<ContratterrepSix />} />
          <Route path="/contratterrepseven" element={<ContratterrepSeven />} />
          <Route path="/contratterrepeight" element={<ContratterrepEight />} />
          <Route path="/contratterrepnine" element={<ContratterrepNine />} />
          <Route path="/contratterrepten" element={<ContratterrepTen />} />
          <Route
            path="/contratterrepeleven"
            element={<ContratterrepEleven />}
          />
          <Route
            path="/contratterreptwelve"
            element={<ContratterrepTwelve />}
          />
          <Route
            path="/contratmiseengarantiepone"
            element={<ContratmiseengarantiepOne />}
          />
          <Route
            path="/contratmiseengarantieponetwo"
            element={<ContratmiseengarantiepOneTwo />}
          />
          <Route
            path="/contratmiseengarantieptwo"
            element={<ContratmiseengarantiepTwo />}
          />
          <Route
            path="/contratmiseengarantieptwotwo"
            element={<ContratmiseengarantiepTwoTwo />}
          />
          <Route
            path="/contratmiseengarantiepthree"
            element={<ContratmiseengarantiepThree />}
          />
          <Route
            path="/contratmiseengarantiepthreeone"
            element={<ContratmiseengarantiepThreeOne />}
          />
          <Route
            path="/contratmiseengarantiepfourtwo"
            element={<ContratmiseengarantiepFourTwo />}
          />
          <Route
            path="/contratmiseengarantiepfourone"
            element={<ContratmiseengarantiepFourOne />}
          />
          <Route
            path="/contratmiseengarantiepfive"
            element={<ContratmiseengarantiepFive />}
          />
          <Route
            path="/contratmiseengarantiepfivetwo"
            element={<ContratmiseengarantiepFiveTwo />}
          />
          <Route
            path="/contratmiseengarantiepsix"
            element={<ContratmiseengarantiepSix />}
          />
          <Route
            path="/contratmiseengarantiepseven"
            element={<ContratmiseengarantiepSeven />}
          />
          <Route
            path="/contratmiseengarantiepeight"
            element={<ContratmiseengarantiepEight />}
          />
          <Route
            path="/contratmiseengarantiepnine"
            element={<ContratmiseengarantiepNine />}
          />
          <Route
            path="/contratmiseengarantiepten"
            element={<ContratmiseengarantiepTen />}
          />
          <Route
            path="/contratmiseengarantiepeleven"
            element={<ContratmiseengarantiepEleven />}
          />
          <Route
            path="/contratmiseengarantieponeone"
            element={<ContratmiseengarantiepOneOne />}
          />
          <Route
            path="/contratmiseengarantieptwoone"
            element={<ContratmiseengarantiepTwoOne />}
          />
          <Route
            path="/contratmiseengarantiepthreetwo"
            element={<ContratmiseengarantiepThreeTwo />}
          />
          <Route
            path="/contratmiseengarantiepfour"
            element={<ContratmiseengarantiepFour />}
          />
          <Route
            path="/contratmiseengarantiepfiveone"
            element={<ContratmiseengarantiepFiveOne />}
          />
          <Route path="/contratjacherepsix" element={<ContratjacherepSix />} />
          <Route
            path="/contratjacherepseven"
            element={<ContratjacherepSeven />}
          />
          <Route
            path="/contratjacherepeight"
            element={<ContratjacherepEight />}
          />
          <Route
            path="/contratjacherepnine"
            element={<ContratjacherepNine />}
          />
          <Route path="/contratjacherepten" element={<ContratjacherepTen />} />
          <Route
            path="/contratjacherepeleven"
            element={<ContratjacherepEleven />}
          />
          <Route path="/contratcessionpone" element={<ContratcessionpOne />} />
          <Route path="/contratcessionptwo" element={<ContratcessionpTwo />} />
          <Route
            path="/contratcessionptwoone"
            element={<ContratcessionpTwoOne />}
          />
          <Route
            path="/contratcessionpthree"
            element={<ContratcessionpThree />}
          />
          <Route
            path="/contratcessionpfour"
            element={<ContratcessionpFour />}
          />
          <Route
            path="/contratcessionpfive"
            element={<ContratcessionpFive />}
          />
          <Route
            path="/contratcessionpseven"
            element={<ContratcessionpSeven />}
          />
          <Route
            path="/contratcessionpeight"
            element={<ContratcessionpEight />}
          />
          <Route
            path="/contratcessionpnine"
            element={<ContratcessionpNine />}
          />
          <Route path="/cf1one" element={<CF1One />} />
          <Route path="/cf1two" element={<CF1Two />} />
          <Route path="/cf1" element={<CF1 />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
