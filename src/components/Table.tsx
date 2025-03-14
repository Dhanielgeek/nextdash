const transactions = [
  { id: 1, name: "Spotify", amount: "-$9.99", status: "Processing" },
  { id: 2, name: "Freelance", amount: "+$500.00", status: "Success" },
  { id: 3, name: "Netflix", amount: "-$15.99", status: "Failed" },
];

export default function Table() {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border">Name</th>
          <th className="py-2 px-4 border">Amount</th>
          <th className="py-2 px-4 border">Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((txn) => (
          <tr key={txn.id} className="text-center">
            <td className="py-2 px-4 border">{txn.name}</td>
            <td className="py-2 px-4 border">{txn.amount}</td>
            <td className="py-2 px-4 border">{txn.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
