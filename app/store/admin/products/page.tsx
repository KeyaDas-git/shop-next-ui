const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobiles",
    price: 65000,
    stock: 25,
    status: "Active",
  },
  {
    id: 2,
    name: "Nike Air Max",
    category: "Shoes",
    price: 8999,
    stock: 12,
    status: "Active",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    category: "Fashion",
    price: 999,
    stock: 0,
    status: "Out of Stock",
  },
];

export default function AdminProductsPage() {
  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            Products
          </h1>

          <p className="text-gray-500">
            Manage your store products
          </p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md">
          + Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Search products..."
          className="border rounded-md px-4 py-2 w-80"
        />

        <select className="border rounded-md px-4 py-2">
          <option>All Categories</option>
          <option>Mobiles</option>
          <option>Fashion</option>
          <option>Shoes</option>
        </select>

        <select className="border rounded-md px-4 py-2">
          <option>All Stock</option>
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>

      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Product</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Stock</th>
              <th className="text-left p-4">Status</th>
              <th className="text-right p-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-t"
              >

                <td className="p-4 font-medium">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4">
                  ₹{product.price.toLocaleString()}
                </td>

                <td className="p-4">
                  {product.stock}
                </td>

                <td className="p-4">

                  <span
                    className={
                      product.stock === 0
                        ? "text-red-600"
                        : "text-green-600"
                    }
                  >
                    {product.status}
                  </span>

                </td>

                <td className="p-4 text-right">

                  <button className="text-blue-600 mr-4">
                    Edit
                  </button>

                  <button className="text-red-600">
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}