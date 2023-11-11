import React from 'react'

const Sercher = () => {

    const handleSubmit = (e) => {
        e.preventdefault()
    }

    return (
   
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='buscar'></input>
            <button type='submit'></button>
        </form>
    </div>
  )
}

export default Sercher