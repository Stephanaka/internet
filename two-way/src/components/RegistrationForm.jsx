import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="name">Име</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Въведете име"
          />
        </div>

        <div className="field">
          <label htmlFor="email">Имейл</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@domain.com"
          />
        </div>

        <div className="field">
          <label htmlFor="password">Парола</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Въведете парола"
          />
        </div>

        <div className="actions">
          <button type="button" onClick={handleClear}>
            Изчисти
          </button>
        </div>
      </form>

      <section className="preview">
        <p>Въведено име: {name || "-"}</p>
        <p>Въведен имейл: {email || "-"}</p>
        <p>Въведена парола: {password ? "•".repeat(password.length) : "-"}</p>
      </section>
    </>
  );
};

export default RegistrationForm;