import React from 'react'
import { FiEdit, FiLogOut } from "react-icons/fi";
import { TbCameraPlus } from "react-icons/tb"
import { MdLockReset } from "react-icons/md";
import Clinicien from "../Images/logo.png"
import { getUserfromSS, logOutFunction } from '../ConfigFiles/SmallFunctions';
import { css } from '../ConfigFiles/Consts';
const ProfilePopUp = ({ gotoEdit, openUpdatePassword, broken }) => {
  console.log(broken, "broken")
  return (
    <div className=" d-flex flex-column  text-black   p-2 m-2 ">
      <div className="col-md-12 pointer text-end" >
        <FiEdit size={25} title="Edit Profile" onClick={gotoEdit}/>
      </div>
      <div className=" col-md-12 d-flex  mb-3 m-3">
        <div className="col-md-4  ">
          <label for="profile">
            {/* {getUserfromSS("image") ? <img style={{ height: "100px", width: "100px", borderRadius: "50px" }} className="pointer" src={`${basefileURL}User/${getUserfromSS("image")}`} /> */}
            <img src={Clinicien} style={{ height: "100px", width: "100px", borderRadius: "50px" }} />
            {/* <input accept="image/gif, image/jpeg" onChange={changeHandler("profile")} style={{ display: "none" }} id="profile" type="file" /> */}
            {/* <div style={{ position: "relative", bottom: "100px", left: "80px" }}><TbCameraPlus size={25} /></div> */}
          </label>
        </div>
        <div className="col-md-8 mt-2 pointer">

          <div className="d-flex">
            <div className="col-md-1"></div>
            <div>
              <div>{`${getUserfromSS()?.firstName} ${getUserfromSS()?.lastName}`}</div>
              <div>{(getUserfromSS()?.email)}</div>
              <div>{(getUserfromSS()?.phone)}</div>
            </div>
          </div>


        </div>
      </div>
      <div className=" col-md-12  d-flex justify-content-end">

        <span style={{ cursor: "pointer" }} onClick={openUpdatePassword} >
          <MdLockReset size={25} color={css?.sassTheam} />
          Change Password
        </span>
        &nbsp;&nbsp;
        {broken && <span style={{ cursor: "pointer" }} onClick={logOutFunction}>
          <FiLogOut size={25} color="#ef5258" className="me-2" />
          Log Out
        </span>}
      </div>  
    </div>
  )
}

export default ProfilePopUp
