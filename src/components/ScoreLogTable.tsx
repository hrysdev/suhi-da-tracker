import useFetchData from "@hooks/useFetchData"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableFooter from "@mui/material/TableFooter"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import React from "react"

export default function ScoreLogTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [data] = useFetchData()
  const newOrderData = [...Object.values(data)].reverse()

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - newOrderData.length) : 0

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      sx={{ width: "100%", borderBottom: 0 }}>
      <Table>
        <TableHead>
          <TableRow>
            {[
              "プレイ日時",
              "タイプスコア（円）",
              "タイプ速度（回/分）",
              "タイプミス（回）"
            ].map((colName, i) => (
              <TableCell key={i} align={i === 0 ? "left" : "right"}>
                {colName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? newOrderData.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            : newOrderData
          ).map((row, i) => (
            <TableRow
              key={i}
              sx={{
                "&:last-child td, &:last-child th": { borderRight: 0 }
              }}>
              {[row.date, row.cost.toLocaleString(), row.rate, row.miss].map(
                (colData, j) => (
                  <TableCell key={j} align={j === 0 ? "left" : "right"}>
                    {colData}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={4} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              colSpan={4}
              count={newOrderData.length}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              page={page}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
