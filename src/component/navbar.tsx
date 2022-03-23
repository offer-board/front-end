export default function Navbar() {
    return (
        <div className="w-screen flex flex-row items-center p-1 justify-between bg-slate-800 shadow-xs">
          <div className="ml-8 text-2xl font-bold text-slate-100 hidden md:flex">Job Board</div>
          <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
            <input type="search" name="search" placeholder="Search"
              className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"/>
            <i className="fas fa-search m-1.5 mr-5 text-lg text-slate-800 w-4 h-4">
            </i>
          </span>
          <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
            <i className="fas fa-bars"></i>
          </div >
            <div className="flex-row-reverse mr-8 hidden md:flex cursor-pointer">
              <div className="text-slate-100 text-center font-semibold bg-slate-700 px-4 py-2 m-2 rounded-lg">Sign In</div>
            </div>
        </div>
    );
}