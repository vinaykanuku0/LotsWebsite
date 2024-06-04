import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import "../App.css";

const ResponsiveTableWithoutSearch = ({ columns, dataTable, filyterKeys }) => {
  const [filterValues, setFilterValues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsperpage] = useState(10);
  const [currentPosts, setCurrentposts] = useState([]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;   

   var last = Math.ceil(filterValues?.length / postsPerPage);
  const goNext = () => {
    if (currentPage < last) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goFirst = () => {
    setCurrentPage(1);
  };

  const goLast = () => {
    setCurrentPage(last);
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


  return (
    <div className="bg bg-white h-100 border rounded" >
       
      <div style={{ height: "65vh", overflowY: "scroll", }}>
        {currentPosts?.length > 0 ? (
          <>
            <Table className="responsiveTable" >
              <Thead>
                <Tr>
                  {columns &&
                    columns.map((item, index) => (
                      <Th className="pointer  " key={index}>
                        {item?.name}
                        {/* {item?.name?.toUpperCase()} */}
                      </Th>
                    ))}
                </Tr>
              </Thead>
              <Tbody>
                {currentPosts.map((e, i) => (
                  <Tr key={i}>
                    {columns?.map((c, j) => (
                      <Td className="p-2 tableresponsive" >{c?.selector(e)}</Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        ) : (
          <div className="text-center p-2">No Data Found</div>
        )}
      </div>
      {currentPosts?.length > 0 && (
        <div className=" d-flex align-items-center justify-content-center py-2 " >
          <div className="d-flex  col-md-3  justify-content-around align-items-center mobilepagination ">
            <RxTrackPrevious size="1.3rem" className="cursor-pointer pointer" title="First page" onClick={goFirst} />
            <GrFormPrevious size="1.5rem" className="cursor-pointer pointer" title="Previous page" onClick={goPrev} />
            <div className="h-100 ">
              <select className="form-select" onChange={changePostPerPage}>
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
      )}
    </div>
  );
};

export default ResponsiveTableWithoutSearch;
