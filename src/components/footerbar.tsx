import Image from "next/image";
import insta from "/public/icons/instagram.svg";
export default function FooterBar() {
  return (
    <footer className="bg-teal-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold font-sabre">SGPerformance</h2>
            <p className="text-gray-800">
              © 2024 SGPerformance. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
            <a href="/contact-us" className="hover:text-gray-300">
              Contact
            </a>
            <a href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.293H9.692v-3.622h3.129V8.413c0-3.1 1.892-4.787 4.655-4.787 1.324 0 2.462.099 2.794.143v3.24h-1.916c-1.504 0-1.795.716-1.795 1.764v2.314h3.59l-.467 3.622h-3.123V24h6.125c.732 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Image src={insta} className="w-6 h-6" alt="Instagram" width={50} height={50} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>Built by Anthem</div>
    </footer>
  );
}
