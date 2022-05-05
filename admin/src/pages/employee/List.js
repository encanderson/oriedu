import React from "react";

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

import { SchoolServices } from "@src/services";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

const EmployeeList = () => {
  const classes = useStyles();
  const { user } = useAuth();

  const [turmas, setTurmas] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      if (user?.school_id) {
        const response = await SchoolServices.getClasses(user.school_id);

        if (response.status === 200) {
          setTurmas(response.data);
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
                  <TableCell align="left">Série/Turma</TableCell>
                  <TableCell align="center">Modalidade</TableCell>
                  <TableCell align="center">Turno</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {turmas.length ? (
                  turmas.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell align="left">{item.class}</TableCell>
                        <TableCell align="center">{item.modality}</TableCell>
                        <TableCell align="center">{item.shift}</TableCell>
                        <TableCell align="right">
                          <Tooltip title="Detalhes - Em construção">
                            <Fab
                              color="primary"
                              size="small"
                              onClick={() => {
                                // handleRemove(item.id);
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
