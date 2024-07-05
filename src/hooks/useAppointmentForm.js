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
    archivo_dni: null, // Campo para el archivo adicional
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
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

    if (formData.archivo_dni) {
      data.append("archivo_dni", formData.archivo_dni); // Agrega el archivo adicional si existe
    }

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
