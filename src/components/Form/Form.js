import { useState } from "react";
import Button from "../Button";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import "./Form.css";

export const Form = (props) => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const onSave = (ev) => {
    ev.preventDefault()
    
    props.onSaveCollaborator({
      name,
      role,
      image,
      team
    })

    setName('')
    setRole('')
    setImage('')
    setTeam('')
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextInput 
          required={true} 
          label="Nome" 
          placeholder="Digite o seu nome" 
          inputValue={name}
          setInputValue={value => setName(value)}  
        />

        <TextInput 
          required={true} 
          label="Cargo" 
          placeholder="Digite o seu cargo" 
          inputValue={role}
          setInputValue={value => setRole(value)}    
        />

        <TextInput 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          inputValue={image}
          setInputValue={value => setImage(value)}    
        />

        <SelectInput 
          required={true} 
          label="Time" 
          itens={props.teams} 
          inputValue={team}
          setInputValue={value => setTeam(value)}   
        />

        <Button>Criar card</Button>
      </form>
    </section>
  );
};
