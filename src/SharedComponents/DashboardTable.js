import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useTranslation, Trans } from "react-i18next";
// import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/bi";
import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/vsc";
import "../App.css";
import { css } from "../ConfigFiles/Consts";

const DashboardTable = ({ columns, dataTable, filyterKeys }) => {
  const [columns1, setColumns1] = useState([]);
  const [filterValues, setFilterValues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsperpage] = useState(100);
  const [currentPosts, setCurrentposts] = useState([]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [broken, setBroken] = useState(window.matchMedia("(max-width: 800px)").matches);
  const { t, i18n } = useTranslation();

  const filterFunction = (fil) => {
    let f = fil?.toLowerCase()?.split(" ")?.join("");
    setFilterValues(dataTable.filter((e) => filyterKeys.some((a) => (typeof (e[a]) == "string" ? e[a]?.toLowerCase() : e[a]?.toString())?.split(" ")?.join("")?.includes(f))));
    setCurrentPage(1);
  };

  const sorting = (item) => {
    if (item?.sortable != false) {
      let key = item?.key;
      let d = [...dataTable];
      item?.sorted == true ? d.sort((a, b) => item?.type == "Number" ? b?.[key] - (a?.[key]) : item?.type == "Date" ? new Date(b?.[key]) - new Date(a?.[key]) : b?.[key]?.localeCompare(a?.[key]))
        : d.sort((a, b) => item?.type == "Number" ? a?.[key] - (b?.[key]) : item?.type == "Date" ? new Date(a?.[key]) - new Date(b?.[key]) : a?.[key]?.localeCompare(b?.[key]))
      setFilterValues(d);
      setCurrentPage(1);
      let c = columns1?.map((e) => ({ ...e, sorted: item == e ? !e?.sorted : false }));
      setColumns1(c);
    }
  };

  var last = Math.ceil(filterValues?.length / postsPerPage);
  const goNext = () => {
    currentPage < last && setCurrentPage(currentPage + 1)
  };

  const goPrev = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1)
  };

  const goFirst = () => {
    setCurrentPage(1);
  };

  const goLast = () => {
    filterValues?.length > 0 && setCurrentPage(last)
  };

  const changePostPerPage = (e) => {
    setPostsperpage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const setb = () => {
    last = Math.ceil(filterValues?.length / postsPerPage);
    setCurrentposts(filterValues?.slice(indexOfFirstPost, indexOfLastPost));
  };

  useEffect(() => {
    setb();
  }, [currentPage, postsPerPage, dataTable, filterValues]);

  useEffect(() => {
    setFilterValues(dataTable);
  }, [dataTable]);

  useEffect(() => {
    setColumns1(columns?.map((e) => ({ ...e, sorted: false })))
  }, [columns])

  return (
    <div className="bg bg-white h-100 border p-2" style={{ borderRadius: css?.theamBorderRadious }}>
      <div className="position-absolut w-100 mb-1 p-1">
        <input
          type="search"
          onChange={(e) => filterFunction(e.target.value)}
          className="form-control col-md-12 my-1 search-control search-bg"
          placeholder={t("Search...")}
        />
      </div>
      <div style={{ height: "30vh", overflowY: "scroll" }}>
        {currentPosts?.length > 0 ? (
          <>
            <Table className="responsiveTable">
              <Thead>
                <Tr>
                  {columns1 &&
                    columns1.map((item, index) => (
                      <Th className="pointer  " key={index} onClick={() => sorting(item)}>
                        {t(item?.name)} {item?.sortable != false && <>{item?.sorted != false ? <VscArrowSmallDown className="arrow" /> : <VscArrowSmallUp className="arrow" />}</>}
                      </Th>
                    ))}
                </Tr>
              </Thead>
              <Tbody  >
                {currentPosts.map((e, i) => (
                  <Tr key={i}>
                    {columns1?.map((c, j) => (
                      <Td className="p-2 tableresponsive " key={j}>{c?.selector?.(e) || e?.[c?.key]}</Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        ) : (
          <div className="text-center p-2">{t("No Data Found")}</div>
        )}
      </div>
      <div className=" d-flex align-items-center justify-content-center py-2 " >
        <div> {dataTable?.length > 0 ? ((currentPage - 1) * postsPerPage) + 1 : 0} -  {dataTable?.length <= currentPage * postsPerPage ? dataTable?.length : currentPage * postsPerPage} of {dataTable?.length} </div>
        <div className="d-flex  col-md-3  justify-content-around align-items-center mobilepagination ">
          <RxTrackPrevious size="1.3rem" className="cursor-pointer pointer" title="First page" onClick={goFirst} />
          <GrFormPrevious size="1.5rem" className="cursor-pointer pointer" title="Previous page" onClick={goPrev} />
          <div className="h-100 ">
            <select className="form-select" value={postsPerPage} onChange={changePostPerPage}>
              {[10, 20, 50, 100]?.map((e, i) => (
                <option key={i} className="w-full bg-white">
                  {e}
                </option>
              ))}
            </select>
          </div>
          <span> {currentPage} </span>
          <GrFormNext size="1.5rem" className="cursor-pointer pointer" title="Next page" onClick={goNext} />
          <RxTrackNext size="1.3rem" className="cursor-pointer pointer" title="Last page" onClick={goLast} />
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;