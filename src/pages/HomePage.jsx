import React, {useEffect, useState} from "react";

import {MdCallMade} from "react-icons/md";
const services = [
    {
        id: 1,
        text: "THU HÚT KHÁCH HÀNG",
        iconData: [
            {icon: "/assets/images/quytrinh/seo.png", description: "SEO"},
            {icon: "/assets/images/quytrinh/blogging.png", description: "Blogging"},
            {icon: "/assets/images/quytrinh/contentmarketing.png", description: "Tiếp thị nội dung"},
            {icon: "/assets/images/quytrinh/ad.png", description: "Quảng cáo"},

        ],
    },
    {
        id: 2,
        text: "NHẬN ĐỊNH KHÁCH HÀNG TIỀM NĂNG",
        iconData: [
            {icon: "/assets/images/quytrinh/contentmarketing.png", description: "Tiếp thị nội dung"},
            {icon: "/assets/images/quytrinh/ad.png", description: "Quảng cáo"},
            {icon: "/assets/images/quytrinh/email-marketing.png", description: "Email Marketing"},
            {icon: "/assets/images/quytrinh/blogging.png", description: "Blogging"},
            {icon: "/assets/images/quytrinh/case-study.png", description: "Case Study"},
            {icon: "/assets/images/quytrinh/automation.png", description: "Automation"},
            {icon: "/assets/images/quytrinh/event.png", description: "Sự Kiện"},
        ],
    },
    {
        id: 3,
        text: "CHUYỂN ĐỔI KHÁCH HÀNG",
        iconData: [
            {icon: "/assets/images/quytrinh/demo.png", description: "Demo"},
            {icon: "/assets/images/quytrinh/testimonials.png", description: "Ý Kiến Khách Hàng"},
            {icon: "/assets/images/quytrinh/case-study.png", description: "Case Study"},
        ],
    },
    {
        id: 4,
        text: "GIỮ CHÂN KHÁCH HÀNG",
        iconData: [
            {icon: "/assets/images/quytrinh/trust.png", description: "Xây dựng lòng tin"},
            {icon: "/assets/images/quytrinh/personal.png", description: "Cá nhân hóa"},
            {icon: "/assets/images/quytrinh/promo.png", description: "Triển khai ưu đãi"},
            {icon: "/assets/images/quytrinh/support.png", description: "Hỗ trợ tận tâm"},
            {icon: "/assets/images/quytrinh/contentmarketing.png", description: "Tiếp thị nội dung"},
        ],
    },
];

