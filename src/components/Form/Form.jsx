import './Form.css';
import TextBox from '../TextBox/TextBox';
import DropdownList from '../DropdownList/DropdownList';
import Button from '../Button/Button';
import { useState } from 'react';

const Form = (props) => {
    const [name, setName] = useState('');
    const [office, setOffice] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');


    const onSave = (event) => {
        event.preventDefault();
        props.registeredCollaborator({name, office, image, team});
        setName('');
        setOffice('');
        setImage('');
        setTeam('');
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
            <h2>Preencha os dados para criar os dados do colaborador</h2>
                <TextBox mandatory={true} label='Nome' fieldValue={name} onChanged={fieldValue => setName(fieldValue)} />
                <TextBox mandatory={true} label='Cargo' fieldValue={office} onChanged={fieldValue => setOffice(fieldValue)} />
                <TextBox label='Imagem' fieldValue={image} onChanged={fieldValue => setImage(fieldValue)} placeholder='https://...' />
                <DropdownList mandatory={true} label='Time' items={props.teams} fieldValue={team} onChanged={fieldValue => setTeam(fieldValue)} />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
};

export default Form;