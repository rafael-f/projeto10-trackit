import Header from "../Header";
import styled from "styled-components";
import Create from "./Create";
import Footer from "../Footer";
import trashImg from "../../../assets/img/trash.jpg";
import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../../../assets/context/LoginContext.js";
import axios from "axios";
export default function Habitos() {
  const { userData } = useContext(LoginContext);
  const [reload, setReload] = useState(0)
  const [create, setCreate] = useState(false);
  const [habits, setHabits] = useState([]);
  useEffect(() => {
    const RELOAD_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const promise = axios.get(RELOAD_API,config);
    promise.then(response => (
      setHabits(response.data)
    ));
    },[reload])
    function Delete(id) {
      const DELETE_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const promise = axios.delete(DELETE_API,config);
    promise.then(response => (
      setReload(id)
    ));
    }
  return (
    <>
      <Header />
      <Main>
        <Section>
          <H2>Meus hábitos</H2>
          <Button onClick={() => setCreate(true)}>
            <p>+</p>
          </Button>
        </Section>
        {create ? <Create setCreate={setCreate} setReload={setReload} /> : <></>}
        <Article>
          {habits.length > 0 ? (
            habits.map((habit, index) => (
              <HabitDiv key={index}>
                <HabitHead>
                  <H3>{habit.name}</H3>
                  <ButtonTrash onClick={()=>Delete(habit.id)}><img src={trashImg}></img></ButtonTrash>
                </HabitHead>
                <DivWeek>
                  <Week
                    background={habit.days.includes(0) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(0) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    D
                  </Week>
                  <Week
                    background={habit.days.includes(1) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(1) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    S
                  </Week>
                  <Week
                    background={habit.days.includes(2) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(2) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    T
                  </Week>
                  <Week
                    background={habit.days.includes(3) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(3) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    Q
                  </Week>
                  <Week
                    background={habit.days.includes(4) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(4) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    Q
                  </Week>
                  <Week
                    background={habit.days.includes(5) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(5) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    S
                  </Week>
                  <Week
                    background={habit.days.includes(6) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(6) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    S
                  </Week>
                </DivWeek>
              </HabitDiv>
            ))
          ) : (
            <Empty>
              <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
              </p>
            </Empty>
          )}
        </Article>
      </Main>
      <Footer />
    </>
  );
}
const Main = styled.main`
  padding: 70px 18px 0px 18px;
  width: 100%;
  height: 100%;
  background: #e5e5e5;
`;
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 77px;
`;
const H2 = styled.h2`
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
`;
const Button = styled.button`
  font-family: "Lexend Deca";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background: #52b6ff;
  border-radius: 5px;
  font-weight: 400;
  font-size: 26.976px;
  line-height: 34px;
  color: #ffffff;
  outline: none;
  border: none;
`;
const Article = styled.article`
  width: 100%;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
`;
const Empty = styled.div`
  display: flex;
  height: 100px;
`;
const HabitDiv = styled.div`
  width: 340px;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  padding: 15px 11px 15px 15px;
  margin-bottom: 10px;
`;
const DivWeek = styled.div`
  display: flex;
`;
const Week = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  width: 30px;
  height: 30px;
  left: 36px;
  top: 218px;
  background-color: ${(props) => props.background};
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) => props.color};
`;
const HabitHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
const H3 = styled.h3`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
`;
const ButtonTrash = styled.button`
border:none;
background-color: #ffffff;
`
