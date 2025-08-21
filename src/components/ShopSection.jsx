import JerseyCard from "./JerseyCard";
import mockCamisetas from "../assets/mockCamisetas.json"
import { useState, useEffect } from "react";

function ShopSection() {
    const [jerseys, setJerseys] = useState([]);
    const [visibleCount, setVisibleCount] = useState(12);
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        oferta: false,
        nueva: false
    });

    useEffect(() => {
        // Cargar solo las primeras 12 camisetas
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

    //Funcion para buscar camisetas por nombre, tipo o liga
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filteredJerseys = mockCamisetas.filter(jersey => 
            jersey.equipo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            jersey.tipo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            jersey.kit.toLowerCase().includes(searchQuery.toLowerCase()) ||
            jersey.liga.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setJerseys(filteredJerseys);
    }

    // Funcion para manejar cambios en los checkboxes
    const handleFilterChange = (e) => {
        const { id, checked } = e.target;
        setFilters(prev => ({
            ...prev,
            [id]: checked
        }));
    };

    // Efecto para aplicar filtros cuando cambian los checkboxes o la búsqueda
    useEffect(() => {
        let filteredJerseys = [...mockCamisetas];
        
        // Aplicar filtro de búsqueda si hay texto
        if (searchQuery) {
            filteredJerseys = filteredJerseys.filter(jersey => 
                jersey.equipo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                jersey.tipo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                jersey.kit.toLowerCase().includes(searchQuery.toLowerCase()) ||
                jersey.liga.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        
        // Aplicar filtros de checkboxes si están activos
        if (filters.oferta || filters.nueva) {
            filteredJerseys = filteredJerseys.filter(jersey => {
                const isOffer = filters.oferta && (jersey.stock < 3 && jersey.stock > 1) && jersey.Offer > 0;
                const isNew = filters.nueva && jersey.stock > 3;
                return isOffer || isNew || (!filters.oferta && !filters.nueva);
            });
        }
        
        setJerseys(filteredJerseys.slice(0, visibleCount));
    }, [searchQuery, filters, visibleCount]);

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

                {/* Barra de búsqueda y filtros */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
                    <div className="flex items-center gap-4">
                        <input 
                            type="Search" 
                            placeholder="Busca tu camiseta favorita" 
                            className="px-4 py-2 cursor-pointer border border-gray-300 rounded-lg bg-gray-300 text-black h-12 w-80" 
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <input 
                            type="checkbox" 
                            id="oferta" 
                            checked={filters.oferta}
                            onChange={handleFilterChange} 
                            className="w-4 h-4 text-blue-600 rounded"
                        />
                        <label htmlFor="oferta" className="cursor-pointer">En Oferta</label>
                        <input 
                            type="checkbox" 
                            id="nueva" 
                            checked={filters.nueva}
                            onChange={handleFilterChange}
                            className="w-4 h-4 text-blue-600 rounded"
                        />
                        <label htmlFor="nueva" className="cursor-pointer">Nueva</label>
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