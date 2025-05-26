export default function StatusBadge({ status }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Quote":
        return (
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
            Quote
          </span>
        );
      case "Bind":
        return (
          <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
            Bind
          </span>
        );
      case "Issued":
        return (
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            Issued
          </span>
        );
      case "Cancelled":
        return (
          <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
            Cancelled
          </span>
        );
      default:
        return (
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
            {status}
          </span>
        );
    }
  };

  return getStatusBadge(status);
}
