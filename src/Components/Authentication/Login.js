import React, { useState } from 'react'
import Logo from "../../Images/Logo1.png"
import { enc, navigationFn, returningValue } from '../../ConfigFiles/SmallFunctions'
import { useFormValidation } from '../../Validations/useFormValidations'
import { css, urls } from '../../ConfigFiles/Consts'
import { login } from '../../ConfigFiles/ValidationSchemas'
import loginImage from "../../Images/signUp.png"
import { useNavigate } from 'react-router-dom'
import { notify, save } from '../../ConfigFiles/SharedFunctions'
import { CiRead, CiUnread } from 'react-icons/ci'
import { changeState } from '../../Store/action'
import { useDispatch, useSelector } from 'react-redux'

const Login = ({ changePageType }) => {
    const [colors, setColor] = useState(true);
    const state = useSelector(s => s)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [password, setPassword] = useState(true);

    const submit = async () => {
        let res = await save(urls.auth.login, data)
        if (res?.data?.status == true) {
            let token = res?.data?.data?.token;
            let user = enc(JSON.stringify({ ...res?.data?.data?.user }))
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("user", user);
            dispatch(changeState({ token: token, user: user }))
            navigate(navigationFn(res?.data?.data?.user));
        }
    }

    const changingPasswordtype = () => setPassword(!password)

    const { data, handleSubmit, formChange, errors } = useFormValidation({
        initialValues: {},
        validationSchema: login,
        submit: submit,
    })

    return (
        <div className='d-flex flex-wrap ' style={{ height: "100vh", width: "100vw" }}>
            <div className='col-md-12  p-4 col-lg-6 col-xl-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: css?.themeColor }}>
                <div className='text-end mx-4 images'>
                    <img src={Logo} height={105} />
                </div>
                <div className='d-flex justify-content-center py-2 col-12 '>
                    <div className=' col-lg-10 col-xl-7 col-10 col-md-10 px-4 py-4 d-flex flex-column gap-3 shadow-sm  border  bg-white ' style={{ borderRadius: "10px", }}>
                        <div className='mx-2'>
                            <div className='fw-bold fs-5'>Login into your account</div>
                            <div>Welcome back</div>
                        </div>
                        <div class="form-floating">
                            <input type="text" value={returningValue(data?.["email"], "")} onChange={formChange("")} name='email' className={`form-control  ${returningValue(errors?.email, "ErrorColor")}`} id="floatingInput" placeholder="" />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating">
                            <input type={password ? "password" : "text"} name='password' value={returningValue(data?.["password"], "")} onChange={formChange("")} className={`form-control  ${returningValue(errors?.password, "ErrorColor")}`} id="floatingPassword" placeholder="" />
                            <label for="floatingPassword">Password</label>
                            <a className="passwordshowbtn" style={{ position: "absolute", top: "20px", right: "15px" }} onClick={changingPasswordtype}>
                                {password ? <CiUnread size={"20px"} color="black" /> : <CiRead size={"20px"} color="black" />}
                            </a>
                        </div>
                        <div className='loginRemainder mx-2'>
                            <div className='textColor pointer images' style={{ cursor: "pointer", color: css?.themeColor }} onClick={() => changePageType("ForgetPassword")} >Forgot password</div>
                        </div>
                        <div className='mx-2 images'>
                            <button className='btn  col-12 text-white pointer' style={{ backgroundColor: css?.themeColor }} onClick={handleSubmit}  >Login</button>
                        </div>
                        {/* <div className='d-flex flex-wrap gap-2 text-center mx-2'>
                            <div>Don't have an account?</div>
                            <div className='images' style={{ cursor: "pointer", color: css?.themeColor }} onClick={() => changePageType("CreateUser")}>Create an account</div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='col-xl-6 col-lg-6 py-4 forgetImage1 h-100 bg-white'>
                <div className='d-flex justify-content-center align-items-center '>
                    <img src={loginImage} className='LoginImage' />
                </div>
            </div>
        </div>
    )
}

export default Login
