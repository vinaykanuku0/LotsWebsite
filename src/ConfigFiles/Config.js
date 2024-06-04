// import moment from "moment/moment";
// import CryptoJS from "crypto-js";
// // import { encryptKey, ivKey } from "./Consts";
// import * as XLSX from "xlsx";

// import instance from "../Services";
// import axios from "axios";
// import Swal from "sweetalert2";

// //Constants means give the predefined urls or constant values

// export const css = {
//     white: "#fff",
//     black: "#000",
//     themeColor: "#084969",
//     textColor: "#8F8B8B",
//     background: "#F7F8FD",
//     iconSize2: "1.2rem",
//     sassTheam: "#7f4afc",
//     theamBorderRadious: "38px",
//     dashboardTheam: "#e9f2f9",
//     dashboardRadious: "15px"

// };

// export const baseURL = process.env.REACT_APP_API_URL;
// export const basefileURL = process.env.REACT_APP_API_ASSETS_URL;

// export const encryptKey = "1M3D^ERZ@B@!TN@1"
// export const ivKey = "1B@!TN@@M3D^ERZ1"

// //Please dont change these urls structure and names we used these in lot of places dynamically
// export const urls = {
//     auth: {
//         login: "Authentication/Login",
//         forgotPassword: "Authentication/ForgotPassword"
//     },
//     Request: {
//         save: "CustomerRequest/Save",
//         updateStatus: "CustomerRequest/UpdateStatus",
//         getAll: "CustomerRequest/GetAll",
//         getById: "CustomerRequest/GetById"
//     },
//     RequestNote: {
//         save: "CustomerRequest/SaveRequestNote",
//         getAll: "CustomerRequest/GetAllRequestNote",
//         getById: "CustomerRequest/GetRequestNoteById"
//     },
//     Product: {
//         save: "Product/Save",
//         getAll: "Product/GetAll",
//         getById: "Product/GetById"
//     },
//     Module: {
//         save: "Module/Save",
//         getAll: "Module/GetAll",
//         getById: "Module/GetById"
//     },
//     Bundle: {
//         save: "Bundle/Save",
//         getAll: "Bundle/GetAll",
//         getById: "Bundle/GetById"
//     },
//     Organization: {
//         save: "Organization/Save",
//         getAll: "Organization/GetAll"
//     },
//     OrganizationBundle: {
//         save: "Organization/SaveOrganizationBundle",
//         getAll: "Organization/GetOrganizationBundleById"
//     },
//     User: {
//         save: "User/Save",
//         getAll: "User/GetAll"
//     }
// }

// //Const List means give the predefined constant lists

// export const genderList = [{ name: "Male" }, { name: "Female" }, { name: "Other" }];
// export const requestStatusList = (status) => {
//     switch (status) {
//         case "Requested": return ['Requested', 'Pending', 'Completed', 'Cancelled']
//         case "Pending": return ['Pending', 'Completed', 'Cancelled']
//         case "Completed": return ['Completed']
//         // case "Completed": return ['Requested', 'Pending', 'Completed', 'Cancelled']
//         case "Cancelled": return ['Cancelled']
//     }
// }


// // Validation Schemas

// export const createUser = {
//     email: {
//         required: { value: true, message: "Please Enter Valid Email" },
//         pattern: { value: /^(?!.*[.]{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email Formate is required" }
//     },
//     userName: { required: { value: true, message: "Please enter password" } },
//     password: { required: { value: true, message: "Please enter password" } },
//     cnfpassword: { required: { value: true, message: "Please enter password" } }
// }

// export const login = {
//     email: {
//         required: { value: true, message: "Please Enter Valid Email" },
//         pattern: { value: /^(?!.*[.]{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/, message: "Email Formate is required" }
//     },
//     password: { required: { value: true, message: "Please enter password" } }
// }

