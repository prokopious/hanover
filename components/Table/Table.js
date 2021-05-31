import styles from "./Table.module.css"
import Row from '../prebuilt/Row'
import useCart from "../../hooks/use-cart"



const Table = ({ className, data, columns, columnss }) => {
  let tableClassName = styles.table

  if (className) {
    tableClassName = `${tableClassName} ${className}`
  }

  const rows = [...new Array(data.length)].map((item, index) => {
    return columns.map(({ columnId }) => data[index][columnId])
  })

  return (
    <Row className="pl-4"><div><table className={tableClassName}>
      <thead>
        <tr className="row">
          {columns.map(({ columnId, Header }) => {
            return <td key={columnId}>{Header}</td>
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr className="row" key={index}>
              {row.map((cell, index) => {
                return <td key={index}>{cell}</td>
              })}
            </tr>
          )
        })}
      </tbody>
      <tfoot>
      <tr className="row">
          {columnss.map(({ columnId, Header }) => {
            return <td key={columnId}>{Header}</td>
          })}
        </tr>
  </tfoot>
    </table></div></Row>
  )
}

export default Table
