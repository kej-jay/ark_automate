import React from 'react';
import { Typography, Layout } from 'antd';
import HeaderNavbar from '../components/headerNavbar/HeaderNavbar';
import backgrund_home from '../resources/background_home.jpg';
import BtnGotoModeler from '../components/BtnGotoModeler';
import './home.css'

const { Title } = Typography;

const Home = () => {
  return (
    <Layout>
      <HeaderNavbar selectedKey={1} />
      <center> Startseite </center>
      <BtnGotoModeler />
    </Layout>
  );
};

export default Home;
