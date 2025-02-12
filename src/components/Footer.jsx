import Link from "next/link"

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Find a Store
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Strike Journal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Site Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Get Help
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Shipping and Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Order Cancellation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Gift Card Balance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  About Strike
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Purpose
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Promotions & Discounts</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Student
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Military
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Teacher
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  First Responders & Medical Professionals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Birthday
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-gray-700 pt-8 text-sm">
          <div className="flex space-x-4">
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
              Strike Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white flex items-center">
              <span className="mr-2">Your Privacy Choices</span>
              <span className="w-8 h-4 bg-blue-500 rounded-full flex items-center justify-end p-1">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </span>
            </Link>
            <Link href="#" className="hover:text-white">
              CA Supply Chains Act
            </Link>
          </div>
          <div>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
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
              United States
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

