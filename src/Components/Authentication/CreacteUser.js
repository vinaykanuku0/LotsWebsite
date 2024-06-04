import Logo from "../../Images/Logo1.png"
import { IoMdCheckmarkCircle } from "react-icons/io";
import { css } from '../../ConfigFiles/Consts';
import { returningValue } from '../../ConfigFiles/SmallFunctions';
import { useFormValidation } from '../../Validations/useFormValidations';
import { createUser } from '../../ConfigFiles/ValidationSchemas';

const CreacteUser = ({ changePageType }) => {

    const submit = () => { }

    const { data, handleSubmit, formChange, errors } = useFormValidation({
        initialValues: {},
        validationSchema: createUser,
        submit: submit,
    })

    return (
        <div className='d-flex flex-wrap ' style={{ height: "100vh", width: "100vw" }}>
            <div className='col-md-12   col-lg-6 col-xl-6 col-sm-12 col-12   d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: css?.themeColor }}>
                <div className='text-end mx-4 images'>
                    <img src={Logo} height={105} />
                </div>
                <div className='d-flex justify-content-center p-2 col-12'>

                    <div className='  col-lg-10 col-xl-7 col-10 col-md-10 p-4 d-flex flex-column gap-2 shadow-sm  border  bg-white ' style={{ borderRadius: "10px", }}>
                        <div className='mx-2'>
                            <div className='fw-bold fs-5'>Create your account </div>
                            <div>  Welcome to LOTS HRMS </div>
                        </div>
                        <div class="form-floating ">
                            <input type="text" value={returningValue(data?.["userName"], "")} onChange={formChange("")} name='userName' className={`form-control  ${returningValue(errors?.userName, "ErrorColor")}`} id="floatingInput" placeholder="" />
                            <label for="floatingInput">User Name</label>
                        </div>
                        <div class="form-floating ">
                            <input type="text" value={returningValue(data?.["email"], "")} onChange={formChange("")} name='email' className={`form-control  ${returningValue(errors?.email, "ErrorColor")}`} id="floatingInput" placeholder="" />
                            <label for="floatingInput">Email </label>
                        </div>
                        <div class="form-floating">
                            <input type="password" name='password' value={returningValue(data?.["password"], "")} onChange={formChange("")} className={`form-control  ${returningValue(errors?.password, "ErrorColor")}`} id="floatingPassword" placeholder="" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" name='cnfpassword' value={returningValue(data?.["cnfpassword"], "")} onChange={formChange("")} className={`form-control  ${returningValue(errors?.cnfpassword, "ErrorColor")}`} id="floatingPassword" placeholder="" />
                            <label for="floatingPassword">Confirm Password</label>
                        </div>
                        <div className='mx-2'>
                            <button className='btn  col-12 text-white pointer images' style={{ backgroundColor: css?.themeColor }} onClick={handleSubmit}  >Register</button>
                        </div>
                        <div className='d-flex flex-wrap gap-2 text-center mx-2 justify-content-center'>
                            <div> Already have an account ?</div>
                            <div className=' images' style={{ cursor: "pointer", color: css?.themeColor }} onClick={() => changePageType("Login")}>Login</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 py-4 forgetImage1 '>
                <div className='d-flex justify-content-around'>
                    <div className='d-flex flex-column gap-4'>
                        <div className='d-flex flex-column gap-4'>
                            <div>
                                <div className='fw-bold fs-3'>
                                    Simplify HR processes.
                                </div>
                                <div className='fw-bold fs-3'>
                                    Champion your workforce.
                                </div>
                            </div>
                            <div className='d-flex gap-2'>
                                <div className=''><IoMdCheckmarkCircle size={20} color={css?.themeColor} /></div>
                                <div className='' style={{ fontWeight: "500" }}>Fastest deployment in the market</div>
                            </div>
                            <div className='d-flex gap-2'>
                                <div><IoMdCheckmarkCircle size={20} color={css?.themeColor} /></div>
                                <div style={{ fontWeight: "500" }}>Highly customizable verticals on demand</div>
                            </div>
                            <div className='d-flex gap-2'>
                                <div><IoMdCheckmarkCircle size={20} color={css?.themeColor} /></div>
                                <div style={{ fontWeight: "500" }}>Premium support for zero downtime</div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='py-4'>
                                <div style={{ fontWeight: "700" }} className='text-center'>
                                    Trusted by 2,50,000 business worldwide
                                </div>
                                <div className='d-flex gap-4'>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreacteUser
