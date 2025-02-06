import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 Mi eCommerce. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Política de Privacidad
          </a>
          <a
            href="/terms"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Términos de Servicio
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
