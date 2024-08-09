import './Card.css';

const Card = ({ name, office, image, backgroundColor}) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{ backgroundColor: backgroundColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{office}</h5>
            </div>
        </div>
    );
}

export default Card;