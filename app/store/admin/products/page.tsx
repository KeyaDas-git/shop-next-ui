export default function ProductsPage() {
    return (
      <main className="mx-auto min-h-screen max-w-7xl px-6 py-16 bg-gray-100">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            All Products
          </h1>
  
          <p className="mt-2 text-gray-600">
            Browse our complete collection.
          </p>
        </div>
  
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ProductPlaceholder />
          <ProductPlaceholder />
          <ProductPlaceholder />
          <ProductPlaceholder />
        </div>
      </main>
    );
  }
  
  function ProductPlaceholder() {
    return (
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="h-64 bg-gray-200" />
  
        <div className="p-5">
          <h2 className="font-semibold text-gray-900">
            Product coming soon
          </h2>
  
          <p className="mt-2 text-sm text-gray-500">
            Product information will come from PostgreSQL.
          </p>
        </div>
      </div>
    );
  }