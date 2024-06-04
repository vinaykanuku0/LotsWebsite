import React from 'react'
import { returningValue } from '../../ConfigFiles/SmallFunctions'
import { useFormValidation } from '../../Validations/useFormValidations'
import Usa from "../../Images/usa.jpg"
import Hyd from "../../Images/india.jpg"
import Delhi from "../../Images/IndiaGate.jpg"
import Singapur from "../../Images/singapore.jpg"
import England from "../../Images/london.jpg"
import { HiArrowSmRight } from "react-icons/hi";

const ContactUs = ({ }) => {
    const { data, handleSubmit, formChange, errors, addObject } = useFormValidation({
        initialValues: {},
        validationSchema: {},
        submit: "",
    })

    const goToContact = () => {
        window?.scroll({ top: "0", behavior: "smooth" })
    }

    const address = [
        {
            addressName: "8604 Stone House Dr,  Ellicott City, MD-21043, USA  +1 443-364-8075",
            image: Usa,
            lat: "",
            lon: ""
        },
        {
            addressName: "Sai Sadan, Plot No: 235,  3rd Floor, Road No.35, Survey of India, Madhapur,  Hyderabad – 500 081, India +91 40 4850 2400 info@LionOrbit.com",
            image: Hyd,
            lat: "",
            lon: ""
        }, {
            addressName: " Office No. 601, 6th Floor, Pegasus Tower A-10, Sec- 68,  Noida - 201 307, Uttar Pradesh  +91 89505 94249",
            image: Delhi,
            lat: "",
            lon: ""
        }, {
            addressName: "Apt Blk 60 Dakota Cresent #09-245 Singapore 390060 +65-6434 4660",
            image: Singapur,
            lat: "",
            lon: ""
        }, {
            addressName: "Medverz Ltd (A division of LionOrbit)   165 Wokingham Road  Reading  England RG6 1LS",
            image: England,
            lat: "",
            lon: ""
        },
    ]
    return (
        <div style={{ height: "100vh" }} className='w-100'>
            <div className='ContactUs d-flex flex-column align-items-center justify-content-center w-100' style={{ height: "100vh" }} >
                <div className='fw-bold'>Contact Us</div>
                <div class="form-floating col-md-4 col-12 mb-2 p-1">
                    <input type="text" value={returningValue(data?.["name"], "Alphabet")} onChange={formChange("Alphabet")} name='name' className={`form-control  ${returningValue(errors?.name, "ErrorColor")}`} id="floatingInput" placeholder="" style={{ backgroundColor: "transparent" }} />
                    <label for="floatingInput">Name<span className='text-danger'>*</span></label>
                </div>
                <div class="form-floating col-md-4 col-12 mb-2 p-1">
                    <input type="text" value={returningValue(data?.["email"], "")} onChange={formChange("")} name='email' className={`form-control  ${returningValue(errors?.email, "ErrorColor")}`} id="floatingInput" placeholder="" style={{ backgroundColor: "transparent" }} />
                    <label for="floatingInput">Email<span className='text-danger'>*</span></label>
                </div>
                <div class="form-floating col-md-4 col-12 mb-2 p-1">
                    <input type="text" value={returningValue(data?.["company"], "")} onChange={formChange("")} name='company' className={`form-control  ${returningValue(errors?.company, "ErrorColor")}`} id="floatingInput" placeholder="" style={{ backgroundColor: "transparent" }} />
                    <label for="floatingInput">Company<span className='text-danger'>*</span></label>
                </div>
                <div class="form-floating col-md-4 col-12 mb-2 p-1">
                    <input type="text" value={returningValue(data?.["phone"], "")} onChange={formChange("")} name='phone' className={`form-control  ${returningValue(errors?.phone, "ErrorColor")}`} id="floatingInput" placeholder="" style={{ backgroundColor: "transparent" }} />
                    <label for="floatingInput">Phone<span className='text-danger'>*</span></label>
                </div>
                <div class="form-floating col-md-4 col-12 mb-2 p-1">
                    <textarea type="text" value={returningValue(data?.["comments"], "")} onChange={formChange("")} name='comments' className={`form-control  ${returningValue(errors?.comments, "ErrorColor")}`} id="floatingInput" placeholder="" style={{ backgroundColor: "transparent" }} />
                    <label for="floatingInput">Comments<span className='text-danger'>*</span></label>
                </div>

                <div>
                    <div className='addButton' style={{ backgroundColor: "transparent" }}>Let's Connect</div>
                </div>



            </div>
            <div className=' ' style={{ marginTop: "15vh", backgroundColor: "transparent" }}>
                {address?.map((e, i) =>
                    <div className='d-flex flex-wrap m-4'>
                        <div className='col-md-6 col-sm-12 d-flex align-items-center justify-content-center ' style={{ height: "50vh" }}>
                            {i % 2 == 0 ? <div className='fw-bold fs-4 p-4 col-md-7 col-10'>{e.addressName}</div> : <img src={e?.image} className='rounded images imgWidth' />}


                        </div>
                        <div className='col-md-6 col-sm-12 d-flex align-items-center justify-content-center ' style={{ height: "50vh" }}>
                            {i % 2 != 0 ? <div className='fw-bold fs-4 col-md-7 col-10 '>{e.addressName}</div> : <img src={e?.image} className='rounded images imgWidth' />}


                        </div>

                    </div>
                )}
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: "25vh", backgroundColor: "#024769", marginTop: "15vh" }}>
                <div className='text-white fw-bold fs-5'>
                    Get started
                </div>
                <div className='text-white'>
                    Questions? We’d love talk to you.
                </div>
                <div className='border  rounded py-1 px-2 mt-2 salesButton pointer' onClick={goToContact}>
                    Talk to Sales <HiArrowSmRight size={20} />
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center' style={{ height: "10vh" }}>
                <div className=''>

                    ©2024 LionOrbit Tech Solutions
                </div>
            </div>

        </div>
    )
}

export default ContactUs
