import Link from "next/link";
import { auth } from "@/auth";
import ProfileMenu from "@/components/auth/ProfileDetails";

export default async function Navbar() {
  const session = await auth();

  return (
    <div>
      <header className="border-b border-gray-200 bg-[#fff0e6]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-m font-medium text-gray-500 hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/store/products"
              className="text-m font-medium text-gray-500 hover:text-black"
            >
              Products
            </Link>

            
          </nav>

          {/* Logo */}
          <img src="./logo.png" alt="Logo" className="h-12 w-35" />

          {/* Actions */}
          <div className="flex items-center gap-4">
            {session ? (
              <ProfileMenu user={session.user} />
            ) : (
            <Link
              href="/login"
              className="text-m font-medium text-gray-500 hover:text-black"
            >
              Login
            </Link>
            )}

            <Link
              href="/store/cart"
              className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Cart
            </Link>


          </div>
        </div>
      </header>
      <div className="w-full h-[3vh] bg-[#c5c3c3] text-center text-md text-[#fff0e6]">
        WELCOME TO THE ^^^^^^^ SHOP, LET’S FIND SOME MAGICS
      </div>
      <div className="w-full h-[3vh] bg-[#ffbd59] overflow-hidden flex items-center">
        <div className="marquee whitespace-nowrap text-right text-md text-gray-700">
          <span>
            New launches have arrived.... ✦ New launches have arrived.... ✦
          </span>
          <span>
            New launches have arrived.... ✦ New launches have arrived.... ✦
          </span>
        </div>
      </div>
    </div>
  );
}