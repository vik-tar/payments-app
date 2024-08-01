import React from 'react';
import './shared/styles/index.scss';
import Header from "./widgets/Header/Header";
import SideBar from "./widgets/SideBar/SideBar";
import Layout from "./widgets/Layout/Layout";
import MainPage from "./widgets/MainPage/MainPage";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <SideBar />
      <Layout>
        <MainPage />
      </Layout>
    </div>
  );
};

export default App;
