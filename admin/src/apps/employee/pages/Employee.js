import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";

import MainCard from "@src/components/cards/MainCard";
import { gridSpacing } from "@src/store/constant";
import InformationComponent from "@src/components/InformationComponent";

import useAuth from "@src/hooks/useAuth";
import { initEmployeeService } from "../services";

const EmployeeDetail = () => {
  const history = useHistory();
  const { user } = useAuth();
  const { id } = useParams();
  const [employee, setEmployee] = React.useState(null);
  const [classes, setClasses] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const { service } = await initEmployeeService(
        `${user.school_id}/employees/${id}`,
        "GET"
      );

      const response = await service.request(null);

      if (response.status === 200) {
        setEmployee(response.data);

        if (response.data?.teacher) {
          setClasses(response.data?.teacher?.classes);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <MainCard title={employee?.name}>
      <Grid container direction="column" spacing={gridSpacing}>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <InformationComponent primary={employee?.job} secondary={"Cargo"} />
            <InformationComponent
              primary={employee?.qualifications?.course}
              secondary={"Qualificação"}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <InformationComponent
              primary={employee?.contract?.hired}
              secondary={"Desde"}
            />
            <InformationComponent
              primary={employee?.salary}
              secondary={"Salário"}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <InformationComponent
              primary={employee?.gender}
              secondary={"Gênero"}
            />
            <InformationComponent
              primary={employee?.ethnic}
              secondary={"Raça/Cor"}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <InformationComponent
              primary={employee?.docs?.cpf}
              secondary={"CPF"}
            />
            <InformationComponent
              primary={employee?.docs?.rg}
              secondary={"RG"}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <InformationComponent
              primary={employee?.contacts?.email}
              secondary={"Email"}
            />
            <InformationComponent
              primary={employee?.contacts?.phone}
              secondary={"Telefone"}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <InformationComponent
              primary={employee?.bank?.bank}
              secondary={"Banco"}
            />
            <InformationComponent
              primary={employee?.contacts?.agency}
              secondary={"Agência"}
            />
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
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {classes.length ? (
              classes.map((id, index) => {
                return (
                  <Grid item key={index} xs={12}>
                    <Button
                      variant="contained"
                      onClick={() => {
                        history.push(`/turma/${id}`);
                      }}
                      color="primary"
                    >
                      {"Turma " + parseInt(index + 1)}
                    </Button>
                  </Grid>
                );
              })
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default EmployeeDetail;
