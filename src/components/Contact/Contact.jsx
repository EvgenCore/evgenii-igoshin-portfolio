import React from 'react'

import style from "../../styles/Contact.module.css";

import GITHUB from "../../images/social/github.svg";
import LINKEDIN from "../../images/social/linkedin.svg";
import GMAIL from "../../images/social/gmail.svg";

import LOCATION from "../../images/location.svg";
import TELEPHONE from "../../images/telephone.svg";

export const Contact = () => {
  return (
    <section className={style.contact} id='contact'>

        <h4>Contact</h4>

        <div className={style.social}>
              <a href="https://github.com/EvgenCore" target='_blank' rel='noreferrer' title="My GitHub"><img src={GITHUB} alt="link to my github account" /></a>
              <a href="https://www.linkedin.com/in/evgenii-igoshin-0813182bb/" target='_blank' rel='noreferrer' title="My LinkedIn"><img src={LINKEDIN} alt="link to my linedin account" /></a>
              <a href="mailto:johnshin378@gmail.com" title="Send me an email"><img src={GMAIL} alt="link to my gmail" /></a>
        </div>

        <div className={style.moreInfo}>
          
            <div className={style.half}>
                <img src={LOCATION} alt="" />
                <p>Spain, Barcelona</p>
            </div>

            <div className={style.half}>
                <img src={TELEPHONE} alt="" />
                <p>+34631184342</p>
            </div>

            <div className={style.half}>
                <img src={GMAIL} alt="" />
                <p>johnshin378@gmail.com</p>
            </div>
        </div>
    </section>
  )
}
