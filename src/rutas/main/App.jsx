import Header from '../../componentes/header'
import { useEffect, useState } from 'react';
import Loading from '../../componentes/Loading';
import Title from '../../componentes/Title';
import Intro from '../../componentes/Intro';
import Footer from '../../componentes/footer';
import PhotoSlider from '../../componentes/PhotoSlider';
import './App.css'
import InfiniteSlider from '../../componentes/Infinite';

export default function App() {
  
  

//-------------------------------USO DE LA PANTALLA DE CARGA---------------------------------------
const [loading, setLoading] = useState(true);



useEffect(() => {
  // Simular una llamada a API u otra acción asincrónica
  const loadData = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
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
const sliderImages = [
  "/lisanvolei1.jpg",
  "/lisanvolei2.jpg",
  "/lisanvolei3.jpg",
  "/lisanvolei4.jpg",
  "/lisanvolei1.jpg",
  "/lisanvolei2.jpg",
  "/lisanvolei3.jpg",
  "/lisanvolei4.jpg"
]
const staticImages = [
  "/equipo5.jpg",
  "/equipo2.jpg",
  "/playa5.jpg",
  "/equipo6.jpg",
  "/playa6.jpg",
  "/equipo7.jpg",
  "/playa1.jpg",
  "/lisanvolei1.jpg",
  "/playa2.jpg",
  "/playa3.jpg",
  "/lisanvolei3.jpg",
  "/playa4.jpg",
  "/equipo8.jpg",
  "/playa5.jpg",
  

]
/*useEffect(()=>{
  document.querySelector(".image-list").style.gridTemplateColumns = `repeat(${staticImages.length},1fr)`

}, [])*/
//----------------------------------ESTRUCTURA DE LA APLICACION---------------------------------


  return (
    <>
    <hr className="space"/>
      {(loading) ? <Loading />:
      <>
      <Header />
      {/*<Intro />*/}
      <Intro />
      
      <Title info="Noticias"/>
      <InfiniteSlider photos={sliderImages}/>
      <Title info="Equipos"/>
      <PhotoSlider photos={staticImages}/>
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
