import React from 'react';
import { motion } from 'framer-motion';

const Habilidades = () => {
  return (
    <div className='p-5 bg-light'>
      <motion.h1 
      className='mt-5 mb-4'
      style={{fontFamily: 'Alkatra'}}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 2}}
      >Habilidades</motion.h1>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='w-100'>
          <motion.img className='w-50' src={require('../img/icon-html-5.png')} alt="icono html 5"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.1, type: 'spring'}}
          />
          <motion.div className="progress w-50 mt-2 m-auto"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.1, type: 'spring'}}
          >
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Animated striped example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}>85%</div>
          </motion.div>
        </div>
        <div className='w-100'>
          <motion.img className='w-50' src={require('../img/icon-css-3.png')} alt="icono css 3"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.2, type: 'spring'}}
          />
          <motion.div className="progress w-50 mt-2 m-auto"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.2, type: 'spring'}}
          >
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Animated striped example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}>85%</div>
          </motion.div>
        </div>
        <div className='w-100'>
          <motion.img className='w-50' src={require('../img/icon-js.png')} alt="icono javaScript" style={{borderRadius: '20px'}}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.3, type: 'spring'}}
          />
          <motion.div className="progress w-50 mt-2 m-auto"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.3, type: 'spring'}}
          >
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Animated striped example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>60%</div>
          </motion.div>
        </div>
        <div className='w-100'>
          <motion.img className='w-50' src='https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg' alt="icono bootstrap"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.4, type: 'spring'}}
          /> 
          <motion.div className="progress w-50 mt-2 m-auto"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.4, type: 'spring'}}
          >
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Animated striped example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>70%</div>
          </motion.div>
        </div>
        <div className='w-100'>
          <motion.img className='w-50' src={require('../img/icon-firebase.png')} alt="icono firebase"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.5, type: 'spring'}}
          />
          <motion.div className="progress w-50 mt-2 m-auto"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.5, type: 'spring'}}
          >
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Animated striped example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>70%</div>
          </motion.div>
        </div>
        <div className='w-100'>
          <motion.img className='w-50' src={require('../img/icon-git.png')} alt="icono git" 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.6, type: 'spring'}}
          />
          <motion.div className="progress w-50 mt-2 m-auto"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.6, type: 'spring'}}
          >
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Animated striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}>50%</div>
          </motion.div>
        </div>
        <div className='w-100'>
          <motion.img className='w-50' src={require('../img/icon-visual-studio-code.png')} alt="icono visual studio code" 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.7, type: 'spring'}}
          />
          <motion.div className="progress w-50 mt-2 m-auto"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.5, delay: 0.7, type: 'spring'}}
          >
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Animated striped example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>90%</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;