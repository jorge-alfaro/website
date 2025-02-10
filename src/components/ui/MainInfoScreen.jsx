export const MainInfoScreen = () => {
  return (
    <>
      <div id="about"></div>
      <main className="main-container">
        <div className="title-center">
          <h2 className="abt" tabIndex="4" id="about" >
            ABOUT ME
          </h2>
        </div>
        <section className="about-section">
          <article className="about-item">
            <img
              className="avatar"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5f0f7.appspot.com/o/thi5s.jpg?alt=media&token=8dc98f76-246c-4c2b-9225-9e43721c2ed0"
              alt="Jorge Alfaro"
              title="Jorge Alfaro"
            />
            <p className="questions" tabIndex="5">
              Got any questions?{" "}
              <a
                href="mailto:jorgm.alfarc@gmail.com"
                title="Send me an email"
                tabIndex="6"
              >
                Contact me.
              </a>
            </p>
          </article>
          <article className="about-item">
            <p className="about_me" tabIndex="7">
              <b>Hi</b>, my name is Jorge 👋, based in México, Full stack dev with almost 5
              years in web development, 3 years of back-end experience and passion
              for responsive website design.{" "}
            </p>
            <p className="about_me" tabIndex="8">
              I&apos; am always experimenting, learning, and never bored.
              Passionate about backend development, I constantly refine my skills and push myself to build better systems.
            </p>

              <div className="about_me">
                 <div className="about--right">
                  <a className="about--cv"
                  download={"Jorge_Alfaro_CV.pdf"}
                  href={
                    "https://firebasestorage.googleapis.com/v0/b/portfolio-react-5f0f7.appspot.com/o/cv%2FJorge-Alfaro-CV.pdf?alt=media&token=4d078b08-5a26-4a06-a8ba-c3136ce1080e"
                  }
                  target="_blank"
                  rel="noreferrer"
                  tabIndex="9"
                >
                 📥 Download CV
                </a>
                </div>
                </div>

          </article>
        </section>
        <br />
      </main>
    </>
  );
};
