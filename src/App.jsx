import React, {useEffect, useState} from 'react';
import './App.css';
import Educacion from './components/Educacion';
import ExperienciaLaboral from './components/ExperienciaLaboral';
import Habilidades from './components/Habilidades';
import Intereses from './components/Intereses';
import Navegacion from './components/Navegacion';
import SobreMi from './components/SobreMi';
import WebFont from 'webfontloader';
import Contactame from './components/Contactame';
import Loading from './components/Loading';

function App() {

  const [ loading, setLoading ] = useState(true);
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Abril Fatface",
          "IBM Plex Mono",
          "Acme",
          "Yeseva One",
          "Fira Sans Extra Condensed",
          "Poppins",
          "Merriweather Sans",
          "Bebas Neue",
          "EB Garamond",
          "Alkatra",
          "Calistoga",
          "Oleo Script",
          "Libre Baskerville",
          "Lora",
        ]
      }
    });

    setLoading(false);
    
  }, [setSeconds, seconds])

  return (
    loading ?(
      <Loading/> 
    ):(
      <div className="App">
      <header className="App-header">
        <Navegacion/>
      </header>
      <main className='scrollspy-example rounded-2' tabIndex="0" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true">
        <section id="SobreMi">
          <SobreMi/>
        </section>
        <section id="Habilidades">
          <Habilidades/>
        </section>
        <section id="ExperienciaLaboral">
          <ExperienciaLaboral/>
        </section>
        <section id="Intereses">
          <Intereses />
        </section>
        <section id="Educacion">
          <Educacion />
        </section>
        <footer id="Contactame">
          <Contactame/>
        </footer>
      </main>
    </div>
    )
  );
}

export default App;
