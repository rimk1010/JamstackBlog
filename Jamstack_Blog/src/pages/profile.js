import React from "react";
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

export default () => (
  <Layout>
    <main id="main">
        <div className="main-wrapper">
            <div className="main-page">
                <div className="main-about-container">
                    <h2 className="about-title">このブログについて</h2>
                    <p className="about-text">このブログはなんとかかんとか。あああああなんとかかんとか</p>
                </div>
                <div className="main-about-container">
                    <h2 className="about-title">中の人について</h2>
                    <p className="about-text">中の人の名前はなんとかかんとか。なんとかやっています。よろしくお願いします。</p>
                </div>
                <div className="main-about-container">
                    <h2 className="about-title">読んでほしい記事一覧</h2>
                    <p className="about-text">読んでほしい記事をまとめています。よろしくね。</p>
                </div>
            </div>
            <Sidebar />
        </div>
  </main>
  </Layout>
)
