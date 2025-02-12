import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="text-gray-300">
      {/* Top Navigation */}
      <div className="flex justify-center items-center max-w-7xl mx-auto px-6 py-8 mt-16">
        <Link href="/" className="text-7xl md:text-8xl font-extrabold  tracking-wide uppercase  text-[#B4A596]">
          Strike
        </Link>
      </div>

      {/* Categories Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Featured Column */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Featured</h2>
          <ul className="space-y-3">
            {["Air Force 1", "Jordan 1", "Metcon", "Air Max 270"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Shoes Column */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Shoes</h2>
          <ul className="space-y-3">
            {["All Shoes", "Jordan Shoes", "Running Shoes", "Basketball Shoes"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Clothing Column */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Clothing</h2>
          <ul className="space-y-3">
            {["All Clothing", "Tops & T-Shirts", "Shorts", "Hoodies & Pullovers"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kids Column */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Kids</h2>
          <ul className="space-y-3">
            {["Infant & Toddler Shoes", "Kids Shoes", "Kids Basketball Shoes", "Kids Running Shoes"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
