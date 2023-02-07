import { useEffect, useState } from "react";

function App() {

  
const datos = [
  {
    keyCode: 81,
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

useEffect(() => {

  document.addEventListener("keydown", (event) =>{  
    reproducir(event.key.toUpperCase());
  })

}, []);

const [letra, setLetra] = useState("")

function reproducir(selector){
  const audio = document.getElementById(selector)
  audio.play();
  setLetra(selector)
}



  return (
    <div className='contenedor' id="drum-machine">
      <h1 className='titulo'>Drum Machine</h1>
      <div className='divCajaSonido' id="display">{ letra }
      <div className='cajaSonido'>
        {datos.map((dato) => 
          <button onClick={() => reproducir(dato.text) } className='drum-pad' id={ dato.src} key={ dato.text }>{ dato.text }
          <audio 
          className='clip' 
                 id={ dato.text } 
                src={ dato.src }>
          </audio>
          </button>
        )}
      </div>
      </div>
    </div>
    
  )
}

export default App
