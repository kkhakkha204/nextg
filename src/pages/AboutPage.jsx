import React from "react";
import {MdCallMade} from "react-icons/md";

const AboutPage = () => {
    return (
        <main className="relative min-h-screen w-screen bg-custom-gradient overflow-hidden font-[Oswald] text-gray-800">
            <div className="relative pt-16 sm:pt-32 md:pt-48 w-full">
                <div className="px-6 sm:px-8 md:px-10 pt-14 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl ">

                        {/*Slogan section*/}
                        <div className="relative flex flex-col items-center ">
                            {/*/!* Scroll *!/*/}
                            {/*<div*/}
                            {/*    className="scroll_wrapper absolute bottom-[-5%] left-[-8%] flex flex-col justify-center items-center gap-4 sm:left-[-10%] sm:bottom-[15%] md:bottom-[-30%]">*/}
                            {/*    <div*/}
                            {/*        className="scroll-down-loop-wrap w-[1.5px] h-[3.5rem] overflow-hidden sm:h-[4.5rem] md:h-[5rem]">*/}
                            {/*        <div*/}
                            {/*            className="scroll-down-loop w-0.5 h-20 bg-[#19183a] animate-scrollLoop transform translate-y-[3.283rem]"></div>*/}
                            {/*    </div>*/}
                            {/*    <div*/}
                            {/*        className="scroll_text mb-4 mt-4 text-[1.25rem] font-[Osward] tracking-wider font-medium leading-[100%] inline-block rotate-[-90deg] normal-case sm:text-[1.75rem]">*/}
                            {/*        Scroll*/}
                            {/*    </div>*/}
                            {/*    <div*/}
                            {/*        className="scroll-down-loop-wrap w-[1.5px] h-[3.5rem] overflow-hidden sm:h-[4.5rem] md:h-[5rem]">*/}
                            {/*        <div*/}
                            {/*            className="scroll-down-loop w-0.5 h-20 bg-[#19183a] animate-scrollLoop transform translate-y-[3.283rem]"></div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*Xoay xoay*/}
                            <div
                                className="relative w-40 h-40 mb-6 flex justify-center items-center xl:absolute xl:top-[-10%] xl:bottom-auto xl:left-auto xl:right-[-5.5%]">
                                {/* Label Round (spinning) */}
                                <div className="w-full h-full animate-spinClockwise flex justify-center items-center">
                                    <img
                                        src="/assets/images/elements/label-round-2.png"
                                        loading="lazy"
                                        alt="Label Round"
                                        className="max-w-full inline-block"
                                    />
                                </div>
                                {/* Mini Logo (static) */}
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <img
                                        src="/assets/images/logos/logo_favicon.png"
                                        alt="Mini Logo"
                                        className="w-12 h-12"
                                    />
                                </div>
                            </div>


                            {/* Heading Section */}
                            <div className="w-full text-center">
                                <h1 className="tracking-wide mt-0 mb-1 text-gray-800 font-[Oswald] text-[1.75rem] sm:text-[2.75rem] md:text-[4rem] lg:text-[5.25rem] font-normal leading-tight sm:leading-[1.2] md:leading-[1.1] italic">
                                    Thêm
                                    <span
                                        className="font-[Osward] bg-gradient-to-r from-gray-800 via-sky-500 to-blue-900 bg-clip-text text-transparent tracking-normal text-[1.80rem] sm:text-[3.5rem] md:text-[4.75rem] lg:text-[5.5rem] italic font-semibold"> khách hàng</span>
                                    <br/>
                                    Thêm
                                    <span
                                        className="font-[Osward] bg-gradient-to-r from-gray-800 via-sky-500 to-blue-900 bg-clip-text text-transparent tracking-normal text-[1.55rem] sm:text-[3rem] md:text-[4.25rem] lg:text-[6rem] italic font-semibold"> doanh thu
                                    </span>, thêm
                                    <span
                                        className="font-[Osward] bg-gradient-to-r from-gray-800 via-sky-500 to-blue-900 bg-clip-text text-transparent tracking-normal text-[1.55rem] sm:text-[3rem] md:text-[4.25rem] lg:text-[6rem] italic font-semibold"> nhanh chóng
                                    </span>

                                </h1>
                                <div className="relative inline-block">
                                    <img
                                        src="/assets/images/slogan/slogan.png"
                                        loading="lazy"
                                        alt="Decorative Mark"
                                        className="mt-2 max-w-full h-auto sm:h-[40px] md:h-[60px]"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;
