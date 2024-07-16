import { useState, useEffect } from "react";
import { getProjects } from "../../helpers/getProjects.jsx";
import { Loader } from "../loader/Loader.jsx";
import { Project } from "./Project.jsx";

export const ProjectsScreen = () => {
  const [pro, setPro] = useState([]);
  useEffect(() => {
    getProjects().then(setPro);
  }, []);

  return (
    <div>
      <div className="projects-container" id="portfolio">
        <div className="title-center">
          <h2 tabIndex="9" id="projects">PROJECTS</h2>
        </div>
        <div className="card-container">
          {pro.length === 0 ? (
            <Loader />
          ) : (
            pro.map((el) => <Project key={el.id} {...el} />)
          )}
        </div>
      </div>
    </div>
  );
};
