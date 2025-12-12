"use client";
import { useState } from "react";
import { formStyle, inputStyle, submitStyle } from "./style";

export default function Form() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Informações enviadas: ", contactData);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  }

  return (
    <form className={formStyle} onSubmit={handleSubmit} id="contact">
      <input
        type="text"
        name="name"
        placeholder="Nome e Sobrenome"
        className={inputStyle}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="e-mail"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        className={inputStyle}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Celular com DD"
        pattern="[0-9]{2}[0-9]{5}[0-9]{4}"
        className={inputStyle}
        onChange={handleChange}
      />
      <button type="submit" className={submitStyle}>
        Quero me Inscrever
      </button>
    </form>
  );
}
