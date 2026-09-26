const categories = [
    "Electronics",
    "Fashion",
    "Home & Living",
    "Accessories",
  ];
  
  export default function CategoriesPage() {
    return (
      <main className="mx-auto min-h-screen max-w-7xl px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900">
          Categories
        </h1>
  
        <p className="mt-2 text-gray-600">
          Explore products by category.
        </p>
  
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="flex h-48 items-end rounded-xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">{category}</h2>
            </div>
          ))}
        </div>
      </main>
    );
  }