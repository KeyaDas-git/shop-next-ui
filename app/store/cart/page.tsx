export default function CartPage() {
    return (
      <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900">
          Your Cart
        </h1>
  
        <div className="mt-10 rounded-xl border border-gray-200 p-10 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Your cart is empty
          </h2>
  
          <p className="mt-2 text-gray-500">
            Products you add to your cart will appear here.
          </p>
        </div>
      </main>
    );
  }