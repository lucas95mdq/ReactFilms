import React, { useState } from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'
import AppButton from '../../Components/button/AppButton';
import Loading from '../../Components/loading/Loading';
import Footer from '../../Components/footer/Footer';


const LoginView = () => {

  const {login} = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const form = e.target;
      const formData = new FormData(form);
      const { email, password } = Object.fromEntries(formData);

      form.reset();

      await login();
    } catch (error) {
      setError(error.response.data.msg);
    } finally {
      setIsLoading(false);
    }}

  return (
      <>
    <form onSubmit={handleSubmit}>
      <h1>Iniciar Sesion</h1>
      <label>Email</label>
      <input type="email" name="email" />
      <label>Contraseña</label>
      <input type="password" name="password" />
      <AppButton type={"submit"} onClick={login}>Iniciar Sesion</AppButton>
      <p>{error}</p>
    </form>
    {isLoading ? <Loading></Loading>: null}

    <Footer/>
      </>

  )
}

export default LoginView;