import React, { useState } from "react";

import style from "../../styles/About.module.css";

import ABOUT from "../../images/About.gif";
import CODECADEMY from "../../images/codecademy.svg";
import CODECADEMYCERTIFICATE from "../../images/codecademyCertificate.png";

import CODEOP from "../../images/codeop.svg";
import CODEOPCERTIFICATE from "../../images/CodeOpCertificate.png";

import { CertificateModal } from "../Modal/CertificateModal";

export const About = () => {
  const [isCodeCademyModalOpen, setCodeCademyModalOpen] = useState(false);
  const openCodeCademyModal = () => setCodeCademyModalOpen(true);
  const closeCodeCademyModal = () => setCodeCademyModalOpen(false);

  const [isCodeOPModalOpen, setCodeOPModalOpen] = useState(false);
  const openCodeOPModal = () => setCodeOPModalOpen(true);
  const closeCodeOPModal = () => setCodeOPModalOpen(false);

  return (
    <section className={style.about} >
      <div className={style.aboutImage}>
        <img src={ABOUT} alt="" />
      </div>

      <div className={style.aboutDescription} id="about">
        <h3>About me</h3>
        <p>
          I am a dedicated web developer with freelance experience. I have
          completed the Front-End Engineer course from Codecademy and the
          Front-End Web Development program from CodeOp. I am proficient in
          React, JavaScript, HTML, CSS, Tailwind, and SCSS, with a solid
          understanding of design principles and some experience with Figma. As
          a quick learner and a hardworking, team-oriented professional, I am
          eager to contribute to dynamic development teams.
        </p>

        <div className={style.courses}>
          <h4>Certificates :</h4>

          <div className={style.buttons}>
            <button onClick={openCodeCademyModal} className={style.codecad} title="Click to see my certificate">
              <img src={CODECADEMY} alt="codecademy logo" />
            </button>
            <CertificateModal
              isOpen={isCodeCademyModalOpen}
              onClose={closeCodeCademyModal}
            >
              <img
                src={CODECADEMYCERTIFICATE}
                style={{ width: "100%" }}
                alt="codecademy certificate"
              />
            </CertificateModal>

            <button onClick={openCodeOPModal} title="Click to see my certificate">
              <img src={CODEOP} alt="codeop logo" />
            </button>
            <CertificateModal
              isOpen={isCodeOPModalOpen}
              onClose={closeCodeOPModal}
            >
              <img
                src={CODEOPCERTIFICATE}
                style={{ width: "100%" }}
                alt="codeop certificate"
              />
            </CertificateModal>
          </div>
        </div>
      </div>
    </section>
  );
};
