import { useEffect, useState } from 'react'
import selectBotella from '../src/assets/Photos-001/selectBotella.png'
import './App.css'
import { arreglos } from './components/arreglos'
import { caja } from './components/cajasArray'
import { ListOption } from './components/ListOption/ListOption'
import Option from './components/Option/Option'
import { ViewArreglo } from './components/ViewArreglo/ViewArreglo'
import { vinos } from './components/vinosArray'


function App() {
   const [opt, setOpt] = useState({
     vino: 0,
     caja: 0,
   })

   const [{nameArticle,articles}, setArticle] = useState(vinos)

   const [image, setImage] = useState({img:"" })

   const updateImage = () => {
    const findElement = arreglos.article.find(({img, ...options}) => options.caja == opt.caja && options.vino == opt.vino)
    setImage(findElement)
    console.log(image)
   }

   const renderArticle = () => {
    switch (nameArticle) {
      case "vino":
        return articles.map(({ n, img }) => (
          <Option key={n} img={img} setOpt={e => setOpt( {caja: opt.caja, vino: n})}/>
        ))
      case "caja":
        return articles.map(({ n, img }) => (
          <Option key={n} img={img} setOpt={e => setOpt({caja: n, vino: opt.vino})}/>
        ))

    }
   }

   useEffect(() => {
     updateImage()
   },[opt])
   

  return (
    <div className="App">
      <ViewArreglo
        articleCaja={() => setArticle(caja)}
        articleVino={() => setArticle(vinos)}
      >
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



      <ListOption nameArticle={nameArticle}>
        {renderArticle()}
      </ListOption>
    </div>
  )
}

export default App
