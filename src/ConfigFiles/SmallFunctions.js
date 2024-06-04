import moment from "moment/moment";
import CryptoJS from "crypto-js";
import { encryptKey, ivKey } from "./Consts";
import * as XLSX from "xlsx";

export const logOutFunction = () => (sessionStorage.clear(), window.location.pathname = "/")
export const getUserfromSS = () => JSON.parse?.(dec?.(sessionStorage.getItem("user")) || "{}")
export const getUniqueByKey = (array, key) => [...new Map(array.map((item) => [key ? item?.[key] : item, item])).values()] || []
export const settingdata = (data, keys) => keys.reduce((temp, key) => Object.assign(temp, { [key]: data[key] || "" }), {});
export const resettingdata = (keys) => keys.reduce((temp, key) => Object.assign(temp, { [key]: "" }), {});
export const sortingList = (array, key, type) => array.sort((a, b) => type == "Number" ? a?.[key] - (b?.[key]) : type == "Date" ? new Date(a?.[key]) - new Date(b?.[key]) : a?.[key]?.localeCompare(b?.[key]))
export const stringToInt = (data, keys) => keys.reduce((temp, key) => Object.assign(temp, { [key]: returningValue(data[key]) == '' ? 0 : parseInt(data[key], 10) }), data);
export const stringToArray = (str, dataArray, idKey) => str?.length > 0 && str?.split(',')?.map((e) => ({ ...dataArray?.find((v) => v?.[idKey] == e) })) || []

export const removeDuplicates = (array, key) => {
  const uniqueKeys = new Set();
  return array.filter(e => !uniqueKeys.has(e?.[key]) ? (uniqueKeys.add(e?.[key]), true) : false);
};

export const enc = (data) => {
  const key = CryptoJS.enc.Utf8.parse(encryptKey);
  const iv = CryptoJS.enc.Utf8.parse(ivKey);

  if (returningValue(data, "") != '') {
    const encrypteddata = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })?.toString()
    const encrypted = encrypteddata.toString()
    return encrypted
  } else {
    return null
  }
}

export const dec = (data) => {
  const key = CryptoJS.enc.Utf8.parse(encryptKey);
  const iv = CryptoJS.enc.Utf8.parse(ivKey);

  if (returningValue(data, "") != '') {
    const decryptedBytes = CryptoJS.AES.decrypt(data, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decrypted || ""
  }
}

export const returningValue = (v, type) => {
  const isValid = v !== undefined && v !== null && v !== "" && v !== NaN && v !== "null";
  if (isValid) {
    switch (type) {
      case "Alphabet":
        var va = v?.replace(/[^a-zA-Z ]/g, "")?.replace(/^\s+/, "")?.replace(/\s+/g, " ");
        va = va?.charAt(0).toUpperCase() + v.slice(1);
        return va;
      case "AlphaNumaric":
        var va = v?.replace(/[^a-zA-Z0-9 ]/g, "")?.replace(/^\s+/, "")?.replace(/\s+/g, " ");
        va = va?.charAt(0)?.toUpperCase() + v?.slice(1)
        return va
      case "Phone":
        // let n = v?.replace("+966", "")?.replace(/[^0-9]/g, "")?.replace(/\s+/g, '');
        // let l = n?.length;
        // if (l > 0 && l <= 2) return n?.replace(/(\d{1})/, "+966 $1", "");
        // else if (l > 2 && l <= 5) return n?.replace(/(\d{2})(\d{1})/, "+966 $1 $2", "");
        // else if (l > 5 && l <= 9) return n?.replace(/(\d{2})(\d{3})(\d{1})/, "+966 $1 $2 $3", "");
        // break;
        let n = v?.replace("+91", "")?.replace(/[^0-9]/g, "")?.replace(/\s+/g, '');
        let l = n?.length;
        // if (l > 0 && l <= 2) return n?.replace(/(\d{1})/, "+91 $1", "");
        // else if (l > 2 && l <= 5) return n?.replace(/(\d{2})(\d{2})/, "+91 $1 $2", "");
        // else if (l > 5 && l <= 10) return n?.replace(/(\d{3})(\d{3})(\d{4})/, "+91 $1 $2 $3", "");
        // break;
        if (l <= 5) return n?.replace(/(\d{1})/, "+91 $1", "")
        else if (l > 5 && l <= 10) return n?.replace(/(\d{5})(\d{1})/, "+91 $1 $2", "")
        break
      case "Date": return new Date(v) !== "Invalid Date" ? new Date(v) : "";
      case "Email": return v?.toLowerCase()?.replace(/\s+/g, '');
      case "Number": return typeof (v) == "string" ? v?.replace(/[^0-9 ]/g, "") : v
      case "Decimal": return parseFloat(v).toFixed(2);
      case "DateTime": return v === "Invalid date" ? "-" : v;
      case "LocalTime": return moment.utc(v, "YYYY-MM-DDTHH:mm:ss").local().format('YYYY-MMM-DD H:mm:ss');
      case "NumberString": return v?.replace(/[^0-9]/g, "");
      case "WithoutSpaces": return v?.toString();
      case "ErrorColor": return "border border-danger";
      default: return v;
    }
  } else {
    switch (type) {
      case "Array": return [];
      case "Bool": return false
      default: return "";
    }
  }
};

export const navigationFn = (user) => {
  const roleId = user?.roleId;
  const roleRoutes = {
    1: "/v1/service/dashboard/adminDashboard",
    2: "/v1/service/dashboard/adminDashboard",
    3: "/v1/service/dashboard/adminDashboard",
    4: "/v1/service/physiciandashboard",
    5: "/v1/service/appointment/all-appointments",
  };
  return roleRoutes[roleId] || "";
};

export const exportExcel = (data, name) => {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(data);
  const columnWidths = data.reduce((acc, row) => {
    row.forEach((cell, i) => {
      acc[i] = Math.max(acc[i] || 0, String(cell).length + 2);
    });
    return acc;
  }, []);
  ws["!cols"] = columnWidths.map((width) => ({ width }));
  XLSX.utils.book_append_sheet(wb, ws, name);
  XLSX.writeFile(wb, `${name}.xlsx`);
}

export const mobileDetect = () => {
  const agent = window.navigator.userAgent;
  const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const IsIPhone = agent.includes('iPhone');
  const IsIPad = agent.includes('iPad') || (IsIPhone && deviceWidth > 750);
  if (IsIPad) {
    IsIPhone = false;
  }
  const macApp = agent.includes('Macintosh');
  if (macApp) {
    const canvas = document.createElement('canvas');
    if (canvas) {
      const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (context) {
        const info = context.getExtension('WEBGL_debug_renderer_info');
        if (info) {
          const renderer = context.getParameter(info.UNMASKED_RENDERER_WEBGL);
          if (renderer.includes('Apple')) {
            IsIPad = true;
          }
        }
      }
    }
  }

  const IsIOSApp = IsIPad || IsIPhone;
  const IsAndroid = agent.includes('Android');
  const IsAndroidPhone = IsAndroid && deviceWidth <= 960;
  const IsAndroidTablet = IsAndroid && !IsAndroidPhone;

  let message = '';
  if (IsIPhone) {
    message = 'Device is iPhone';
  } else if (IsIPad) {
    message = 'Device is iPad';
  } else if (IsAndroidTablet || IsAndroidPhone || IsAndroid) {
    message = 'Device is Android';
  } else {
    message = 'Device is Mac || Windows Desktop';
  }

  return {
    message,
    isMobile: IsIOSApp || IsAndroid || IsAndroidTablet || IsAndroidPhone,
  };
};