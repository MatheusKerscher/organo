import { IoIosCloseCircle } from 'react-icons/io'
import './Collaborator.css'

export const Collaborator = ({id, name, role, image, backgroundColor, onRemove}) => {
    return (
        <div className='collaborator'>
            <IoIosCloseCircle 
                size={25}  
                className='remove' 
                onClick={() => onRemove(id)} 
            />

            <div 
                style={{backgroundColor: backgroundColor}}
                className='header'
            >
                <img src={image} alt={name} />
            </div>

            <div className='footer'>
                <h4>{name}</h4>

                <h5>{role}</h5>
            </div>
        </div>
    )
}