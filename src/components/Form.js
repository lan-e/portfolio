import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form action="https://formsubmit.co/neladuranec@gmail.com" method="POST">
        <label>Ime</label>
        <input type="text" name="ime" required></input>
        <label>Email</label>
        <input type="text" name="email" required></input>
        <label>Naslov</label>
        <input type="text" name="naslov" required></input>
        <label>Poruka</label>
        <textarea
          class="text"
          rows="6"
          placeholder="Ovdje upišite svoju poruku..."
          required
        />
        <button className="btn" type="submit">
          Pošalji
        </button>
      </form>
    </div>
  );
};

export default Form;
