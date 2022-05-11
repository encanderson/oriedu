import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddTwoTone";

import { gridSpacing } from "@src/store/constant";
import MainCard from "@src/components/cards/MainCard";
// import DeleteComponent from "@src/components/Delete";
// import SearchHeader from "@src/components/cards/CardHeader";

import useAuth from "@src/hooks/useAuth";

import { employeeServices } from "@src/services";
import { formatDate } from "@src/utils";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

const EmployeeList = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useAuth();

  const [employees, setEmployees] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      if (user?.school_id) {
        const response = await employeeServices(
          `/${user.school_id}/employees`,
          "GET"
        );

        if (response.status === 200) {
          setEmployees(response.data);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <MainCard title={"Turmas"}>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Funcionário(a)</TableCell>
                  <TableCell align="center">Cargo</TableCell>
                  <TableCell align="center">Aniversário</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.length ? (
                  employees.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell align="left">{item.name}</TableCell>
                        <TableCell align="center">{item.job}</TableCell>
                        <TableCell align="center">
                          {formatDate(item.birthday)}
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip title="Detalhes - Em construção">
                            <Fab
                              color="primary"
                              size="small"
                              onClick={() => {
                                history.push(`/funcionario/${item.id}`);
                              }}
                              sx={{
                                boxShadow: "none",
                                ml: 1,
                                width: "32px",
                                height: "32px",
                                minHeight: "32px",
                              }}
                            >
                              <AddIcon fontSize="small" />
                            </Fab>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow></TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default EmployeeList;
