import Select from "react-select";
// import DatePicker from "react-datepicker";


// let d = {
//     inputType: "",
//     name: "",
//     label: "",
//     className: "",
//     value: "",
//     onChange: "",
//     required: "",
//     placeholder: ""
// }

// {formControl({
//     type: "input",
//     inputType: "text",
//     name: "productName",
//     label: "Product Name",
//     className: `${returningValue(errors?.productName, "ErrorColor")}`,
//     value: returningValue(data?.["productName"], "Alphabet"),
//     onChange: formChange("Alphabet"),
//     placeholder: "Product Name"
//   })}

export const formControl = (p) => {
    switch (p?.type) {
        case "input":
            return (
                <div class="form-floating col-md-6 mb-2 p-1">
                    <input
                        type={p?.inputType || "text"}
                        value={p?.value}
                        onChange={p?.onChange}
                        name={p?.name}
                        className={`form-control  ${p?.className}`}
                        id="floatingInput"
                        placeholder={p?.placeholder} />
                    <label for="floatingInput">
                        {p?.label}
                        {p?.required == true && <span className='text-danger'>*</span>
                        }</label>
                </div>
                // <>
                //     <label className="text-size">{p?.label || " "}</label>
                //     <input
                //         maxLength={p?.maxLength || ""}
                //         type={p?.inputType || "text"}
                //         name={p?.name}
                //         placeholder={p?.label || " "}
                //         value={p?.value}
                //         onChange={p?.onChange}
                //         className={`form-control p-2 ${p?.className}`}
                //     />
                // </>
            )
        case "singleSelect":
            return (
                <>
                    <label className="text-size">{p?.label || " "}</label>
                    <select
                        name={p?.name}
                        value={p?.value}
                        onChange={p?.onChange}
                        className={`form-select p-2 ${p?.className}`}
                    >
                        <option value={""}>Select {p?.label}</option>
                        {p?.options?.map((e, i) => <option value={e?.[p?.optionValue] || e} name={i}>{e?.[p?.optionLabel] || e}</option>)}
                    </select>
                </>
            )
        case "multiSelect":
            return (
                <>
                    <label className="text-size">{p?.label || " "}</label>
                    <Select
                        closeMenuOnSelect={false}
                        isMulti={true}
                        value={p?.value}
                        placeholder={`Select ${p?.label}`}
                        options={p?.options?.map((v) => {
                            return {
                                label: v?.[p?.optionLabel] || v,
                                value: v?.[p?.optionValue] || v,
                            };
                        })}
                        onChange={p?.onChange}
                    />
                </>
            )
        case "calender":
            return (
                <>
                    {/* <label className="text-size">{p?.label || " "}</label>
                    <DatePicker
                        className="form-control border py-2  "
                        minDate={p?.minDate || ""}
                        maxDate={p?.maxDate || ""}
                        autoComplete="off"
                        selected={p?.value}
                        onChange={p?.onChange}
                        name="startDate"
                        dateFormat="MM/dd/yyyy"
                        placeholderText="MM/DD/YYYY"
                        popperClassName="react-datepicker-popper"
                        showMonthDropdown
                        showYearDropdown
                        style={{ fontSize: "20px" }}
                        dropdownMode="select"
                    /> */}
                </>
            )
    }

}