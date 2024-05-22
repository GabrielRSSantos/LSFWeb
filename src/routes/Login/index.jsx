import React, { useState } from 'react';
import './login.css';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { CiLock } from 'react-icons/ci';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword => !showPassword);
  };

  return (
    <div className='container'>

      <img src="src\assets\LogoLSF.png" alt="Logo LSF" className="logo" />

      <form>
        <div className='form'>
          <MdOutlinePersonOutline size={25} />

          <div className='form-input'>
            <label htmlFor="account">Sua conta</label>
            <input type="text" id="account" placeholder="Email | Número de celular" />
          </div>

          <div style={{ height: 15, width: 15 }}>

          </div>

        </div>

        <div className='form'>
          <CiLock size={25} />

          <div className='form-input'>
            <label htmlFor="password">Senha</label>

            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Digite a sua senha"
              />
            </div>
          </div>
          <div>
            {
              showPassword ?
                <BsEyeFill onClick={togglePasswordVisibility} />
                : <BsEyeSlashFill onClick={togglePasswordVisibility} />
            }
          </div>
        </div>

        <div className="forgot-password">
          <a className="text-blue-500 hover:text-blue-700" href="#">Esqueceu a senha?</a>
        </div>

      </form>

      <div>
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Entrar</button>
      </div>

    </div>
  );
}