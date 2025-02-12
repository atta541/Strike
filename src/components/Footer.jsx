import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-300 py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Gift Cards", "Find a Store", "Membership", "Strike Journal", "Site Feedback"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              {["Get Help", "Order Status", "Shipping and Delivery", "Returns", "Order Cancellation", "Payment Options", "Gift Card Balance", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Strike", "News", "Careers", "Investors", "Purpose", "Sustainability"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Promotions & Discounts</h3>
            <ul className="space-y-2">
              {["Student", "Military", "Teacher", "First Responders & Medical Professionals", "Birthday"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8 text-sm space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <span>© 2025 Strike, Inc. All Rights Reserved</span>
            <Link href="#" className="hover:text-white">
              Guides
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Sale
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              CA Supply Chains Act
            </Link>
          </div>

          {/* Country Selector */}
          <div className="flex items-center space-x-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
