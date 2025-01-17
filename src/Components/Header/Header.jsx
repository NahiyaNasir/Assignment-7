
 
 const Header = () => {
    return (
        <div className="">
                
                    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Recipe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About </a></li>
      <li><a>  Recipe</a></li>
  
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label><br />
<div className="avatar online placeholder">
  <div className="bg-neutral text-neutral-content rounded-full w-16">
    <span className="text-xl">AI</span>
  </div>
</div> 
  </div>
</div>
                   
<div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/LPbK72x/alyson-mcphee-y-WG-ndhxvq-Y-unsplash.jpg")'}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br /> </h1>
      <p className="mb-5 text-xl font-bold">it is not about food it is about  experience.</p>
      <div className="flex gap-4 items-center">
      <button className="btn btn-primary rounded-3xl">Explore Now</button>

     
<button className="btn rounded-3xl">OurFeedBack</button>
      </div>
      
      
    </div>
  </div>
</div>

        </div>
    );
 };
 
 export default Header;
