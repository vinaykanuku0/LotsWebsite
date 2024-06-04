import Logo from "../../Images/Logo1.png"
import { css, urls } from '../../ConfigFiles/Consts';
import { useFormValidation } from '../../Validations/useFormValidations';
import { forgotPassword } from '../../ConfigFiles/ValidationSchemas';
import { enc, returningValue } from '../../ConfigFiles/SmallFunctions';
import ForgetImage from "../../Images/forget.png"
import { notify, save } from "../../ConfigFiles/SharedFunctions";

const ForgotPassword = ({ changePageType }) => {

    const submit = async () => {
        if (data?.email && data?.email != "") {
            let body = { serverName: window.location.hostname, email: data?.email };
            let res = await save(urls?.auth?.forgotPassword, body);
        } else {
            notify(false, "Please enter email");
        }
    }
    const { data, handleSubmit, formChange, errors } = useFormValidation({
        initialValues: {},
        validationSchema: forgotPassword,
        submit: submit,
    })

    return (
        <div className='d-flex flex-wrap ' style={{ height: "100vh", width: "100vw" }}>
            <div className='col-md-12   col-lg-6 col-xl-6 col-sm-12 col-12   d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: css?.themeColor }}>
                <div className='text-end mx-4 images'>
                    <img src={Logo} height={105} />
                </div>
                <div className='d-flex justify-content-center col-md-12 col-12 p-2 '>
                    <div className='px-3 py-2 col-lg-9 col-xl-7 col-10 col-md-10 bg-white boreder ' style={{ borderRadius: "10px", }}>
                        <div className='mx-2 d-flex flex-column gap-1'>
                            <div className='fw-bold fs-5'>Forget Password</div>
                            <div>
                                Reset Your Password
                            </div>
                        </div>
                        <div className='d-flex flex-column gap-2 mt-2'>
                            <div class="form-floating mb-3">
                                <input type="text" value={returningValue(data?.["email"], "")} onChange={formChange("")} name='email' className={`form-control  ${returningValue(errors?.email, "ErrorColor")}`} id="floatingInput" placeholder="" />
                                <label for="floatingInput">Email</label>
                            </div>
                        </div>
                        <div className='d-flex flex-column gap-2'>
                            <div className='mx-2 images'>
                                <button className='btn  col-12 text-white pointer ' style={{ backgroundColor: css?.themeColor }} onClick={handleSubmit} >Send Mail</button>
                            </div>
                            <div className='text-center mx-2' >
                                Already have account ? <span className=' ' style={{ cursor: "pointer", color: css?.themeColor }} onClick={() => changePageType("Login")}>Login</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 p-4 forgetImage1 '>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={ForgetImage} className='forgetImage' />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
