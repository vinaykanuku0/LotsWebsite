import { useState, useEffect } from 'react'
import Logo from "../../Images/logo.png"
import Logo1 from "../../Images/Logo1.png"
import TimeSheet from "./Images/Timesheet.png"
import LeaveTracker from "./Images/LeaveTracker.png"
import Holiday from "./Images/Group 6911.png"
import HealthCAre from "./Images/Group 6910.png"
import Health from "./Images/Rectangle 12.png"
import Experience from "./Images/eperience.png"
import HalfCircle from "./Images/halfcircle.svg"
import Efingo from "./Images/5.png"
import Aidata from "./Images/4.png"
import Digital from "./Images/2 (3).png"
import cyber from "./Images/6.png"
import Enterpre from "./Images/Group 6910 (1).png"
import Image1 from "./Images/MacBook Pro 16_ - 4.png"
import Playstore from "./Images/Group 6854.png"
import Market from "./Images/7.png"
import Insurance from "./Images/3.png"
import facebook from "./Images/facebook.png"
import insta from "./Images/insta.png"
import twitter from "./Images/twitter.png"
import linkedin from "./Images/linked.png"
import nuvo from "./Images/Our products/nuvo.svg"
import allister from "./Images/Our products/alistercare.svg"
import hitechHealth from "./Images/Our products/hitechhealth.svg"
import outpatient from "./Images/Our products/outpatient.svg"
import healthburg from "./Images/Our products/healthburg.svg"
import hst from "./Images/Our products/hst.svg"
import Add from "./Images/Product/Group 36.png"
import healthMonitoring from "./Images/Product/Group 47.png"
import trueHealth from "./Images/Product/Group 46.png"
import HeartProduct from "./Images/heart.svg"
import Excercise from "./Images/excercise.svg"
import image1 from "./Images/Key Features/fluent_people-checkmark-20-regular.svg"
import image2 from "./Images/Key Features/icon-park-outline_good-two.svg"
import image3 from "./Images/Key Features/maki_doctor.svg"
import image4 from "./Images/Key Features/material-symbols_vital-signs.svg"
import image5 from "./Images/Key Features/mingcute_alert-line.svg"
import images6 from "./Images/Key Features/streamline_health-care-2.svg"
import mobile1 from "./Images/mobileApp/CBACggg 1.svg"
import mobile2 from "./Images/mobileApp/TH_1 1.png"
import mobile3 from "./Images/mobileApp/sss - Scanner 1.svg"
import Tick from "./Images/tick.svg"
import One from "./Images/1.png"
import mobileApp from "./Images/mobileApp.png"
import { FaArrowDown, FaLocationDot } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdLocalPhone, MdEmail, MdOutlineFeaturedPlayList, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { PiCaretRightLight, PiLockLaminatedFill } from "react-icons/pi";
import { useFormValidation } from '../../Validations/useFormValidations';
import { css, urls } from '../../ConfigFiles/Consts';
import { createUser, requestDemo } from '../../ConfigFiles/ValidationSchemas';
import { returningValue } from '../../ConfigFiles/SmallFunctions';
import { useNavigate } from 'react-router-dom'
import "./RequestDemo.css"
import "../../App.css"
import "./Navbar.css"
import CompanyImg from "./Images/Company.png"
import { IoMenu } from "react-icons/io5";
import { save } from '../../ConfigFiles/SharedFunctions'
import Suresh from "./Images/suresh_kamrushi.jpg"
import Rajesh from "./Images/rajesh.jpg"
import Murali from "./Images/murali.jpg"
import Subhashini from "./Images/subhshini.jpg"
import Sudharshan from "./Images/sudarshan.jpg"
import Nappinai from "./Images/Nappinnai.jpg"
import Balaji from "./Images/balaji.jpeg"
import Vinay from "./Images/vinay.jpeg"
import ServiceImg from "./Images/Group 6904.png"
import Rating from "../../Images/Group 6906.png"
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import { FaArrowUp } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { changeState } from '../../Store/action'
import DataManagement from "../Authentication/Images/dataManagement.png"
import Heart from "../Authentication/Images/heart.png"
import Bed from "../Authentication/Images/bed.png"
import Building from "../Authentication/Images/fluent_building-people-24-regular.png"
import { GoDotFill } from 'react-icons/go'
const Home = ({ }) => {
    const dispatch = useDispatch()
    const state = useSelector(s => s)
    const [showNavbar, setShowNavbar] = useState(false);
    const [colors, setColor] = useState(true);
    const [broken, setBroken] = useState(window.matchMedia("(max-width: 992px)").matches);
    const navigate = useNavigate()
    const [imageIndex, setImageIndex] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentAnalysis, setCurrentAnalysis] = useState(0)
    const [link, setLink] = useState("Home")
    const [service, setService] = useState("Health Care Systems")
    const links = ["Home", "Features", "Products", "Services", "Company"]
    const [showTopButton, setShowTopButton] = useState(false);
    const ImagesList = [{
        image: mobile1,
        name: "Home"
    },
    {
        image: mobile2,
        name: "Landing"
    },
    {
        image: mobile3,
        name: "Home"
    },
    {
        image: mobile1,
        name: "Home"
    },
    {
        image: mobile1,
        name: "Home"
    },
    {
        image: mobile3,
        name: "Home"
    },
    ]
    const services = ["Health Care Systems", "AI / Data Analytics & Management", "Enterprise Systems", "Banking, Financial Services", "Digital Transformation", "Market Place & Product Development", "Insurance", "Cyber Security & Information Security"]
    const testMonal = [
        {
            comment: " 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi,ipsum dolor sit amet,   adipiscing elit. Ut et massa mi.",
            image: Vinay,
            name: "Vinay",
            designation: "CEO Hitech Health care",
            rating: Rating
        },
        {
            comment: " 2The products we are get are very excellent we need more products from your company",
            image: Logo,
            name: "Balaji",
            designation: "CEO Banking Sector",
            rating: Rating
        },
        {
            comment: " 3What a excellent product that you are made for us",
            image: Logo,
            name: "Shivam",
            designation: "CEO Hitech Health care",
            rating: Rating
        },
        {
            comment: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi,ipsum dolor sit amet,   adipiscing elit. Ut et massa mi.",
            image: Logo,
            name: "Rajesh",
            designation: "CEO Hitech Health care",
            rating: Rating
        },
        {
            comment: "5The products we are get are very excellent we need more products from your company",
            image: Logo,
            name: "Pavan",
            designation: "CEO Hitech Health care",
            rating: Rating
        },
        {
            comment: " 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi,ipsum dolor sit amet,   adipiscing elit. Ut et massa mi.",
            image: Vinay,
            name: "Vinay",
            designation: "CEO Hitech Health care",
            rating: Rating
        },
        {
            comment: " 2The products we are get are very excellent we need more products from your company",
            image: Logo,
            name: "Balaji",
            designation: "CEO Banking Sector",
            rating: Rating
        },
        {
            comment: " 3What a excellent product that you are made for us",
            image: Logo,
            name: "Shivam",
            designation: "CEO Hitech Health care",
            rating: Rating
        },
        {
            comment: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi,ipsum dolor sit amet,   adipiscing elit. Ut et massa mi.",
            image: Logo,
            name: "Rajesh",
            designation: "CEO Hitech Health care",
            rating: Rating
        },
        {
            comment: "5The products we are get are very excellent we need more products from your company",
            image: Logo,
            name: "Pavan",
            designation: "CEO Hitech Health care",
            rating: Rating
        },
    ]
    const imageLen = ImagesList?.slice(imageIndex, imageIndex + 3)
    const testMonalLength = testMonal.slice(currentIndex, currentIndex + 2)
    const analysis = testMonal?.slice(currentAnalysis, currentAnalysis + 5)
    // const testProductLength = testMonal.slice(currentProduct, currentProduct)

    const changeColor = () => {
        setColor(!colors)
    }
    const submit = async () => {
        data["customerRequestId"] = 0;
        let res = await save(urls?.Request?.save, data)

        if (res?.data?.status == true) {
            resetData()
            setLink("Home")
        }
    }

    const changeLink = (e) => {
        setLink(e)
        setShowNavbar(false)
        window?.scrollTo({ top: "0", behavior: "smooth" })
    }

    const goto = () => {
        navigate("/contactUs")
        window?.scrollTo({ top: "0", behavior: "smooth" })

    }

    // useEffect(() => {
    //     window?.scrollTo({ top: "0", behavior: "smooth" })

    // }, [])


    useEffect(() => {
        const handleScroll = () => {

            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollThreshold = (documentHeight - windowHeight) / 2;

            setShowTopButton(scrollTop > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {

            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    const goTop = () => {
        window?.scrollTo({ top: "0", behavior: "smooth" })
    }
    const goBottom1 = () => {
        window?.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }

    const handleLeftArrowClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const navigateToGoogleMaps = () => {
        // Replace with the actual latitude and longitude of the location you want to show
        const latitude = 17.455213; // Example latitude (San Francisco)
        const longitude = 78.394052; // Example longitude (San Francisco)

        // Construct the Google Maps URL with the provided latitude and longitude
        const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

        // Open the Google Maps URL in a new tab or window
        window.open(mapsUrl, '_blank');
    };

    const handleRightArrowClick = () => {
        if (currentIndex + 3 < testMonal.length) setCurrentIndex(currentIndex + 1)
    };
    const handleRightAnalysis = () => {
        // setCurrentAnalysis(currentAnalysis + 1)
        if (currentAnalysis > 5) setCurrentAnalysis(currentAnalysis + 1)
    };
    const handleLeftAnalysis = () => {
        if (currentAnalysis > 0) {
            setCurrentAnalysis(currentAnalysis - 1);
        }
    };
    const handleImageRight = () => {
        if (imageIndex + 3 < ImagesList?.length) {
            setImageIndex(imageIndex + 1)
        }
    }
    const handleImageLeft = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        }
    }

    const { data, handleSubmit, formChange, errors, resetData } = useFormValidation({
        initialValues: {},
        validationSchema: requestDemo,
        submit: submit,
    })

    const handleShowNavbar = (e) => {
        e.stopPropagation();
        setShowNavbar(!showNavbar);
    };

    const handleParentClick = () => setShowNavbar(false)

    const ourTeam = [
        {
            name: "Rajesh S",
            image: Rajesh,
            designation: "FOUNDER DIRECTOR AND CHIEF EXECUTIVE OFFICER",
            description: "",
            contact: "+91 9999999999",
            link: "https://www.linkedin.com/in/rajeshsuryadevara/"
        },
        {
            name: "Nappinnai K",
            image: Nappinai,
            designation: "CO-FOUNDER & DIRECTOR",
            description: "",
            contact: "+91 9999999999",
            link: ""
        }, {
            name: "Murali P",
            image: Murali,
            designation: "PRESIDENT AMERICA",
            description: "",
            contact: "+91 9999999999",
            link: ""
        }, {
            name: "Sudharshan",
            image: Sudharshan,
            designation: "CHIEF PEOPLE OFFICER",
            description: "",
            contact: "+91 9999999999",
            link: ""
        }, {
            name: "Suresh K",
            image: Suresh,
            designation: "DELIVERY HEAD",
            description: "",
            contact: "+91 9999999999",
            link: ""
        },
        {
            name: "Balaji K",
            image: Balaji,
            designation: "PRESIDENT SOUTH EAST ASIA",
            description: "",
            contact: "+91 9999999999",
            link: ""
        }, {
            name: "Subhashini G",
            image: Subhashini,
            designation: "HEAD - INFORMATION SYSTEMS",
            description: "",
            contact: "+91 9999999999",
            link: ""
        },
        {
            name: "Vinay K",
            image: Vinay,
            designation: "Developer",
            description: "",
            contact: "+91 9553540292",
            link: ""
        },
    ]

    const cardItems = [
        {
            name: "Feature",
            icon: <MdOutlineFeaturedPlayList size={30} color={css?.[state?.theme]} />,
            description: "Right Security Lorem epsumDummy Text  Lorem epsumDummy Text "
        },
        {
            name: "Secure",
            icon: <PiLockLaminatedFill size={24} color={css?.[state?.theme]} />,
            description: "Right Security Lorem epsumDummy Text  Lorem epsumDummy Text "
        }, {
            name: "Options",
            icon: <MdOutlineFeaturedPlayList size={24} color={css?.[state?.theme]} />,
            description: "Right Security Lorem epsumDummy Text  Lorem epsumDummy Text "
        },
        {
            name: "Responsive",
            icon: <MdOutlineFeaturedPlayList size={24} color={css?.[state?.theme]} />,
            description: "Right Security Lorem epsumDummy Text  Lorem epsumDummy Text "
        },
        {
            name: "Competence",
            icon: <MdOutlineFeaturedPlayList size={24} color={css?.[state?.theme]} />,
            description: "Right Security Lorem epsumDummy Text  Lorem epsumDummy Text "
        },
        {
            name: "Customized",
            icon: <MdOutlineFeaturedPlayList size={24} color={css?.[state?.theme]} />,
            description: "Right Security Lorem epsumDummy Text  Lorem epsumDummy Text "
        }
    ]
    const cardItems1 = [
        {
            name: "Consultation",
            icon: <MdOutlineFeaturedPlayList size={30} color={css?.[state?.theme]} />,
            description: "Regarding market trends, making strategy, operations. "
        },
        {
            name: "Risk Management",
            icon: <PiLockLaminatedFill size={24} color={css?.[state?.theme]} />,
            description: "Getting economic analysis, technology and risk management advice. "
        }, {
            name: "IT strategy",
            icon: <MdOutlineFeaturedPlayList size={24} color={css?.[state?.theme]} />,
            description: "Implementation of IT strategy and change management practices. "
        },
        {
            name: "Project Management",
            icon: <MdOutlineFeaturedPlayList size={24} color={css?.[state?.theme]} />,
            description: "Assist you with critical projects and strategic initiatives management."
        },

    ]

    const HeaderLead = () => {
        return <div>
            <div className={`d-flex   ${broken && "d-flex justify-content-between align-items-center "}`} style={{
                padding: '10px',

            }} >
                <div className=' text-center col-md-3 ' >
                    <img src={Logo} height={100} onClick={() => changeLink("Home")} className='pointer' />
                </div>
                {broken && <div className=' col-md-1 '>

                    <div className="menu-icon" onClick={(e) => handleShowNavbar(e)}>
                        <IoMenu size={25} />
                    </div>
                    <div className={`nav-elements  ${showNavbar && "active"}`}>
                        <ul>
                            {links.map((e) => {
                                return <li onClick={() => changeLink(e)} style={{ color: e == link ? css?.[state?.theme] : "", cursor: "pointer", fontWeight: e == link ? "900" : "400" }}>
                                    {e}
                                </li>
                            })}

                            <li onClick={() => changeLink("RequestDemo")}>Get in Touch</li>
                            {/* <li onClick={() => navigate("/auth")}> Login</li> */}


                        </ul>
                    </div>
                </div>
                }
                {!broken && <div className='d-flex col-md-8'>
                    <div className='d-flex align-items-center  col-md-8'>
                        {links?.map((e) => {
                            return <div className='col-md-3  fs-6 images'
                                onClick={() => changeLink(e)}
                                style={{ color: e == link ? css?.[state?.theme] : "", cursor: "pointer", fontWeight: e == link ? "900" : "400" }}>{e}</div>
                        })}
                    </div>
                    <div className='col-md-6 col-lg-5 d-flex gap-2 align-items-center justify-content-around ' >
                        <div className='d-flex py-2 px-4  gap-2  images roundedButton' onClick={() => changeLink("RequestDemo")} >
                            {/* <div><FiSend size={20} />  </div> */}
                            <div> Get in Touch </div>
                        </div>
                        {/* <div className='d-flex py-2 px-3 text-white gap-2  images' style={{ borderRadius: "18px", cursor: "pointer", backgroundColor: `${css?.[state?.theme]}` }} onClick={() => navigate("/auth")} >
                            <div><AiOutlineLogin size={20} />  </div>
                            <div>  Login </div>
                        </div> */}
                    </div>

                </div>}
                {/* <div style={{ position: "fixed", right: "0" }}>
                    <div onClick={() => { dispatch(changeState({ theme: state?.theme == "themeColor" ? "sassTheam" : "themeColor" })) }}>
                        {state?.theme == "themeColor" ? <BsBrightnessHigh size={20} /> : <BsBrightnessHighFill size={20} />}
                    </div>

                </div> */}
            </div>
        </div>
    }

    const Footer = () => {
        return <div style={{ marginTop: "4vw" }}>
            <div className='container d-flex justify-content-around my-4'>
                <img src={nuvo} /><img src={allister} /><img src={hitechHealth} /><img src={healthburg} /><img src={hst} /><img src={outpatient} />
            </div>
            <img src={HalfCircle} width={"100%"} height={"50%"} style={{ position: "relative", top: "1px" }} className="" />

            <div className='lETSBUILD'>
                <div style={{
                    minHeight: "30vh",

                }} className='d-flex flex-column justify-content-center align-items-center   '>
                    <div className='' style={{ position: "relative", bottom: "70px" }}><img src={Logo1} height={125} /></div>
                    <div className='d-flex flex-column justify-content-center align-items-center '>
                        <h2 className='slider-h1 col-8 text-center' style={{ color: "#DDDDDD", position: "relative", bottom: "40px" }} >
                            LET'S BUILD SOMETHING
                            AMAZING TOGETHER
                        </h2>
                        <div className='d-flex py-2 px-4  gap-2  images roundedButton' style={{ position: "relative", bottom: "10px" }} onClick={() => changeLink("RequestDemo")} >
                            {/* <div><FiSend size={20} />  </div> */}
                            <div> Get in Touch </div>
                        </div>
                    </div>
                </div>
                <div style={{ minHeight: "30vh" }} className=' py-2 d-flex justify-content-center Foot '>
                    <div className='col-md-10 col-11 d-flex justify-content-center py-4'>
                        <div className='col-md-3 col-3   importantLinks '>
                            <div className='p-4 d-flex flex-column gap-2' style={{ color: "#DDDDDD" }} >
                                <div className='fw-bold'>QUICK LINKS</div>
                                <div>
                                    <div className='pointer' onClick={() => changeLink("Features")}>Products</div>
                                    <div className='pointer' onClick={() => changeLink("Services")}>Services</div>
                                    <div className='pointer' onClick={() => changeLink("Company")}>About Us</div>
                                    <div className='pointer' onClick={goto}>Contact Us</div>
                                    <div className='pointer' onClick={() => navigate("./terms&conditions")}>Terms and Conditions</div>
                                    <div className='pointer' onClick={() => navigate("/privacyPolicy")}>Privacy Policy</div>

                                </div>

                            </div>
                        </div>
                        <div className='col-md-5 col-4  importantLinks '>
                            <div className='p-4 d-flex flex-column gap-2' style={{ color: "#DDDDDD" }}>
                                <div className='fw-bold'>Products and Services</div>
                                <div>
                                    <div className='pointer' onClick={() => changeLink("Features")}>Products</div>
                                    <div className='pointer' onClick={() => changeLink("Services")}>Services</div>
                                    <div className='pointer' onClick={() => changeLink("Company")}>About Us</div>
                                    <div className='pointer' onClick={goto}>Contact Us</div>
                                    <div className='pointer' onClick={() => navigate("./terms&conditions")}>Terms and Conditions</div>
                                    <div className='pointer' onClick={() => navigate("/privacyPolicy")}>Privacy Policy</div>

                                </div>

                            </div>
                        </div>
                        <div className='col-md-3  col-3  importantLinks ' style={{ color: "#DDDDDD" }}>
                            <div className='p-4 d-flex flex-column gap-2'>
                                <div className='fw-bold'>Get In Touch</div>
                                <div>
                                    <div className='d-flex gap-2'>
                                        <div><MdLocalPhone size={20} /></div><div>+91 40 4850 2400</div>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <div><MdEmail size={20} /></div><div>info@LionOrbit.com</div>
                                    </div>
                                    <div className='d-flex gap-2 pointer' onClick={navigateToGoogleMaps}>
                                        <div ><FaLocationDot size={20} /></div><div>Sai Sadhan Bhavan, Road no 35,Madhapur,Hyderabad Telangana - 500081,India</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <div className='col-md-4 d-flex align-items-center justify-content-center  '>
                    <div className='px-4'>
                        <div>
                            <img src={Logo1} height={125} />
                        </div>
                        <div className='text-white '>
                            With more than 15 years of experience in the CRM industry, we know what it’s like to be at every stage of a growing business. Since our start, we’ve grown to support millions of customers by putting their needs at the center of everything we do. We’ve got your back today, tomorrow, and all the days ahead.
                        </div>
                    </div>
                </div>
                <div className='col-md-3  text-white   importantLinks '>
                    <div className='p-4 d-flex flex-column gap-2'>
                        <div className='fw-bold'>Important Links</div>
                        <div>
                            <div className='pointer' onClick={() => changeLink("Features")}>Products</div>
                            <div className='pointer' onClick={() => changeLink("Services")}>Services</div>
                            <div className='pointer' onClick={() => changeLink("Company")}>About Us</div>
                            <div className='pointer' onClick={goto}>Contact Us</div>
                            <div className='pointer' onClick={() => navigate("./terms&conditions")}>Terms and Conditions</div>
                            <div className='pointer' onClick={() => navigate("/privacyPolicy")}>Privacy Policy</div>

                        </div>

                    </div>
                </div>
                <div className='col text-white d-flex align-items-center col-md-3'>
                    <div className='p-4 d-flex flex-column gap-3'>
                        <div className='fw-bold'>Contact Us</div>
                        <div className='d-flex gap-2'>
                            <div><MdLocalPhone size={20} color='white' /></div><div>+91 40 4850 2400</div>
                        </div>
                        <div className='d-flex gap-2'>
                            <div><MdEmail size={20} color='white' /></div><div>info@LionOrbit.com</div>
                        </div>
                        <div className='d-flex gap-2 pointer' onClick={navigateToGoogleMaps}>
                            <div ><FaLocationDot size={20} color='white' /></div><div>Sai Sadhan Bhavan, Road no 35,Madhapur,Hyderabad Telangana - 500081,India</div>
                        </div>
                    </div>
                </div> */}



                </div>
            </div>
            <div style={{ backgroundColor: "#002131" }} className='d-flex justify-content-center'>
                <div style={{ height: "10vh", color: "#DDDDDD" }} className='d-flex align-items-center justify-content-between text-white container' >
                    <div className='col-6' style={{ color: "#DDDDDD" }} >
                        © 2024 LionOrbit Tech Solutions
                    </div>
                    <div className='col-6 d-flex justify-content-end gap-2'>
                        <div className='border p-2 text-center' style={{ borderRadius: "100px", width: "40px" }}>
                            <img src={facebook} className=' ' style={{ height: "18px", width: "12px" }} />
                        </div>
                        <div className='border p-2 text-center' style={{ borderRadius: "100px", width: "40px" }}>
                            <img src={twitter} className='' style={{ height: "20px", width: "20px" }} /></div>

                        <div className='border p-2 text-center' style={{ borderRadius: "100px", width: "40px" }}>
                            <img src={linkedin} className='' style={{ height: "20px", width: "18px" }} /></div>
                        <div className='border p-2 text-center' style={{ borderRadius: "100px", width: "40px" }}>
                            <img src={insta} className='' style={{ height: "20px", width: "18px" }} /></div>

                    </div>
                </div>
            </div>
        </div>
    }
    const HomeScreen = () => {
        return <div>

            <div className='banner-b homeBack' style={{ height: "100vh" }}>
                <HeaderLead />
                <div className="container d-flex align-items-center justify-content-between col-11 col-md-10 h-75">

                    <div className="col-md-6 col-11">
                        <div>LIONORBIT HEALTHCARE IT PRODUCTS</div>
                        <h1 className='slider-h1 minwidth'>Advancing Healthcare
                            with LionOrbit </h1>
                        <p>Our HRMS gives you all the necessary
                            tools to build, manage, and motivate your workforce.</p>
                        <div className='d-flex py-2 px-3 text-white justify-content-center gap-2  ' style={{ borderRadius: "18px", cursor: "pointer", backgroundColor: `${css?.[state?.theme]}`, maxWidth: "150px" }} onClick={() => changeLink("RequestDemo")} >

                            <div> Learn more </div>
                            <div><PiCaretRightLight size={20} />  </div>
                        </div>
                    </div>
                    <div className='col-1 d-flex flex-column gap-3 align-items-end '>
                        <div className='col-1 vertical-text'>FACEBOOK</div>
                        <div className='col-1 vertical-text'>LINKEDIN</div>
                        <div className='col-1 vertical-text'>INSTAGRAM</div>
                    </div>
                    {/* <div className="col-md-6 d-flex align-items-center ">
                            <img src={HomeBanner} width="100%" />
                        </div> */}

                </div>
            </div>
            <div>
                <div className="container">
                    <div className="landing-about d-flex justify-content-center">
                        <div className='col-10 d-flex flex-column align-items-center'>
                            <h2 className='slider-h1'>Explore Our AI enabled healthcare
                                IT products</h2>
                            <div className='py-2 text-center border px-4 images roundedButton mb-4'>Explore Now</div>
                            <div className='d-flex justify-content-around mt-4 col-12 flex-wrap col-md-10'>
                                <div className='col-12 col-md-3 d-flex flex-column align-items-around gap-2 '>

                                    <div className=' banner-bg text-center images' style={{ height: "150px", borderRadius: "15px" }}>
                                        <img src={DataManagement} height={"120px"} />
                                        <div style={{ fontSize: "12px" }}> Data Management</div> </div>

                                    <div className=' banner-bg text-center images d-flex flex-column align-items-center justify-content-center py-2' style={{ borderRadius: "15px", height: "130px" }}>
                                        <img src={Bed} height={"80px"} />
                                        <div style={{ fontSize: "12px" }} > Data Management</div></div>
                                </div>
                                <div className='col-12 col-md-4 d-flex flex-column gap-2 cardPapulation'>
                                    <div className='images banner-bg text-center d-flex flex-column align-items-center justify-content-center py-2 ' style={{ height: "250px", borderRadius: "15px" }}>
                                        <img src={Building} height={"150px"} />
                                        <div className='fw-bold' style={{ fontSize: "14px" }}>Population Health Management</div>
                                    </div>
                                    <div className=' images banner-bg text-center d-flex align-items-center mt-2 ' style={{ height: "50px", borderRadius: "15px" }}>
                                        <div className='' style={{ fontSize: "12px" }}>We provide state of art AI enabled healthcare IT products</div>
                                    </div>
                                </div>
                                <div className='col-md-3 col-12 d-flex flex-column gap-2 cardPapulation'>
                                    <div className=' images banner-bg text-center d-flex align-items-center ' style={{ borderRadius: "15px", height: "150px" }}>
                                        <div style={{ fontSize: "12px" }}>We are IT services company focusing on Healthcare IT products</div>
                                    </div>
                                    <div className='images banner-bg text-center d-flex flex-column align-items-center justify-content-center py-2' style={{ borderRadius: "15px" }}>
                                        <div>  <img src={Heart} width={"100px"} height={"90px"} /></div>
                                        <div style={{ fontSize: "12px" }}>Chronic Disease Management</div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=' banner-bg d-flex justify-content-center'>
                <div className="containe d-flex justify-content-evenly align-items-center col-11 col-md-11 flex-wrap cardPapulation  " style={{ height: "65vh" }}>
                    <div className='col-md-5'>
                        <div>ABOUT COMPANY</div>
                        <h2 className='slider-h1'>Start your journey today with us</h2>
                        <div style={{ fontSize: "13px" }}>
                            LionOrbit, head quartered at Maryland, USA, is an IT services company focusing on Healthcare IT products. Our development center is in Hyderabad, India. We are a team of developers and product builders backed up by SME’s in Healthcare, currently serving the healthcare providers across USA, UK, Saudi Arabia and UAE.
                        </div>
                    </div>
                    <div className='col-md-5 text-end d-flex align-items-end'>
                        <div style={{ position: "relative", bottom: "50px", left: "45px" }}><img src={Experience} width={"100%"} /></div>
                        <img src={Health} width={"70%"} className='' />
                    </div>

                </div>
            </div>
            <div className='d-flex justify-content-center' >
                <div className='d-flex justify-content-between container'>
                    <div className='col-md-4 p-4 d-flex flex-column gap-3'>

                        <div className='slider-h1'>
                            Our Products</div>
                    </div>
                    <div className=' d-flex gap-2 align-items-center p-4 '>
                        <div className='bg-white shadow-sm p-3 pointer  ' onClick={handleLeftArrowClick} style={{ borderRadius: "50px" }} >
                            <HiOutlineArrowSmallLeft size={20} color={css?.[state?.theme]} />
                        </div>
                        <div className='bg-white shadow-sm p-3 pointer ' onClick={handleRightArrowClick} style={{ borderRadius: "50px" }}><HiOutlineArrowSmallRight size={20} color={css?.[state?.theme]} /></div>
                    </div>

                </div>


            </div>
            <div className='d-flex justify-content-center'>
                <div className='row justify-content-around mx-2 container'>
                    {testMonalLength?.map((e) => {
                        return <div className='  d-flex flex-column col-lg-6 col-md-5 col-sm-12 col-12  ' >
                            <div className='border bg-white p-4 shadow  testMonalcard cardPapulation' style={{ height: "45vh", borderRadius: "18px" }}>

                                <div className='d-flex gap-2 '>
                                    <img src={e.image} width={"40%"} height={"200px"} className='' />
                                    <div>
                                        <div className='fs-6' style={{ color: "#8C8C8C", }}>
                                            {e?.comment}
                                        </div>
                                        <img src={e?.rating} width={100} />
                                        <div className='fw-bold fs-5'>{e?.name}</div>
                                        <div className='fw-bold fs-4'>{e.designation}</div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className='' >
                <div className='d-flex justify-content-between container flex-wrap p-4'>
                    <div className='col-md-5 col-10 d-flex flex-column gap-3'>

                        <div className='slider-h1'>
                            The Science Behind Our Services</div>
                    </div>
                    <div className=' gap-2 align-items-center p-4 '>
                        <div className='bg-white shadow-sm p-3 pointer ' style={{ borderRadius: "50px" }}>Contact Us</div>
                    </div>
                </div>


            </div>
            <div className='' >
                <div className='d-flex justify-content-betwee container'>

                    <div className=' d-flex align-items-end p-4 col-5'>
                        <div className='d-flex gap-2'>
                            <MdArrowBackIos size={20} onClick={handleLeftAnalysis} className='pointer' />
                            <MdArrowForwardIos size={20} onClick={handleRightAnalysis} className='pointer' />
                        </div>
                    </div>
                    <div className='col-md-5 p-4 d-flex flex-column gap-3'>

                        <div className='fw-bold fs-4'>
                            Pionooring Healthcare innovation, We leverage cutting -edge technologies from geonomic sequencing to AI-driven analysis</div>
                    </div>
                </div>
                <div className='d-flex container my-4 justify-content-center '>
                    {analysis?.map((e, i) => <div className={`${i <= currentAnalysis ? "border-topactive" : "border-top"}`} style={{ width: "19%" }}>
                        <div className='mt-4'>  {e?.comment}
                        </div>
                    </div>

                    )}
                </div>

            </div>

            <Footer />

        </div>
    }

    const Features = () => {
        return <>
            <HeaderLead />
            <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: "40vh", backgroundColor: css?.[state?.theme] }}>
                <div className='text-white fw-bold fs-4 pb-3'>Features, tailor-made for your people</div>
                <div className='p-2 d-flex justify-content-center ' >
                    <div className='text-white text-center col-md-6 '>HR involves numerous complex functions and processing. With LOTS HRMS, you get a simple yet comprehensive and flexible system to manage all your HR processes so you can focus more on your people.</div>
                </div>
                <div className='bg-white border py-2 px-4 mt-2 pointer' style={{ color: css?.[state?.theme] }} onClick={() => changeLink("RequestDemo")} >
                    Get Started
                </div>
            </div>
            <div className='px-4'>
                <div className='d-flex flex-column align-items-center justify-content-center my-4 gap-3' >
                    <div className='text-center  '>
                        <div className='fw-bold fs-5 '>
                            Manage data efficiently
                        </div>
                        <div className='text-center my-2' style={{ fontSize: "17px", fontWeight: "400" }}>
                            Streamline both your data collection and secure  storage with our employee database management system. Set up your organization and maintain all your employee records in one central location.
                        </div>
                    </div>
                </div>
                <div className='text-center '>
                    <img className='border imageSize' src={Image1} />
                </div>
            </div>
            <div className='px-4 my-2'>
                <div className='d-flex flex-column align-items-center justify-content-center my-4 gap-3' >
                    <div className='text-center  '>
                        <div className='fw-bold fs-5 '>
                            Effortless HR management
                        </div>
                        <div className='text-center my-2' style={{ fontSize: "17px", fontWeight: "400" }}>
                            LOTS  People provides all the tools you need to help your HR staff and employees stay efficient, up-to-date, and productive, even on the go.
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="landing-about">
                    <div className="row">
                        <div className="col-md-6 text-center images">
                            <img src={LeaveTracker} className='img1' />
                        </div>
                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center ">
                            <div className='slider-text mx-4'>

                                <h2 className='slider-h2 fw-bold'>Leave Tracker</h2>
                                <p>There's so much to be taken care of when it comes to employee absences, from leave policies to compliance, holidays and accruals. Use our Leave Tracker to consolidate all your employee's leaves.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4">
                <div className="landing-about">
                    <div className="row ">
                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div className='slider-text mx-4'>

                                <h2 className='slider-h2 fw-bold'>Work Timesheet</h2>
                                <p>There's so much to be taken care of when it comes to employee absences, from leave policies to compliance, holidays and accruals. Use our Leave Tracker to consolidate all your employee's leaves.</p>
                            </div>
                        </div>
                        <div className="col-md-6 text-center images ">
                            <img src={TimeSheet} className='img2' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2">
                <div className="landing-about">
                    <div className="row">
                        <div className="col-md-6 text-center images">
                            <img src={Holiday} className='img3' />
                        </div>
                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center ">
                            <div className='slider-text'>

                                <h2 className='slider-h2 fw-bold'>Holidays, Schedule and Updates</h2>
                                <p>Get Updates List of Holidays and Latest Updates.
                                    Broadcast massages to employees, Information about schedule meetings and any other type of announcements in the company.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-4 d-flex flex-column gap-2 align-items-center justift-content-center px-2'>
                <div className='fs-5 fw-bold'>Work with your people, anytime, anywhere</div>
                <div className='text-cente my-2' style={{ fontSize: "17px", fontWeight: "400" }}>
                    Do more on the go. LOTS HRMS native apps for iOS and Android keep you connected. Now you can apply for leave, log time, clock-in/out, from anywhere.
                </div>
                <div>
                    <img src={Playstore} height={50} />
                </div>
            </div>
            <Footer />


        </>
    }
    const Company = () => {
        return <div>
            <HeaderLead />
            <div className='d-flex justify-content-between' style={{ minHeight: "45vh" }}>
                <div className=' companyBackground  '>
                    <div className=' col-md-12 d-flex CompanyDetails'>
                        <div className='col-md-3'>

                        </div>
                        <div className=' col-md-6 '>
                            <div className='fs-4 mx-2 text-gray' style={{ fontWeight: "600" }}>1</div>
                            <div className='bg-white p-2 rounded shadow'>
                                <div className='fw-bold'>Professional Support</div>
                                <div className='' style={{ fontSize: "12px" }}>
                                    LionOrbit primarily focussed
                                    to address the above issues
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-md-12 d-flex CompanyDetails'>
                        <div className='col-md-5'>

                        </div>
                        <div className=' col-md-7'>
                            <div className='fs-5 ' style={{ fontWeight: "600" }}>2</div>
                            <div className='bg-white p-2 rounded shadow'>
                                <div className='fw-bold'>Awesome Designs</div>
                                <div className='' style={{ fontSize: "12px" }}>
                                    We make using computer
                                    generated imagery and digital
                                    visualization of a product.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-md-12 d-flex '>
                        <div className='col-md-3'>

                        </div>
                        <div className=' col-md-7'>
                            <div className='fs-5 ' style={{ fontWeight: "600" }}>3</div>
                            <div className='bg-white p-2 rounded shadow'>
                                <div className='fw-bold'>Planning and Executing</div>
                                <div className='' style={{ fontSize: "12px" }}>
                                    Implementation of IT strategy and
                                    change management practices
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8 col-md-12 col-sm-12 companyPAdding d-flex'>
                    <div className=' col-md-10 col-sm-12 '>
                        <div className='py-4 my-4'>
                            <div style={{ fontSize: "20px", fontWeight: "500" }}>About Us</div>
                            <div className=''>
                                <div className=' ' style={{ fontSize: "30px", fontWeight: "600", lineHeight: "54px" }}>Intelligent, Creative, and a
                                </div>
                                <div className='  ' style={{ fontSize: "30px", fontWeight: "600", color: css?.[state?.theme], lineHeight: "54px" }}>
                                    Forward Thinker
                                </div>
                            </div>
                            <div style={{ fontSize: "16px", fontWeight: "200", lineHeight: "36px" }}>
                                Whether the situation is challenging or favourable, an organization
                                must be intelligent, creative, and a forward-thinker. LionOrbit has the
                                experience of working in different domains with some of the leading
                                businesses and organizations in the world. Whether you need to devise
                                a new IT strategy, manage vendors or outsource the business
                                processes, our expert consultants can help you move forward with
                                a rock-solid base.
                            </div>
                            <div className='row'>
                                <div className='col-md-4 col-6'>
                                    <div className='' style={{ fontSize: "36px", fontWeight: "900", color: css?.[state?.theme], }}>500<span>+</span></div>
                                    <div className='fw-bold mx-1'>Projects</div>

                                </div>
                                <div className='col-md-4 col-6'>
                                    <div className='' style={{ fontSize: "36px", fontWeight: "900", color: css?.[state?.theme], }}>100<span>+</span></div>
                                    <div className='fw-bold mx-1'>Clients</div>

                                </div>
                                <div className='col-md-4 col-6'  >
                                    <div className='' style={{ fontSize: "36px", fontWeight: "900", color: css?.[state?.theme], }}>10<span>+</span></div>
                                    <div className='fw-bold mx-1'>Products</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2  text-end solar'>
                        <img src={CompanyImg} height={200} />
                    </div>
                </div>
            </div>
            <div className='ServicesContainer  px-4  ' >
                <div className='col-md-5 d-flex align-items-center justify-content-center '>
                    <div className='col-md-10 col-sm-12 d-flex flex-column gap-2 px-4  '>
                        <div style={{ fontSize: "18px", fontWeight: "600", color: css?.[state?.theme] }}>Service</div>
                        <div style={{ fontSize: "24px", fontWeight: "600", }}>Our advisory services</div>
                        <div style={{}}>We are a rapidly growing company that addresses business requirements across the technology spectrum for all businesses across all industries. Our rich experience and expertise in working on different technology requirements and areas, across the globe, helps you achieve your goals with high quality at high velocity, done right first time and every time.</div>
                    </div>
                </div>
                <div className='col-md-7 '>

                    <div className='row d-flex justify-content-center'>
                        {cardItems1?.map((e) => {
                            return <div className=' p-4 d-flex flex-column col-md-6 col-lg-5 col-sm-6 col-12  ' >
                                <div className='border bg-white p-4 shadow card' style={{ height: "200px", borderRadius: "18px" }}>
                                    <div>{e.icon}</div>
                                    <div className='fw-bold'>{e.name}</div>
                                    <div>{e.description}</div>

                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='px-4'>
                <div className='d-flex flex-column align-items-center justify-content-center mx-4 ' style={{ minHeight: "45vh", backgroundColor: css?.[state?.theme], borderRadius: "15px" }}>
                    <div className='text-white fw-bold fs-4 pb-3'>Our Team</div>
                    <div className='p-2 d-flex justify-content-center ' >
                        <div className='text-white text-center col-md-6 '>LionOrbit is a team of experts who have been called upon to steer the ship in the most difficult times. These types of challenges come quietly and can harm your organization's growth. With LionOrbit consultants by your side, you will have a clear idea about the next best step.</div>
                    </div>
                    <div className='bg-white border py-2 px-4 mt-2 fw-bold card' style={{ color: css?.[state?.theme], borderRadius: "25px" }} >
                        Contact us
                    </div>
                </div>
                <div className='p-4'>
                    <div className='wrapper '>
                        {ourTeam?.map((e) => <div className="cardCompany  ">

                            <div className="poster">
                                <img
                                    src={e.image}
                                    alt="Location Unknown"
                                />
                            </div>
                            <div className="details" style={{ backgroundColor: css?.[state?.theme] }}>
                                <h1>{e.name}</h1>
                                <h2>{e.designation}</h2>

                                <div className="tags">
                                    <a className="tag" href={e.link}>Linkedin</a>

                                </div>
                                <p className="desc">
                                    {e.contact}
                                </p>

                            </div>
                        </div>
                        )}

                    </div>
                </div>
                <div className='row px-4 justify-content-center'>
                    <div className='col-md-6 px-4 d-flex justify-content-center'>
                        <div className='col-md-8 col-12 px-4'>
                            <div style={{ fontWeight: "600", fontSize: '20px', color: css?.[state?.theme] }}>Our Mission</div>
                            <div>
                                LionOrbit is a one stop solution provider for your business's unique technology needs. We can help you create your digital presence leading to business transformation. We have the experience of working in different domains with some of the leading businesses and organizations in the world.
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 px-4'>
                        <div className='col-md-8 px-4'>
                            <div style={{ fontWeight: "600", fontSize: '20px', color: css?.[state?.theme] }}>Our Vision</div>
                            <div>
                                We are a rapidly growing company that addresses business requirements across the technology spectrum for all businesses across all industries. Our rich experience and expertise in working on different technology requirements and areas, across the globe, helps you achieve your goals with high quality at high velocity, done right first time and every time.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    }

    const Services = () => {
        return <div>
            <HeaderLead />
            <div className='banner-bg'>
                <div className="container slider-content ">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className='slider-h1' style={{ color: css?.[state?.theme] }}>Innovating Ideas into a reality</h2>
                            <p>The value of innovation unparalleled. It also changes with the purpose for which it is done. LionOrbit keeps the focus on deriving the most value from resources, turning ideas into a reality.</p>
                        </div>
                        <div className="col-md-6 d-flex align-items-center images">
                            <img src={ServiceImg} width="80%" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-wrap p-2' >
                <div className=' col d-flex flex-column gap-3 align-items-center justify-content-center p-2' style={{}}>
                    <div className='col-md-10 col-lg-7 col-xl-6 p-4 col-sm-12 ' style={{ backgroundColor: "#F9F9F9", maxHeight: "110vh", borderRadius: "15px" }}>
                        <div className='fw-bold fs-5 p-2'>Services</div>
                        {services?.map((e) => {
                            return <div className=' rounded px-3 py-2 pointer m-3' onClick={() => setService(e)} style={{ backgroundColor: e == service ? css?.[state?.theme] : "", color: e == service ? "#ffff" : "black" }}>{e}</div>
                        })}
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 '>{returnServices()}</div>
            </div>
            <div className='' style={{ backgroundColor: css?.background }}>
                <div className='d-flex justify-content-between p-4'>
                    <div className='col-md-4 p-4 d-flex flex-column gap-3'>
                        <div className='fw-bold' style={{ fontSize: "15px", color: css?.[state?.theme] }}> Testimonials </div>
                        <div className='fw-bold fs-4'>
                            What Our Happy Customer Say</div>
                    </div>
                    <div className=' d-flex gap-2 align-items-center p-4 '>
                        <div className='bg-white shadow-sm p-3 pointer card ' onClick={handleLeftArrowClick} style={{ borderRadius: "50px" }} >
                            <HiOutlineArrowSmallLeft size={20} color={css?.[state?.theme]} />
                        </div>
                        <div className='bg-white shadow-sm p-3 pointer card' onClick={handleRightArrowClick} style={{ borderRadius: "50px" }}><HiOutlineArrowSmallRight size={20} color={css?.[state?.theme]} /></div>
                    </div>
                </div>

                <div className='row justify-content-around mx-2 '>
                    {testMonalLength?.map((e) => {
                        return <div className=' p-4 d-flex flex-column col-lg-4 col-md-5 col-sm-10 col-11  ' >
                            <div className='border bg-white p-4 shadow card testMonalcard' style={{ minHeight: "35vh", borderRadius: "18px" }}>
                                <div className='fs-6' style={{ color: "#8C8C8C", minHeight: "13vh" }}>
                                    {e?.comment}
                                </div>
                                <div className='d-flex gap-2 '>
                                    <img src={e.image} style={{ borderRadius: "50px", width: "100px", height: "100px" }} className='shadow' />
                                    <div>
                                        <img src={e?.rating} width={100} />
                                        <div className='fw-bold fs-5'>{e?.name}</div>
                                        <div>{e.designation}</div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    })}
                </div>
            </div>
            <Footer />
        </div>
    }
    const Products = () => {
        return <div>
            <div className=' ProductBack '>
                <HeaderLead />
                <div className="container d-flex align-items-center justify-content-between col-11 col-md-10 " style={{ marginTop: "8vw" }}>

                    <div className="col-md-6 col-11 text-white ">
                        <div>Population health management</div>
                        <h1 className='slider-h1 minwidth'>Advancing Healthcare
                            with LionOrbit </h1>
                        <p>Our HRMS gives you all the necessary
                            tools to build, manage, and motivate your workforce.</p>
                        <div className='d-flex py-2 px-3 text-white justify-content-center gap-2  ' style={{ borderRadius: "18px", cursor: "pointer", backgroundColor: `#40B49F`, maxWidth: "150px" }} onClick={() => changeLink("RequestDemo")} >

                            <div> Get started</div>
                            <div><PiCaretRightLight size={20} />  </div>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className=' d-flex gap-3 justify-content-end'>
                            <div>
                                <img src={Add} height={50} />
                            </div>
                            <div className='  d-flex align-items-center justify-content-center ' style={{ borderRadius: "18px", cursor: "pointer", backgroundColor: `#fff`, minWidth: "200px", height: "40px" }}>Risk/Treatment Alerts</div>
                        </div>
                        <div className='text-end col-10'>
                            <img src={healthMonitoring} height={150} />
                        </div>
                        <div className=' d-flex gap-3 justify-content-end col-9'>

                            <div className='  d-flex align-items-center justify-content-center px-2 ' style={{ borderRadius: "18px", cursor: "pointer", backgroundColor: `#fff`, minWidth: "220px", height: "40px" }}>Chronic diseases management</div>
                            <div>
                                <img src={Add} height={50} />
                            </div>
                        </div>
                        <div className='text-end '>
                            <img src={trueHealth} height={150} />
                        </div>
                    </div>
                    <div className='col-1 d-flex flex-column gap-3 align-items-end text-white'>
                        <div className='col-1 vertical-text'>FACEBOOK</div>
                        <div className='col-1 vertical-text'>LINKEDIN</div>
                        <div className='col-1 vertical-text'>INSTAGRAM</div>
                    </div>
                    {/* <div className="col-md-6 d-flex align-items-center ">
                            <img src={HomeBanner} width="100%" />
                        </div> */}

                </div>

            </div>
            <div className='container d-flex px-4 justify-content-betwee mb-4'>
                <h1 className='col-4 slider-h1 ' style={{ borderRight: "3px solid gray", height: "11vh" }}>
                    Remote patient
                    Monitoring
                </h1>
                <div className='col-8 d-flex justify-content-between '>
                    <div className='col-5 ms-4' style={{ fontSize: "14px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
                    </div>
                    <div className='col-5 text-end'>
                        <img src={HeartProduct} height={120} />
                    </div>
                </div>
            </div>
            <div style={{ height: "70vh", background: "#f7f7f7", margin: "7vw 0 4vw 0" }} className=''>
                <div className='container d-flex'>
                    <div className='col-6'>
                        <img src={Excercise} height={520} style={{ position: "relative", bottom: "70px" }} />
                    </div>
                    <div className='col-6 d-fl my-4' >
                        <h1 className='slider-h1'> Key Features</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam</div>
                        <div className='d-flex justify-content-between col-9'>
                            <div className='col-5 d-flex flex-column gap-4'>
                                <div>
                                    <div className='p-3 keyFearture' >
                                        <img src={image3} height={30} style={{ position: "relative", bottom: "2px", right: "3px" }} />
                                    </div>
                                    <div>Connectivity with required care providers</div>
                                </div>
                                <div>
                                    <div className='p-3 keyFearture'>
                                        <img src={image4} height={30} style={{ position: "relative", bottom: "3px", right: "6px" }} />
                                    </div>
                                    <div>Nudging through insightful resources</div>
                                </div>
                                <div>
                                    <div className='p-3 keyFearture'>
                                        <img src={image1} height={30} style={{ position: "relative", bottom: "4px", right: "5px" }} />
                                    </div>
                                    <div>Nudging through insightful resources</div>
                                </div>
                            </div>
                            <div className='col-5 d-flex flex-column gap-4'>
                                <div>
                                    <div className='p-3 keyFearture '>
                                        <img src={image2} height={30} style={{ position: "relative", bottom: "5px", right: "4px" }} />
                                    </div>
                                    <div>Risk Factoring / Stratification</div>
                                </div>
                                <div>
                                    <div className='p-3 keyFearture'>
                                        <img src={images6} height={30} style={{ position: "relative", bottom: "5px", right: "4px" }} />
                                    </div>
                                    <div>Personalized care management</div>
                                </div>
                                <div>
                                    <div className='p-3 keyFearture'>
                                        <img src={image5} height={30} style={{ position: "relative", bottom: "5px", right: "4px" }} />
                                    </div>
                                    <div>Personalized care management</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container col-12 ' style={{ marginBottom: "0vw" }}>
                <div className='d-flex justify-content-between '>
                    <div className='col-6'>
                        <h1 className='slider-h1'>
                            Differentiation
                        </h1>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam
                        </div>
                    </div>
                    <div className='col-4 d-flex align-items-center justify-content-end'>

                        <div className='py-2 text-center  px-4 images  mb-4 ' style={{ color: "#40B49F", border: "1px solid #40B49F", borderRadius: "20px", minWidth: "170px" }}>Request Demo <MdArrowForwardIos size={20} /> </div>

                    </div>
                </div>
                <div className='d-flex justify-content-between ' style={{ marginTop: "3vw", marginBottom: "5vw" }}>
                    <div className='col-6 d-flex flex-column  gap-4'>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={Tick} height={40} />
                            <div>In-built contact less scanning facility for 32 essential  vitals</div>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={Tick} height={40} />
                            <div>Clinician connectivity</div>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={Tick} height={40} />
                            <div>Multiple Chronic diseases management</div>
                        </div>
                    </div>
                    <div className='col-5 d-flex flex-column  gap-4 '>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={Tick} height={40} />
                            <div>Group and Circle creations with QR code</div>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={Tick} height={40} />
                            <div>Step tracker and calorie monitor integrated</div>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={Tick} height={40} />
                            <div>Customizable Dashboard for all users</div>
                        </div>
                    </div>
                </div>
                <div className=' d-flex flex-column align-items-center'>
                    <h1 className='slider-h1 col-4 text-center'>TruHealthz App Flow
                        and Screens</h1>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam</div>
                </div>
                <div className='d-flex justify-content-center align-items-center ' style={{ marginTop: "4vw" }}>

                    <div className='col-8'>
                        <div className='d-flex col-10  justify-content-center'>
                            {imageLen?.map((e, i) => {
                                return <div className='  d-flex gap-3' >


                                    <div className={`${i == 1 ? "carousel__item carousel__item--main " : `${i == 0 ? "carousel__item--left " : "carousel__item--right"}`}`}>
                                        <img src={e?.image} className='' height={400} />
                                    </div>
                                    {/* <img src={mobile2} className='' height={400} />
                                   <img src={mobile3} className='' height={400} /> */}


                                </div>
                            })}

                        </div>
                        <div className='col-10 d-flex justify-content-center   ' style={{ position: "relative", top: "25px" }}>
                            <div className='d-flex gap-4 justify-content-center col-4'>
                                <MdArrowBackIos size={22} onClick={handleImageLeft} className='pointer me-2' />
                                <MdArrowForwardIos size={22} onClick={handleImageRight} className='pointer ms-2' />
                            </div>
                        </div>
                    </div>

                    <div className='col-4 p-4 d-flex flex-column justify-content-between' style={{ background: "#f7f7f7", height: "65vh", borderRadius: "10px" }}>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div> <div>Start With</div>
                                    <h1 className='slider-h1'>Register Now </h1></div>
                                <div>
                                    <img src={One} height={75} />
                                </div>
                            </div>
                            <div className='col-9 ' style={{ fontSize: "12px" }}>
                                After Splash, For 1st Time user  Register Screen Will Come
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='py-2 d-flex justify-content-evenly align-items-center   images  mb-4 pointer' style={{ border: "1px solid #000", borderRadius: "20px", minWidth: "170px" }}> <MdArrowBackIos size={20} /><div>Previous</div> </div>
                            <div className='py-2 d-flex justify-content-evenly align-items-center    images  mb-4 pointer ' style={{ color: "#40B49F", border: "1px solid #40B49F", borderRadius: "20px", minWidth: "170px" }}>Next <MdArrowForwardIos size={20} /> </div>
                        </div>
                    </div>
                </div>

                <div className=' d-flex justify-content-between ' style={{ height: "65vh", marginTop: "4vw" }}>
                    <div className='col-md-5 d-flex flex-column gap-4'>
                        <div style={{ color: "#40B49F" }}>MOBILE APPS</div>
                        <h1 className='slider-h1'>Available for your Smartphones</h1>
                        <div>
                            Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
                        </div>
                        <div>
                            <img src={Playstore} height={60} />
                        </div>
                        <div className='d-flex gap-2 '>
                            <div className='col-6'>
                                <input placeholder='Enter Your Email' className='form-control ' style={{ borderRadius: "20px" }} />
                            </div>
                            <div><button className='btn px-4 text-white  ' style={{ borderRadius: "20px", background: "#40B49F" }} >Install Now</button></div>
                        </div>
                    </div>
                    <div className='col-md-5 text-end'>
                        <img src={mobileApp} height={470} />
                    </div>
                </div>
            </div>
            <div className=''>
                <Footer />
            </div>
        </div >
    }

    const returnServices = () => {
        switch (service) {
            case "Health Care Systems":
                return <div>
                    <div className="container">
                        <div className="landing-about">
                            <div className="">
                                <div className="col-md-8 text-center images">
                                    <img src={HealthCAre} width="80%" />
                                </div>
                                <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center ">
                                    <div className='slider-text '>

                                        <h2 className='slider-h2 fw-bold'>Health Care Systems</h2>
                                        <p>Healthcare is an industry that provides essential services that promote health, prevent diseases and deliver health care services to individuals, families and communities based on the primary health care approach. We at LionOrbit are proud to cater to this industry for the well being of the society with our trailblazing product suites.</p>

                                    </div>
                                    <div className=' py-2 px-3 fw-600' onClick={() => changeLink("RequestDemo")} style={{ color: css?.[state?.theme], border: "2px solid #084969", borderRadius: "5px" }}>Get Started</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            case "AI / Data Analytics & Management":
                return <div>
                    <div className="container">
                        <div className="landing-about">
                            <div className="">
                                <div className="col-md-8 text-center images">
                                    <img src={Aidata} width="80%" />
                                </div>
                                <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center ">
                                    <div className='slider-text '>

                                        <h2 className='slider-h2 fw-bold'>AI / Data Analytics & Management</h2>
                                        <p>Data is the gold of the 21st century. But gold has no practical use unless a goldsmith can carve it into beautiful jewelry. As businesses grow, most can't make sense of their data from their customers and clients. At LionOrbit, we have data experts who understand that only big data can drive you big results. Our data experts follow a holistic approach, from the data source to data visualization.</p>

                                    </div>
                                    <div className=' py-2 px-3 fw-600' onClick={() => changeLink("RequestDemo")} style={{ color: css?.[state?.theme], border: "2px solid #084969", borderRadius: "5px" }}>Get Started</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            case "Enterprise Systems":
                return <div>
                    <div className="container">
                        <div className="landing-about">
                            <div className="">
                                <div className="col-md-8 text-center images">
                                    <img src={Enterpre} width="80%" />
                                </div>
                                <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center ">
                                    <div className='slider-text '>

                                        <h2 className='slider-h2 fw-bold'>Enterprise Systems</h2>
                                        <p>
                                            With enterprise systems, you can integrate the effectiveness of your business into a single decentralized system. Your business hierarchies will be able to coordinate with information at all functional levels. With LionOrbit, you don't have to worry about the complexities involved. Become digital-smart with ERP and CRM services!</p>
                                    </div>
                                    <div className=' py-2 px-3 fw-600' onClick={() => changeLink("RequestDemo")} style={{ color: css?.[state?.theme], border: "2px solid #084969", borderRadius: "5px" }}>Get Started</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            case "Banking, Financial Services":
                return <div>
                    <div className="container">
                        <div className="landing-about">
                            <div className="">
                                <div className="col-md-8 text-center images">
                                    <img src={Efingo} width="80%" />
                                </div>
                                <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center ">
                                    <div className='slider-text '>

                                        <h2 className='slider-h2 fw-bold'>E-FINGOV</h2>
                                        <p>   E-FINGOV is a platform that can be used to integrate multi-various disparate systems by acting as a middleware to generate interface data/messages. With Cross-Report Reconciliation, clients can resolve regulatory matters related to new MAS610 / 1003 reconciliation. It's a robust reporting engine which makes it easy to define several complex reports in minutes. The functionalities are designed in a way that supports risk, compliance, statistical, operational, treasury and all types of user reports.
                                        </p>
                                    </div>
                                    <div className=' py-2 px-3 fw-600' onClick={() => changeLink("RequestDemo")} style={{ color: css?.[state?.theme], border: "2px solid #084969", borderRadius: "5px" }}>Get Started</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            case "Cyber Security & Information Security":
                return <div>
                    <div className="container">
                        <div className="landing-about">
                            <div className="">
                                <div className="col-md-8 text-center images">
                                    <img src={cyber} width="80%" />
                                </div>
                                <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center ">
                                    <div className='slider-text '>

                                        <h2 className='slider-h2 fw-bold'>Cyber Security & Information Security</h2>
                                        <p>
                                            Your digital assets are prone to risk if you take their security lightly. In this fast-paced world, nothing is impossible. LionOrbit can help you deploy modern tools and methodologies such as machine learning and IoT that will protect your assets. A single bug can cause critical data and information loss and leak out the most significant secrets, according to the experts at LionOrbit
                                        </p>
                                    </div>
                                    <div className=' py-2 px-3 fw-600' onClick={() => changeLink("RequestDemo")} style={{ color: css?.[state?.theme], border: "2px solid #084969", borderRadius: "5px" }}>Get Started</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            case "Digital Transformation":
                return <div>
                    <div className="container">
                        <div className="landing-about">
                            <div className="">
                                <div className="col-md-8 text-center images">
                                    <img src={Digital} width="80%" />
                                </div>
                                <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center ">
                                    <div className='slider-text '>

                                        <h2 className='slider-h2 fw-bold'>Enhancing business performance using technology</h2>
                                        <p>
                                            Your digital assets are prone to risk if you take their security lightly. In this fast-paced world, nothing is impossible. LionOrbit can help you deploy modern tools and methodologies such as machine learning and IoT that will protect your assets. A single bug can cause critical data and information loss and leak out the most significant secrets, according to the experts at LionOrbit
                                        </p>
                                    </div>
                                    <div className=' py-2 px-3 fw-600' onClick={() => changeLink("RequestDemo")} style={{ color: css?.[state?.theme], border: "2px solid #084969", borderRadius: "5px" }}>Get Started</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            case "Market Place & Product Development":
                return <div>
                    <div className="container">
                        <div className="landing-about">
                            <div className="">
                                <div className="col-md-8 text-center images">
                                    <img src={Market} width="80%" />
                                </div>
                                <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center ">
                                    <div className='slider-text '>

                                        <h2 className='slider-h2 fw-bold'>Dream Basket</h2>
                                        <p>
                                            Dream Basket is for the public and local retailers to access stores via mobile and web applications. It has a Central Warehouse for all its products. Franchise stores get the benefit of a good margin being passed on to them from the Dream Basket. Users get the same price at online and offline stores. This software aims at handling all these aspects of customer purchases.
                                        </p>
                                    </div>
                                    <div className=' py-2 px-3 fw-600' onClick={() => changeLink("RequestDemo")} style={{ color: css?.[state?.theme], border: "2px solid #084969", borderRadius: "5px" }}>Get Started</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            case "Insurance":
                return <div>
                    <div className="container">
                        <div className="landing-about">
                            <div className="">
                                <div className="col-md-8 text-center images">
                                    <img src={Insurance} width="80%" />
                                </div>
                                <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center ">
                                    <div className='slider-text '>

                                        <h2 className='slider-h2 fw-bold'>Insurancet</h2>
                                        <p>
                                            LionOrbit has state of the art Product suites for the Insurance Industry that caters to Agent Sales Training with Gamification & Analytics.
                                        </p>
                                    </div>
                                    <div className=' py-2 px-3 fw-600' onClick={() => changeLink("RequestDemo")} style={{ color: css?.[state?.theme], border: "2px solid #084969", borderRadius: "5px" }}>Get Started</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        }
    }
    // console.log(colors, "Colors")
    const returnUi = () => {
        switch (link) {
            case "Home":
                return <div><HomeScreen /></div>
            case "Features":
                return <div><Features /></div>
            case "Services":
                return <div><Services /></div>
            case "Products":
                return <div><Products /></div>
            case "Company":
                return <div><Company /></div>
            case "RequestDemo": return <div className=''>
                <HeaderLead />
                <div className='d-flex  ' style={{ height: "72vh" }}>
                    <div className='col-md-6  forgetImage1 '>
                        <div className='d-flex justify-content-around align-items-center '>
                            <div className='d-flex flex-column gap-3 mt-3'>
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
                                        <div className=''><IoMdCheckmarkCircle size={20} color={css?.[state?.theme]} /></div>
                                        <div className='' style={{ fontWeight: "500" }}>Fastest deployment in the market</div>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <div><IoMdCheckmarkCircle size={20} color={css?.[state?.theme]} /></div>
                                        <div style={{ fontWeight: "500" }}>Highly customizable verticals on demand</div>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <div><IoMdCheckmarkCircle size={20} color={css?.[state?.theme]} /></div>
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
                    <div className='col-md-12 col-sm-12 col-12 col-lg-6  py-4 d-flex flex-column justify-content-center align-items-center'>
                        <div className='d-flex justify-content-center align-items-center mt-3 px-2 col-12'>
                            <div className='  col-lg-10 col-xl-7 col-10 col-md-10 mt-4 p-4 d-flex flex-column gap-2 shadow-sm  border  bg-white ' style={{ borderRadius: "10px", }}>
                                <div className='mx-2'>
                                    <div className='fw-bold' style={{ fontSize: "1rem" }}>Request Demo </div>
                                </div>
                                <div class="form-floating ">
                                    <input type="text" value={returningValue(data?.["customerName"], "Alphabet")} onChange={formChange("Alphabet")} name='customerName' className={`form-control  ${returningValue(errors?.customerName, "ErrorColor")}`} id="floatingInput" placeholder="" />
                                    <label for="floatingInput">Full Name<span className='text-danger'>*</span></label>
                                </div>
                                <div class="form-floating ">
                                    <input type="text" maxLength={15} value={returningValue(data?.["phone"], "Phone")} onChange={formChange("Phone")} name='phone' className={`form-control  ${returningValue(errors?.phone, "ErrorColor")}`} id="floatingInput" placeholder="" />
                                    <label for="floatingInput">Contact Number<span className='text-danger'>*</span></label>
                                </div>
                                <div class="form-floating ">
                                    <input type="text" value={returningValue(data?.["email"], "")} onChange={formChange("")} name='email' className={`form-control  ${returningValue(errors?.email, "ErrorColor")}`} id="floatingInput" placeholder="" />
                                    <label for="floatingInput">Work Email<span className='text-danger'>*</span> </label>
                                </div>
                                <div class="form-floating ">
                                    <input type="text" value={returningValue(data?.["companyName"], "")} onChange={formChange("")} name='companyName' className={`form-control  ${returningValue(errors?.companyName, "ErrorColor")}`} id="floatingInput" placeholder="" />
                                    <label for="floatingInput">Company Name<span className='text-danger'>*</span></label>
                                </div>
                                <div className='mx-2'>
                                    <button className='btn  col-12 text-white pointer' style={{ backgroundColor: css?.[state?.theme] }} onClick={handleSubmit}  >Request Demo</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div style={{ height: "11vh", backgroundColor: "black" }} className='d-flex  justify-content-center text-white align-items-center '>
                    <div>
                        Copyright  © 2024, All rights reserved
                    </div>
                </div>
            </div>
        }
    }
    return (
        <div className=' ' onClick={handleParentClick}  >



            <div style={{ overflowY: "auto" }} className=''>
                {link != "RequestDemo" && <div>
                    {showTopButton && (
                        <div className='bg-white p-2 shadow pointer' style={{ position: 'fixed', bottom: '10px', right: '0', borderRadius: "25px" }}>
                            <FaArrowUp size={25} onClick={goTop} />
                        </div>
                    )}
                    {/* // ) : <div className='bg-white p-2 shadow pointer' style={{ position: "fixed", top: "500", right: "0", borderRadius: "25px" }}>
                    //     <FaArrowDown color='' size={25} onClick={goBottom1} />
                    // </div>
                    } */}
                </div>}

                {returnUi()}

            </div>
        </div>
    )
}
export default Home