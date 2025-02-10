export const ModalInfo = ({ desc, repo, title, urlarge, tech }) => {
  return (
    <div className="projects-container">
      <div className="card-container-info">
        <h2 className="project-title">{title}</h2>
        <div className="card-title-screen ">
          <i></i>
        </div>
        <div className="card-img">
          <img
            src={urlarge}
            alt={title}
            className="animate__animated animate__fadeIn"
          />
        </div>
        <div className="animate__animated animate__fadeIn">
          <div className="text">
            <div className="section">
              <h3>About this project</h3>
              <hr />
              <p>{desc} </p>
            </div>
            <div className="section">
              <h3>Technical Sheet</h3>
              <p>
                Code technologies I got involved with while working on this
                project.
              </p>
              <hr />
              <ul>
                {tech.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
            <div className="section">
              <h3>Resources</h3>
              <hr />
              <ul>
                <li>
                  Read more at{" "}
                  <a className={'link_repo'} target="_blank" href={repo} rel="noreferrer">
                    GitHub repo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
