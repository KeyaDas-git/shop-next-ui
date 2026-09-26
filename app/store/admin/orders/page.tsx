const orders = [
    {
      id: "ORD001",
      customer: "Keya Das",
      date: "26 Sep 2026",
      amount: 12500,
      payment: "Paid",
      status: "Pending",
    },
    {
      id: "ORD002",
      customer: "Rahul Sharma",
      date: "26 Sep 2026",
      amount: 5999,
      payment: "Paid",
      status: "Shipped",
    },
    {
      id: "ORD003",
      customer: "Ananya Roy",
      date: "25 Sep 2026",
      amount: 2499,
      payment: "Paid",
      status: "Delivered",
    },
    {
      id: "ORD004",
      customer: "Arjun Singh",
      date: "24 Sep 2026",
      amount: 8999,
      payment: "Failed",
      status: "Cancelled",
    },
  ];
  
  export default function AdminOrdersPage() {
    return (
      <div className="p-6">
  
        {/* Header */}
  
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            Orders
          </h1>
  
          <p className="text-gray-500">
            Manage customer orders and order status
          </p>
        </div>
  
        {/* Filters */}
  
        <div className="flex gap-4 mb-6">
  
          <input
            type="text"
            placeholder="Search order or customer..."
            className="border rounded-md px-4 py-2 w-80"
          />
  
          <select className="border rounded-md px-4 py-2">
            <option>All Status</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
  
          <select className="border rounded-md px-4 py-2">
            <option>All Payments</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
  
        </div>
  
        {/* Orders table */}
  
        <div className="border rounded-lg overflow-hidden">
  
          <table className="w-full">
  
            <thead className="bg-gray-100">
  
              <tr>
                <th className="text-left p-4">
                  Order ID
                </th>
  
                <th className="text-left p-4">
                  Customer
                </th>
  
                <th className="text-left p-4">
                  Date
                </th>
  
                <th className="text-left p-4">
                  Amount
                </th>
  
                <th className="text-left p-4">
                  Payment
                </th>
  
                <th className="text-left p-4">
                  Status
                </th>
  
                <th className="text-right p-4">
                  Action
                </th>
              </tr>
  
            </thead>
  
            <tbody>
  
              {orders.map((order) => (
  
                <tr
                  key={order.id}
                  className="border-t"
                >
  
                  <td className="p-4 font-medium">
                    #{order.id}
                  </td>
  
                  <td className="p-4">
                    {order.customer}
                  </td>
  
                  <td className="p-4">
                    {order.date}
                  </td>
  
                  <td className="p-4">
                    ₹{order.amount.toLocaleString()}
                  </td>
  
                  <td className="p-4">
                    {order.payment}
                  </td>
  
                  <td className="p-4">
  
                    <span className="px-2 py-1 rounded-full text-sm">
                      {order.status}
                    </span>
  
                  </td>
  
                  <td className="p-4 text-right">
  
                    <button className="text-blue-600">
                      View
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