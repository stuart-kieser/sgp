import { Facebook, Instagram } from 'lucide-react'

export default function FooterBar() {
  return (
    <footer className="bg-teal-600 text-white py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full place-content-center place-items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold font-sabre">SGPerformance</h2>
          <p className="text-gray-800">© 2024 SGPerformance. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61550915442389"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/sg_performance_pty/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center">Built by Webblock</p>
    </footer>
  )
}
