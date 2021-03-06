const Header = ({searchValue, onChange, setSearch}) => {
  return (
    <div className="bg-gray-800 w-screen pb-2">
      <div className="flex flex-col justify-center">
        <p className="text-center pt-2 text-emerald-400 font-bold">Find Countries</p>
        <div className="flex justify-center pt-2">
          <input value={searchValue} onChange={onChange} onClick={setSearch} className="rounded-lg border-2 outline-0 font-medium"></input>  
        </div>
      </div>
    </div>                                                               
  )
}

export default Header