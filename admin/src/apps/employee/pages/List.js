import React from "react";
import { useHistory } from "react-router-dom";

import { TableCell, TableRow, Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddTwoTone";

import TableComponent from "@src/components/TableComponent";
import SearchHeader from "@src/components/cards/CardHeader";

import useAuth from "@src/hooks/useAuth";

import { initEmployeeService } from "../services";
import { formatDate, filterEmployee } from "@src/utils";

const EmployeeList = () => {
  const history = useHistory();
  const { user } = useAuth();

  const [employees, setEmployees] = React.useState([]);
  const [initValues, setInitValues] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      if (user?.school_id) {
        const { service } = await initEmployeeService(
          `${user.school_id}/employees`,
          "GET"
        );

        const response = await service.request(null);

        if (response.status === 200) {
          setEmployees(response.data);
          setInitValues(response.data);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [value, setValue] = React.useState("");
  const handleSearch = (event) => {
    const newString = event.target.value;

    setValue(newString);

    if (newString) {
      filterEmployee(initValues, newString, setEmployees);
    } else {
      setEmployees(initValues);
    }
  };

  return (
    <>
      <SearchHeader
        search={"Nome do Funcionário"}
        value={value}
        handleSearch={handleSearch}
      />
      <TableComponent
        title={"Funcionários"}
        rows={employees}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        page={page}
        setPage={setPage}
        header={
          <>
            <TableCell align="left">Funcionário(a)</TableCell>
            <TableCell align="center">Cargo</TableCell>
            <TableCell align="center">Aniversário</TableCell>
            <TableCell align="right">Ações</TableCell>
          </>
        }
        body={
          <>
            {employees.length ? (
              employees
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align="left">{item.name}</TableCell>
                      <TableCell align="center">{item.job}</TableCell>
                      <TableCell align="center">
                        {formatDate(item.birthday)}
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title="Detalhes">
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
          </>
        }
      />
    </>
  );
};

export default EmployeeList;
