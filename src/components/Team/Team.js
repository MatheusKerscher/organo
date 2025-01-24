import { ColorPicker } from 'antd';
import { Collaborator } from "./Collaborator/Collaborator";
import "./Team.css";

export const Team = (props) => {
  return (
    props.collaborators.length > 0 &&
    <section style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: props.secondaryColor }} className="team">
      <ColorPicker 
        className='inputColor' 
        defaultValue={props.primaryColor} 
        value={props.primaryColor} 
        onChange={(color) => props.changeTeamColor(props.teamId, color.toHexString())} 
      />

      <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>

      <div className="collaborators">
        {props.collaborators.map((c) => (
          <Collaborator 
            key={c.id}
            id={c.id}
            name={c.name} 
            role={c.role} 
            image={c.image} 
            favorite={c.favorite} 
            backgroundColor={props.primaryColor}
            onRemove={props.onRemoveCollaborator}
            onFavoriteCollaborator={props.onFavoriteCollaborator}
          />
        ))}
      </div>
    </section>
  );
};
