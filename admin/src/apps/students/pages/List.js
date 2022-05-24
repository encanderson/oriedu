import React from "react";
import { useHistory } from "react-router-dom";

import { TableCell, TableRow, Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddTwoTone";

import TableComponent from "@src/components/TableComponent";
import SearchHeader from "@src/components/cards/CardHeader";

import useAuth from "@src/hooks/useAuth";
import { initSchoolService } from "../../services/SchoolServices";

import { filterEmployee } from "@src/utils";

const StudentsList = () => {
  const history = useHistory();
  const { user } = useAuth();

  const [students, setStudents] = React.useState([]);
  const [initValues, setInitValues] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      const { service } = await initSchoolService(`${user.schoolId}`, "GET");

      const response = await service.getStudents();
      if (response.status === 200) {
        setInitValues(response.data);

        setStudents(response.data);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [value, setValue] = React.useState("");
  const handleSearch = (event) => {
    const newString = event.target.value;

    setValue(newString);

    if (newString) {
      filterEmployee(initValues, newString, setStudents);
    } else {
      setStudents(initValues);
    }
  };

  return (
    <>
      <SearchHeader
        search={"Nome do Estudante"}
        value={value}
        handleSearch={handleSearch}
      />
      <TableComponent
        title={"Estudantes"}
        rows={students}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        page={page}
        setPage={setPage}
        header={
          <>
            <TableCell align="left">Matrícula</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Série/Turma</TableCell>
            <TableCell align="center">Turno</TableCell>
            <TableCell align="right">Ações</TableCell>
          </>
        }
        body={
          <>
            {students.length ? (
              students
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align="left">{item.number}</TableCell>
                      <TableCell align="center">{item.name}</TableCell>
                      <TableCell align="center">{item.class.class}</TableCell>
                      <TableCell align="center">{item.class.shift}</TableCell>
                      <TableCell align="right">
                        <Tooltip title="Detalhes">
                          <Fab
                            color="primary"
                            size="small"
                            onClick={() => {
                              history.push(`/estudante/${item.id}`);
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
    </>
  );
};

export default StudentsList;
