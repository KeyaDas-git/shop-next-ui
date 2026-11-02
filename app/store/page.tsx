import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff0e6]">
      {/* Hero Section */}
      <section className="bg-[#fff0e6] pt-2">
        <div className="mx-auto flex max-w-full flex-col items-center text-center">
          <img src="./pl.jpg" alt="Hero Image" className="w-full max-w-full max-h-[85vh] shadow-lg" />
        </div>
      </section>

      {/* Featured Products Placeholder */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <h2 className="mb-6 text-3xl  text-gray-900">
          NEW IN
        </h2>

        <div className="grid grid-cols-2 gap-2">

          {/* Featured Card */}
          <div className="col-span-2 overflow-hidden rounded-2xl bg-[#d1ae97]">

            <div className="h-[220px] overflow-hidden">
              <img
                src="/images/season1.jpg"
                alt="Season Bookmarks"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-3 text-white">
              <h3 className=" text-2xl">
                Season Bookmarks <span className="ml-2">→</span>
              </h3>

              <p className=" text-sm">
                Price Starting from Rs. 120.00
              </p>
            </div>

          </div>

          {/* Second Card */}
          <div className="overflow-hidden rounded-2xl bg-[#d1ae97]">

            <div className="h-[220px] bg-[#85694f]">
              <img
                src="/images/season2.jpg"
                alt="Season collection"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-3 text-white">
              <h3 className=" text-xl">
                Season Bookmarks <span className="ml-1">→</span>
              </h3>

              <p className=" text-sm">
                Price Starting from Rs. 120.00
              </p>
            </div>

          </div>

          {/* Third Card */}
          <div className="overflow-hidden rounded-2xl bg-[#d1ae97]">

            <div className="h-[220px] bg-[#c5d0d9]">
              <img
                src="/images/season3.jpg"
                alt="Season collection"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-3 text-white">
              <h3 className=" text-xl">
                Season Bookmarks <span className="ml-1">→</span>
              </h3>

              <p className=" text-sm">
                Price Starting from Rs. 120.00
              </p>
            </div>

          </div>

        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-12">

        <h2 className="mb-6 text-3xl text-gray-900">
          MORE TO EXPLORE
        </h2>

        <div className="grid grid-cols-2 gap-2">

          {/* Featured Card */}
          <div className="row-span-2 overflow-hidden rounded-2xl bg-[#d1ae97]">
            <div className="h-[87%] overflow-hidden">
              <img
                src="/pl.jpg"
                alt="Season Bookmarks"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-3 text-white">
              <h3 className=" text-2xl">
                Season Bookmarks <span className="ml-2">→</span>
              </h3>
            </div>
          </div>

          {/* Second Card */}
          <div className="overflow-hidden rounded-2xl bg-[#d1ae97]">
            <div className="h-[220px] bg-[#85694f]">
              <img
                src="/pl.jpg"
                alt="Season collection"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-3 text-white">
              <h3 className=" text-xl">
                Season Bookmarks <span className="ml-1">→</span>
              </h3>
            </div>
          </div>

          {/* Third Card */}
          <div className="overflow-hidden rounded-2xl bg-[#d1ae97]">
            <div className="h-[220px] bg-[#c5d0d9]">
              <img
                src="/images/season3.jpg"
                alt="Season collection"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-3 text-white">
              <h3 className=" text-xl">
                Season Bookmarks <span className="ml-1">→</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CategoryCard({ title }: { title: string }) {
  return (
    <Link
      href="/store/products"
      className="flex h-40 items-end rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </Link>
  );
}

function ProductPlaceholder() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="h-56" />

      <div className="p-5">
        <div className="h-4 w-3/4 rounded" />

        <div className="mt-3 h-4 w-1/3 rounded" />
      </div>
    </div>
  );
}