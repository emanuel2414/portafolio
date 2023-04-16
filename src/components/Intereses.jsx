import React from 'react';
import { motion } from 'framer-motion';

const Intereses = () => {
  return (
    <div className='p-3 ps-5 pe-5 bg-light'>
      <h1 className='mb-3' style={{fontFamily: 'Alkatra'}}>Intereses</h1>
      <p style={{textAlign: 'justify', fontFamily: 'Lora'}}>
      "Además de mi trabajo como desarrollador web, también tengo intereses en otras áreas relacionadas con la tecnología y el desarrollo. Algunos de mis intereses son: <br />
      </p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 text-start justify-content-center'>
        <motion.div className="card col m-1 shadow card-intereses" style={{width: '18rem'}}
        initial={{ rotateZ: 25}}
        whileInView={{ rotateZ: 0}}
        transition={{duration: 1, delay: 1}}
        >
          <img src="https://www.trustjourney.com/wp-content/uploads/2020/05/18771-removebg-preview.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text" style={{fontFamily: 'Lora'}}><b>• Aprendizaje continuo:</b> Me apasiona el aprendizaje y la exploración de nuevas tecnologías y herramientas para mejorar mi habilidad como desarrollador.</p>
          </div>
        </motion.div>
        <motion.div className="card col m-1 shadow card-intereses" style={{width: '18rem'}}
        initial={{ rotateZ: -10}}
        whileInView={{ rotateZ: 0}}
        transition={{duration: 1, delay: 1.5}}
        >
          <img src="https://desarrollodesoftware.com.co/storage-desarrollo/Software-de-desarrollo.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text"><b>• Desarrollo de software: </b> Me gusta experimentar con diferentes metodologías y técnicas para desarrollar software de calidad y eficiente.</p>
          </div>
        </motion.div>
        <motion.div className="card col m-1 shadow card-intereses" style={{width: '18rem'}}
        initial={{ rotateZ: 25}}
        whileInView={{ rotateZ: 0}}
        transition={{duration: 1, delay: 2}}
        >
          <img src="https://divem.accem.es/wp-content/uploads/2017/04/DIVEM_web_foto-10.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text"><b>• Contribución a la comunidad:</b> Me gusta contribuir a la comunidad de desarrolladores compartiendo mis conocimientos y colaborando en proyectos de código abierto.</p>
          </div>
        </motion.div>
        <motion.div className="card col m-1 shadow card-intereses" style={{width: '18rem'}}
        initial={{ rotateZ: -10}}
        whileInView={{ rotateZ: 0}}
        transition={{duration: 1, delay: 3}}
        >
          <img src="https://www.anahuac.mx/mexico/sites/default/files/noticias/Foro-virtual-El-deporte-dentro-y-fuera-de-la-cancha-2.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text"><b>• Deporte:</b> Practico regularmente deportes como natación e ir al gym, lo que me ayuda a mantener una mente y cuerpo saludable para mi trabajo.</p>
          </div>
        </motion.div>
      </div>
      <p style={{textAlign: 'justify'}} className='mt-2'>Estos intereses me permiten encontrar inspiración y motivación en mi trabajo, y me ayudan a mantenerme en constante crecimiento y aprendizaje. Si estás interesado en conocer más sobre mis intereses o en cómo puedo ayudar en tu proyecto, no dudes en contactarme a través de mi formulario de contacto."</p>
    </div>
  );
}

export default Intereses;