import React from 'react';
import { Typography, Layout } from 'antd';
import HeaderNavbar from '../components/headerNavbar/HeaderNavbar';
import backgrund_home from '../resources/background_home_2.jpg';

const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Layout>
        <HeaderNavbar selectedKey={1} />
        <div>
          <img /* src={backgrund_home} */ alt="Background" style={{ backgroundImage: `url(${backgrund_home})`, width: '100%' }} />
          Test
        </div>
      </Layout>

      {/*       <Title style={{ alignItems: 'center' }}>Startseite</Title>
 */}
    </div >
  );
};

export default Home;
