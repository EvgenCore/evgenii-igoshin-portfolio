import React from "react";

import style from "../../styles/Projects.module.css";

import cool from "../../images/Cool.png";
import LaRose from "../../images/LaRose.png";
import REALTY from "../../images/realty.png";

import GITHUB from "../../images/social/github.svg";

export const Projects = () => {
  return (
    <section className={style.projects} >
      <h3 >Projects</h3>

      <section  className={style.projectOnlineShop}>
        <div id="projects" className={style.half}>
          <h4>Online Store - Cool</h4>
          <p>
            This site was created for educational purposes.
            I created this site to practice creating store sites. I used React
            and Redux Toolkit. The site has the ability to add products to the
            cart, add products to the "liked products" tab
          </p>

          <div className={style.links}>
            <a href="https://github.com/EvgenCore/OnlineStore-Cool" target="_blank" rel="noreferrer">
              <article>
                <img src={GITHUB} alt="link to Cool website" />
                <span>Code</span>
              </article>
            </a>
            <a href="https://online-store-cool.vercel.app/" target="_blank" rel="noreferrer">
              <p>Link to site</p>
            </a>
          </div>
        </div>

        <div className={style.half}>
          <img
            src={cool}
            alt="Cool website screenshot"
            className={style.onlineShopImg}
          />
        </div>
      </section>

      <section className={style.LaRose}>
        <div className={style.LaRoseImgContainer}>
          <img
            src={LaRose}
            alt="LaRose website screenshot"
            className={style.LaRoseImg}
          />
        </div>

        <div className={style.half}>
          <h4>Lounge Bar - La Rose</h4>
          <p>
            One of my first commercial projects. It was made only with HTML,
            SCSS and JavaScript. Also, adaptive design was implemented.
          </p>

          <div className={style.links}>
            <a
              href="https://github.com/EvgenCore/LaRose"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <img src={GITHUB} alt="link to LaRose website" />
                <span>Code</span>
              </article>
            </a>

            <a
              href="https://larosebar.github.io/LaRose/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Link to site</p>
            </a>
          </div>
        </div>
      </section>

      <section className={style.realty}>
        <div className={style.half}>
          <h4>Real estate - Realty</h4>
          <p>
            This site was created for educational purposes, I created it using
            CSS. I also added animation when entering the site and when elements
            appear.
          </p>

          <div className={style.links}>
            <a
              href="https://github.com/EvgenCore/RealEstate-Website-Realty"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <img src={GITHUB} alt="link to Cool website" />
                <span>Code</span>
              </article>
            </a>
            <a
              href="https://evgencore.github.io/RealEstate-Website-Realty/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Link to site</p>
            </a>
          </div>
        </div>

        <div className={style.half}>
          <img
            src={REALTY}
            alt="Cool website screenshot"
            className={style.realtyImg}
          />
        </div>
      </section>
    </section>
  );
};
