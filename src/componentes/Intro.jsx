import  { useState, useEffect,useRef } from 'react';

export default function Intro() {
    // eslint-disable-next-line react-hooks/exhaustive-deps


//---------------------------------------------------------ENTENDER-------------------

//------------------------------------------------ENTENDER----------------------------
    return (
        <div className="intro">
            
            <div className="crazyIntro">
                <img src="/lisanvolei.png" alt="" />
                {/*<h1>Bienvenido a la Liga Santandereana de Voleibol</h1>
                <hr />
                <p>Una entidad sin animo de lucro que promueve el voleibol en santander</p>*/}
                <div className="boton">Conoce más</div>
            </div>
            <img className="liga" src="/lisanvolei1.jpg" alt="" />
        </div>
    );
}