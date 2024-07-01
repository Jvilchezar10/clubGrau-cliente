class InputProps {
    constructor(props) {
        this.info = props.info;
        this.labelText = props.labelText;
        this.formData = props.formData;
        this.handleChange = props.handleChange;
    }
}


const InputForm = (props) => {
const { info, labelText, formData, handleChange} = new InputProps(props);
    
  return (
    <>
      <label htmlFor={info}>{labelText}</label>
      <input
        type="text"
        id={info}
        name={info}
        value={formData}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default InputForm;
