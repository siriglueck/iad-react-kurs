export function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 p-6">
        <h1 className="text-6xl font-extrabold text-stone-800 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-stone-700 mb-2">
          Not Found
        </h2>
        <p className="text-stone-500 text-center mb-6">
          Sorry, diese Seite existiert nicht
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-800 transition-colors"
        >
          Zur Startseite
        </a>
      </div>

    </>
  );
}
