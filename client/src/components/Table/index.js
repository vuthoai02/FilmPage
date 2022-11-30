/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function FilmsTable(props) {

  const { columns, rows } = props;

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      sx={{width: '70%'}}
    />
  );
}
