import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import mockCamisetas from "../assets/mockCamisetas.json";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

function JerseyDetails() {
    const { id } = useParams();
    const [jersey, setJersey] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const imageKeys = jersey ? Object.keys(jersey).filter(key => key.startsWith('imagen')) : [];

    const goToNextImage = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentImageIndex((prevIndex) => 
            prevIndex === imageKeys.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsTransitioning(false), 300);
    };

    const goToPrevImage = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? imageKeys.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsTransitioning(false), 300);
    };

    useEffect(() => {
        // Buscar la camiseta por ID
        const foundJersey = mockCamisetas.find(item => item.id === parseInt(id));
        setJersey(foundJersey);
        setCurrentImageIndex(0);
    }, [id]);

    if (!jersey) {
        return <div className="text-center py-20">Cargando...</div>;
    }

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
                    <div className="absolute z-20 items-end flex flex-col">
                        <div className="flex flex-col gap-1 top-2 left-2 absolute text-s text-white w-auto">
                            {jersey.stock > 0 ? (
                                jersey.stock > 3 ? (
                                    <p></p>
                                ) : (
                                    jersey.Offer > 0 ? (
                                        <p className="bg-green-500/80 rounded-full px-4">-{Math.round(jersey.Offer * 100)}%</p>
                                    ) : (
                                        <p></p>
                                    )
                                )
                            ) : (
                                <p className="bg-red-500/50 rounded-full px-4">Agotado</p>
                            )}
                            {new Date(jersey.createdAt).getTime() > Date.now() - 5 * 24 * 60 * 60 * 1000 ? (
                                <p className="bg-green-500/50 rounded-full px-4">Nueva</p>
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </div>

                    {/* Galería de imágenes */}
                    <div className="w-full md:w-1/2 p-4 md:p-8 relative">
                        <div className="flex flex-col md:flex-row">
                            {/* Miniaturas - En móvil: fila, en desktop: columna a la izquierda */}
                            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[500px] py-2 md:py-0 md:w-28">
                                {Object.keys(jersey).filter(key => key.startsWith('imagen')).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setJersey({...jersey, imagenPrincipal: jersey[key]})}
                                        className="flex-shrink-0 w-16 h-16 cursor-pointer md:max-w-20 md:max-h-20 overflow-hidden rounded-lg hover:opacity-80 transition-opacity border-2 border-transparent hover:border-blue-500"
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
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                                    <button 
                                        className="p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors shadow-md"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <img
                                    src={jersey.imagenPrincipal}
                                    className="w-full h-auto max-h-[500px] object-contain rounded-lg mx-auto"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
                                    <button 
                                        className="p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors shadow-md"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Información de la camiseta */}
                    <div className="md:w-1/2 p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {jersey.equipo} - {jersey.tipo}
                        </h1>
                        <p className="text-lg text-gray-600">{jersey.liga}</p>
                        <p className="text-lg text-gray-600 mb-4">{jersey.temporada}</p>
                        <div className="flex items-center mb-6">
                            <span className="text-3xl font-bold text-blue-900">
                                {new Intl.NumberFormat('es-CO', {
                                    style: 'currency',
                                    currency: 'COP'
                                }).format(jersey.precio - (jersey.precio * (jersey.Offer*(jersey.stock<4?1:0))))}
                            </span>
                            {jersey.stock < 4 && jersey.Offer > 0 && (
                                <span className="ml-4 text-s text-red-500 line-through">
                                    {new Intl.NumberFormat('es-CO', {
                                        style: 'currency',
                                        currency: 'COP'
                                    }).format(jersey.precio)}
                                </span>
                            )}
                            <span className="ml-4 text-s text-green-500">{jersey.stock} unidades disponibles</span>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                            <p className="text-gray-700">
                                {jersey.descripcion || 'No hay descripción disponible para este producto.'}
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Tallas disponibles</h3>
                            <div className="flex gap-2">
                                {jersey.talla.map((talla) => (
                                    <button
                                        key={talla}
                                        className="w-12 h-12 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {talla}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                                Añadir al carrito
                            </button>
                            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                                Comprar ahora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JerseyDetails;
