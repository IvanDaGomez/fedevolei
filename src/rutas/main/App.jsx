import Header from '../../componentes/header'
import { useEffect, useState } from 'react';
import Loading from '../../componentes/Loading';
import Title from '../../componentes/Title';
import Intro from './Intro';
import Footer from '../../componentes/footer';
import PhotoSlider from '../../componentes/PhotoSlider';
import NoticiasInicio from "./noticiasInicio"
import './App.css'
import InfiniteSlider from '../../componentes/Infinite';

export default function App() {
  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  

//-------------------------------USO DE LA PANTALLA DE CARGA---------------------------------------

const [loading, setLoading] = useState(true);



useEffect(() => {
  // Simular una llamada a API u otra acción asincrónica
  const loadData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setLoading(false);
  };

  loadData();
}, []);
if (loading){
  document.documentElement.style.overflowY= "hidden"
}
else document.documentElement.style.overflowY= "scroll"
//----------------------------------------------------------------------------------------------

//--------------------------------------------Slider Infinite------------------------------------
//Funciona con unas 10 fotos sin agregar width fijos
const patrocinadores = [
  ["patrocinador1.png","https://kleosatl.com/"],
  ["patrocinador4.png","https://www.instagram.com/molten.colombia/?hl=en"],
  ["patrocinador5.png","https://www.fivb.com/"],
  ["patrocinador1.png","https://kleosatl.com/"],
  ["patrocinador4.png","https://www.instagram.com/molten.colombia/?hl=en"],
  ["patrocinador5.png","https://www.fivb.com/"]
]
const sliderImages = [
  "fedevolei12.jpeg",
  "fedevolei8.jpg",
  "fedevolei13.jpeg",
  "fedevolei14.jpeg",
  "fedevolei9.jpeg",
  "fedevolei15.jpeg"
  
  
]

const staticImages =  [
  "fedevolei0.jpg",
  "fedevolei1.jpeg",
  "fedevolei7.jpeg",
  "fedevolei4.jpeg",
  "fedevolei11.jpg",
  "fedevolei5.jpeg",
  "fedevolei2.jpeg",
  "fedevolei3.jpeg",
  "fedevolei10.jpeg"
]
/*useEffect(()=>{
  document.querySelector(".image-list").style.gridTemplateColumns = `repeat(${staticImages.length},1fr)`

}, [])*/
//----------------------------------ESTRUCTURA DE LA APLICACION---------------------------------


  return (
    <>
      {(loading) ? <Loading />:
      <>
      <Header />
      {/*<Intro />*/}
      <Intro />
      <Title info="Noticias" link="/noticias"/>
      <NoticiasInicio height="300px"/>
      <Title info="Equipos"/>
      <InfiniteSlider photos={staticImages} fondo="transparent"/>
      <Title info="Momentos" />
      <PhotoSlider photos={sliderImages} />
      <Title info="Aliados"  />
      <InfiniteSlider photos={patrocinadores.map(patrocinador=>patrocinador[0])} fondo={"white"} />
      <Footer />
      
      
      {/*<Intro />
      <Title info="New Arrivals"/>
      <News />
      <Title info="Products"/>
      <Productos />
      <Title info="Sales"/>
      <Cart/>
      <Likes/>
      <InfiniteSlider photos={sliderImages}/>
      <Footer/>*/}
      </>}
    
    </>
  )
}
