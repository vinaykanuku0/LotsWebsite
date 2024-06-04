import React, { useState } from 'react'
import { returningValue } from '../ConfigFiles/SmallFunctions'
import { useFormValidation } from '../Validations/useFormValidations'
import { product, updatePassword } from '../ConfigFiles/ValidationSchemas'
import { CiRead, CiUnread } from 'react-icons/ci'
import { urls } from '../ConfigFiles/Consts'
import { notify, save } from '../ConfigFiles/SharedFunctions'

const UpdatePassword = ({ close }) => {
    const [password, setPassword] = useState(true)
    const [password1, setPassword1] = useState(true)
    const [password2, setPassword2] = useState(true)

    const submit = async () => {
        if (data?.currentPassword == data?.newPassword) {
            notify(false, "Current password and new password should not be same")

        } else if (data?.newPassword == data?.confirmPassword) {
            let res = await save(urls?.auth?.updatePassword, data);
            if (res?.data?.status == true) {
                close();
            }
        } else {
            notify(false, "New password and Confirm password should be same")
        }
    }

    const { data, handleSubmit, formChange, errors, addObject } = useFormValidation({
        initialValues: {},
        validationSchema: updatePassword,
        submit: submit,
    })

    const changingPasswordtype = () => {
        setPassword(!password)
    }
    const changingPasswordtype1 = () => {
        setPassword1(!password1)
    }
    const changingPasswordtype2 = () => {
        setPassword2(!password2)
    }

    return (
        <div className=" h-100 align-items-center justify-content-center">
            <div className=" d-flex flex-column w-100 bg bg-white rounded">
                <div className=" p-3 d-flex   fw-semibold fs-4" >
                    <div className="text-center">Update Password</div>
                </div>
                <div className="row p-2 m-2">
                    <div class="form-floating col-md-6 mb-2 p-1">
                        <input type={password1 ? "text" : "password"} value={returningValue(data?.["currentPassword"], "")} onChange={formChange("")} name='currentPassword' className={`form-control  ${returningValue(errors?.currentPassword, "ErrorColor")}`} id="floatingInput" placeholder="" />
                        <label for="floatingInput">Current Password<span className='text-danger'>*</span></label>
                        <a className="passwordshowbtn" style={{ position: "absolute", top: "20px", right: "10px" }} onClick={changingPasswordtype1}>
                            {password1 ? <CiUnread size={"20px"} color="black" /> : <CiRead size={"20px"} color="black" />}
                        </a>
                    </div>
                    <div class="form-floating col-md-6 mb-2 p-1">
                        <input type={password ? "text" : "password"} value={returningValue(data?.["newPassword"], "")} onChange={formChange("")} name='newPassword' className={`form-control  ${returningValue(errors?.newPassword, "ErrorColor")}`} id="floatingInput" placeholder="" />
                        <label for="floatingInput">New Password<span className='text-danger'>*</span></label>
                        <a className="passwordshowbtn" style={{ position: "absolute", top: "20px", right: "10px" }} onClick={changingPasswordtype}>
                            {password ? <CiUnread size={"20px"} color="black" /> : <CiRead size={"20px"} color="black" />}
                        </a>
                    </div>
                    <div class="form-floating col-md-6 mb-2 p-1">
                        <input type={password2 ? "text" : "password"} value={returningValue(data?.["confirmPassword"], "")} onChange={formChange("")} name='confirmPassword' className={`form-control  ${returningValue(errors?.confirmPassword, "ErrorColor")}`} id="floatingInput" placeholder="" />
                        <label for="floatingInput">Confirm Password<span className='text-danger'>*</span></label>
                        <a className="passwordshowbtn" style={{ position: "absolute", top: "20px", right: "10px" }} onClick={changingPasswordtype2}>
                            {password2 ? <CiUnread size={"20px"} color="black" /> : <CiRead size={"20px"} color="black" />}
                        </a>
                    </div>

                </div>
            </div>

            <div className="border col-md-12  justify-content-end d-flex gap-2 p-3 ">
                <button className="cancelbtn px-3 py-1" onClick={close}>
                    Close
                </button>
                <button className="addbtn px-3 py-1" onClick={handleSubmit}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default UpdatePassword
