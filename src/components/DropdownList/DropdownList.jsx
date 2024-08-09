import '../TextBox/TextBox.css';

const DropdownList = (props) => {
    return (
        <div className='text-box'>
            <label>{props.label}</label>
            <select
                className='text-box-field'
                onChange={event => props.onChanged(event.target.value)}
                value={props.value}
                required={props.mandatory}>
                <option disabled selected>Selecione...</option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default DropdownList;