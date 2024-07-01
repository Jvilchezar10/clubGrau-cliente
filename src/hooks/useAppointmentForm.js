// src/hooks/useAppointmentForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAppointmentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    dni: "",
    email: "",
    celular: "",
    archivo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, archivo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nombre", formData.nombre);
    data.append("apellidos", formData.apellidos);
    data.append("dni", formData.dni);
    data.append("email", formData.email);
    data.append("celular", formData.celular);
    data.append("archivo", formData.archivo);

    try {
      await axios.post("/api/appointment", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/confirmation");
    } catch (error) {
      console.error("Error al agendar la cita:", error);
    }
  };

  return {
    formData,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
};

export default useAppointmentForm;
