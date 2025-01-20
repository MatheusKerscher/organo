import './Collaborator.css'

export const Collaborator = ({name, role, image, backgroundColor}) => {
    return (
        <div className='collaborator'>
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