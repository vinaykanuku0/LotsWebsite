import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../App.css";
import "../Components/ServiceManagement/Dashboard/Dashboard.css"
import { useTranslation, Trans } from "react-i18next";


const ResponsiveSmallTable = ({ columns, dataTable, tdWidth }) => {
  const [filterValues, setFilterValues] = useState([]);
  const { t, i18n } = useTranslation();
  const [isBroken, setBroken] = useState(window.innerWidth > 640);

  useEffect(() => {
    const handleResize = () => {
      // console.log(window.innerWidth > 992, "window.innerWidth > 992")
      setBroken(window.innerWidth > 640);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  useEffect(() => {
    setFilterValues(dataTable);
  }, [dataTable]);


  return (
    <div className="bg bg-white  " style={{ borderRadius: "25px" }} >
      <div className="dashboardTable  " >
        {filterValues?.length > 0 ? (
          <>
            <Table className="p-3 bg-inf" id="table1" style={{ borderRadius: "25px", zindex: "-9999" }}>
              <Thead >
                <Tr>
                  {columns &&
                    columns.map((item, index) => (
                      <Th className="pointer" key={index} style={{ width: "75px" }}>
                        {t(item?.name)}
                      </Th>
                    ))}
                </Tr>
              </Thead>
              <Tbody  >
                {filterValues.map((e, i) => (
                  <Tr key={i}>
                    {columns?.map((c, j) => (
                      <Td className="p-2 text-star" style={{ width: isBroken ? tdWidth : "", wordBreak: "break-word" }} key={j}>{c?.selector?.(e) || e?.[c?.key]}</Td>
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
    </div>
  );
};

export default ResponsiveSmallTable;
