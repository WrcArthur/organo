import './Team.css';
import Card from '../Card/Card';

const Team = (props) => {
    return (
        (props.collaborators.length > 0) ? <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Card key={collaborator.name} name={collaborator.name} office={collaborator.office} image={collaborator.image} backgroundColor={props.primaryColor} />)}
            </div>
        </section>
        : ''
    );
}

export default Team;