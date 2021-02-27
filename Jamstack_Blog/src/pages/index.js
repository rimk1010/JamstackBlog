import React from "react";
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

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
        <div className="side">
          <div className="intro side-container">
            <img className="intro__img" src="./img/hero-img.jpg" />
            <div className="intro__contents">
              <img className="intro__thumbnail" src="/img/sample1.jpg" width="100px" height="100px" />
              <span className="intro__name">FIRE-TECH</span>
              <p className="intro__text">私の名前はFIRE-TECHです。サイドFIREを目指す会社員です。よろしくお願いします。</p>
              <ul className="intro__sns">
                <li className="intro__sns__item"><a href="#"><span className="twitter fa"><i className="fab fa-twitter" /></span></a></li>
                <li className="intro__sns__item"><a href="#"><span className="facebook fa"><i className="fab fa-facebook-f" /></span></a></li>
                <li className="intro__sns__item"><a href="#"><span className="instagram fa"><i className="fab fa-instagram" /></span></a></li>
                <li className="intro__sns__item"><a href="#"><span className="github fa"><i className="fab fa-github" /></span></a></li>
              </ul>
            </div>
          </div>
          <div className="menu side-container">
            <div className="side-container-title">
              <h2>MENU!</h2>
            </div>
            <ul className="menu__contents">
              <li className="menu__item"><a href="#">このブログについて</a></li>
              <li className="menu__item"><a href="#">○○について</a></li>
              <li className="menu__item"><a href="#">お問い合わせ</a></li>
              <li className="menu__item"><a href="#">おすすめ記事</a></li>
            </ul>
          </div>
          <div className="popular side-container">
            <div className="side-container-title">
              <h2>POPULAR-POSTS</h2>
            </div>
            <ul className="popular__posts">
              <li className="popular__post">
                <a href="#">
                  <div className="popular__post__img">
                    <Img fluid={data.sample1.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="popular__post__text">
                    <p className="popular__post__text__title">人気投稿1。これは人気投稿です。</p>
                    <span className="popular__post__text__view">20003Views</span>
                  </div>
                </a>
              </li>
              <li className="popular__post">
                <a href="#">
                  <div className="popular__post__img">
                  <Img fluid={data.sample2.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="popular__post__text">
                    <p className="popular__post__text__title">人気投稿2。これは人気投稿です。</p>
                    <span className="popular__post__text__view">20003Views</span>
                  </div>
                </a>
              </li>
              <li className="popular__post">
                <a href="#">
                  <div className="popular__post__img">
                  <Img fluid={data.sample3.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="popular__post__text">
                    <p className="popular__post__text__title">人気投稿3。これは人気投稿です。</p>
                    <span className="popular__post__text__view">20003Views</span>
                  </div>
                </a>
              </li>
              <li className="popular__post">
                <a href="#">
                  <div className="popular__post__img">
                  <Img fluid={data.sample4.childImageSharp.fluid} alt="" />
                  </div>
                  <div className="popular__post__text">
                    <p className="popular__post__text__title">人気投稿4。これは人気投稿です。</p>
                    <span className="popular__post__text__view">20003Views</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="sns side-container">
            <div className="side-container-title">
              <h2>FOLLOW ME!</h2>
            </div>
            <ul className="sns__contents">
              <li className="sns__item">
                <a href="#">
                  <span className="twitter fa"><i className="fab fa-twitter" /></span>
                </a>
              </li>
              <li className="sns__item">
                <a href="#">
                  <span className="facebook fa"><i className="fab fa-facebook-f" /></span>
                </a>
              </li>
              <li className="sns__item">
                <a href="#">
                  <span className="instagram fa"><i className="fab fa-instagram" /></span>
                </a>
              </li>
              <li className="sns__item">
                <a href="#">
                  <span className="github fa"><i className="fab fa-github" /></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="archive side-container">
            <div className="side-container-title">
              <h2>ARCHIVE</h2>
            </div>
            <select className="archive__month">
              <option hidden>月を選択</option>
              <option>1月</option>
              <option>2月</option>
              <option>3月</option>
              <option>4月</option>
              <option>5月</option>
            </select>
          </div>
          <div className="category side-container">
            <div className="side-container-title">
              <h2>CATEGORY</h2>
            </div>
            <ul className="category__contents">
              <li className="category__content">
                <a href="#">カテゴリー1</a>
            </li>
            <li className="category__content">
              <a href="#">カテゴリー2</a>
            </li>
            <li className="category__content">
              <a href="#">カテゴリー3</a>
            </li>
            <li className="category__content">
              <a href="#">カテゴリー4</a>
            </li>
            <li className="category__content">
              <a href="#">カテゴリー5</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  </Layout>
)
