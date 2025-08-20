// import star from "../assets/star.svg";
// import heart from "../assets/heart.svg";
import addCart from "../assets/addCart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function JerseyCard(props) {
  const Stock = props.stock;
  const createdAt = props.createdAt;
  const Offer = props.Offer;
  const phoneNumber = "573245111382";

  //Funcion para hacer la compra de la camiseta enviando un mensaje de whatsapp
  const [selectedSize, setSelectedSize] = useState(null);

  //Funcion para seleccionar y deseleccionar la talla
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  }

  const handleBuy = () => {
    if (selectedSize) {
      const message = `Hola, estoy interesad@ en la camiseta del equipo ${props.equipo} - ${props.tipo} - ${props.temporada} - en la talla ${selectedSize}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  }
  
  return (
    <>
      <div className="bg-white rounded-xl">
        <div className="absolute z-20 items-end flex flex-col">
          <div className="flex flex-col gap-1 top-2 left-2 absolute text-s text-white w-auto">
            {Stock > 0 ? (
              Stock > 3 ? (
                <p></p>
              ) : (
                Offer > 0 ? (
                  <p className="bg-green-500/80 rounded-full px-4">-{Math.round(Offer * 100)}%</p>
                ) : (
                  <p></p>
                )
              )
            ) : (
              <p className="bg-red-500/50 rounded-full px-4">Agotado</p>
            )}
            {new Date(createdAt).getTime() > Date.now() - 5 * 24 * 60 * 60 * 1000 ? (
              <p className="bg-green-500/50 rounded-full px-4">Nueva</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>

        {/* Botones de acción
        <div className="z-20 absolute flex flex-col items-end">
          <button className="w-8 h-8 cursor-pointer ">
            <img src={star} className="h-6" />
          </button>
          <button className="w-8 h-8 cursor-pointer">
            <img src={heart} className="h-6" />
          </button>
        </div> */}

        {/* Imagen de la camiseta */}
        <div className="relative h-64 overflow-hidden rounded-tl-xl rounded-tr-xl bg-gradient-to-br from-gray-50 to-gray-100">
          <Link to={`/jersey/${props.id}`} className="w-full h-full transition-all duration-700">
            <div className="relative w-full h-full transition-transform duration-600">
              <img
                src={props.imagenPrincipal}
                className="w-full h-full object-contain cursor-pointer transform transition-all duration-300 hover:scale-105"
              />
            </div>
          </Link>

          {/* Efecto de reflejo */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-2 flex justify-between items-center gap-2">
            <p className="text-sm text-indigo-600 font-semibold">{props.liga}</p>
            <p className="text-sm text-gray-800 font-semibold">{props.equipo}</p>
          </div>

          {/* Colores
          <div className="flex gap-2 mb-4">
            <div
              className="w-6 h-6 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
              style={{
                background: 'linear-gradient(to right, #1e3a8a 50%, #ef4444 50%)'
              }}
            ></div>
          </div> */}

          {/* Tallas */}
          <div className="flex flex-wrap gap-1 mb-4">
            {props.talla.map((talla) => (
              <div
                key={talla}
                className={`h-6 rounded-full border border-gray-300 text-gray-600 text-xs px-2 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform ${
                  selectedSize === talla ? 'bg-gradient-to-r from-orange-500 to-orange-700 text-white' : ''
                }`}
                onClick={() => (selectedSize === talla ? setSelectedSize(null) : setSelectedSize(talla))}
              >
                <p>{talla}</p>
              </div>
            ))}
          </div>

          {/* Precio */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-900">
                {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(props.precio)} COP
              </span>
            </div>
          </div>

          {/* Botones de agregar al carrito */}
          <div className="flex gap-2">
            {/* <Link
              to={`/jersey/${props.id}`}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer text-center"
            >
              Detalles
            </Link> */}
            {selectedSize ? (
              <button
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer text-center"
              onClick={handleBuy}
            >
              Comprar
            </button>
            ) : (
              <button
              className="w-full bg-gradient-to-r from-gray-400 to-gray-600 text-gray-600 font-semibold py-3 rounded-lg cursor-not-allowed text-center"
              onClick={handleBuy}
            >
              Comprar
            </button>
            )}
            <button
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold p-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer text-center"
            >
              <img src={addCart} className="w-8" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default JerseyCard;