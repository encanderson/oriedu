import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";

import MainCard from "@src/components/cards/MainCard";
import { gridSpacing } from "@src/store/constant";

import { employeeServices } from "@src/services";
import useAuth from "@src/hooks/useAuth";

const EmployeeDetail = () => {
  const history = useHistory();
  const { user } = useAuth();
  const { id } = useParams();
  const [employee, setEmployee] = React.useState(null);
  const [classes, setClasses] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await employeeServices(
        `/${user.school_id}/employees/${id}`,
        "GET"
      );

      if (response.status === 200) {
        setEmployee(response.data);

        setClasses(response.data?.teacher?.classes);
      }
    })();
    console.log(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <MainCard title={employee?.name}>
      <Grid container direction="column" spacing={gridSpacing}>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">{employee?.job}</Typography>
              <Typography variant="subtitle2">Cargo</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                {employee?.qualifications?.course}
              </Typography>
              <Typography variant="subtitle2">Qualificação</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                {employee?.contract?.hired}
              </Typography>
              <Typography variant="subtitle2">Desde</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">{employee?.salary}</Typography>
              <Typography variant="subtitle2">Salário</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">{employee?.gender}</Typography>
              <Typography variant="subtitle2">Gênero</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">{employee?.ethnic}</Typography>
              <Typography variant="subtitle2">Raça/Cor</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">{employee?.docs?.cpf}</Typography>
              <Typography variant="subtitle2">CPF</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">{employee?.docs?.rg}</Typography>
              <Typography variant="subtitle2">RG</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                {employee?.contacts?.email}
              </Typography>
              <Typography variant="subtitle2">Email</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                {employee?.contacts?.phone}
              </Typography>
              <Typography variant="subtitle2">Telefone</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">
                {employee?.bank?.bank}
              </Typography>
              <Typography variant="subtitle2">Banco</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">
                {employee?.bank?.agency}
              </Typography>
              <Typography variant="subtitle2">Agência</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">
                {employee?.bank?.count}
              </Typography>
              <Typography variant="subtitle2">Conta</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12} sm={5}>
              <Typography variant="subtitle1">
                {employee?.address?.street}, {employee?.address?.number}
              </Typography>
              <Typography variant="subtitle2">Endereço</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="subtitle1">
                {employee?.address?.district}
              </Typography>
              <Typography variant="subtitle2">Bairro</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="subtitle1">
                {employee?.address?.zip}
              </Typography>
              <Typography variant="subtitle2">Cep</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="subtitle1">
                {employee?.address?.city} / {employee?.address?.state}
              </Typography>
              <Typography variant="subtitle2">Cidade/Estado</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          {classes.length ? (
            classes.map((id, index) => {
              return (
                <Grid container>
                  <Grid key={index} xs={12} sm={4}>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        onClick={() => {
                          history.push(`/turma/${id}`);
                        }}
                        color="primary"
                      >
                        Turma
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <div></div>
          )}
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default EmployeeDetail;
