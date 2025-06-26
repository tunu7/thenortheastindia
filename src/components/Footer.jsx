const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 text-center p-6 mt-auto">
    <div className="container mx-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">The NorthEast India</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
