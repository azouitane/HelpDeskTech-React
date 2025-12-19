export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full  place-items-center bg-neutral-950 px-6 py-24 sm:py-38 lg:px-8">
        <div className="text-center">
          <p className="font-bold text-4xl  text-lime-400">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-lime-400 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-lime-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
