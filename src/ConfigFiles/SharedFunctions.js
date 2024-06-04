import instance from "../Services";
import axios from "axios";
import Swal from "sweetalert2";

export const notify = (status, msg) => {
  Swal.fire({
    position: "center",
    icon: status == true ? "success" : "error",
    title: msg,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const notify1 = (status, msg) => {
  Swal.fire({
    position: "center",
    icon: status == true ? "success" : "error",
    title: msg,
    // text:msg,
    showConfirmButton: true,
  });
};

export const dilogueBox = (text, onClickFn) => {
  Swal.fire({
    title: text,
    showCancelButton: true,
    confirmButtonText: 'Yes',
  }).then((result) => {
    if (result.isConfirmed) {
      onClickFn()
    }
  })
}

export const getList = async (url, data) => {
  try {
    let res = await instance.post(url, data);
    if (res?.data?.status == true && Array.isArray(res?.data?.data) && res?.data?.data?.length > 0) return res.data.data;
    else return []
  } catch (e) {
    return [];
  }
  return [];
};

export const getById = async (url, data) => {
  try {
    let res = await instance.post(url, data);
    if (res?.data?.status == true && Object.keys(res?.data?.data)?.length > 0) return res?.data?.data;
    else return {}
  } catch (e) {
    return {};
  }
  return {};
};

export const save = async (url, data) => {
  try {
    let res = await instance.post(url, data);
    notify(res?.data?.status, res?.data?.message);
    if (res?.data?.status == true) return res
  } catch (e) {
    return {};
  }
  return {};
};

export const saveWithConfirmation = async (url, data) => {
  try {
    let res = await instance.post(url, data);
    notify1(res?.data?.status, res?.data?.message);
    if (res?.data?.status == true) return res
  } catch (e) {
    return {};
  }
  return {};
};

export const saveWithoutMessage = async (url, data) => {
  try {
    let res = await instance.post(url, data);
    if (res?.data?.status == true) return res
  } catch (e) {
    return {};
  }
  return {};
};

export const saveWithoutMessageWithoutLoad = async (url, data) => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + sessionStorage.getItem("token"),
  };
  try {
    let res = await axios?.post(`${process.env.REACT_APP_API_URL}${url}`, data, { headers });
    if (res?.data?.status == true) return res
  } catch (e) {
    return {};
  }
  return {};
};