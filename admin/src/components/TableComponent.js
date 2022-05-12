import React from "react";

import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@material-ui/core";

import { gridSpacing } from "@src/store/constant";
import MainCard from "@src/components/cards/MainCard";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

const TableComponent = ({
  header,
  body,
  title,
  rows,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const classes = useStyles();

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <MainCard title={title}>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>{header}</TableRow>
              </TableHead>
              <TableBody>{body}</TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={"Linhas por página"}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default TableComponent;
