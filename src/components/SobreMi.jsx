import React from 'react';
import { motion } from 'framer-motion';

const SobreMi = () => {
  return (
    <motion.div className='d-flex justify-content-center align-items-center mt-5 sobre-mi'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 1}}
    >
      <div className='w-50 sobre-mi-img'>
        <motion.img className='w-50' style={{borderRadius: '30px 10px 30px 10px', boxShadow: '0 0 3px black'}} src={require('../img/img-perfil.jpeg')} alt="foto emanuel barbosa" 
        initial={{ x: -200, rotateZ: 0}}
        whileInView={{ x: 0, rotateZ: 15 }}
        transition={{duration: 2}}
        />
      </div>
      <motion.div className='w-50 p-4 sobre-mi-text'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 2}}
      >
        <h1 style={{fontFamily: 'Alkatra'}}>Sobre Mí</h1>
        <p style={{textAlign: 'justify', fontFamily: 'EB Garamond'}}>
        "Soy <b>Emanuel Barbosa Labrada</b> y me apasiona el desarrollo web. Descubrí mi interés por la programación mientras estudiaba Ingeniería en Sistemas y desde entonces he estado trabajando para mejorar mis habilidades y conocimientos. Tengo experiencia trabajando con html, css, java, javaScript, react js, firebase, git, bootstrap y he trabajado en proyectos de apps web como: Competencias de natación <b>(Club Orcas Valle)</b>, Plataforma de cursos <b>(Universidad Antonio José Camacho)</b>.
        Me considero una persona proactiva, creativa y apasionada por la tecnología. Me encanta trabajar en equipo y colaborar con otros desarrolladores para crear soluciones innovadoras. En mi tiempo libre, disfruto explorando nuevas tecnologías, creando proyectos personales.
        Actualmente estoy buscando oportunidades para trabajar como desarrollador web y colaborar en proyectos interesantes que me permitan seguir creciendo y aprendiendo en mi carrera. Si estás interesado en trabajar conmigo o en saber más sobre mis habilidades y experiencia, no dudes en contactarme a través de mi formulario de contacto."
        </p>
      </motion.div>
    </motion.div>
  );
}

export default SobreMi;