const stats = [
    { id: 1, name: 'Năm phát triển', value: '4+' },
    { id: 2, name: 'Cán bộ, nhân viên', value: '100+' },
    { id: 3, name: 'Phản hồi tích cực', value: '96%' },
    { id: 4, name: 'Khách hàng hài lòng', value: '50.000+' },
]
const HomePage = () => {

    const [activeCircle, setActiveCircle] = useState(null);
    useEffect(() => {
        setActiveCircle(1); // Tự động set activeCircle thành 1 khi load trang
    }, []);

    return (
        <main className="relative min-h-screen w-screen overflow-hidden font-[Oswald] text-gray-800">
            <div className="relative bg-custom-gradient pt-16 sm:pt-32 md:pt-48 w-full">
                <div className="px-6 sm:px-8 md:px-10 pt-14 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl ">

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
                                        src="/assets/images/logos/mini-logo-NG3.png"
                                        alt="Mini Logo"
                                        className="w-14 h-14"
                                    />
                                </div>
                            </div>


                            {/* Heading Section */}
                            <div className="w-full text-center">
                                <h1 className="tracking-wide mt-0 mb-1 text-gray-800 font-[Oswald] text-[2.75rem] sm:text-[3.75rem] md:text-[5rem] lg:text-[6.25rem] font-normal leading-tight sm:leading-[1.2] md:leading-[1.1]">
                                    Khám phá
                                    <span
                                        className="font-[Osward] text-blue-950 tracking-normal text-[2.80rem] sm:text-[4.5rem] md:text-[5.75rem] lg:text-[7.5rem] italic font-semibold"> tiềm năng</span>
                                    <br/>
                                    xây dựng tương lai
                                    <br/>cùng
                                    <span
                                        className="font-[Osward] text-blue-950 tracking-normal text-[2.55rem] sm:text-[4rem] md:text-[5.25rem] lg:text-[7rem] italic font-semibold"> NEXT.G
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

                            <div
                                className="mt-5 xl:absolute xl:top-[100%] xl:bottom-auto xl:left-auto xl:right-[0.5%] ">
                                <div>
                                    <p className="font-[Oswald] md:text-2xl text-lg font-[350] leading-[1.5] tracking-wider">
                                        NextG mang đến những giải pháp đột phá,
                                        <br/>kết nối thương hiệu với khách hàng,
                                        <br/>tạo nên thành công bền vững
                                        <br/>và giá trị vượt trội.
                                    </p>
                                    <div className="mt-6 flex justify-center gap-4">
                                        {/* Nút Chuyển Sang Trang Liên Hệ */}
                                        <a
                                            href="/lien-he"
                                            className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white w-32 h-16 font-semibold rounded-[2rem] shadow-lg xl:right-11 flex items-center justify-center relative group transition-all"
                                        >
                                            <span
                                                className="absolute text-2xl group-hover:opacity-0 transition-opacity duration-300">
                                            <MdCallMade/>
                                            </span>
                                            <span
                                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Liên hệ</span>
                                        </a>

                                        {/* Nút Hợp Tác Ngay */}
                                        <a
                                            href="/lien-he"
                                            className="relative font-[Oswald] text-gray-700 font-bold tracking-widest uppercase text-base hover:text-[#38bdf8] px-1 py-4 group right-2"
                                        >
                                            Hợp tác ngay
                                            <span
                                                className="absolute left-0 bottom-3 w-full h-[1px] bg-[#19183a] transition-all duration-300 group-hover:bg-[#38bdf8]"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="xl:mt-80 mt-10 py-12">
                            <div className="container mx-auto px-4">
                                {/* Tiêu đề và mô tả */}
                                <div className="text-center mb-20">

                                    <p className="font-[Oswald] md:text-2xl text-lg font-[350] leading-[1.5] tracking-wider italic">
                                        Chúng tôi tự hào hợp tác với các thương hiệu hàng đầu để mang đến
                                        những giải pháp tối ưu nhất cho khách hàng.
                                    </p>
                                </div>

                                {/* Slider logo */}
                                <div className="overflow-hidden relative">
                                    <div className="flex space-x-24 md:space-x-56 animate-slide">
                                        {/* Thêm các logo */}
                                        {[
                                            "/assets/images/partnerlogo/new_pancake.png",
                                            "/assets/images/partnerlogo/new_pancake.png",
                                            "/assets/images/partnerlogo/new_pancake.png",
                                            "/assets/images/partnerlogo/new_pancake.png",
                                        ].map((logo, index) => (
                                            <div key={index} className="flex-shrink-0">
                                                <img
                                                    src={logo}
                                                    alt={`Logo Partner ${index + 1}`}
                                                    className="h-10 object-contain transition-all duration-200 transform hover:grayscale-0 grayscale"
                                                />
                                            </div>
                                        ))}
                                        {[
                                            "/assets/images/partnerlogo/new_pancake.png",
                                            "/assets/images/partnerlogo/new_pancake.png",
                                            "/assets/images/partnerlogo/new_pancake.png",
                                            "/assets/images/partnerlogo/new_pancake.png",
                                        ].map((logo, index) => (
                                            <div key={index} className="flex-shrink-0">
                                                <img
                                                    src={logo}
                                                    alt={`Logo Partner ${index + 1}`}
                                                    className="h-10 object-contain transition-all duration-200 transform hover:grayscale-0 grayscale"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="padding-vertical padding-xhuge">
                                    <div className="line w-full h-[1.5px] bg-[#19183a] mt-20 mb-2"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="relative bg-custom-gradient w-full sm:pt-8">
                <div className="px-6 sm:px-8 md:px-10 ">
                    <div className="mx-auto w-full max-w-7xl ">
                        <div className="">
                            {/* Heading Section */}
                            <div className=" transform-style-preserve-3d w-full text-center">
                                <h2
                                    className="text-center tracking-wide inline-block mt-0 mb-8 font-[Oswald] text-[1.25rem] sm:text-[2.5rem] md:text-[3.5rem] font-normal"
                                >
                                    Next.G xây dựng chiến dịch Marketing chuyên biệt dựa trên
                                    <span
                                        className="font-[Osward] tracking-tight text-blue-800 text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] italic font-normal"> quy trình bán hàng của bạn
                                            </span>
                                    <br/>
                                </h2>
                            </div>
                            <section className="py-9 font-[Oswald] rounded-3xl">
                                <div className="container mx-auto flex flex-col items-center space-y-10">
                                    {services.map((service) => (
                                        <div key={service.id} className="relative flex items-center">
                                            {/* Vòng tròn */}
                                            <div
                                                className={`relative flex flex-col items-center justify-center w-44 h-44 right-32 rounded-full border-[5px] cursor-pointer transition-all duration-500 ${
                                                    activeCircle === service.id
                                                        ? "w-56 h-56 bg-blue-600 border-blue-300 text-white"
                                                        : "bg-white border-blue-600 text-blue-600 translate-x-32 "
                                                } ${
                                                    service.id % 2 === 0 && activeCircle === service.id
                                                        ? "xl:translate-x-[33rem] mb-96 sm:mb-0"
                                                        : service.id % 2 !== 0 && activeCircle === service.id
                                                            ? "xl:-translate-x-64 mb-96 sm:mb-0"
                                                            : ""
                                                }`}

                                                onClick={() => setActiveCircle(service.id)}
                                            >
                                                <span className="text-2xl mb-2">{`0${service.id}`}</span>
                                                <span className="text-center w-32">{service.text}</span>
                                            </div>

                                            {/* Hiển thị Icon và Mô tả */}
                                            {activeCircle === service.id && (

                                                <div
                                                    className={`absolute ${
                                                        service.id % 2 === 0 ? "xl:-left-[35rem]" : "xl:left-[10rem]"
                                                    } flex flex-col xl:flex-row xl:flex-wrap justify-center left-[1.5rem] sm:left-[12rem] gap-4 transition-all duration-500 w-[700px] z-[5]`}
                                                >

                                                    {service.iconData.map((iconItem, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex flex-wrap w-1/4 items-center h-14 rounded-[3rem] bg-blue-500 shadow-xl shadow-blue-900"

                                                        >
                                                            {/* Icon */}
                                                            <img
                                                                src={iconItem.icon}
                                                                alt={`icon-${index}`}
                                                                className="w-14 h-14 bg-white mr-2 border-2 border-blue-500 rounded-[3rem] "
                                                            />
                                                            {/* Mô tả */}
                                                            <p className="text-sm text-white">{iconItem.description}</p>

                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-[#101010] w-full">
                <div className="px-6 sm:px-8 md:px-10 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl ">
                        <div className=" py-24 sm:py-32">
                            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                                <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                                <p className="mx-auto text-white mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                                    Chúng tôi thổi hồn vào các thương hiệu, định hình bản sắc của họ bằng chiến lược sáng tạo
                                </p>
                                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                                    <div className="relative lg:row-span-2">
                                        <div
                                            className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                                        <div
                                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                                    Mobile friendly
                                                </p>
                                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                                    lorem cupidatat commodo.
                                                </p>
                                            </div>
                                            <div
                                                className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                                <div
                                                    className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                                    <img
                                                        className="size-full object-cover object-top"
                                                        src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                                    </div>
                                    <div className="relative max-lg:row-start-1">
                                        <div
                                            className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                                        <div
                                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores
                                                    impedit.
                                                </p>
                                            </div>
                                            <div
                                                className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                                <img
                                                    className="w-full max-lg:max-w-xs"
                                                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                                    </div>
                                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                                        <div className="absolute inset-px rounded-lg bg-white"></div>
                                        <div
                                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse
                                                    semper morbi.
                                                </p>
                                            </div>
                                            <div
                                                className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                                <img
                                                    className="h-[min(152px,40cqw)] object-cover"
                                                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                                    </div>
                                    <div className="relative lg:row-span-2">
                                        <div
                                            className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                                        <div
                                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                                    Powerful APIs
                                                </p>
                                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                                    Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget
                                                    sem sodales gravida.
                                                </p>
                                            </div>
                                            <div className="relative min-h-[30rem] w-full grow">
                                                <div
                                                    className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                        <div
                                                            className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                            <div
                                                                className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                                NotificationSetting.jsx
                                                            </div>
                                                            <div
                                                                className="border-r border-gray-600/10 px-4 py-2">App.jsx
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="px-6 pb-14 pt-6">{/* Your code example */}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-custom-gradient w-full">
                <div className="px-6 sm:px-8 md:px-10 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl ">
                        <div className=" py-24 sm:py-32">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                                    {stats.map((stat) => (
                                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                            <dt className="text-2xl text-gray-600">{stat.name}</dt>
                                            <dd className="order-first text-3xl  font-semibold tracking-tight text-gray-700 sm:text-6xl">
                                                {stat.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
