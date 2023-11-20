import React from 'react'
import AppButton from '../button/AppButton'

const Sercher = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
   
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='buscar'></input>
            <AppButton type={"submit"}>
                Buscar
            </AppButton>
        </form>
    </div>
  )
}

export default Sercher