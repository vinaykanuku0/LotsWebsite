import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeDataState, changeModalState } from "../Store/action";
import { FiEdit } from "react-icons/fi";
import { getById, getList, save } from "./SharedFunctions";
import { urls } from "./Consts";
import { dec, returningValue } from "./SmallFunctions";
import { jwtDecode } from "jwt-decode";
import moment from "moment";
import { requestStatusList } from "./ConstList";
import { TbNotes } from "react-icons/tb"
import { GrBundle } from "react-icons/gr"
import { LuUserCog } from "react-icons/lu";
import { MdOutlineFestival } from "react-icons/md";

export const ConfigFunctions = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const checkLoginStatus = () => {
        let token = sessionStorage.getItem("token") || state?.token
        let decodedData = returningValue(token, "") != '' ? jwtDecode(token) : {};
        let user = JSON.parse(dec(sessionStorage.getItem("user") || state?.user) || "{}")
        let loginStatus = (Object.keys(decodedData)?.length > 0 && decodedData?.userId?.[0] == user?.userId) || false
        return loginStatus
    }

    //returning the URL Based on type
    // const returnUrl = (e) => {
    //     switch (e?.type) {
    //         case "Product": return urls?.Product?.getAll
    //         case "Request": return urls?.Request?.getAll
    //         case "Module": return urls?.Module?.getAll
    //         case "Bundle": return urls?.Bundle?.getAll
    //         default: return "";
    //     }
    // }

    // const returnUrl = (e) => urls?.[e?.type]?.[e?.apiType]

    //Change Modal is nothing but opening and closing the modal
    //additionally we can update or call the data list by simply calling callorUpdateDataList
    //This is the sample data
    // addProduct: false,
    // based on the key we will open or close Modal

    // keys: [{ type: "Product", update: true }],
    // clearData: [{ type: "Module" }]
    //These 2 are already explained in callorUpdateDataList function
    const changeModal = (data) => {
        if ([data?.keys, data?.clearData]?.some(e => returningValue(e, "Array")?.length > 0)) {
            callorUpdateDataList(data?.keys, data?.clearData)
        }
        dispatch(changeModalState(data))
    }

    //This is the one fetching the list of the apis and storing in the Store
    //here we are taking 2 inputs 
    // one is keys and another is clearData 
    //Sample data will show


    // keys: [{ type: "Product", update: true ,body:body}]

    //Keys is an array containing of type,update and body
    //type is basiccally define dataList type and it will used in returnUrl function
    //body is nothing but api body if we have anything
    //update will tell wether the api call is calling first time or updating
    // if we pass update:true irrespective of isLoaded it will call the api and update the list
    // if we didn't pass or if we pass update:false api will not call if it already loaded

    // clearData:  [{ type: "Module" }]
    //clearData  is an array containing of type
    //this will help you to clear the dependent data
    //ex:we have Product and Module 
    //say module is dependent on Product
    //If we Update any of the item in Product Module should update 
    //In that case we can update Both List or we can update Product and remove Module
    //If we have one or two dependencies we can directly update but if we have more dependencies 
    //instead of updating clearing the dependencies is best

    const callorUpdateDataList = async (keys, clearData) => {
        if (returningValue(keys, "Array")?.length > 0) {
            keys?.map(async (e) => {
                // let url = returnUrl({ ...e, apiType: "getAll" })
                let url = urls?.[e?.type]?.['getAll']
                if (e?.update == true || (!returningValue(state?.[e?.type]?.isLoaded, "Bool"))) {
                    let res = []
                    if (["Bundle"]?.some((v) => v == e?.type)) {
                        res = await getById(url, e?.body || {});
                        res = res?.bundle?.map((e) => ({ ...e, ...res?.module?.find((v) => v?.bundleId == e?.bundleId), module: res?.module?.filter((v) => v?.bundleId == e?.bundleId) }))
                    } else if (["Module"]?.some((v) => v == e?.type)) {
                        res = await getList(url, e?.body || {});
                        res = res?.map((e) => ({ ...e, dependentOnModules: e?.dependentOn?.split(',')?.map((v) => res?.find((a) => a?.moduleId == v)) }))
                    } else {
                        res = await getList(url, e?.body || {});
                    }
                    dispatch(changeDataState({ [e?.type]: { data: res, isLoaded: true } }));
                }
            })
        }
        if (returningValue(clearData, "Array")?.length > 0) {
            let temp = {}
            clearData?.map((e) => {
                temp[e?.type] = { data: [], isLoaded: false }
            })
            dispatch(changeDataState(temp));
        }
    }

    const updateStatus = async (d) => {
        // let url = returnUrl({ type: d?.type, apiType: "updateStatus" })
        let url = urls?.[d?.type]?.['updateStatus']
        let res = await save(url, d)
        if (res?.data?.status == true) callorUpdateDataList([{ type: d?.type, update: true }])
    }

    const requestKeys = [
        { name: "Requested on", key: "createdDate", type: "Date", selector: (r) => <>{moment(r?.createdDate)?.format('DD-MM-YYYY')}</> },
        { name: "Customer ", key: "customerName" },
        { name: "Company ", key: "companyName" },
        { name: "Email", key: "email" },
        { name: "Phone", key: "mobile" },
        {
            name: "Status", key: "status",
            selector: (r) => <select title={r?.status} className="form-select form-select1" value={r?.status} onChange={(e) => { updateStatus({ id: r?.customerRequestId, type: "Request", status: e?.target?.value }) }}>
                {requestStatusList(r?.status)?.map((e, i) => <option>{e}</option>)}
            </select>
        },
        {
            name: "Action", sortable: false,
            selector: (r) => <div>
                <TbNotes className="pointer" title="Request notes" size={18}
                    onClick={() => changeModal({ addRequestNote: true, updatingData: r })} />
            </div>
        }
    ]

    const requestNoteKeys = [
        { name: "Added By", key: "addedByName", width: "100px" },
        {
            name: "Added On", key: "createdDate", type: "Date", width: "100px",
            selector: (r) => <>{moment(returningValue(r?.createdDate, "LocalTime")).format("DD/MM/YYYY hh:mmA")}</>,
        },
        { name: "Note", key: "note", width: "150px" },
    ]

    const moduleKeys = [
        { name: "Module Name", key: "moduleName" },
        { name: "Description", key: "moduleDesc" },
        {
            name: "Action", sortable: false,
            selector: (r) => <div>
                <FiEdit className="pointer" title="Edit" size={18}
                   />
            </div>
        }

    ]

    const bundlekeys = [
        { name: "Bundle Name", key: "bundleName" },
        { name: "Product", key: "productName" },
        { name: "Price", key: "price", type: "Number" },
        {
            name: "Modules", key: "modules", sortable: false,
            selector: (r) => (<div>{r?.module?.map((v, i) => `${v?.moduleName} ${i + 1 !== r?.module?.length ? "," : ""}`)}</div>)
        },
        {
            name: "Action", sortable: false,
            selector: (r) => (<div><FiEdit className="pointer" title="Edit" size={18}
                onClick={() => changeModal({ addBundel: true, updatingData: r })}
            /></div>)
        }
    ]

    const productkeys = [
        { name: "Product Name", key: "productName" },
        { name: "Description", key: "description" },
        {
            name: "Modules", key: "modules", sortable: false,
            selector: (r) => (<div>{r?.module?.map((v, i) => `${v?.moduleName} ${i + 1 !== r?.module?.length ? ", " : ""}`)}</div>)
        },
        {
            name: "Action", sortable: false,
            selector: (r) => (<div className="d-flex gap-2"><div>
                <FiEdit className="pointer" title="Edit" size={18}
                    onClick={() => changeModal({ addProduct: true, updatingData: r })}
                />
            </div>
                <div>
                    <MdOutlineFestival className="pointer" title="Add Modules" size={18}
                        onClick={() => changeModal({ addModules: true, updatingData: r })}
                    />
                </div>
            </div>)
        }
    ]

    const organizationKeys = [
        { name: "Organization Name", key: "organizationName" },
        { name: "Organization Head", key: "userName" },
        { name: "Expired date", key: "validUpTo", selector: (r) => <>{moment(r?.validUpTo)?.format('DD-MM-YYYY')}</>, type: "Date" },
        {
            name: "Action", sortable: false,
            selector: (r) => (<div className="d-flex gap-2" >
                <FiEdit className="pointer" title="Edit" size={18}
                    onClick={() => changeModal({ addOrganization: true, updatingData: r })}
                />
                <GrBundle className="pointer" title="Assign Bundle" size={18}
                    onClick={() => changeModal({ assignBundle: true, updatingData: r })}
                />
                <LuUserCog className="pointer" title="Assign User" size={18}
                    onClick={() => changeModal({ addUser: true, updatingData: r })}
                />
            </div>)
        }
    ]

    const organizationHeadkeys = [
        { name: "Name", key: "firstName", selector: (r) => <>{`${r?.firstName} ${r?.lastName}`}</> },
        {
            name: "Action", sortable: false,
            selector: (r) => (<div><FiEdit className="pointer" title="Edit" size={18}
                onClick={() => changeModal({ addUser: true, updatingData: r })}
            /></div>)
        }
    ]

    const organizationKeysWithOutAction = [
        { name: "Organization Name", key: "organizationName" },
        { name: "Expired date", key: "validUpTo", selector: (r) => <>{moment(r?.validUpTo)?.format('DD-MM-YYYY')}</>, type: "Date" },
        { name: "Requested Name", key: "customerName" },
    ]

    return {
        checkLoginStatus, changeModal, callorUpdateDataList,
        requestKeys, requestNoteKeys, productkeys, moduleKeys, bundlekeys, organizationKeysWithOutAction, organizationKeys, organizationHeadkeys
    };
};