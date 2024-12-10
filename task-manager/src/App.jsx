import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Projects from "./components/Projects.jsx";
import FallBackCont from "./components/FallBackCont.jsx";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: []
  });


  function handleNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null
      }
    })
}

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }

    })
  }

let content;

if (projectState.selectedProjectID === null) {
  content = <Projects onAdd={handleAddProject}/>
} else if (projectState.selectedProjectID === undefined) {
  content = <FallBackCont  onStartProject={handleNewProject}/>
}



  return (
    <main>
      <Sidebar onStartProject={handleNewProject}/>
      {content}
    </main>
  )
}

export default App
