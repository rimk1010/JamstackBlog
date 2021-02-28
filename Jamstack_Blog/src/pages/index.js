import React from "react";
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

export const query = graphql`
query {
  hero: file(relativePath: {eq: "hero-img.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  sample1: file(relativePath: {eq: "sample1.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 320, maxHeight: 200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  sample2: file(relativePath: {eq: "sample2.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 320, maxHeight: 200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  sample3: file(relativePath: {eq: "sample3.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 320, maxHeight: 200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  sample4: file(relativePath: {eq: "sample4.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 320, maxHeight: 200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  sample5: file(relativePath: {eq: "sample5.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 320, maxHeight: 200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  sample6: file(relativePath: {eq: "sample6.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 320, maxHeight: 200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  sample7: file(relativePath: {eq: "sample7.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 320, maxHeight: 200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  sample8: file(relativePath: {eq: "sample8.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 320, maxHeight: 200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default ({data}) => (
  <Layout>
    <main id="main">
      <div className="hero">
        <div className="hero__img">
          <Img fluid={data.hero.childImageSharp.fluid} alt="" style={{ height: "100%"}}/>
        </div>
        <div className="hero__text">
          <h2 className="hero__text__main">Hero Title</h2>
          <p className="hero__text__sub">ブログについて書いています。ここにはブログの説明など簡単な説明が入ります。何か伝えたいことがあればここに書くとよいのではないでしょうか</p>
          <div className="hero__text__button"><a href="#">詳細はこちら</a></div>
        </div>
      </div>
      <div className="main-wrapper">
        <div className="main">
          <div className="tab-container">
            <ul className="tabs">
              <li className="tabs__item is-tab-active">新着記事</li>
              <li className="tabs__item">おすすめ記事</li>
            </ul>
          </div>
          <div className="main-container">
            <ul className="main-contents">
              <li className="content">
                <a href="#">
                  <div className="content__img">
                  <Img fluid={data.sample1.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="content__text">
                    <p>2020/08/08</p>
                    <p className="content__text__title">Sample投稿1-<br />これはサンプル投稿です。</p>
                    <span className="content__text__tag">Category</span>
                  </div>
                </a>
              </li>
              <li className="content">
                <a href="#">
                  <div className="content__img">
                  <Img fluid={data.sample2.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="content__text">
                    <p>2020/08/08</p>
                    <p className="content__text__title">Sample投稿2-<br />これはサンプル投稿です。</p>
                    <span className="content__text__tag">Category</span>
                  </div>
                </a>
              </li>
              <li className="content">
                <a href="#">
                  <div className="content__img">
                  <Img fluid={data.sample3.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="content__text">
                    <p>2020/08/08</p>
                    <p className="content__text__title">Sample投稿3-<br />これはサンプル投稿です。</p>
                    <span className="content__text__tag">Category</span>
                  </div>
                </a>
              </li>
              <li className="content">
                <a href="#">
                  <div className="content__img">
                  <Img fluid={data.sample4.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="content__text">
                    <p>2020/08/08</p>
                    <p className="content__text__title">Sample投稿4-<br />これはサンプル投稿です。</p>
                    <span className="content__text__tag">Category</span>
                  </div>
                </a>
              </li>
              <li className="content">
                <a href="#">
                  <div className="content__img">
                  <Img fluid={data.sample5.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="content__text">
                    <p>2020/08/08</p>
                    <p className="content__text__title">Sample投稿5-<br />これはサンプル投稿です。</p>
                    <span className="content__text__tag">Category</span>
                  </div>
                </a>
              </li>
              <li className="content">
                <a href="#">
                  <div className="content__img">
                  <Img fluid={data.sample6.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="content__text">
                    <p>2020/08/08</p>
                    <p className="content__text__title">Sample投稿6-<br />これはサンプル投稿です。</p>
                    <span className="content__text__tag">Category</span>
                  </div>
                </a>
              </li>
              <li className="content">
                <a href="#">
                  <div className="content__img">
                  <Img fluid={data.sample7.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="content__text">
                    <p>2020/08/08</p>
                    <p className="content__text__title">Sample投稿7-<br />これはサンプル投稿です。</p>
                    <span className="content__text__tag">Category</span>
                  </div>
                </a>
              </li>
              <li className="content">
                <a href="#">
                  <div className="content__img">
                  <Img fluid={data.sample8.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="content__text">
                    <p>2020/08/08</p>
                    <p className="content__text__title">Sample投稿8-<br />これはサンプル投稿です。</p>
                    <span className="content__text__tag">Category</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Sidebar />
    </div>
  </main>
  </Layout>
)
