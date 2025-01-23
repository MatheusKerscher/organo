import { useState } from "react";

import { v4 as UUID } from "uuid";
import { ColorPicker } from "antd";
import hexToRgba from "hex-to-rgba";

import Button from "../Button";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import "./Form.css";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("#000000");

  const onSave = (ev) => {
    ev.preventDefault();

    props.onSaveCollaborator({
      name,
      role,
      image,
      team,
    });

    setName("");
    setRole("");
    setImage("");
    setTeam("");
  };

  const onSaveTeam = (ev) => {
    ev.preventDefault();

    props.onSaveTeam({
      id: UUID(),
      name: teamName,
      primaryColor: teamColor,
      secondaryColor: hexToRgba(teamColor, "0.6"),
    });

    setTeamName('')
    setTeamColor('#000000')
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextInput
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          inputValue={name}
          setInputValue={(value) => setName(value)}
        />

        <TextInput
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          inputValue={role}
          setInputValue={(value) => setRole(value)}
        />

        <TextInput
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          inputValue={image}
          setInputValue={(value) => setImage(value)}
        />

        <SelectInput
          required={true}
          label="Time"
          itens={props.teams}
          inputValue={team}
          setInputValue={(value) => setTeam(value)}
        />

        <Button>Criar card</Button>
      </form>

      <form onSubmit={onSaveTeam}>
        <h2>Preencha os dados para criar o time</h2>

        <TextInput
          required={true}
          label="Nome"
          placeholder="Digite o nome do time"
          inputValue={teamName}
          setInputValue={(value) => setTeamName(value)}
        />

        <div className="text-input">
          <label>Cor do time</label>

          <ColorPicker
            defaultValue={teamColor}
            value={teamColor}
            onChange={(color) => setTeamColor(color.toHexString())}
          />
        </div>

        <Button>Criar Time</Button>
      </form>
    </section>
  );
};
