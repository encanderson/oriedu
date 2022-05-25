import React from "react";
import { useParams, useHistory } from "react-router-dom";

import {
  Grid,
  Typography,
  List,
  CardContent,
  Collapse,
} from "@material-ui/core";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";

import { gridSpacing } from "@src/store";
import SubCard from "@src/components/cards/SubCard";
import ListItem from "../components/ListItem";
import ListButton from "@src/apps/students/pages/components/ListButton";

import { initClassService } from "../services";

const ClassDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const [turma, setTurma] = React.useState(null);
  const [disciplines, setDisciplines] = React.useState([]);
  const [viewDisciplines, setViewDisciplines] = React.useState(false);
  const [teachers, setTeachers] = React.useState([]);
  const [teacherView, setTeacherView] = React.useState(false);
  const [students, setStudents] = React.useState([]);
  const [studentView, setStudentView] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { service } = await initClassService(null, "GET");

      const response = await service.getClass(`/class/${id}`);

      if (response.status === 200) {
        setTurma(response.data);
        setDisciplines(response.data.subjects);
        setTeachers(response.data.teachers);
        setStudents(response.data.students);
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
                <Typography align="left" variant="h3">
                  {turma?.modality}
                </Typography>
                <Typography align="left" variant="subtitle2">
                  Modalidade
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="h3">
                  {turma?.class}
                </Typography>
                <Typography align="center" variant="subtitle2">
                  Série/Turma
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="right" variant="h3">
                  {turma?.shift}
                </Typography>
                <Typography align="right" variant="subtitle2">
                  Turno
                </Typography>
              </Grid>
            </Grid>
          }
        >
          <List component="nav" aria-label="main mailbox folders">
            <ListButton
              onClick={() => setViewDisciplines(!viewDisciplines)}
              Icon={<MenuBookIcon sx={{ fontSize: "1.3rem" }} />}
              title={"Disciplinas"}
            />
            <ListButton
              onClick={() => setTeacherView(!teacherView)}
              Icon={<PeopleAltTwoToneIcon sx={{ fontSize: "1.3rem" }} />}
              title={"Professores"}
            />
            <ListButton
              onClick={() => setStudentView(!studentView)}
              Icon={<SchoolTwoToneIcon sx={{ fontSize: "1.3rem" }} />}
              title={"Estudantes"}
            />
          </List>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Collapse in={viewDisciplines}>
                  {disciplines.length ? (
                    disciplines.map((item, index) => {
                      return (
                        <ListItem
                          key={index}
                          Icon={
                            <LibraryBooksIcon sx={{ fontSize: "1.3rem" }} />
                          }
                          title={item}
                        />
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                </Collapse>
              </Grid>
              <Grid item xs={12}>
                <Collapse in={teacherView}>
                  {teachers.length ? (
                    teachers.map((item, index) => {
                      return (
                        <ListButton
                          key={index}
                          onClick={() =>
                            history.push(`/funcionario/${item.id}`)
                          }
                          Icon={
                            <BadgeTwoToneIcon sx={{ fontSize: "1.3rem" }} />
                          }
                          title={item.name}
                        />
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                </Collapse>
              </Grid>
              <Grid item xs={12}>
                <Collapse in={studentView}>
                  {students.length ? (
                    students.map((item, index) => {
                      return (
                        <ListButton
                          key={index}
                          onClick={() => history.push(`/estudante/${item.id}`)}
                          Icon={
                            <PersonOutlineTwoToneIcon
                              sx={{ fontSize: "1.3rem" }}
                            />
                          }
                          title={item.name}
                        />
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                </Collapse>
              </Grid>
            </Grid>
          </CardContent>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default ClassDetail;
