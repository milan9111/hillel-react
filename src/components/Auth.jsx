import React from "react";
import { Link } from "react-router-dom";

const Auth = ({ onNameUser, addUser, userName }) => {
  return (
    <section className="auth">
      <div className="auth__name">Введите имя:</div>
      <div className="auth__input">
        <input type="text" onChange={onNameUser} />
      </div>
      <div className="auth__button">
        {userName && userName?.length > 1 ? (
          <Link to="/list">
            <button onClick={addUser}>Далее</button>
          </Link>
        ) : (
          <button disabled>Далее</button>
        )}
      </div>
    </section>
  );
};

export default Auth;
