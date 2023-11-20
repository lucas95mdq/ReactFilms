import React, { useState } from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'
import AppButton from '../../Components/button/AppButton';
import Loading from '../../Components/loading/Loading';


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
      <input type="email" name="email" />
      <input type="password" name="password" />
      <AppButton type={"submit"} onClick={login}>Iniciar Sesion</AppButton>
      <p>{error}</p>
    </form>
    {isLoading ? <Loading></Loading>: null}
      </>

  )
}

export default LoginView;