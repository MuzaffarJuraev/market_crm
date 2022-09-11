import { useContext, useMemo } from "react";
import Table from "react-bootstrap/Table";
import { useTable } from "react-table";

// Context API
import { ThemeContext } from "../../context/darkMode";

export default function TableComponent({ fetData, column }) {
  const { theme } = useContext(ThemeContext);
  const data = useMemo(() => fetData, []);
  const columns = useMemo(() => column, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <Table
      hover
      bordered
      striped
      variant={theme ? "dark" : ""}
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
