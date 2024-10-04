function Header() {

    return (
        <>
            <div className="bg-black">
                <nav className="font-bold-400 mttext-white">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex-shrink-0 flex items-center md:ml-10 lg:-ml-10 xl:-ml-40">
                                <img className = "w-16 h-100 mt-8 m-2  md:ml-16 " src = "./image/Header/SiteLogo.svg" alt = ""/>
                                <a href="#" className="font-bold text-white text-2xl mt-5 hidden md:block px-1">avocado<br/><span className=''>stories</span></a>
                            </div>
                            <div className="hidden md:block">
                                <div className=" space-x-6 text-5xl ">
                                    <a href="#" className="text-white px-3 py-2 rounded-md text-[17px] font-normal">Work</a>
                                    <a href="#" className="text-white px-3 py-2 rounded-md text-[17px] font-normal">Services</a>
                                    <a href="#" className="text-white px-3 py-2 rounded-md text-[17px] font-normal">Contact Us</a>
                                    <a href="#" className="text-white px-3 py-2 rounded-md text-[17px] font-normal">Blog</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className=" text-white ml-2 text-5xl font-extrabold  sm:-ml-7 sm:text-7xl mt-[540px] md:ml-16 md:mt-[540px] lg:mt-28 xl:text-[90px] scroll-pr-14">
                    <h1>We Do<br/>
                        Fresh Visual<br/>
                        Marketing
                    </h1>
                </div>
                <div className="header text-white text-[31px] mt-1 ml-2 sm:-ml-7 md:ml-16 lg:mt-10">
                    W A T C H <span className=" span ml-5 "> O U R</span><br/>
                    <span className="span mr-5"> N E W</span>R E E L
                    <img className = "ml-52 -mt-9 w-7 h-full flex items-center flex-shrink-0 lg:ml-52 lg:-mt-10" src = "./image/Header/PlayLogo.svg" alt = ""/>
                </div>
                <div className="write text-white mt-10 text-[20px] mb-4 cursor-pointer ml-16 hidden md:block">
                    <h1>
                        Behance<span className="m-5">Linkedin</span>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Header;
