import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="text-gray-300 ">
            {/* Top Navigation */}
            <div className="flex justify-center items-center max-w-7xl mx-auto px-8 py-6 mt-32">
                <Link
                    href="/"
                    className="text-8xl font-extrabold text-white tracking-wide uppercase"
                >
                    Strike
                </Link>
            </div>

            {/* Categories Navigation */}
            <div className="max-w-7xl mx-auto px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-[-12px]">
                {/* Featured Column */}
                <div className="ml-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Featured</h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="#" className="hover:text-white">
                                Air Force 1
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Jordan 1
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Metcon
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Air Max 270
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Shoes Column */}
                <div className="ml-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Shoes</h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="#" className="hover:text-white">
                                All Shoes
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Jordan Shoes
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Running Shoes
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Basketball Shoes
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Clothing Column */}
                <div className="ml-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Clothing</h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="#" className="hover:text-white">
                                All Clothing
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Tops & T-Shirts
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Shorts
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Hoodies & Pullovers
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Kids Column */}
                <div className="ml-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Kids</h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="#" className="hover:text-white">
                                Infant & Toddler Shoes
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Kids Shoes
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Kids Basketball Shoes
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white">
                                Kids Running Shoes
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
