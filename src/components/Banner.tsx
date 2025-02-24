const Banner = () => {
  return (
    <div className="relative w-full">
      <img
        src="/src/assets/image.png"
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </div>
  );
};

export default Banner;
