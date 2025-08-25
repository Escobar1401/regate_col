import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import mockCamisetas from "../assets/mockCamisetas.json";

function JerseyDetails(props) {
  const { id } = useParams();
  const [jersey, setJersey] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState("right");
  const [selectedSize, setSelectedSize] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const imageKeys = jersey
    ? Object.keys(jersey).filter((key) => key.startsWith("imagen"))
    : [];

  const goToNextImage = () => {
    if (isTransitioning) return;
    setTransitionDirection("right");
    setIsTransitioning(true);
    setCurrentImageIndex((prevKey) =>
      prevKey === imageKeys.length - 1 ? 0 : prevKey + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToPrevImage = () => {
    if (isTransitioning) return;
    setTransitionDirection("left");
    setIsTransitioning(true);
    setCurrentImageIndex((prevKey) =>
      prevKey === 0 ? imageKeys.length - 1 : prevKey - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  useEffect(() => {
    const foundJersey = mockCamisetas.find((item) => item.id === parseInt(id));
    setJersey(foundJersey);
    setCurrentImageIndex(0);
  }, [id]);

  if (!jersey) {
    return <div className="text-center py-20">Cargando...</div>;
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleBuy = () => {
    if (selectedSize) {
      const phoneNumber = "573245111382";
      const detailsUrl = `${window.location.origin}/regate_col/jersey/${props.id}`;
      const message =
        `Hola 😃👋,%0A%0A` +
        `*¡Estoy interesad@ en una camiseta! ${detailsUrl} *%0A%0A` +
        `* Equipo:* ${props.equipo}%0A` +
        `* Tipo:* ${props.tipo}%0A` +
        `* Kit:* ${props.kit}%0A` +
        `* Temporada:* ${props.temporada}%0A` +
        `* Talla seleccionada:* ${selectedSize}%0A` +
        `* Precio en pagina:* ${props.precio}%0A` +
        `* Descuento:* ${props.Offer > 0 ? `${props.Offer * 100}%` : "No aplica"} %0A` +
        `* Precio final:* ${props.precio - props.precio * props.Offer}%0A%0A` +
        `¡Gracias!`;

      const url = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="mx-auto w-full p-4">
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        ← Volver a la tienda
      </Link>

      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Etiquetas de stock / oferta */}
          <div className="absolute z-20 items-end flex flex-col">
            <div className="flex flex-col gap-1 top-2 left-2 absolute text-s text-white w-auto">
              {jersey.stock > 0 ? (
                jersey.stock > 3 ? (
                  <p></p>
                ) : jersey.Offer > 0 ? (
                  <p className="bg-green-500/80 rounded-full px-4">
                    -{Math.round(jersey.Offer * 100)}%
                  </p>
                ) : (
                  <p></p>
                )
              ) : (
                <p className="bg-red-500/50 rounded-full px-4">Agotado</p>
              )}
              {new Date(jersey.createdAt).getTime() >
              Date.now() - 5 * 24 * 60 * 60 * 1000 ? (
                <p className="bg-green-500/50 rounded-full px-4">Nueva</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          {/* Galería */}
          <div className="w-full md:w-1/2 p-4 md:p-8 relative">
            <div className="flex flex-col md:flex-row">
              {/* Miniaturas */}
              <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[500px] py-2 md:py-0 md:w-28">
                {imageKeys.map((key, index) => (
                  <button
                    key={key}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 cursor-pointer overflow-hidden rounded-lg 
                      hover:opacity-80 transition-opacity border-2 
                      ${
                        currentImageIndex === index
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                  >
                    <img
                      src={jersey[key]}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Imagen principal */}
              <div className="w-full relative">
                {/* Flecha izquierda */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                  <button
                    onClick={goToPrevImage}
                    className="p-2 cursor-pointer rounded-full bg-white/80 hover:bg-gray-100 transition-colors shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>

                {/* Imagen con swipe */}
                <div
                  className="relative w-full h-[500px] overflow-hidden"
                  onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                  onTouchEnd={(e) => {
                    const diff =
                      e.changedTouches[0].clientX - touchStartX;
                    if (diff > 50) goToPrevImage();
                    if (diff < -50) goToNextImage();
                  }}
                >
                  <img
                    src={jersey[imageKeys[currentImageIndex]]}
                    className={`w-full h-full object-contain rounded-lg mx-auto transition-transform duration-300 ${
                      isTransitioning
                        ? transitionDirection === "right"
                          ? "animate-slideInFromRight"
                          : "animate-slideInFromLeft"
                        : ""
                    }`}
                  />
                </div>

                {/* Flecha derecha */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
                  <button
                    onClick={goToNextImage}
                    className="p-2 cursor-pointer rounded-full bg-white/80 hover:bg-gray-100 transition-colors shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Información de la camiseta */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {jersey.equipo} - {jersey.tipo} {jersey.kit}
            </h1>
            <p className="text-lg text-gray-600">{jersey.liga}</p>
            <p className="text-lg text-gray-600 mb-4">{jersey.temporada}</p>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-blue-900">
                {new Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                }).format(
                  jersey.precio -
                    jersey.precio *
                      (jersey.Offer * (jersey.stock < 4 ? 1 : 0))
                )}
              </span>
              {jersey.stock < 4 && jersey.Offer > 0 && (
                <span className="ml-4 text-s text-red-500 line-through">
                  {new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                  }).format(jersey.precio)}
                </span>
              )}
              <span className="ml-4 text-s text-green-500">
                {jersey.stock} unidades disponibles
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Descripción</h3>
              <p className="text-gray-700">
                {jersey.descripcion ||
                  "No hay descripción disponible para este producto."}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Tallas disponibles
              </h3>
              <div className="flex gap-2">
                {jersey.talla.map((talla) => (
                  <button
                    key={talla}
                    className={`w-12 h-12 border border-gray-300 rounded-md hover:bg-gray-100 ${
                      selectedSize === talla
                        ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white"
                        : ""
                    }`}
                    onClick={() =>
                      selectedSize === talla
                        ? setSelectedSize(null)
                        : setSelectedSize(talla)
                    }
                  >
                    {talla}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {selectedSize ? (
                <button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer text-center"
                  onClick={handleBuy}
                >
                  Comprar
                </button>
              ) : (
                <button
                  className="flex-1 bg-gradient-to-r from-gray-400 to-gray-600 text-gray-600 font-semibold py-3 rounded-lg cursor-not-allowed text-center"
                  onClick={handleBuy}
                >
                  Comprar
                </button>
              )}
              <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JerseyDetails;