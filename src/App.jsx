import { useEffect, useState } from 'react'
import selectBotella from '../src/assets/Photos-001/selectBotella.png'
import './App.css'
import { arreglos } from './components/arreglos'
import { ListOption } from './components/ListOption/ListOption'
import Option from './components/Option/Option'
import { ViewArreglo } from './components/ViewArreglo/ViewArreglo'
import { vinos } from './components/vinosArray'


function App() {
   const [opt, setOpt] = useState({
     vino: 0,
     caja: 0,
   })

   const [image, setImage] = useState({img:"" })

   const updateImage = () => {
    const findElement = arreglos.find(({img, ...options}) => options.caja == opt.caja && options.vino == opt.vino)
    setImage(findElement)
    console.log(image)
   }

   useEffect(() => {
     updateImage()
   },[opt])
   

  return (
    <div className="App">
      <ViewArreglo>
        {
          image ? (
            <img src={image.img} alt="" />
          ) : (
            <div className=''>
              <img className='selectBotella' src={selectBotella} alt="" />
              <h3>Selecciona una botella</h3>
            </div>
          )
        }
      </ViewArreglo>


      <ListOption nameArticle="Vinos">
        {
          vinos.map(({ vino, img }) => (
            <Option key={vino} img={img} setOpt={e => setOpt({caja: 0, vino: vino})}/>
          ))
        }
      </ListOption>
    </div>
  )
}

export default App
