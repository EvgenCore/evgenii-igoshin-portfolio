import React from "react";

import style from "../../styles/HomeModule.module.css";

import AVATAR from "../../images/avatar.png";
import GITHUB from "../../images/social/github.svg";
import LINKEDIN from "../../images/social/linkedin.svg";
import GMAIL from "../../images/social/gmail.svg";

import HTML5 from "../../images/technologies/html5.svg";
import CSS3 from "../../images/technologies/css3.svg";
import JS from "../../images/technologies/js.svg";
import REACT from "../../images/technologies/react.svg";
import GIT from "../../images/technologies/git.svg";
import FIGMA from "../../images/technologies/figma.svg";
import SCSS from "../../images/technologies/scss.svg";

export const HomeModule = () => {
  return (
    <section className={style.homeModule} >

      <div className={style.avatarPart}>

        <div className={style.leftPart}>

          <div className={style.description} id="home">
            
            <h1>Front-End Developer</h1>
            <h2>Hi! My name is Evgenii Igoshin. I am a junior web developer based in Barcelona</h2>

            <div className={style.social}>
              <a href="https://github.com/EvgenCore" target='_blank' rel='noreferrer' title="My GitHub"><img src={GITHUB} alt="link to my github account" /></a>
              <a href="https://www.linkedin.com/in/evgenii-igoshin-0813182bb/" target='_blank' rel='noreferrer' title="My LinkedIn"><img src={LINKEDIN} alt="link to my linedin account" /></a>
              <a href="mailto:johnshin378@gmail.com" title="Send me an email"><img src={GMAIL} alt="link to my gmail" /></a>
            </div>
          </div>

        </div>

        
        <div className={style.rightPart}>
         
          <img src={AVATAR} alt="avatar" />
        </div>

      </div>



      <div className={style.skillSet}>
        <h3>Skill Set:</h3>

        <div className={style.technologies}>
          <img src={HTML5} alt="HTML5" title="HTML5" />
          <img src={CSS3} alt="CSS3" title="CSS3"/>
          <img src={JS} alt="JS" title="JavaScript"/>
          <img src={REACT} alt="REACT" title="REACT JS"/>
          <img src={GIT} alt="GIT" title="GIT"/>
          <img src={SCSS} alt="SASS/SCSS" title="SASS/SCSS"/>
          <img src={FIGMA} alt="FIGMA" title="FIGMA"/>
        </div>
      </div>


    </section>
  );
};
