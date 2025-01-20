import { Collaborator } from "./Collaborator/Collaborator";
import "./Team.css";

export const Team = (props) => {
  return (
    props.collaborators.length > 0 &&
    <section style={{ backgroundColor: props.secondaryColor }} className="team">
      <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>

      <div className="collaborators">
        {props.collaborators.map((c) => (
          <Collaborator 
            key={c.name}
            name={c.name} 
            role={c.role} 
            image={c.image} 
            backgroundColor={props.primaryColor}
          />
        ))}
      </div>
    </section>
  );
};
