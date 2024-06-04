import React from 'react'
import { css } from '../ConfigFiles/Consts'

const SmallTable = (props) => {
  return (
    <div className="accordion-body pt-4">
      {props.data && props.data.length > 0 &&
        <div className="table-responsive">
          <table className="table table-borderless">
            <tbody className="">
              <tr>
                {props.head && props.head.map((item, index) => (
                  <th className="" key={index} scope="col" style={{ color: css.themeColor }}>{item?.headerName.toUpperCase()}</th>
                ))}
              </tr>
              {props?.data?.map((q, i) => (
                <>
                  <tr key={i}>
                    {props.head.map((w, i) => (
                      <>
                        <td key={i} style={{ fontWeight: "lighter" }} title={q[w?.field]}>
                          {props?.key}
                          {w?.field ? (((q[w?.field])?.length > 25 && props?.comp != 'Attachments') ? ((q[w?.field]).slice(0, 15) + " ...") : (q[w?.field])) : w?.onRender(q)}
                        </td>
                      </>
                    ))}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default SmallTable