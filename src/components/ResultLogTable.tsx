import useFetchResult from "@hooks/useFetchResult"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

export default function ResultLogTable() {
  const [result] = useFetchResult()
  const rows = Object.values(result)

  return (
    <TableContainer component={Paper} variant="outlined">
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
          {rows.map((row, i) => (
            <TableRow key={i} sx={{ "&:last-child td": { border: 0 } }}>
              {[row.date, row.cost, row.rate, row.miss].map((colData, j) => (
                <TableCell key={j} align={j === 0 ? "left" : "right"}>
                  {colData}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
