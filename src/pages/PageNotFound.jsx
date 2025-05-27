export default function PageNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        404
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
        Page Not Found
      </p>
      <a href="/" className="text-blue-600 hover:underline dark:text-blue-400">
        Go back to Home
      </a>
    </div>
  );
}
