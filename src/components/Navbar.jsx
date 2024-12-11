import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

    const [scrollingDown, setScrollingDown] = useState(false);
    let lastScrollY = 0;

    const handleScroll = () => {

        if (window.scrollY > lastScrollY) {
            setScrollingDown(true);
        } else {

            setScrollingDown(false);
        }
        lastScrollY = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <nav
            className={`z-50 bg-custom-gradient-logo font-[Oswald] shadow-2xl shadow-[#172554] fixed w-full top-0 left-0 transition-all duration-300 ${
                scrollingDown ? "sm:-translate-y-full" : "sm:translate-y-0"
            }`}>
            <div className="container mx-auto px-4 flex flex-wrap items-center justify-between h-16">

                {/* Logo */}
                <div className="flex items-center space-x-2 xl:ml-5">
                    <Link to="/" className="h-[4rem] w-[12.5rem]">
                        <img
                            src="/assets/images/logos/logoNGson.png"
                            alt="Nextg Logo"
                            className="h-full w-full object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-4 lg:space-x-3 relative">

                    {["Giới thiệu", "Dịch vụ", "Liên hệ", "Blog"].map((item, index) => (
                        <li key={index} className="group">
                        <Link
                                to={item === "Trang chủ" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                className="relative font-bold tracking-widest uppercase px-0 py-2 mx-3 text-gray-700 hover:text-[#38bdf8]"
                            >
                                {item}
                                <span
                                    className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#38bdf8] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Join Button */}
                <div className="hidden lg:block xl:ml-0 ml-[10rem] lg:ml-5 mr-5">

                    <Link
                        to="/tuyển-dụng"
                        className="relative text-gray-700 font-bold tracking-widest uppercase text-base hover:text-[#38bdf8] px-1 py-2 group"
                    >
                        Gia nhập Nextg
                        <span
                            className="absolute left-0 bottom-0 w-full h-[1px] bg-[#19183a] transition-all duration-300 group-hover:bg-[#38bdf8]"></span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="block lg:hidden p-2 focus:outline-none"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 w-screen h-screen bg-[#f4f4f5] z-50 flex flex-col items-center justify-center">
                        <button
                            className="absolute top-4 right-4 p-2 focus:outline-none"
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <ul className="space-y-6 text-center">
                            {["Giới thiệu", "Dịch vụ", "Liên hệ", "Blog", ].map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item === "Trang chủ" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-gray-700 font-bold tracking-widest uppercase text-2xl hover:text-[#38bdf8]"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/tuyển-dụng"
                                    className="text-gray-700 font-bold tracking-widest uppercase text-2xl hover:text-[#38bdf8]"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Gia nhập Nextg
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
        // <nav
        //     className={`bg-[#e63946] font-[Oswald] fixed w-full top-0 left-0 z-10 transition-all duration-300 ${
        //         scrollingDown ? "sm:-translate-y-full" : "sm:translate-y-0"
        //     }`}>
        //     <div className="container mx-auto px-4 flex flex-wrap items-center justify-between h-16">
        //
        //         {/* Logo */}
        //         <div className="flex items-center space-x-2 xl:ml-5">
        //             <Link to="/" className="h-[4rem] w-[12.5rem]">
        //                 <img
        //                     src="/assets/images/logos/logoNGson2.png"
        //                     alt="Nextg Logo"
        //                     className="h-full w-full object-contain"
        //                 />
        //             </Link>
        //         </div>
        //
        //         {/* Desktop Menu */}
        //         <ul className="hidden lg:flex space-x-4 lg:space-x-3 relative">
        //
        //             {["Giới thiệu", "Dịch vụ", "Liên hệ", "Blog"].map((item, index) => (
        //                 <li key={index} className="group">
        //                     <Link
        //                         to={item === "Trang chủ" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
        //                         className="relative font-bold tracking-widest uppercase px-0 py-2 mx-3 text-white hover:text-[#6ad8fc]"
        //                     >
        //                         {item}
        //                         <span
        //                             className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#38bdf8] transition-all duration-300 group-hover:w-full"></span>
        //                     </Link>
        //                 </li>
        //             ))}
        //         </ul>
        //
        //         {/* Join Button */}
        //         <div className="hidden lg:block xl:ml-0 ml-[10rem] lg:ml-5 mr-5">
        //
        //             <Link
        //                 to="/tuyển-dụng"
        //                 className="relative text-white font-bold tracking-widest uppercase text-base hover:text-[#38bdf8] px-1 py-2 group"
        //             >
        //                 Gia nhập Nextg
        //                 <span
        //                     className="absolute left-0 bottom-0 w-full h-[1px] bg-white transition-all duration-300 group-hover:bg-[#6ad8fc]"></span>
        //             </Link>
        //         </div>
        //
        //         {/* Mobile Menu Button */}
        //         <button
        //             className="block lg:hidden p-2 focus:outline-none"
        //             onClick={() => setMenuOpen(!isMenuOpen)}
        //         >
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 strokeWidth={2}
        //                 stroke="currentColor"
        //                 className="w-6 h-6"
        //             >
        //                 <path
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
        //                 />
        //             </svg>
        //         </button>
        //
        //         {/* Mobile Menu */}
        //         {isMenuOpen && (
        //             <div
        //                 className="fixed inset-0 w-screen h-screen bg-[#f4f4f5] z-50 flex flex-col items-center justify-center">
        //                 <button
        //                     className="absolute top-4 right-4 p-2 focus:outline-none"
        //                     onClick={() => setMenuOpen(false)}
        //                 >
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         strokeWidth={2}
        //                         stroke="currentColor"
        //                         className="w-6 h-6"
        //                     >
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             d="M6 18L18 6M6 6l12 12"
        //                         />
        //                     </svg>
        //                 </button>
        //                 <ul className="space-y-6 text-center">
        //                     {["Giới thiệu", "Dịch vụ", "Liên hệ", "Blog",].map((item, index) => (
        //                         <li key={index}>
        //                             <Link
        //                                 to={item === "Trang chủ" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
        //                                 className="text-gray-700 font-bold tracking-widest uppercase text-2xl hover:text-[#38bdf8]"
        //                                 onClick={() => setMenuOpen(false)}
        //                             >
        //                                 {item}
        //                             </Link>
        //                         </li>
        //                     ))}
        //                     <li>
        //                         <Link
        //                             to="/tuyển-dụng"
        //                             className="text-gray-700 font-bold tracking-widest uppercase text-2xl hover:text-[#38bdf8]"
        //                             onClick={() => setMenuOpen(false)}
        //                         >
        //                             Gia nhập Nextg
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         )}
        //
        //     </div>
        // </nav>
    );
};

export default Navbar;
