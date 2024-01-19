import { formStyle, inputStyle, submitStyle } from "./style";

export default function Form() {
  return (
    <form className={formStyle}>
      <input type='text' placeholder='Nome' className={inputStyle} />
      <input
        type='email'
        placeholder='e-mail'
        pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
        className={inputStyle}
      />

      <input type='tel' placeholder='Celular com DD' pattern='[0-9]{2}[0-9]{5}[0-9]{4}' className={inputStyle} />
      <button type='submit' className={submitStyle}>
        Quero me Inscrever
      </button>
    </form>
  );
}
