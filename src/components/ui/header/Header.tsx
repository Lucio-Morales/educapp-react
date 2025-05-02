import { Link, NavLink } from 'react-router-dom';
import Logo from '../../atoms/Logo';

const Header = () => {
  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/login', label: 'Iniciar sesión' },
    { to: '/register', label: 'Crear cuenta' },
  ];

  return (
    <header className="fixed top-0 w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-[#060215]">
          <Logo />
          <span className="text-xl font-bold">Educapp</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className=" border-b-2 border-transparent hover:border-[#4b4b4b] transition-colors duration-200"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
