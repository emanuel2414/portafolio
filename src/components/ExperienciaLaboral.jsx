import React from 'react';
import { motion } from 'framer-motion';

const ExperienciaLaboral = () => {
  return (
    <div className='p-5'>
      <h1 className='mt-5' style={{fontFamily: 'Alkatra'}}>Experiencia Laboral</h1>
      <p style={{textAlign: 'justify', marginBottom: 0, fontFamily: 'Lora'}}>
      "Durante mi carrera como desarrollador web, he tenido la oportunidad de trabajar en proyectos emocionantes e innovadores. A continuación, presento algunos de los proyectos más destacados en los que he trabajado:
      </p>
      <div className='d-flex experiencia-laboral'>
        <motion.div className="card m-5 shadow card-experiencia-laboral"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration: 0.5, delay: 1}}
        >
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={require('../img/img-proyecto-orcas-valle.png')} className="d-block w-100" alt="imagen del app web orcas valle"/>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={require('../img/img-proyecto-orcas-valle-1.png')} className="d-block w-100" alt="imagen del app web orcas valle"/>
              </div>
              <div className="carousel-item">
                <img src={require('../img/img-proyecto-orcas-valle-2.png')} className="d-block w-100" alt="imagen del app web orcas valle"/>
              </div>
              <div className="carousel-item">
                <img src={require('../img/img-proyecto-orcas-valle-3.png')} className="d-block w-100" alt="imagen del app web orcas valle"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-body">
            <h5 className="card-title mb-3" style={{fontFamily: 'Alkatra'}}>ORCAS VALLE</h5>
            <p className="card-text text-start" style={{fontFamily: 'EB Garamond'}}>
              <b>• Desarrollo de una aplicación web para el Club de Natación ORCAS VALLE:</b> Como desarrollador principal, fui responsable de crear una plataforma en línea que permitiera al club gestionar y organizar sus competencias de natación de manera eficiente. Este proyecto involucró el uso de html, css, react js y firebase para el desarrollo de la interfaz de usuario y la base de datos. <br />
              <a href="https://orcas-valle.web.app/" target='_blank'>orcas-valle.web.app</a>
            </p>
            <p className="card-text text-start"><small className="text-muted">Creation January 2022</small></p>
          </div>
        </motion.div>
        <motion.div className="card m-5 shadow card-experiencia-laboral"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration: 0.5, delay: 2}}
        >
          <div id="carouselExampleDar" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDar" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDar" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDar" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleDar" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={require('../img/img-proyecto-mooc-ple.png')} className="d-block w-100" alt="imagen del app web mooc ple"/>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={require('../img/img-proyecto-mooc-ple-1.png')} className="d-block w-100" alt="imagen del app web mooc ple"/>
              </div>
              <div className="carousel-item">
                <img src={require('../img/img-proyecto-mooc-ple-2.png')} className="d-block w-100" alt="imagen del app web mooc ple"/>
              </div>
              <div className="carousel-item">
                <img src={require('../img/img-proyecto-mooc-ple-3.png')} className="d-block w-100" alt="imagen del app web mooc ple"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDar" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDar" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-body">
            <h5 className="card-title mb-3" style={{fontFamily: 'Alkatra'}}>Programa de Liderazgo y Emprendimiendo MOOC PLE</h5>
            <p className="card-text text-start" style={{fontFamily: 'EB Garamond'}}>
              <b>• Desarrollo de una plataforma de cursos en línea para la Universidad Antonio José Camacho:</b> En este proyecto, trabajé en equipo para crear una plataforma en línea que permitiera a los estudiantes y profesores de la universidad acceder a cursos en línea de manera sencilla y eficiente. Como desarrollador, fui responsable del desarrollo frontend y backend, y utilicé html, css, bootstrap, react js y firebase para la creación de la plataforma. <br />
              <a href="https://mooc-ple.web.app/" target='_blank'>mooc-ple.web.app</a>
            </p>
            <p className="card-text text-start"><small className="text-muted">Creation April 2023</small></p>
          </div>
        </motion.div>
      </div>
      <p style={{textAlign: 'justify', fontFamily: 'Lora'}}>Estos proyectos me permitieron adquirir experiencia en el desarrollo de aplicaciones web, trabajar en equipo y aprender nuevas tecnologías y herramientas. Si estás interesado en conocer más sobre estos proyectos o en cómo puedo ayudar en tu proyecto, no dudes en contactarme a través de mi formulario de contacto."</p>
    </div>
  );
}

export default ExperienciaLaboral;