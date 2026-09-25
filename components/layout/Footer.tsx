export default function Footer() {
    return (
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-lg font-bold text-gray-900">SHOP</h2>
  
              <p className="mt-2 text-sm text-gray-500">
                A modern full-stack e-commerce platform.
              </p>
            </div>
  
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Shop. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }