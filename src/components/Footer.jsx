import React from "react";
import {MdCallMade, MdLocationCity} from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950 text-white font-[Oswald] lg:grid lg:grid-cols-5">
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                <img
                    src="/assets/images/footer/anhfooter.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className=" mb-9 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <div className="mb-6 flex justify-center gap-4 ">
                            {/* Nút Chuyển Sang Trang Liên Hệ */}
                            <a
                                href="/liên-hệ"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white w-32 h-16 font-semibold rounded-[2rem] shadow-lg md:bottom-4 xl:right-32 flex items-center justify-center relative group transition-all"
                            >
                                            <span
                                                className="absolute text-2xl group-hover:opacity-0 transition-opacity  duration-300">
                                            <MdCallMade/>
                                            </span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Liên hệ</span>
                            </a>

                            {/* Nút Hợp Tác Ngay */}
                            <a
                                href="/liên-hệ"
                                className="relative font-medium uppercase hover:text-[#38bdf8] px-1 py-4 group xl:right-28 md:bottom-4"
                            >
                                Hợp tác ngay
                                <span
                                    className="absolute left-0 bottom-3 w-full h-[1px] bg-white transition-all duration-300 group-hover:bg-[#38bdf8]"></span>
                            </a>
                        </div>

                        <p>
                            <span className="font-medium uppercase tracking-wide "> HotLine </span>

                            <a href="#"
                               className="block text-2xl font-medium hover:opacity-75 sm:text-3xl">
                                097 265 53 57
                            </a>
                        </p>

                        <ul className="mt-8 space-y-1 text-sm">
                            <li>Thứ 2 đến Thứ 7: 8am - 5pm</li>
                        </ul>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <a
                                    href="https://www.facebook.com/NextGen.Group94"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Facebook</span>

                                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className=" transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid gap-4 grid-cols-2">
                        <div>
                            <p className="font-medium uppercase">Dịch Vụ</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link
                                        to="/dịch-vụ#branding"
                                        className="transition hover:opacity-75"
                                    >
                                        Content
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/dịch-vụ#ads"
                                        className="transition hover:opacity-75"
                                    >
                                        Media
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/dịch-vụ#marketing"
                                        className="transition hover:opacity-75"
                                    >
                                        Marketing
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/dịch-vụ#seo"
                                        className="transition hover:opacity-75"
                                    >
                                        Digital Ads + Traffic
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/dịch-vụ#data"
                                        className="transition hover:opacity-75"
                                    >
                                        Phòng Marketing thuê ngoài
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium uppercase">Next.G</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="/giới-thiệu" className="transition hover:opacity-75"> Tiểu Sử </a>
                                </li>

                                <li>
                                    <a href="/liên-hệ" className=" transition hover:opacity-75"> Liên Hệ </a>
                                </li>

                                <li>
                                    <a href="/blog" className=" transition hover:opacity-75"> Blog </a>
                                </li>

                                <li>
                                    <a href="/tuyển-dụng" className=" transition hover:opacity-75"> Gia Nhập
                                        Next.G </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-80 border-t border-gray-100 ">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex absolute items-center space-x-2 sm:-mt-[30rem] -mt-64 ">
                            <img src="/assets/images/logos/logoNGson2.png" alt="Nextg Logo"
                                 className="h-10 p-1.5 w-auto object-contain "/>
                        </div>
                        <div className="flex items-center space-x-3 mb-2 absolute sm:-mt-80 -mt-44">
                            <MdLocationCity className="text-xl text-white"/>
                            <span className="text-sm">
                            2/11 Vương Thừa Vũ, Hanoi, Vietnam
                        </span>
                        </div>

                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li>
                                <a href="#" className=" transition hover:opacity-75"> Terms &
                                    Conditions </a>
                            </li>

                            <li>
                                <a href="#" className="transition hover:opacity-75"> Privacy Policy </a>
                            </li>

                            <li>
                                <a href="#" className=" transition hover:opacity-75"> Cookies </a>
                            </li>
                        </ul>

                        <p className="mt-8 text-xs sm:mt-0">
                            &copy; 2024. Next.G. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
