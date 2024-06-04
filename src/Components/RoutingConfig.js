
import { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../SharedComponents/Header";
import Navbar from "../SharedComponents/Navbar";
import { css } from "../ConfigFiles/Consts";
import { useSelector } from "react-redux";

const ServiceManagement = lazy(() => import("./ServiceManagement/RC"));

const RoutingConfig = ({ rtl }) => {
  const state = useSelector(s => s)

  const [showNavbar, setShowNavbar] = useState(true);
  const [broken, setBroken] = useState(window.matchMedia("(max-width: 992px)").matches);

  const toggle = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <main className="d-flex " style={{ height: "100vh", backgroundColor: css?.sassTheam }} >
        <div style={{ width: !broken ? (showNavbar ? "250px" : (broken ? "71px" : "71px")) : "0px", }} className={`${showNavbar ? "" : ""}`}>
          <Navbar showNavbar={showNavbar} rtl={rtl} broken={broken} setBroken={setBroken} />
        </div>
        <div className="bg-white my-2 marginRight" style={{ borderRadius: css?.theamBorderRadious, marginLeft: !showNavbar ? "25px" : "0px", padding: "15px", width: "100%" }}>
          <div className="" style={{ height: "5vh" }}>
            <Header toggle={toggle} broken={broken} showNavbar={showNavbar} />
          </div>
          <div >
            <Routes>
              <Route path="service/*" element={<ServiceManagement />} />
            </Routes>
          </div>
        </div>
      </main>

    </>
  );
};

export default RoutingConfig;