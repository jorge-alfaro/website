export const FooterInfo = () => {
  const today = new Date();

  return (
    <footer>
      <div className="about_me">
        <div className="footer-line"></div>
        <h3 tabIndex="14">
          Get in touch with me here:
          <br />
        </h3>

        <ol>
          <li>
            <a
              href="https://www.linkedin.com/in/jorg-alfaro"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              tabIndex="15"
            >
              <i className="fab fa-linkedin redes"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/jorge-alfaro"
              target="_blank"
              rel="noreferrer"
              title="Github"
              tabIndex="16"
            >
              <i className="fab fa-github redes"></i>
            </a>
          </li>

          <li>
            <a href="mailto:jorgm.alfarc@gmail.com" title="Email" tabIndex="17">
              <i className="fas fa-envelope redes"></i>
            </a>
          </li>
        </ol>
        <div className="ja" tabIndex="18">
          @ {today.getFullYear()} Jorge Alfaro.
        </div>
      </div>
    </footer>
  );
};
