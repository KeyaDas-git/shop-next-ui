const users = [
    {
      id: "1",
      name: "Keya Das",
      email: "keya@gmail.com",
      joined: "10 Sep 2026",
      orders: 5,
      role: "Customer",
      status: "Active",
    },
    {
      id: "2",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      joined: "12 Sep 2026",
      orders: 2,
      role: "Customer",
      status: "Active",
    },
    {
      id: "3",
      name: "Ananya Roy",
      email: "ananya@gmail.com",
      joined: "15 Sep 2026",
      orders: 0,
      role: "Customer",
      status: "Active",
    },
    {
      id: "4",
      name: "Admin",
      email: "admin@shop.com",
      joined: "01 Sep 2026",
      orders: 0,
      role: "Admin",
      status: "Active",
    },
  ];
  
  export default function AdminUsersPage() {
    return (
      <div className="p-6">
  
        {/* Header */}
  
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            Users
          </h1>
  
          <p className="text-gray-500">
            Manage registered users
          </p>
        </div>
  
        {/* Filters */}
  
        <div className="flex gap-4 mb-6">
  
          <input
            type="text"
            placeholder="Search by name or email..."
            className="border rounded-md px-4 py-2 w-80"
          />
  
          <select className="border rounded-md px-4 py-2">
            <option>All Roles</option>
            <option>Customer</option>
            <option>Admin</option>
          </select>
  
          <select className="border rounded-md px-4 py-2">
            <option>All Status</option>
            <option>Active</option>
            <option>Blocked</option>
          </select>
  
        </div>
  
        {/* Users Table */}
  
        <div className="border rounded-lg overflow-hidden">
  
          <table className="w-full">
  
            <thead className="bg-gray-100">
  
              <tr>
  
                <th className="text-left p-4">
                  User
                </th>
  
                <th className="text-left p-4">
                  Email
                </th>
  
                <th className="text-left p-4">
                  Joined
                </th>
  
                <th className="text-left p-4">
                  Orders
                </th>
  
                <th className="text-left p-4">
                  Role
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
  
              {users.map((user) => (
  
                <tr
                  key={user.id}
                  className="border-t"
                >
  
                  <td className="p-4 font-medium">
                    {user.name}
                  </td>
  
                  <td className="p-4">
                    {user.email}
                  </td>
  
                  <td className="p-4">
                    {user.joined}
                  </td>
  
                  <td className="p-4">
                    {user.orders}
                  </td>
  
                  <td className="p-4">
                    {user.role}
                  </td>
  
                  <td className="p-4">
  
                    <span
                      className={
                        user.status === "Active"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {user.status}
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