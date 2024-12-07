import React, { useState } from "react";

const ContactPage = () => {

    return (
        <main className="relative bg-custom-gradient min-h-screen w-screen overflow-hidden font-[Oswald] text-gray-800">
            <div className="">
                <div className="relative">
                    <section
                        className="w-full h-[40vh] lg:h-[55vh] "
                        style={{
                            backgroundImage: "url('/assets/images/banner/ct.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                        }}>
                    </section>

                    <div className="absolute top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 text-white">
                        <h1 className="text-3xl md:text-5xl font-bold">NEXTGENCY</h1>
                        <p className="text-sm md:text-lg">
                            The Ultimate Guide To Ace SDE Interviews.
                        </p>
                    </div>
                </div>

                <div className="w-full h-[1200px] md:h-[60vh] lg:h-[80vh] relative">
                    <svg
                        aria-hidden="true"
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                id="pattern-id"
                                x="50%"
                                y={-1}
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-white">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#pattern-id)" width="100%" height="100%" strokeWidth={0}/>
                    </svg>
                    <div
                        className="absolute -top-[3%] md:-top-[24%] left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 h-fit w-4/5 md:w-[90%] lg:w-4/5 rounded-3xl shadow overflow-hidden text-white">
                        <div className="p-2 md:p-4 h-full bg-gradient-to-br from-sky-800 via-blue-950 to-gray-800 col-span-2">
                            <form>
                                <div
                                    className="flex flex-col md:flex-row justify-around items-start md:items-center pt-8 p-4">
                                    <h2 className="text-2xl md:text-3xl font-semibold">Gửi lời nhắn cho chúng tôi</h2>

                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:py-12 md:px-8 text-sm">
                                    <div className="flex flex-col gap-1">
                                        <label className="font-semibold">
                                            Tên <span className="text-red-500">&#42;</span>
                                        </label>
                                        <input
                                            className="border-[1px] border-white bg-gray-800 p-2 rounded-md py-3"
                                            placeholder="Nhập tên của bạn"
                                            required
                                            name="name"
                                            type="text"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="font-semibold">
                                            Email <span className="text-red-500">&#42;</span>
                                        </label>
                                        <input
                                            className="border-[1px] border-white bg-gray-800 p-2 rounded-md py-3"
                                            placeholder="Nhập Email"
                                            required
                                            name="email"
                                            type="email"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="font-semibold">
                                            Số điện thoại <span className="text-red-500">&#42;</span>
                                        </label>
                                        <input
                                            className="border-[1px] border-white bg-gray-800 p-2 rounded-md py-3"
                                            placeholder="Nhập số điện thoại"
                                            required
                                            name="phone"
                                            type="tel"
                                        />
                                    </div>



                                    <div className="flex flex-col gap-1 md:col-span-2">
                                        <label className="font-semibold">
                                            Lời nhắn <span className="text-red-500">&#42;</span>
                                        </label>
                                        <input
                                            className="border-[1px] border-white bg-gray-800 p-2 rounded-md py-3"
                                            placeholder="Mô tả yêu cầu dành cho chúng tôi"
                                            required
                                            name="message"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </form>

                            <div className="flex items-center justify-center md:justify-end py-4 px-8">
                                <button
                                    className="py-2 px-4 md:py-[1.20rem] md:px-6 rounded-[3rem] bg-blue-600 flex items-center gap-2 hover:scale-[1.15] transition-all">
                                    <span className="text-xl">Xác nhận</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-brand-telegram"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#fff"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div
                            className="py-6 px-4 h-[500px] md:h-full bg-gray-900 md:border-l-2 border-t-2 md:border-t-0 grid grid-cols-1 grid-rows-5">
                            <h2 className="text-xl lg:text-2xl text-center md:text-start font-semibold">
                                Thông tin liên hệ
                            </h2>

                            <div className="row-span-1 flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-mail-share"
                                    width="35"
                                    height="35"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#fff"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6"/>
                                    <path d="M3 7l9 6l9 -6"/>
                                    <path d="M16 22l5 -5"/>
                                    <path d="M21 21.5v-4.5h-4.5"/>
                                </svg>
                                <span>yourmail@support.com</span>
                            </div>
                            <div className="row-span-2 flex flex-col items-center justify-center">

                                <span>Hotline: 097 265 53 57</span>
                            </div>

                            <div className="flex justify-center md:justify-start items-center gap-4">
                                <a title="youtube" href="#">
                                    <img className="h-8 w-8 invert"
                                         src="https://www.svgrepo.com/show/521936/youtube.svg"/>
                                </a>
                                <a title="linkedin" href="#">
                                    <img className="h-12 w-12 invert"
                                         src="https://www.svgrepo.com/show/520815/linkedin.svg"/>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
