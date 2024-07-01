// src/components/AppointmentForm.jsx
import InputForm from "./InputForm";
import useAppointmentForm from "../hooks/useAppointmentForm";
import "../css/AppointmentForm.css";

const AppointmentForm = () => {
  const { formData, handleChange, handleFileChange, handleSubmit } =
    useAppointmentForm();

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Agendar Cita</legend>
        <InputForm
          info="nombre"
          labelText="Nombres:"
          formData={formData.nombre}
          handleChange={handleChange}
        />
        <br />
        <InputForm
          info="apellidos"
          labelText="Apellidos:"
          formData={formData.apellidos}
          handleChange={handleChange}
        />
        <br />
        <InputForm
          info="dni"
          labelText="Número de DNI:"
          formData={formData.dni}
          handleChange={handleChange}
        />
        <br />
        <InputForm
          info="email"
          labelText="Correo electronico:"
          formData={formData.email}
          handleChange={handleChange}
        />
        <br />
        <InputForm
          info="celular"
          labelText="Número de celular:"
          formData={formData.celular}
          handleChange={handleChange}
        />
        <br />
        <label htmlFor="archivo">Archivo:</label>
        <input
          type="file"
          id="archivo"
          name="archivo"
          onChange={handleFileChange}
          required
        />
        <br />
        <button type="submit">Enviar</button>
      </fieldset>
    </form>
  );
};

export default AppointmentForm;
