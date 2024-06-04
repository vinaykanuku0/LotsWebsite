import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { css, } from "../ConfigFiles/Consts";
import { Modal } from "react-bootstrap";
import "../App.css";
import svHealth from "../Images/loTs_hori.png";
import bantia from "../Images/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import UserUpdateModel from "../Components/Authentication/Models/UserUpdateModel";
import ProfilePopUp from "./ProfilePopUp";
import { getUserfromSS } from "../ConfigFiles/SmallFunctions";
import UpdatePassword from "./UpdatePassword";

const Header = ({ toggle, rtl, broken, showNavbar }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch()
  const [model, setModel] = useState({});
  const [isProfileUpdateVisible, setProfileUpdateVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const toggleProfileUpdate = () => {
    setProfileUpdateVisible(!isProfileUpdateVisible);
  };

  const changeModel = (name) => {
    setModel({
      [name]: model[name] == true ? false : true,
    });
  };


  return (
    <>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={model?.updatePassword} onHide={() => changeModel("updatePassword")}>
        <UpdatePassword close={() => changeModel("updatePassword")} />
      </Modal>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={model?.openProfile} onHide={() => changeModel("openProfile")}>
        <UserUpdateModel close={() => changeModel("openProfile")} />
      </Modal>
      <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered show={model?.profilePopup} onHide={() => changeModel("profilePopup")} >
        <ProfilePopUp
          gotoEdit={() => {

            changeModel("openProfile");
          }}
          broken={broken}
          openUpdatePassword={() => changeModel("updatePassword")}
        />
      </Modal>
      <div className="d-flex justify-content-between  w-100 " >
        <div className="d-flex align-items-center">
          {!broken ? (
            <CiMenuBurger style={{ color: "black", cursor: "pointer" }} size={20} onClick={toggle} className="" />
          ) : (
            <div></div>
          )}
        </div>

        <div className="   d-flex align-items-center me-2 ">
          <div>
            {/* <AiOutlineBell onClick={() => navigate("/v1/notifications/all-notifications")} size={css.headericonSize} className="ms-2 pointer" /> */}
            <sup className="fw-bold" style={{ color: notifications?.length > 0 ? "red" : "" }}>
              {notifications?.length > 0 ? notifications?.length : ""}
            </sup>
          </div>
          {getUserfromSS()?.image}
          {/* {getUserfromSS("image") ? <img className="ms-2 me-2 pointer" onClick={() => changeModel("profilePopup")} style={{ height: "30px", width: "30px", borderRadius: "20px" }} src={`${basefileURL}User/${getUserfromSS("image")}`} /> : */}
          <RxAvatar className=" " style={{ cursor: "pointer" }} onClick={() => changeModel("profilePopup")} size={28} />
          {/* {isProfileUpdateVisible && (
            <div style={{ top: "40px", left: rtl ? "2px" : "", right: rtl ? "" : "2px" }} className="border position-absolute ">
              <ProfilePopUp openUpdatePassword={() => changeModel("updatePassword")} onClose={toggleProfileUpdate} className="ms-2 pointer" />
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Header;