// export const requestDemo = {
//     email: {
//         required: { value: true, message: "Please Enter Valid Email" },
//         pattern: { value: /^(?!.*[.]{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email Formate is required" }
//     },
//     customerName: { required: { value: true, message: "Please enter password" } },
//     companyName: { required: { value: true, message: "Please enter password" } },
//     mobile: { required: { value: true, message: "Please enter password" } }
// }

// export const forgotPassword = {
//     email1: {
//         required: { value: true, message: "Please enter password" },
//         pattern: { value: /^(?!.*[.]{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email Formate is required" }
//     },
// }

// export const product = {
//     productName: { required: { value: true, message: "Enter Product name" } },
// }

// export const requestNote = {
//     note: { required: { value: true, message: "Enter Product name" } },
// }

// export const Module = {
//     moduleName: { required: { value: true, message: "Enter Product name" } },
//     productId: { required: { value: true, message: "Enter Product name" } }
// }

// export const Organization = {
//     organizationName: { required: { value: true, message: "Enter Product name" } },
//     userLimit: { required: { value: true, message: "Enter Product name" } },
//     validUpTo: { required: { value: true, message: "Enter Product name" } }
// }

// export const Bundle = {
//     bundleName: { required: { value: true, message: "Enter Product name" } },
//     productId: { required: { value: true, message: "Enter Product name" } },
//     price: { required: { value: true, message: "Enter Product name" } }
// }

// export const users = {
//     firstName: { required: { value: true, message: "Enter Product name" } },
//     lastName: { required: { value: true, message: "Enter Product name" } },
//     email: { required: { value: true, message: "Enter Product name" } },
//     phone: { required: { value: true, message: "Enter Product name" } },
//     organizationId: { required: { value: true, message: "Enter Product name" } }
// }

// ///Small and reusable functions

// export const logOutFunction = () => (sessionStorage.clear(), window.location.pathname = "/")
// export const getUserfromSS = () => JSON.parse?.(dec?.(sessionStorage.getItem("user")) || "{}")
// export const getUniqueByKey = (array, key) => [...new Map(array.map((item) => [key ? item[key] : item, item])).values()] || []
// export const settingdata = (data, keys) => keys.reduce((temp, key) => Object.assign(temp, { [key]: data[key] || "" }), {});
// export const resettingdata = (keys) => keys.reduce((temp, key) => Object.assign(temp, { [key]: "" }), {});
// export const sortingList = (array, key, type) => array.sort((a, b) => type == "Number" ? a?.[key] - (b?.[key]) : type == "Date" ? new Date(a?.[key]) - new Date(b?.[key]) : a?.[key]?.localeCompare(b?.[key]))
// export const stringToInt = (data, keys) => keys.reduce((temp, key) => Object.assign(temp, { [key]: returningValue(data[key]) == '' ? 0 : parseInt(data[key], 10) }), data);
// export const stringToArray = (str, dataArray, idKey) => str?.length > 0 && str?.split(',')?.map((e) => ({ ...dataArray?.find((v) => v?.[idKey] == e) })) || []

// export const removeDuplicates = (array, key) => {
//   const uniqueKeys = new Set();
//   return array.filter(e => !uniqueKeys.has(e?.[key]) ? (uniqueKeys.add(e?.[key]), true) : false);
// };

// export const enc = (data) => {
//   const key = CryptoJS.enc.Utf8.parse(encryptKey);
//   const iv = CryptoJS.enc.Utf8.parse(ivKey);

//   if (returningValue(data, "") != '') {
//     const encrypteddata = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key,
//       {
//         keySize: 128 / 8,
//         iv: iv,
//         mode: CryptoJS.mode.CBC,
//         padding: CryptoJS.pad.Pkcs7
//       })?.toString()
//     const encrypted = encrypteddata.toString()
//     return encrypted
//   } else {
//     return null
//   }
// }

