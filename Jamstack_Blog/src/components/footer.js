import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';


export default () => {
    const data = useStaticQuery(graphql`
    query {
            sample1: file(relativePath: {eq: "sample1.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 320) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
            sample2: file(relativePath: {eq: "sample2.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 320) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
            sample3: file(relativePath: {eq: "sample3.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 320) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
    `)

    return(
        <footer id="footer">
                <div className="footers">
                    <div className="main-footer">
                        <div className="main-footer__content">
                        <div className="main-footer__content__search">
                            <form>
                            <input className="main-footer__content__search__box" type="text" placeholder="SEARCH" />
                            <button className="main-footer__content__search__button">SEARCH</button>
                            </form>
                        </div>
                        <div className="main-footer__pages">
                            <h2 className="main-footer__title">PAGES</h2>
                            <ul className="main-footer__pages-items">
                            <li className="main-footer__pages__item"><a href="#">このブログについて</a></li>
                            <li className="main-footer__pages__item"><a href="#">カテゴリー</a></li>
                            <li className="main-footer__pages__item"><a href="#">○○について</a></li>
                            <li className="main-footer__pages__item"><a href="#">○○とは</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="main-footer__content">
                        <h2 className="main-footer__title">RECENT POSTS</h2>
                        <ul className="main-footer__recent-items">
                            <li className="main-footer__recent__item">
                            <a href="#">
                                <div className="main-footer__recent__item__img">
                                <Img fluid={data.sample1.childImageSharp.fluid} alt="" />
                                </div>
                                <div className="main-footer__recent__item__text">
                                <p className="main-footer__recent__item__text__title">最近の投稿1。これは最近の投稿です</p>
                                <span>2020/03.27</span>
                                </div>
                            </a>
                            </li>
                            <li className="main-footer__recent__item">
                            <a href="#">
                                <div className="main-footer__recent__item__img">
                                <Img fluid={data.sample2.childImageSharp.fluid} alt="" />
                                </div>
                                <div className="main-footer__recent__item__text">
                                <p className="main-footer__recent__item__text__title">最近の投稿2。これは最近の投稿です</p>
                                <span>2020/03.27</span>
                                </div>
                            </a>
                            </li>
                            <li className="main-footer__recent__item">
                            <a href="#">
                                <div className="main-footer__recent__item__img">
                                <Img fluid={data.sample3.childImageSharp.fluid} alt="" />
                                </div>
                                <div className="main-footer__recent__item__text">
                                <p className="main-footer__recent__item__text__title">最近の投稿3。これは最近の投稿です</p>
                                <span>2020/03.27</span>
                                </div>
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="main-footer__content">
                        <h2 className="main-footer__title">CATEGORY</h2>
                        <ul className="main-footer__categories">
                            <li className="main-footer__category-item"><a href="#">カテゴリー1</a></li>
                            <li className="main-footer__category-item"><a href="#">カテゴリー2</a></li>
                            <li className="main-footer__category-item"><a href="#">カテゴリー3</a></li>
                            <li className="main-footer__category-item"><a href="#">カテゴリー4</a></li>
                            <li className="main-footer__category-item"><a href="#">カテゴリー5</a></li>
                            <li className="main-footer__category-item"><a href="#">カテゴリー6</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <h3 className="footer__home"><a href="#">HOME</a></h3>
                    <ul className="footer__contents">
                    <li className="footer__contents__item"><a href="#">利用規約</a></li>
                    <li className="footer__contents__item"><a href="#">お問い合わせ</a></li>
                    </ul>
                    <p className="footer__copyright">
                    <small>
                        2021SINOBLOG All rights reserved
                    </small>
                    </p>
                </div>
        </footer>
    )
}