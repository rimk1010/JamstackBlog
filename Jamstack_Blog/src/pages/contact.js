import React from "react";
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

export default () => (
  <Layout>
    <main id="main">
        <div className="main-wrapper">
            <div className="main-page">
                <h2>お問い合わせ</h2>
            </div>
            <Sidebar />
        </div>
  </main>
  </Layout>
)
