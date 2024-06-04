import { useState } from "react";
let isSubmitted = false;
let newErrors = {};
let hasErrors = false;
export const useFormValidation = (metadata) => {
  const [data, setData] = useState(metadata.initialValues || {});
  const [errors, setErrors] = useState({});

  const handleChange = (key) => (d) => updateErrorsandData(key, d)
  const addObject = (u) => setData((p) => ({ ...p, ...u }))
  const resetData = () => setData({})
  const resetFormData = (key) => updateErrorsandData(key, [{}])

  const updateErrorsandData = (key, value) => {
    let ld = { ...data, [key]: value }
    setData((p) => ({ ...p, [key]: value }));
    submittingData(key, value, ld);
  }

  const returningData = (value, type) => {
    if (value != undefined && value != null && value != "") {
      switch (type) {
        case "Alphabet":
          var v = value?.replace(/[^a-zA-Z ]/g, "")?.replace(/^\s+/, "")?.replace(/\s+/g, " ");
          v = v?.charAt(0).toUpperCase() + v.slice(1);
          return v;
        case "AlphaNumaric":
          var v = value?.replace(/[^a-zA-Z0-9 ]/g, "")?.replace(/^\s+/, "")?.replace(/\s+/g, " ");
          v = v?.charAt(0).toUpperCase() + v.slice(1)
          return v
        case "Number": return value?.replace(/[^0-9\.]/g, "");
        case "Charge": return value?.replace(/^-?\d*\.?\d*$/g, "");
        // case "Decimal": return parseFloat(value?.replace(/[^0-9\.]/g, "")).toFixed(2);
        case "NumberString": return value?.replace(/[^0-9]/g, "");
        case "Phone":
          let res = value?.replace("+91", "")?.replace(/[^0-9]/g, "")?.replace(/\s+/g, '');
          let l = res?.length;
          if (l <= 5) return res?.replace(/(\d{1})/, "+91 $1", "")
          else if (l > 5 && l <= 10) return res?.replace(/(\d{5})(\d{1})/, "+91 $1 $2", "")
        break
        // let r;
        // if (l > 0 && l <= 2) {
        //   r = res?.toString()?.replace(/(\d{1})/, "+91 $1", "");
        // } else if (l > 2 && l <= 5) {
        //   r = res?.toString()?.replace(/(\d{2})(\d{3})/, "+91 $1 $2", "");
        // } else if (l > 5 && l <= 10) {
        //   r = res?.toString()?.replace(/(\d{3})(\d{3})(\d{4})/, "+91 $1 $2 $3", "");
        // }
        // return r;
        case "Email": return value?.toLowerCase()?.replace(/\s+/g, '')
        case "Date":
          let date = "";
          if (value != null) {
            value?.setMinutes(0);
            value?.setHours(0);
            date = new Date(value?.setMinutes(value?.getTimezoneOffset() < 0 ? -value?.getTimezoneOffset() : value?.getTimezoneOffset()));
          } else {
            date = "";
          }
          return date;
        case "": return value;
        default: return value;
      }
    } else {
      return "";
    }
  };

  const formChange = (type) => (e) => {
    let d = type == "Checkbox" ? (e.target.checked ? e.target.value : "") : returningData(e?.target?.value || "", type);
    updateErrorsandData(e.target.name, d)
  };

  const addItem = (key, item) => {
    let d = data[key] && data[key]?.length > 0 ? [...data?.[key], item || {}] : [item || {}]
    updateErrorsandData(key, d)
  };

  const removeItem = (key, index) => {
    let d = data[key]?.filter((v, i) => i != index)
    updateErrorsandData(key, d)
  };

  const writeData = (index, name, key, type) => (e) => {
    e.preventDefault();
    let d = returningData(e.target.value, type);
    if (name) {
      let fd = data[name];
      let present = fd[index];
      present[key] = d;
      fd[index] = present;
      updateErrorsandData(name, fd)
    }
  };

  const writeAddObject = (index, name, obj) => {
    if (name) {
      let fd = data[name];
      let present = fd[index];
      present = { ...present, ...obj };
      fd[index] = present;
      updateErrorsandData(name, fd)
    }
  };

  const writeDate = (index, name, key) => (e) => {
    let str;
    if (name) {
      if (e != null) {
        e?.setMinutes(0);
        e?.setHours(0);
        str = new Date(e?.setMinutes(e?.getTimezoneOffset() < 0 ? -e?.getTimezoneOffset() : e?.getTimezoneOffset() || 0));
      } else {
        str = "";
      }
      let fd = data[name];
      let present = fd[index];
      present[key] = str;
      fd[index] = present;
      updateErrorsandData(name, fd)
    }
  };

  const handleDateChange = (e, name) => {
    let str;
    if (name) {
      if (e != null) {
        e?.setMinutes(0);
        e?.setHours(0);
        str = new Date(e?.setMinutes(e?.getTimezoneOffset() < 0 ? -e?.getTimezoneOffset() : e?.getTimezoneOffset()));
      } else {
        str = "";
      }
      setData((p) => ({ ...p, [name]: str }));
      submittingData(name, str);
    }
  };

  const handleSubmit = () => {
    isSubmitted = true;
    validateForm();
    if (!hasErrors) {
      metadata.submit();
    }
  };

  const validateForm = () => {
    if (isSubmitted == true) {
      for (const key in metadata.validationSchema) {
        validateFormControl(key, data?.[key], data);
      }
      setErrors(newErrors);
      var size = Object.keys(newErrors).length;
      if (size) {
        hasErrors = true;
      } else {
        hasErrors = false;
      }
      newErrors = {};
    }
  };

  const submittingData = (name, value, d) => {
    if (isSubmitted) {
      validateFormControl(name, value, d || {});
      if (errors && errors[name] && !newErrors[name]) {
        setErrors({
          ...errors,
          [name]: "",
        });
      } else {
        setErrors({
          ...errors,
          ...newErrors,
        });
      }
      newErrors = {};
    }
  };

  const validateInnerSchema = (parentKey, key, value) => {
    const schema = metadata.validationSchema;
    const validationFormControl = schema?.[parentKey]?.innerSchema?.[key];
    let innerErrors = {};
    if (validationFormControl?.required && !value) {
      innerErrors = {
        ...innerErrors,
        [key]: validationFormControl?.required?.message,
      };
    } else if (validationFormControl?.minlength && value.length < validationFormControl?.minlength?.value) {
      innerErrors = {
        ...innerErrors,
        [key]: validationFormControl?.minlength?.message,
      };
    } else if (validationFormControl?.maxlength && value.length > validationFormControl?.maxlength?.value) {
      innerErrors = {
        ...innerErrors,
        [key]: validationFormControl?.maxlength?.message,
      };
    } else if (validationFormControl?.pattern && !validationFormControl.pattern?.value?.test(value)) {
      innerErrors = {
        ...innerErrors,
        [key]: validationFormControl?.pattern?.message,
      };
    }
    return innerErrors;
  };

  const validateFormControl = (key, value, d) => {
    const schema = metadata.validationSchema;
    const validationFormControl = schema?.[key];
    if (validationFormControl?.required && !value) {
      newErrors = {
        ...newErrors,
        [key]: validationFormControl?.required?.message,
      };
    } else if (value && validationFormControl?.minlength && value.length < validationFormControl?.minlength?.value) {
      newErrors = {
        ...newErrors,
        [key]: validationFormControl?.minlength?.message,
      };
    } else if (value && validationFormControl?.maxlength && value.length > validationFormControl?.maxlength?.value) {
      newErrors = {
        ...newErrors,
        [key]: validationFormControl?.maxlength?.message,
      };
    } else if (value && validationFormControl?.pattern && !validationFormControl.pattern?.value?.test(value)) {
      newErrors = {
        ...newErrors,
        [key]: validationFormControl?.pattern?.message,
      };
    } else if (validationFormControl?.isArray && validationFormControl?.isArray?.value) {
      console.log(d?.[key], "d?.[key]")
      if (d?.[key] && d?.[key]?.length > 0) {
        let res = d?.[key]?.map((e, i) => {
          let innerErrors = {};
          for (const innerkey in validationFormControl?.innerSchema) {
            let res = validateInnerSchema(key, innerkey, e?.[innerkey] || "");
            innerErrors = { ...innerErrors, ...res };
          }
          return innerErrors;
        });
        const allEmptyObjects = res.every((o) => Object.keys(o).length === 0);
        if (!allEmptyObjects) {
          newErrors = {
            ...newErrors,
            [key]: res,
          };
        }
      }
    }
  };

  return {
    data,
    errors,

    addObject,
    handleDateChange,
    handleChange,

    formChange,
    addItem,
    removeItem,
    resetFormData,
    writeData,
    writeDate,
    writeAddObject,
    resetData,
    handleSubmit
  };
};
