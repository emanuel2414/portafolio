import React from 'react';

const Contactame = () => {

  function onSubmit(e){
    e.preventDefault();

    e.target.reset();
  }

  return (
    <div className='pt-3 mb-2 bg-light'>
      <form className='w-25 mb-3 m-auto contactame' onSubmit={onSubmit}>
        <h1 className='mb-0 text-start ps-3 pb-3' style={{color: 'gray'}}>Contáctame</h1>
        <input type="text" name='Name' className='form-control mb-2' placeholder='Name' required/>
        <input type="email" name='email' className='form-control mb-2' placeholder='E-mail' required/>
        <input type="number" name='phone' className='form-control mb-2' placeholder='Phone' required/>
        <textarea cols="30" name='mensaje' rows="5" className='form-control mb-2' placeholder='Mensaje...' required></textarea>
        <input type="submit" className='btn btn-primary w-100' value='Enviar' />
      </form>
      <div className='d-flex justify-content-around p-4 contactame-redes'>
        <a href="https://wa.me/573215764653" target='_blank' style={{textDecoration: 'none'}} className='text-dark'><img className='me-2' src={require('../img/icon-whatsapp.gif')} alt="" />321-576-4653</a>
        <a href="mailto:ebarbosa2499@gmail.com" target='_blank' style={{textDecoration: 'none'}} className='text-dark'><img className='me-2' src={require('../img/icon-email.gif')} alt="" />ebarbosa2499@gmail.com</a>
      </div>
    </div>
  );
}

export default Contactame;