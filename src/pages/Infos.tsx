import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Affix } from 'antd';

export default function Infos() {
  return (
    <>
      <Background>
        <Affix offsetTop={0}>
          <Navbar />
        </Affix>
        <div className='content'>
          <h1>Olá mundo, eu sou o <br></br> <span>Gabriel Queiroz</span></h1>
          <p>Bem-vindo ao meu portfólio! Aqui, você encontrará informações sobre mim e meu background profissional.</p>
          <div className="icons">
            <a href='https://github.com/GabrielZolk'><FaGithub size={30} className="icon" /></a>
            <a href='https://www.linkedin.com/in/gabriel-zolk/'><FaLinkedin size={30} className="icon" /></a>
            <a href='https://api.whatsapp.com/send/?phone=%2B5511950674214&text&type=phone_number&app_absent=0'><FaWhatsapp size={30} className="icon" /></a>
          </div>
        </div>
      </Background>
    </>
  )
}

const Background = styled.div`
background-color: #111111;
display: flex;
font-family: Nunito, sans-serif;

.content {
  margin: 200px auto;
  width: 600px;
  text-align: center;
}

h1 {
  font-weight: 200;
  font-size: 60px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

h1 span {
  color: #2196F3;
}

p {
  color: white;
  font-size: 18px;
}

.icon {
  color: #2196F3;
  margin-top: 10px;
  margin-right: 7px;
}

@media (max-width: 1200px) {
  
  .content {
  margin: 200px auto;
  width: 600px;
  text-align: center;
}

h1 {
  font-weight: 200;
  font-size: 70px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

h1 span {
  color: #2196F3;
}

p {
  color: white;
  font-size: 30px;
}

.icon {
  color: #2196F3;
  margin-top: 10px;
  margin-right: 7px;
}
}

@media (max-width: 480px) {

  .content {
  margin: 200px auto;
  width: 600px;
  text-align: center;
}

h1 {
  font-weight: 200;
  font-size: 30px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

h1 span {
  color: #2196F3;
}

p {
  color: white;
  font-size: 18px;
}

.icon {
  color: #2196F3;
  margin-top: 10px;
  margin-right: 7px;
}
}
`
