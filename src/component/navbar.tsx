export default function Navbar() {
    return (
        <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
            <div className="flex max-w-screen-xl mx-auto items-center justify-between flex-row px-6 lg:px-12">
                <div className="p-4 flex flex-row items-center justify-between">
                    <a
                        href="/"
                        className="text-2xl font-light tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
                    >
                        Job Board
                    </a>
                </div>

                <nav className="flex-grow pb-0 flex justify-end flex-row">
                    <a
                        className="px-4 py-2 mt-0 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#"
                    >
                        Login
                    </a>
                </nav>
            </div>
        </div>
    );
}
