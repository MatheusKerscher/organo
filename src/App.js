import { useState } from "react";

import hexToRgba from "hex-to-rgba";
import { v4 as UUID } from "uuid";

import './App.css'

import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [teams, setTeams] = useState([
    {
      id: UUID(),
      name: 'Programação',
      primaryColor: '#57c278',
      secondaryColor: '#d9f7e9'
    },

    {
      id: UUID(),
      name: 'Front-End',
      primaryColor: '#82cffa',
      secondaryColor: '#e8f8ff'
    },

    {
      id: UUID(),
      name: 'Data Science',
      primaryColor: '#a6d157',
      secondaryColor: '#f0f8e2'
    },

    {
      id: UUID(),
      name: 'Devops',
      primaryColor: '#e06b69',
      secondaryColor: '#fde7e8'
    },

    {
      id: UUID(),
      name: 'UX e Design',
      primaryColor: '#db6ebf',
      secondaryColor: '#fae9f5'
    },

    {
      id: UUID(),
      name: 'Mobile',
      primaryColor: '#ffba05',
      secondaryColor: '#fff5d9'
    },

    {
      id: UUID(),
      name: 'Inovação e Gestão',
      primaryColor: '#ff8a29',
      secondaryColor: '#ffeedf'
    },
  ])
  
  const [collaborators, setCollaborators] = useState([]);

  const onSaveCollaborator = (collaborator) => {
    collaborator = {
      id: UUID(),
      ...collaborator,
      favorite: false
    }

    setCollaborators([...collaborators, collaborator]);
  };

  const onRemoveCollaborator = (collaboratorId) => {
    setCollaborators(collaborators.filter(c => c.id !== collaboratorId))
  }

  const onSaveTeam = (team) => {
      setTeams([...teams, team])
  }

  const changeTeamColor = (teamId, teamColor) => {
    setTeams(teams.map(t => {
      if(t.id === teamId) {
        t.primaryColor = teamColor
        t.secondaryColor = hexToRgba(teamColor, '0.6')
      }

      return t
    }))
  }

  const onFavoriteCollaborator = (collaboratorId) => {
    setCollaborators(collaborators.map(c => {
      if(c.id === collaboratorId) c.favorite = !c.favorite

      return c
    }
  ))
  }

  return (
    <div className="App">
      <Banner />

      <Form
        teams={teams.map(t => t.name)}
        onSaveCollaborator={(collaborator) => onSaveCollaborator(collaborator)}
        onSaveTeam={onSaveTeam}
      />

      {
        collaborators.length > 0 && <div className="organization-container">
          <h2 className="organization-title">Minha organização</h2>
        </div>
      }

      {
        teams.map(t => (
          <Team 
            key={t.name} 
            teamId={t.id} 
            teamName={t.name} 
            primaryColor={t.primaryColor}
            secondaryColor={t.secondaryColor}
            collaborators={collaborators.filter(c => c.team === t.name)}
            changeTeamColor={changeTeamColor}
            onRemoveCollaborator={onRemoveCollaborator}
            onFavoriteCollaborator={onFavoriteCollaborator}
          />
        ))
      }

      <Footer />
    </div>
  );
}

export default App;
