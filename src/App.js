import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const teams= [
    {
      name: 'Programação',
      primaryColor: '#57c278',
      secondaryColor: '#d9f7e9'
    },

    {
      name: 'Front-End',
      primaryColor: '#82cffa',
      secondaryColor: '#e8f8ff'
    },

    {
      name: 'Data Science',
      primaryColor: '#a6d157',
      secondaryColor: '#f0f8e2'
    },

    {
      name: 'Devops',
      primaryColor: '#e06b69',
      secondaryColor: '#fde7e8'
    },

    {
      name: 'UX e Design',
      primaryColor: '#db6ebf',
      secondaryColor: '#fae9f5'
    },

    {
      name: 'Mobile',
      primaryColor: '#ffba05',
      secondaryColor: '#fff5d9'
    },

    {
      name: 'Inovação e Gestão',
      primaryColor: '#ff8a29',
      secondaryColor: '#ffeedf'
    },
  ]
  
  const [collaborators, setCollaborators] = useState([]);

  const onSaveCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />

      <Form
        teams={teams.map(t => t.name)}
        onSaveCollaborator={(collaborator) => onSaveCollaborator(collaborator)}
      />

      {
        teams.map(t => (
          <Team 
            key={t.name} 
            teamName={t.name} 
            primaryColor={t.primaryColor}
            secondaryColor={t.secondaryColor}
            collaborators={collaborators.filter(c => c.team === t.name)}
          />
        ))
      }

      <Footer />
    </div>
  );
}

export default App;
