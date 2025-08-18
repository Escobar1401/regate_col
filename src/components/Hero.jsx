function HeroSection() {
const mockCamisetas = [
    {
        id: 1,
        nombre: "Barcelona Local 25/26",
        precio: 180000,
        imagen: "https://store.fcbarcelona.com/cdn/shop/files/Mainbannermobile.jpg?v=1751433997&width=1200"
    }
]

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse" />
            </div>

            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

            <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    <div className="text-white space-y-8 animate-bounce-in">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-6 w-6 text-orange-400" />
                                <span className="text-orange-400 font-semibold text-xl">Calidad Premium</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent">
                                    Camisetas de
                                </span>
                                <br />
                                <span className="text-orange-400 animate-pulse">
                                    Fútbol
                                </span>
                            </h1>
                            <p className="text-xl text-gray-200 max-w-2xl">
                                Descubre nuestra colección exclusiva de camisetas oficiales de los mejores equipos del mundo.
                                Calidad auténtica, diseños únicos y la pasión del fútbol en cada prenda.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-orange-500 text-white font-bold px-8 py-2 text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer rounded-2xl">
                                <div className="h-5 w-5 mr-2" /> Explorar Colección
                            </button>
                            <button className="border-2 bg-white font-bold text-blue-900 hover:bg-white/80 hover:text-blue-900 px-8 py-2 text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer rounded-2xl">
                                <div className="h-5 w-5 mr-2" /> Ofertas Especiales
                            </button>
                        </div>

                        {/* Stock */}
                        <div className="flex gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-400">500+</div>
                                <div className="text-sm text-gray-300">Modelos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-400">50+</div>
                                <div className="text-sm text-gray-300">Equipos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-400">10k+</div>
                                <div className="text-sm text-gray-300">Clientes</div>
                            </div>
                        </div>
                    </div>

                    {/* 3D Jersey Display */}
                    <div className="relative flex justify-center items-center">
                        <div className="relative w-96 h-96 animate-rotate-3d">
                            {/* Main Jersey */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-700">
                                <div className="p-8 flex items-center justify-center h-full">
                                    <div className="w-64 h-84 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-xl transform -rotate-12 hover:rotate-0 transition-all duration-500 animate-float">
                                        <div className="p-4 h-full flex flex-col items-center justify-center">
                                            <div className="text-6xl">
                                                <img src={mockCamisetas[0].imagen} alt={mockCamisetas[0].nombre} className="h-60" />
                                            </div>
                                            <div className="text-center">
                                                <h3 className="font-bold text-blue-900 mb-2">{mockCamisetas[0].nombre}</h3>
                                                <p className="text-sm text-gray-600">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(mockCamisetas[0].precio)} COP</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 text-5xl rounded-full flex items-center justify-center animate-bounce">
                                ⚽
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-5xl animate-pulse">
                                🏆
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-20 text-white">
                    <path
                        fill="currentColor"
                        d="M0,60 C240,100 480,100 720,60 C960,20 1200,20 1440,60 L1440,120 L0,120 Z"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;