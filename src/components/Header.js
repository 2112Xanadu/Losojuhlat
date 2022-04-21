import FraktioLogo from "../images/fraktio_logo.png";
import styled from "@emotion/styled";

export function Header({ title }) {
  return (
    <HeaderContainer>
      <img width="100px" src={FraktioLogo} alt="fraktio logo" />
      <Title>{title}</Title>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header({
  backgroundColor: "hotpink",
  display: "flex",
  padding: 30
});

const Title = styled.h1({
  color: "white",
  marginLeft: 15
});