// export const dec = (data) => {
//   const key = CryptoJS.enc.Utf8.parse(encryptKey);
//   const iv = CryptoJS.enc.Utf8.parse(ivKey);

//   if (returningValue(data, "") != '') {
//     const decryptedBytes = CryptoJS.AES.decrypt(data, key, {
//       keySize: 128 / 8,
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7
//     });
//     const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8);
//     return decrypted || ""
//   }
// }

// export const returningValue = (v, type) => {
//   const isValid = v !== undefined && v !== null && v !== "" && v !== NaN && v !== "null";
//   if (isValid) {
//     switch (type) {
//       case "Alphabet":
//         var va = v?.replace(/[^a-zA-Z ]/g, "")?.replace(/^\s+/, "")?.replace(/\s+/g, " ");
//         va = va?.charAt(0).toUpperCase() + v.slice(1);
//         return va;
//       case "AlphaNumaric":
//         var va = v?.replace(/[^a-zA-Z0-9 ]/g, "")?.replace(/^\s+/, "")?.replace(/\s+/g, " ");
//         va = va?.charAt(0)?.toUpperCase() + v?.slice(1)
//         return va
//       case "Phone":
//         let n = v?.replace("+966", "")?.replace(/[^0-9]/g, "")?.replace(/\s+/g, '');
//         let l = n?.length;
//         if (l > 0 && l <= 2) return n?.replace(/(\d{1})/, "+966 $1", "");
//         else if (l > 2 && l <= 5) return n?.replace(/(\d{2})(\d{1})/, "+966 $1 $2", "");
//         else if (l > 5 && l <= 9) return n?.replace(/(\d{2})(\d{3})(\d{1})/, "+966 $1 $2 $3", "");
//         break;
//       case "Date": return new Date(v) !== "Invalid Date" ? new Date(v) : "";
//       case "Email": return v?.toLowerCase()?.replace(/\s+/g, '');
//       case "Number": return typeof (v) == "string" ? v?.replace(/[^0-9 ]/g, "") : v
//       case "Decimal": return parseFloat(v).toFixed(2);
//       case "DateTime": return v === "Invalid date" ? "-" : v;
//       case "LocalTime": return moment.utc(v, "YYYY-MM-DDTHH:mm:ss").local().format('YYYY-MMM-DD H:mm:ss');
//       case "NumberString": return v?.replace(/[^0-9]/g, "");
//       case "WithoutSpaces": return v?.toString();
//       case "ErrorColor": return "border border-danger";
//       default: return v;
//     }
//   } else {
//     switch (type) {
//       case "Array": return [];
//       case "Bool": return false
//       default: return "";
//     }
//   }
// };

// export const navigationFn = (user) => {
//   const roleId = user?.roleId;
//   const roleRoutes = {
//     1: "/v1/service/dashboard/adminDashboard",
//     2: "/v1/service/dashboard/adminDashboard",
//     3: "/v1/service/dashboard/adminDashboard",
//     4: "/v1/service/physiciandashboard",
//     5: "/v1/service/appointment/all-appointments",
//   };
//   return roleRoutes[roleId] || "";
// };

// export const exportExcel = (data, name) => {
//   const wb = XLSX.utils.book_new();
//   const ws = XLSX.utils.aoa_to_sheet(data);
//   const columnWidths = data.reduce((acc, row) => {
//     row.forEach((cell, i) => {
//       acc[i] = Math.max(acc[i] || 0, String(cell).length + 2);
//     });
//     return acc;
//   }, []);
//   ws["!cols"] = columnWidths.map((width) => ({ width }));
//   XLSX.utils.book_append_sheet(wb, ws, name);
//   XLSX.writeFile(wb, `${name}.xlsx`);
// }

