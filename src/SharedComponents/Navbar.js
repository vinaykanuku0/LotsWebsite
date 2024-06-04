import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { sidenavbar } from "./NavBarConst";
import { CiMenuBurger } from "react-icons/ci";
import { css } from "../ConfigFiles/Consts";
import svHealth from "../Images/LOTS_HR_white.png";
import bantia from "../Images/Logo1.png";
import bantia1 from "../Images/logo.png";
import { useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { logOutFunction } from "../ConfigFiles/SmallFunctions";
const Navbar = ({ showNavbar, rtl, broken, setBroken }) => {
  const state = useSelector(s => s)

  const navigate = useNavigate();
  const location = useLocation();
  const [toggled, setToggled] = useState(false);
  const returnChild = (e) => {
    return (
      <SubMenu

        title={(e?.name)}
        icon={e.icon} label={(showNavbar && (e?.name)) || (broken && e?.name)}
        className={`${location.pathname === e.path ? "active" : ""}pt-1`}
        style={{ text: "center", minHeight: "", }}>

        {e?.child.map((subItem, subIndex) => {
          return subItem?.child?.length > 0 ? (
            returnChild(subItem)
          ) : (
            <MenuItem
              title={(subItem?.name)}
              key={subIndex}
              icon={subItem?.icon}
              onClick={() => {
                setToggled(!toggled);
                navigate(subItem.path);
              }}
              style={{ backgroundColor: location.pathname === subItem.path ? "  " : "", marginLeft: showNavbar ? "22px" : "0px", }}
              className={`${location.pathname === subItem.path ? " active  " : "text-white  "}py-2 mt-1 `}
            >
              {showNavbar ? <div>{(subItem.name)}</div> : <div> </div>}
            </MenuItem>
          );
        })}

      </SubMenu>
    );
  };
  return (
    <>
      <div className="d-flex justify-content-center ">
        {!broken ? showNavbar ? <img src={svHealth} width={250} height={90} className="" /> : <img src={bantia} width={90} /> : ""}

      </div>
      <Sidebar
        className="h-100 "
        backgroundColor={css?.sassTheam}

        width={showNavbar ? "250px" : "96px"}
        style={{

          overflowX: "none",
          maxHeight: "75vh",

        }}
        toggled={toggled}
        customBreakPoint="992px"
        onBreakPoint={setBroken}
        onBackdropClick={() => setToggled(false)}
      >

        <Menu
          className="ps-3 py-2 "
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  color: disabled ? "#000" : "#fff",
                  borderRadius: "30px 0px 0px 30px"
                };
            },
          }}

        >
          {sidenavbar()?.map((e, i) => {
            return e.child?.length > 0 ? (
              returnChild(e)
            ) : (
              <MenuItem
                style={{ overflowX: "none" }}
                onClick={() => {
                  setToggled(!toggled);
                  navigate(e.path);
                }}

                className={`${location.pathname === e.path ? "active  " : ""} my-2  `}
                icon={e.icon}
                title={!showNavbar && (e?.name)}
              >
                {showNavbar && <div>{(e?.name)}</div>}
              </MenuItem>
            );
          })}
        </Menu>
      </Sidebar>
      <div className="leftMenuTogggle d-flex align-items-center">
        {broken && <div className="" >
          <img src={bantia1} width={25} style={{ borderRadius: "25px" }} />
        </div>}
        <div>
          {
            broken && <div onClick={() => setToggled(!toggled)}><CiMenuBurger size={20} className="pointer " /></div>

          }
        </div>

      </div>
      {!broken && <div style={{ height: "10vh" }}>
        <div className={`d-flex justify-content-center  ${showNavbar ? "me-5" : "ms-4"}`}>
          <div onClick={logOutFunction} className="d-flex gap-4 pointer logout mt-1 ">
            <div className=" " >
              <FiLogOut color="" size={25} /></div>{showNavbar && <div className="">Logout</div>}
          </div>
        </div>
      </div>}
    </>
  );
};
export default Navbar;