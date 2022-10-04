import Boton from "../Boton"
import Imagen2 from "../Imagen2"


const Oferta = () => {
    return (
    <div className=" w-full bg-amber-800 border-4 h-[auto] border-orange-600 " >
<Imagen2/>
<h1 className="text-neutral-300 text-4xl mx-7 text-center" > Sorprenda a alguien <br/> Con esta oferta especial</h1> 
<h2 className="text-neutral-300 mt-3 mx-7 text-center" > Aproveche esta oferta unica <br/>para viajar con una persona.<br/> Disfruten de las maravillas <br/> de la Patagonia juntos.</h2>
<div className="mx-7 text-center"><Boton/></div>
</div>
    )}
export default Oferta