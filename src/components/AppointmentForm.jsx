// src/components/AppointmentForm.jsx
import InputForm from "./InputForm";
import useAppointmentForm from "../hooks/useAppointmentForm";
import "../css/AppointmentForm.css";
import { useLocation } from "react-router-dom";

const AppointmentForm = () => {
  const { formData, handleChange, handleFileChange, handleSubmit } =
    useAppointmentForm();
  const location = useLocation();
  const { isMember } = location.state || { isMember: true }; // Default to true if not provided

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
        {isMember && (
          <>
            <label htmlFor="additionalFile">Archivo Adicional:</label>
            <input
              type="file"
              id="additionalFile"
              name="additionalFile"
              onChange={handleFileChange}
            />
          </>
        )}
        <br />
        <button type="submit">Enviar</button>
      </fieldset>
    </form>
  );
};

export default AppointmentForm;
