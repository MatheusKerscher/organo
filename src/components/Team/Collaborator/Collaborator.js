import { IoIosCloseCircle } from 'react-icons/io'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { CiImageOff } from 'react-icons/ci'

import './Collaborator.css'

export const Collaborator = ({id, name, role, image, favorite, backgroundColor, onRemove, onFavoriteCollaborator}) => {
    const onFavorite = () => {
        onFavoriteCollaborator(id)
    }

    const favoriteIconProps = {
        size: 25,
        onClick: onFavorite
    }

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
                {
                    image ?
                        <img src={image} alt={name} />
                        : (
                            <div className='icon'>
                                <CiImageOff size={100} />
                            </div>
                        )
                }
            </div>

            <div className='footer'>
                <h4>{name}</h4>

                <h5>{role}</h5>

                <div className='favorite'>
                    {
                        favorite
                        ? <FaHeart {...favoriteIconProps} color='#ff0000'/>
                        : <FaRegHeart {...favoriteIconProps} />
                    }
                </div>
            </div>
        </div>
    )
}