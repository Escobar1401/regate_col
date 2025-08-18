import JerseyCard from "./JerseyCard";
import mockCamisetas from "../assets/mockCamisetas.json"
import { useState, useEffect } from "react";

function ShopSection() {
    const [jerseys, setJerseys] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        // Cargar solo las primeras 4 camisetas
        setJerseys(mockCamisetas.slice(0, visibleCount));
    }, [visibleCount]);

    const MoreJerseys = () => {
        // Aumentar el contador en 4 para mostrar más camisetas
        setVisibleCount(prevCount => prevCount + 4);
    }

    const LessJerseys = () => {
        // Disminuir el contador en 4 para mostrar menos camisetas
        setVisibleCount(prevCount => prevCount - 4);
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filteredJerseys = mockCamisetas.filter(jersey => 
            jersey.equipo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            jersey.tipo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            jersey.liga.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setJerseys(filteredJerseys);
    }

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-200">
            <div className="container mx-auto px-4">
                {/* Sección de tienda */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                        Nuestra Colección
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Descubre camisetas oficiales y retro de los mejores equipos del mundo.
                        Calidad auténtica y diseños exclusivos para verdaderos fanáticos.
                    </p>
                </div>

                {/* Barra de búsqueda */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
                    <div className="flex items-center gap-4">
                        <input 
                            type="Search" 
                            placeholder="Busca tu camiseta favorita" 
                            className="px-4 py-2 cursor-pointer border border-gray-300 rounded-lg bg-gray-300 text-black h-12 w-80" 
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                {/* Grid de camisetas */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {jerseys.map((jersey) => (
                        <JerseyCard key={jersey.id} {...jersey} />
                    ))}
                </div>

                {/* Botón de cargar más - solo se muestra si hay más camisetas por cargar */}
                {visibleCount < mockCamisetas.length && (
                    <div className="text-center mt-16">
                        <button 
                            onClick={MoreJerseys} 
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-2xl"
                        >
                            Ver Más Camisetas
                        </button>
                    </div>
                )}
                {/* Botón de cargar más - solo se muestra si hay más camisetas por cargar */}
                {visibleCount > mockCamisetas.length && (
                    <div className="text-center mt-16">
                        <button 
                            onClick={LessJerseys} 
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-2xl"
                        >
                            Ver Menos Camisetas
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ShopSection;