import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/global/ScrollToTop";

import About from "./pages/About";
import BankInfo from "./pages/accountForm/BankInfo";
import EmployerInfo from "./pages/accountForm/EmployerInfo";
import NextOfKin from "./pages/accountForm/NextOfKin";
import OtherInfo from "./pages/accountForm/OtherInfo";
import PersonalInfo from "./pages/accountForm/PersonalInfo";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OpenAccount from "./pages/OpenAccount";
import Services from "./pages/Services";
import routeParams from "./routeParams";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path={routeParams.homePage} element={<Home />} />
          <Route path={routeParams.servicePage} element={<Services />} />
          <Route path={routeParams.aboutPage} element={<About />} />
          <Route path={routeParams.contactPage} element={<Contact />} />
          <Route path={routeParams.newAccount} element={<OpenAccount />} />
          <Route path={routeParams.bankInfo} element={<BankInfo />} />
          <Route path={routeParams.personalInfo} element={<PersonalInfo />} />
          <Route path={routeParams.employerInfo} element={<EmployerInfo />} />
          <Route path={routeParams.nextOfKin} element={<NextOfKin />} />
          <Route path={routeParams.otherInfo} element={<OtherInfo />} />

          <Route path="*" element={<Navigate to={routeParams.homePage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
