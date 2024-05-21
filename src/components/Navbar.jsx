const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center py-5 px-4 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          Lock
          <span className="text-green-500">Safe/&gt;</span>
        </div>
        <button className="text-white bg-green-700 my-5 rounded-full font-bold px-4 py-2 ring-white ring-1">Github</button>
      </div>
    </nav>
  );
};

export default Navbar;
