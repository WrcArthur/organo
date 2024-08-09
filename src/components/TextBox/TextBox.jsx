import './TextBox.css';

const TextBox = (props) => {

    const placeholderText = `Digite o seu ${props.label.toLowerCase()}`;

    const onTyping = (event) => {
        props.onChanged(event.target.value);
    };
    
    return (
        <div className='text-box'>
            <label>{props.label}</label>
            <input className='text-box-field' value={props.fieldValue} onChange={onTyping} required={props.mandatory} type='text' placeholder={props.placeholder ? props.placeholder : placeholderText}/>
        </div>
    );
};

export default TextBox;