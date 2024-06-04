export const css = {
  white: "#fff",
  black: "#000",
  themeColor: "#084969",
  textColor: "#8F8B8B",
  background: "#F7F8FD",
  iconSize2: "1.2rem",
  sassTheam: "#7f4afc",
  theamBorderRadious: "38px",
  dashboardTheam: "#e9f2f9",
  dashboardRadious: "15px"

};

const black = "#000"

export const baseURL = process.env.REACT_APP_API_URL;
export const basefileURL = process.env.REACT_APP_API_ASSETS_URL;

export const encryptKey = "1M3D^ERZ@B@!TN@1"
export const ivKey = "1B@!TN@@M3D^ERZ1"

//Please dont change these urls structure and names we used these in lot of places dynamically
export const urls = {
  auth: {
    login: "Authentication/Login",
    forgotPassword: "Authentication/SendForgotPasswordMail",
    updatePassword: "Authentication/UpdatePassword",
    resetPassword: "Authentication/SetPassword"
  },
  Request: {
    save: "CustomerRequest/Save",
    updateStatus: "CustomerRequest/UpdateStatus",
    getAll: "CustomerRequest/GetAll",
    getById: "CustomerRequest/GetById"
  },
  RequestNote: {
    save: "CustomerRequest/SaveRequestNote",
    getAll: "CustomerRequest/GetAllRequestNote",
    getById: "CustomerRequest/GetRequestNoteById"
  },
  Product: {
    save: "Product/Save",
    getAll: "Product/GetAll",
    getById: "Product/GetById"
  },
  Module: {
    save: "Module/Save",
    getAll: "Module/GetAll",
    getById: "Module/GetById"
  },
  Bundle: {
    save: "Bundle/Save",
    getAll: "Bundle/GetAll",
    getById: "Bundle/GetById"
  },
  Organization: {
    save: "Organization/Save",
    getAll: "Organization/GetAll"
  },
  OrganizationBundle: {
    save: "Organization/SaveOrganizationBundle",
    getAll: "Organization/GetOrganizationBundleById"
  },
  User: {
    save: "User/Save",
    getAll: "User/GetAll",
    getById: "User/GetById",
    updateProfile: "User/UpdateUserProfile",
  }
}