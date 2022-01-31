import React from 'react';
import styled from "styled-components"
import Section from './Section';
import CarInfo from '../carInfo.json'
function Home() {
  return (
  <Container>
      {CarInfo.map(item=>{
         return <Section title={item.title}
                    description={item.description} 
                    backgroundImg={item.image}
                    leftBtnText={item.leftBtnText}
                    rightBtnText={item.rightBtnText}
                    />  
      })}
      



      {/* <Section />
      <Section />
      <Section /> */}
  </Container>)
}

export default Home;

const  Container = styled.div`
    height: 100vh;

`