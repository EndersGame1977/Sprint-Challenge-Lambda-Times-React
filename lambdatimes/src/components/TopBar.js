import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

import styled from 'styled-components';

const TopBarDiv = styled.div`
${'' /* .top-bar */}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const Container = styled.div`
  ${'' /* .top-bar .container */}
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`

const ContainerLeft = styled.div`
  ${'' /* .top-bar .container .container-left */}
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const ContainerCenter = styled.div`
  ${'' /* .top-bar .container .container-center */}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const ContainerRight = styled.div`
  ${'' /* .top-bar .container .container-right  */}
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const ContainerLeftSpan = styled.span`
  ${'' /* top-bar .container .container-left span */}
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const ContainerCenterSpan = styled.span`
  ${'' /* top-bar .container .container-center span */}
  cursor: pointer;
  margin-right: 5%;
`

const ContainerRightSpan = styled.span`
  ${'' /* .top-bar .container .container-center span */}
  cursor: pointer;
  margin-right: 5%;
`


const TopBar = () => {
  return (
    <TopBarDiv>
      <Container>
        <ContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRight>
      </Container>
    </TopBarDiv>
  )
}

export default TopBar;