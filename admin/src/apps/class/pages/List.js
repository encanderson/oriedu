import React from "react";
import { useHistory } from "react-router-dom";

import { TableCell, TableRow, Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddTwoTone";

import TableComponent from "@src/components/TableComponent";

import useAuth from "@src/hooks/useAuth";

import { initClassService } from "../services";

const ClassList = () => {
  const history = useHistory();
  const { user } = useAuth();

  const [turmas, setTurmas] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      if (user?.school_id) {
        const { service } = await initClassService(user.school_id, "GET");

        const response = await service.getClasses();

        if (response.status === 200) {
          setTurmas(response.data);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableComponent
      title={"Turmas"}
      rows={turmas}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
      page={page}
      setPage={setPage}
      header={
        <>
          <TableCell align="left">Série/Turma</TableCell>
          <TableCell align="center">Modalidade</TableCell>
          <TableCell align="center">Turno</TableCell>
          <TableCell align="right">Ações</TableCell>
        </>
      }
      body={
        <>
          {turmas.length ? (
            turmas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => {
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
                            history.push(`/turma/${item.id}`);
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
        </>
      }
    />
  );
};

export default ClassList;
