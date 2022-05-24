import React from "react";
import { useParams } from "react-router-dom";

import {
  Grid,
  Typography,
  List,
  Divider,
  CardContent,
  Collapse,
} from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import RestoreTwoToneIcon from "@mui/icons-material/RestoreTwoTone";
import AssignmentIndTwoToneIcon from "@mui/icons-material/AssignmentIndTwoTone";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";
import FamilyRestroomTwoToneIcon from "@mui/icons-material/FamilyRestroomTwoTone";

import SubCard from "@src/components/cards/SubCard";
import { gridSpacing } from "@src/store";
import DetailComponent from "./components/DetailComponent";
import HistoryReview from "./components/HistoryReview";
import ListButton from "./components/ListButton";
import ParentsDetails from "./components/ParentDetails";

import { initStudentService } from "../services";
import { formatDate } from "@src/utils";

const StudentDetail = () => {
  const { id } = useParams();
  const [student, setStudent] = React.useState(null);
  const [history, setHistory] = React.useState([]);
  const [historyView, setHistoryView] = React.useState(false);
  const [parents, setParents] = React.useState([]);
  const [parentsView, setParentsView] = React.useState(false);
  const [emergency, setEmergency] = React.useState(null);
  const [emergencyView, setEmergencyView] = React.useState(false);
  const [docs, setDocs] = React.useState(null);
  const [docsView, setDocsView] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { service } = await initStudentService(`${id}`, "GET");

      const response = await service.get();

      if (response.status === 200) {
        setStudent(response.data);

        setHistory(response.data.history);
        setParents(response.data.parents);
        setEmergency(response.data.emergency);
        setDocs(response.data.docs);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <SubCard
          title={
            <Grid
              container
              spacing={2}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Grid item zeroMinWidth>
                <Typography align="left" variant="subtitle1">
                  {student?.name}
                </Typography>
                <Typography align="left" variant="subtitle2">
                  Estudante
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="left" variant="subtitle1">
                  {student?.number}
                </Typography>
                <Typography align="left" variant="subtitle2">
                  Número de Matrícula
                </Typography>
              </Grid>
            </Grid>
          }
        >
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton onClick={() => setHistoryView(!historyView)}>
              <Grid container spacing={1}>
                <DetailComponent
                  item={student?.class?.modality}
                  subtitle={""}
                />
                <DetailComponent
                  item={student?.class?.class}
                  subtitle={"Série/Turma"}
                />
                <DetailComponent
                  item={student?.class?.shift}
                  subtitle={"Turno"}
                />
              </Grid>
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <DetailComponent
                item={formatDate(student?.birthday)}
                subtitle={"Aniversário"}
              />
              <DetailComponent
                item={student?.birthplace?.nationality}
                subtitle={"Nacionalidade"}
              />
              <DetailComponent
                item={student?.birthplace?.naturalness}
                subtitle={"Naturalidade"}
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <DetailComponent
                item={student?.go_home_alone}
                subtitle={"Pode sair sozinho?"}
              />
              <DetailComponent item={student?.gender} subtitle={"Sexo"} />
              <DetailComponent item={student?.ethnic} subtitle={"Raça/Cor"} />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <DetailComponent
                item={student?.social_program}
                subtitle={"Programa Social"}
              />
              <DetailComponent
                item={`R$ ${student?.fee}`}
                subtitle={"Mensalidade"}
              />
              <DetailComponent
                item={student?.defaulting}
                subtitle={"Adimplente"}
              />
            </ListItemButton>
            <Divider />
            <ListButton
              onClick={() => setParentsView(!parentsView)}
              Icon={<FamilyRestroomTwoToneIcon sx={{ fontSize: "1.3rem" }} />}
              title={"Pais/Responsáveis"}
            />
            <ListButton
              onClick={() => setEmergencyView(!emergencyView)}
              Icon={<HealingTwoToneIcon sx={{ fontSize: "1.3rem" }} />}
              title={"Emergência"}
            />
            <ListButton
              onClick={() => setHistoryView(!historyView)}
              Icon={<RestoreTwoToneIcon sx={{ fontSize: "1.3rem" }} />}
              title={"Histórico Escolar"}
            />
            <ListButton
              onClick={() => setDocsView(!docsView)}
              Icon={<AssignmentIndTwoToneIcon sx={{ fontSize: "1.3rem" }} />}
              title={"Documentos"}
            />
          </List>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Collapse in={historyView}>
                  <SubCard>
                    <Grid container spacing={2}>
                      {history.length ? (
                        history.map((item, index) => {
                          return (
                            <Grid item xs={12} md={4} key={index}>
                              <HistoryReview item={item} />
                            </Grid>
                          );
                        })
                      ) : (
                        <div></div>
                      )}
                    </Grid>
                  </SubCard>
                </Collapse>
              </Grid>
              <Grid item xs={12}>
                <Collapse in={parentsView}>
                  <SubCard>
                    <Grid container spacing={2}>
                      {parents.length ? (
                        parents.map((item, index) => {
                          return (
                            <Grid item xs={12} md={6} key={index}>
                              <ParentsDetails item={item} />
                            </Grid>
                          );
                        })
                      ) : (
                        <div></div>
                      )}
                    </Grid>
                  </SubCard>
                </Collapse>
              </Grid>
              <Grid item xs={12}>
                <Collapse in={emergencyView}>
                  <SubCard
                    title={`Responsável: ${emergency?.responsible}`}
                    secondary={`Contato: ${emergency?.contact}`}
                  >
                    <Grid container spacing={2}>
                      {/* <Grid item xs={12}> */}
                      <DetailComponent
                        item={emergency?.securityHealth}
                        subtitle={"Convênio"}
                      />
                      <DetailComponent
                        item={emergency?.blood}
                        subtitle={"Tipo de Sangue"}
                      />
                      <DetailComponent
                        item={emergency?.rhFactor}
                        subtitle={"Fator RH"}
                      />
                      <DetailComponent
                        item={emergency?.medicationRestrictions}
                        subtitle={"Restrições de medicamentos"}
                      />
                      <DetailComponent
                        item={emergency?.dietaryRestrictions}
                        subtitle={"Restrições alimentares"}
                      />
                      {/* </Grid> */}
                    </Grid>
                  </SubCard>
                </Collapse>
              </Grid>
              <Grid item xs={12}>
                <Collapse in={!docsView}>
                  <SubCard>
                    <Grid container spacing={2}>
                      <DetailComponent item={docs?.cpf} subtitle={"CPF"} />
                      <DetailComponent item={docs?.rg} subtitle={"RG"} />
                      <DetailComponent
                        item={docs?.birthRegistration?.registerNumber}
                        subtitle={"Registro de Nascimento"}
                      />
                      <DetailComponent
                        item={docs?.birthRegistration?.registry}
                        subtitle={"Cartório"}
                      />
                    </Grid>
                  </SubCard>
                </Collapse>
              </Grid>
            </Grid>
          </CardContent>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default StudentDetail;
