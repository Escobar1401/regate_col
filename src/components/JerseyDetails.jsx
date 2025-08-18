import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import mockCamisetas from "../assets/mockCamisetas.json";

function JerseyDetails() {
    const { id } = useParams();
    const [jersey, setJersey] = useState(null);

    useEffect(() => {
        // Buscar la camiseta por ID
        const foundJersey = mockCamisetas.find(item => item.id === parseInt(id));
        setJersey(foundJersey);
    }, [id]);

    if (!jersey) {
        return <div className="text-center py-20">Cargando...</div>;
    }

    return (
        <div className="mx-auto p-4">
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

                    {/* Imagen de la camiseta */}
                    <div className="md:w-1/2 p-8">
                        <img
                            src={jersey.imagen}
                            className="w-full h-auto object-cover rounded-lg"
                        />
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
                                }).format(jersey.precio-(jersey.precio*jersey.Offer))}
                            </span>
                            {jersey.Offer > 0 && (
                                <span className="ml-4 text-s text-red-500 line-through">
                                    {new Intl.NumberFormat('es-CO', {
                                        style: 'currency',
                                        currency: 'COP'
                                    }).format(jersey.precio)}
                                </span>
                            )}
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
