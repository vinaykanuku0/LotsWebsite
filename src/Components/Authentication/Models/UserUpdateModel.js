import React, { useEffect, useState } from 'react'
import { enc, getUserfromSS, returningValue } from '../../../ConfigFiles/SmallFunctions'
import { useFormValidation } from '../../../Validations/useFormValidations'
import { uopdateProfile } from '../../../ConfigFiles/ValidationSchemas'
import { save } from '../../../ConfigFiles/SharedFunctions'
import { urls } from '../../../ConfigFiles/Consts'

const UserUpdateModel = ({ close }) => {
    const [model, setModel] = useState({});

    const submit = async () => {
        let res = await save(urls?.User?.updateProfile, data)
        if (res?.data?.status == true) {
            sessionStorage.setItem("user", enc(JSON.stringify(data)));
            close()
        }
    };

    const { data, handleSubmit, formChange, errors, addObject } = useFormValidation({
        initialValues: {},
        validationSchema: uopdateProfile,
        submit: submit,
    })

    useEffect(() => {
        addObject(getUserfromSS())
    }, [])
    return (
        <div className=" d-flex flex-column w-100 bg bg-white rounded show">
            <div className="border p-3 d-flex   fw-semibold fs-4">
                <div className="text-center"> Update Profile</div>
            </div>
            <div className="row p-2 m-2">
                <div class="form-floating col-md-6 mb-2 p-1">
                    <input type="text" value={returningValue(data?.["firstName"], "Alphabet")} onChange={formChange("Alphabet")} name='firstName' className={`form-control  ${returningValue(errors?.firstName, "ErrorColor")}`} id="floatingInput" placeholder="" />
                    <label for="floatingInput">First Name<span className='text-danger'>*</span></label>
                </div>
                <div class="form-floating col-md-6 mb-2 p-1">
                    <input type="text" value={returningValue(data?.["lastName"], "Alphabet")} onChange={formChange("Alphabet")} name='lastName' className={`form-control  ${returningValue(errors?.lastName, "ErrorColor")}`} id="floatingInput" placeholder="" />
                    <label for="floatingInput">Last Name<span className='text-danger'>*</span></label>
                </div>
            </div>
            <div className="border col-md-12  justify-content-end d-flex gap-2 p-3 ">
                <button className="cancelbtn px-3 py-1" onClick={close}>Close</button>
                <button className="addbtn px-3 py-1" onClick={handleSubmit}>Save</button>
            </div>
        </div>

    )
}

export default UserUpdateModel