// export const mobileDetect = () => {
//   const agent = window.navigator.userAgent;
//   const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//   const IsIPhone = agent.includes('iPhone');
//   const IsIPad = agent.includes('iPad') || (IsIPhone && deviceWidth > 750);
//   if (IsIPad) {
//     IsIPhone = false;
//   }
//   const macApp = agent.includes('Macintosh');
//   if (macApp) {
//     const canvas = document.createElement('canvas');
//     if (canvas) {
//       const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
//       if (context) {
//         const info = context.getExtension('WEBGL_debug_renderer_info');
//         if (info) {
//           const renderer = context.getParameter(info.UNMASKED_RENDERER_WEBGL);
//           if (renderer.includes('Apple')) {
//             IsIPad = true;
//           }
//         }
//       }
//     }
//   }

//   const IsIOSApp = IsIPad || IsIPhone;
//   const IsAndroid = agent.includes('Android');
//   const IsAndroidPhone = IsAndroid && deviceWidth <= 960;
//   const IsAndroidTablet = IsAndroid && !IsAndroidPhone;

//   let message = '';
//   if (IsIPhone) {
//     message = 'Device is iPhone';
//   } else if (IsIPad) {
//     message = 'Device is iPad';
//   } else if (IsAndroidTablet || IsAndroidPhone || IsAndroid) {
//     message = 'Device is Android';
//   } else {
//     message = 'Device is Mac || Windows Desktop';
//   }

//   return {
//     message,
//     isMobile: IsIOSApp || IsAndroid || IsAndroidTablet || IsAndroidPhone,
//   };
// };

// //Shared functions used for api calls


// export const notify = (status, msg) => {
//   Swal.fire({
//     position: "center",
//     icon: status == true ? "success" : "error",
//     title: msg,
//     showConfirmButton: false,
//     timer: 1500,
//   });
// };

// export const notify1 = (status, msg) => {
//   Swal.fire({
//     position: "center",
//     icon: status == true ? "success" : "error",
//     title: msg,
//     // text:msg,
//     showConfirmButton: true,
//   });
// };

// export const dilogueBox = (text, onClickFn) => {
//   Swal.fire({
//     title: text,
//     showCancelButton: true,
//     confirmButtonText: 'Yes',
//   }).then((result) => {
//     if (result.isConfirmed) {
//       onClickFn()
//     }
//   })
// }

// export const getList = async (url, data) => {
//   try {
//     let res = await instance.post(url, data);
//     if (res?.data?.status == true && Array.isArray(res?.data?.data) && res?.data?.data?.length > 0) return res.data.data;
//     else return []
//   } catch (e) {
//     return [];
//   }
//   return [];
// };

// export const getById = async (url, data) => {
//   try {
//     let res = await instance.post(url, data);
//     if (res?.data?.status == true && Object.keys(res?.data?.data)?.length > 0) return res?.data?.data;
//     else return {}
//   } catch (e) {
//     return {};
//   }
//   return {};
// };

// export const save = async (url, data) => {
//   try {
//     let res = await instance.post(url, data);
//     notify(res?.data?.status, res?.data?.message);
//     if (res?.data?.status == true) return res
//   } catch (e) {
//     return {};
//   }
//   return {};
// };

// export const saveWithConfirmation = async (url, data) => {
//   try {
//     let res = await instance.post(url, data);
//     notify1(res?.data?.status, res?.data?.message);
//     if (res?.data?.status == true) return res
//   } catch (e) {
//     return {};
//   }
//   return {};
// };

// export const saveWithoutMessage = async (url, data) => {
//   try {
//     let res = await instance.post(url, data);
//     if (res?.data?.status == true) return res
//   } catch (e) {
//     return {};
//   }
//   return {};
// };

// export const saveWithoutMessageWithoutLoad = async (url, data) => {
//   let headers = {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + sessionStorage.getItem("token"),
//   };
//   try {
//     let res = await axios?.post(`${process.env.REACT_APP_API_URL}${url}`, data, { headers });
//     if (res?.data?.status == true) return res
//   } catch (e) {
//     return {};
//   }
//   return {};
// };