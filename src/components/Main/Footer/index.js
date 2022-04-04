import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PercentageContext } from "../../../assets/context/PercentageContext";
import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
export default function Footer() {
  const {percentage} = useContext(PercentageContext)
  const navigate = useNavigate();
  function goTo(to) {
    navigate(to);
  }
  return (
      <FooterStyle>
      <H3 onClick={() => goTo("/habitos")}>Hábitos</H3>
      <Hoje onClick={() => goTo("/hoje")}>
        <CircularProgressbar
          value={percentage}
          text={"Hoje"}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Hoje>
      <H3 onClick={() => goTo("/historico")}>Histórico</H3>
    </FooterStyle>
    )
}
const FooterStyle = styled.footer`
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 36px;
`;
const H3 = styled.h3`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;
  color: #52b6ff;
`;
const Hoje = styled.div`
  position: relative;
  top: -20px;
  height: 91px;
  width: 91px;
  background-color: #52b6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }
`;
