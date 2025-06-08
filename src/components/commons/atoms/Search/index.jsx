const Search = ({ isSearchFocused, setSearchFocused }) => {
  console.log(isSearchFocused)
  return (
    <>
      <div className="flex-1 max-md:ml-3 ml-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fas fa-search text-gray-400 text-sm"></i>
          </div>

          <input
            type="search" 
            className={`transition-all duration-300 ${isSearchFocused ? "max:md:w-full" : "max:md:w-[95%]"} w-[95%] pl-9 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500`} placeholder="Cari produk..." 
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            />
        </div>
      </div>
    </>
  )
}

export default Search;