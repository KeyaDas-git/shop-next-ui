import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-20 text-center md:py-28">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Welcome to Shop
          </span>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Everything you need, all in one place.
          </h1>

          <p className="max-w-2xl text-lg text-gray-600">
            Discover quality products at great prices. Browse our collection
            and find something you'll love.
          </p>

          <Link
            href="/store/admin/products"
            className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Shop by Category
          </h2>

          <p className="mt-2 text-gray-600">
            Explore our most popular categories.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CategoryCard title="Electronics" />
          <CategoryCard title="Fashion" />
          <CategoryCard title="Home & Living" />
          <CategoryCard title="Accessories" />
        </div>
      </section>

      {/* Featured Products Placeholder */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>

          <p className="mt-2 text-gray-600">
            Our product catalogue will appear here.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductPlaceholder />
            <ProductPlaceholder />
            <ProductPlaceholder />
            <ProductPlaceholder />
          </div>
        </div>
      </section>
    </main>
  );
}

function CategoryCard({ title }: { title: string }) {
  return (
    <Link
      href="/store/admin/products"
      className="flex h-40 items-end rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </Link>
  );
}

function ProductPlaceholder() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="h-56 bg-gray-200" />

      <div className="p-5">
        <div className="h-4 w-3/4 rounded bg-gray-200" />

        <div className="mt-3 h-4 w-1/3 rounded bg-gray-200" />
      </div>
    </div>
  );
}