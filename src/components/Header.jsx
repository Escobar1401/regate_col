import search from "../assets/search.svg"
import user from "../assets/user.svg"
import cart from "../assets/cart.svg"
function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 cursor-pointer rounded-full flex items-center justify-center font-bold text-white text-4xl">⚽</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">Regate_Col</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="hover:text-orange-400 transition-colors duration-300 font-medium">Inicio</a>
            <a href="#shop" className="hover:text-orange-400 transition-colors duration-300 font-medium">Camisetas</a>
            <a href="#" className="hover:text-orange-400 transition-colors duration-300 font-medium">Equipos</a>
            <a href="#" className="hover:text-orange-400 transition-colors duration-300 font-medium">Ofertas</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-orange-400 hover:bg-white/10 p-2 rounded-lg cursor-pointer">
              <img src={search} className="h-5 w-5" />
            </button>
            <button className="text-white hover:text-orange-400 hover:bg-white/10 p-2 rounded-lg cursor-pointer">
              <img src={user} className="h-5 w-5" />
            </button>
            <button className="text-white hover:text-orange-400 hover:bg-white/10 p-2 rounded-lg cursor-pointer">
              <img src={cart} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;