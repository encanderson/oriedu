import React from "react";
import { useSelector } from "react-redux";

import { Button, Grid } from "@material-ui/core";

import SubCard from "@src/components/cards/SubCard";
import ButtonSecondary from "@src/components/buttons/ButtonSecondary";
import InformationComponent from "./components/InformationComponent";
import HistoryReview from "./components/HistoryReview";

import { formatDate } from "@src/utils";

const Review = ({ handleBack }) => {
  const student = useSelector((state) => state.student.student);
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    (() => {
      setHistory(student?.history);
    })();
  }, []);

  const handleSubmit = async () => {
    console.log(student);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SubCard title={"Identificação"}>
          <Grid container spacing={2}>
            <InformationComponent primary={student?.name} secondary={"Nome"} />
            <InformationComponent
              primary={formatDate(student?.birthday)}
              secondary={"Nascimento"}
            />
            <InformationComponent
              primary={student?.gender}
              secondary={"Sexo"}
            />
            <InformationComponent
              primary={student?.ethnic}
              secondary={"Raça/Cor"}
            />
            <InformationComponent
              primary={student?.nationality}
              secondary={"Nacionalidade"}
            />
            <InformationComponent
              primary={student?.naturalness}
              secondary={"Naturalidade"}
            />
          </Grid>
        </SubCard>
        <SubCard title={"Documentos"}>
          <Grid container spacing={2}>
            <InformationComponent primary={student?.cpf} secondary={"CPF"} />
            <InformationComponent primary={student?.rg} secondary={"RG"} />
            <InformationComponent
              primary={student?.number}
              secondary={"Número do Registro de Nascimento"}
            />
            <InformationComponent
              primary={student?.registry}
              secondary={"Cartório"}
            />
            <InformationComponent
              primary={student?.page}
              secondary={"Página"}
            />
            <InformationComponent primary={student?.term} secondary={"Termo"} />
            <InformationComponent
              primary={formatDate(student?.dateRegister)}
              secondary={"Data de Registro"}
            />
          </Grid>
        </SubCard>
        <SubCard title={"Pais e/ou Reponsáveis"}>
          <Grid container spacing={2}>
            <InformationComponent
              primary={student.divorced ? "Sim" : "Não"}
              secondary={"Pais Divorciados"}
            />
            <InformationComponent
              primary={student.socialProgram ? "Sim" : "Não"}
              secondary={"Beneficiário de Programa Social?"}
            />
          </Grid>
        </SubCard>
        {student?.parents.map((item, index) => {
          return (
            <SubCard>
              <Grid container key={index} spacing={2}>
                <InformationComponent primary={item.name} secondary={"Nome"} />
                <InformationComponent
                  primary={item.job}
                  secondary={"Profissão"}
                />
                <InformationComponent
                  primary={item.workplace}
                  secondary={"Local de Trabalho"}
                />
                <InformationComponent
                  primary={item.schooling}
                  secondary={"Escolaridade"}
                />
                <InformationComponent
                  primary={item.email}
                  secondary={"Email"}
                />
                <InformationComponent
                  primary={item.phone}
                  secondary={"Telefone"}
                />
                <InformationComponent primary={item.cpf} secondary={"CPF"} />
                <InformationComponent primary={item.rg} secondary={"RG"} />
                <InformationComponent
                  primary={item.contract ? "Sim" : "Não"}
                  secondary={"Responsável pelo contrato?"}
                />
              </Grid>
            </SubCard>
          );
        })}
        <SubCard title={"Emergência"}>
          <Grid container spacing={2}>
            <InformationComponent
              primary={student?.responsible}
              secondary={"Reponsável"}
            />
            <InformationComponent
              primary={student?.contact}
              secondary={"Contato"}
            />
            <InformationComponent
              primary={student?.blood}
              secondary={"Tipo de Sangue"}
            />
            <InformationComponent
              primary={student?.rhFactor === "-" ? "Negativo" : "Positivo"}
              secondary={"Fator RH"}
            />
            <InformationComponent
              primary={student?.security}
              secondary={"Convênio de Saúde"}
            />
          </Grid>
        </SubCard>
        <SubCard title={"Ano Letivo"}>
          <Grid container spacing={2} marginBottom={2}>
            <InformationComponent
              primary={student?.class}
              secondary={"Série/Turma"}
            />
            <InformationComponent
              primary={student?.modality}
              secondary={"Modalidade"}
            />
            <InformationComponent
              primary={student?.shift}
              secondary={"Turno"}
            />
            <InformationComponent
              primary={student?.fee}
              secondary={"Mensalidade"}
            />
          </Grid>
        </SubCard>
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
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <ButtonSecondary
              onClick={() => {
                handleBack();
              }}
              title={"Voltar"}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Confirmar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Review;
