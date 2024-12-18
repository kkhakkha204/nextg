import React, {useEffect, useState} from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiStrategyBold } from "react-icons/pi";
import { GiBigWave } from "react-icons/gi";
import {MdCallMade} from "react-icons/md";
import { MdReadMore } from "react-icons/md";
import {Link} from "react-router-dom";
const services = [
    {
        id: 1,
        text: "THU HÚT KHÁCH HÀNG",
        iconData: [
            {icon: "/assets/images/quytrinh/seo.svg", description: "SEO"},
            {icon: "/assets/images/quytrinh/blog.svg", description: "Blogging"},
            {icon: "/assets/images/quytrinh/content.svg", description: "Tiếp thị nội dung"},
            {icon: "/assets/images/quytrinh/ads.svg", description: "Quảng cáo"},

        ],
    },
    {
        id: 2,
        text: "NHẬN ĐỊNH KHÁCH HÀNG TIỀM NĂNG",
        iconData: [
            {icon: "/assets/images/quytrinh/content.svg", description: "Tiếp thị nội dung"},
            {icon: "/assets/images/quytrinh/ads.svg", description: "Quảng cáo"},
            {icon: "/assets/images/quytrinh/email.svg", description: "Email Marketing"},
            {icon: "/assets/images/quytrinh/blog.svg", description: "Blogging"},
            {icon: "/assets/images/quytrinh/case.svg", description: "Case Study"},
            {icon: "/assets/images/quytrinh/automation.svg", description: "Automation"},
            {icon: "/assets/images/quytrinh/event.svg", description: "Sự Kiện"},
        ],
    },
    {
        id: 3,
        text: "CHUYỂN ĐỔI KHÁCH HÀNG",
        iconData: [
            {icon: "/assets/images/quytrinh/demo.svg", description: "Demo"},
            {icon: "/assets/images/quytrinh/testimonials.svg", description: "Ý Kiến Khách Hàng"},
            {icon: "/assets/images/quytrinh/case.svg", description: "Case Study"},
        ],
    },
    {
        id: 4,
        text: "GIỮ CHÂN KHÁCH HÀNG",
        iconData: [
            {icon: "/assets/images/quytrinh/trust.svg", description: "Xây dựng lòng tin"},
            {icon: "/assets/images/quytrinh/personal.svg", description: "Cá nhân hóa"},
            {icon: "/assets/images/quytrinh/promo.svg", description: "Triển khai ưu đãi"},
            {icon: "/assets/images/quytrinh/support.svg", description: "Hỗ trợ tận tâm"},
            {icon: "/assets/images/quytrinh/content.svg", description: "Tiếp thị nội dung"},
        ],
    },
];

const features = [
    {
        name: 'Sứ mệnh sáng tạo vượt giới hạn.',
        description:
            'Next.G không ngừng đổi mới để mang đến các giải pháp tối ưu, giúp doanh nghiệp của bạn tỏa sáng.',
        icon: GiBigWave,
    },
    {
        name: 'Chiến lược phù hợp mọi mục tiêu.',
        description: 'Chúng tôi thiết kế các kế hoạch linh hoạt, đáp ứng mọi nhu cầu và thách thức kinh doanh.',
        icon: PiStrategyBold,
    },
    {
        name: 'Đội ngũ chuyên gia tận tâm.',
        description: 'Với kinh nghiệm và đam mê, chúng tôi cam kết mang lại giá trị vượt mong đợi cho đối tác.',
        icon: FaPeopleGroup,
    },
]

const stats = [
    { id: 1, name: 'Năm phát triển', value: '4 +' },
    { id: 2, name: 'Cán bộ, nhân viên', value: '100 +' },
    { id: 3, name: 'Phản hồi tích cực', value: '96 %' },
    { id: 4, name: 'Khách hàng hài lòng', value: '50.000 +' },

]

const posts = [
    {
        id: 1,
        title: 'Chiến Lược Marketing Sáng Tạo Để Thương Hiệu Bứt Phá',
        href: '#',
        description:
            'Tìm hiểu cách các chiến lược marketing sáng tạo có thể giúp thương hiệu của bạn nổi bật trong thị trường cạnh tranh. Khám phá bí quyết tối ưu hóa nội dung và gắn kết khách hàng hiệu quả.',

        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },

    {
        id: 2,
        title: 'Tăng Trưởng Doanh Thu Với Quảng Cáo Đa Nền Tảng',
        href: '#',
        description:
            'Quảng cáo đa nền tảng là chìa khóa để tiếp cận khách hàng ở mọi điểm chạm. Trong bài viết này, chúng tôi chia sẻ cách kết hợp hiệu quả các kênh để đạt được kết quả kinh doanh vượt mong đợi.',

        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },

    {
        id: 3,
        title: 'Tối Ưu Hóa Hành Trình Khách Hàng Trong Thời Đại Số',
        href: '#',
        description:
            'Khách hàng ngày nay mong đợi trải nghiệm liền mạch và được cá nhân hóa. Tìm hiểu cách xây dựng hành trình khách hàng tối ưu để tăng cường lòng trung thành và tỷ lệ chuyển đổi.',

        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },

]
const HomePage = () => {

    const [activeCircle, setActiveCircle] = useState(null);
    useEffect(() => {
        setActiveCircle(1); // Tự động set activeCircle thành 1 khi load trang
    }, []);

    return (
        <main
            className="relative bg-custom-gradient md:min-h-screen w-screen overflow-hidden font-[Oswald] text-gray-800 min-h-[70vh]">
            <div className="">
                <div className="relative pt-16 sm:pt-32 md:pt-48 w-full pb-32 xl:pb-[30rem]"
                     style={{
                         backgroundImage: "url('/assets/images/banner/city3.png')",
                         backgroundSize: "cover",
                         backgroundRepeat: "no-repeat",
                         backgroundPosition: "center center",
                     }}
                >
                    {/* SVG Pattern */}

                    <div className="px-6 sm:px-8 md:px-10 pt-14 sm:pt-0">
                        <div className="mx-auto w-full max-w-7xl ">
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
                            {/*Slogan section*/}
                            <div className="relative flex flex-col items-center ">
                                {/* Scroll */}
                                <div
                                    className="hidden scroll_wrapper absolute bottom-[-5%] left-[-8%] xl:flex flex-col justify-center items-center gap-4 sm:left-[-20%] sm:bottom-[15%] md:bottom-[-40%]">
                                    <div
                                        className="scroll-down-loop-wrap w-[0.12rem] h-[3.5rem] overflow-hidden sm:h-[4.5rem] md:h-[5rem] mb-6">
                                        <div
                                            className="scroll-down-loop w-[0.12rem] h-20 bg-[#19183a] animate-scrollLoop transform translate-y-[3.283rem]"></div>
                                    </div>
                                    <div
                                        className="italic scroll_text mb-4 mt-4 text-[1.25rem] font-[Oswald] tracking-widest font-medium leading-[100%] inline-block rotate-[-90deg] normal-case sm:text-[1.75rem]">
                                        Khám Phá
                                    </div>
                                    <div
                                        className="scroll-down-loop-wrap w-[0.12rem] h-[3.5rem] overflow-hidden sm:h-[4.5rem] md:h-[5rem] mt-6">
                                        <div
                                            className="scroll-down-loop w-[0.12rem] h-20 bg-[#19183a] animate-scrollLoop transform translate-y-[3.283rem]"></div>
                                    </div>
                                </div>

                                {/*Xoay xoay*/}
                                <div
                                    className="relative w-40 h-40  flex justify-center items-center xl:absolute xl:top-[-10%] xl:bottom-auto xl:left-auto xl:right-[-5.5%]">
                                    {/* Label Round (spinning) */}
                                    <div
                                        className="w-full h-full animate-spinClockwise flex justify-center items-center">
                                        <img
                                            src="/assets/images/elements/label-round2.png"
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
                                <div className="w-full z-index: 0 text-center">
                                    <h1 className="tracking-wide mt-0 mb-1 text-gray-800 font-[Oswald] text-[4.75rem] sm:text-[5.5rem] md:text-[9.25rem] lg:text-[12.25rem] xl:text-[14.25rem] 2xl:text-[14.75rem] xl:mt-14 2xl:mt-10 font-bold ">
                                        <p className="mx-auto max-w-lg text-center text-[1.40rem] font-semibold tracking-tight sm:text-5xl italic">
                                            CREATIVITY TAKES THE LEAD
                                        </p>
                                        NEXTGENCY
                                    </h1>
                                </div>

                                <div
                                    className=" mt-36 lg:mt-20 xl:mt-44 lg:absolute lg:top-[100%] lg:bottom-auto lg:left-auto lg:right-[0.5%] bg-gray-800 text-white pl-[1.25rem] pr-[0.75rem] xl:pl-[5.35rem] xl:pr-[2.85rem] md:pl-[4.35rem] md:pr-[1.85rem] pb-5 rounded-[4rem]">
                                    <div>
                                        <div className="mt-6 flex justify-center gap-4">
                                            {/* Nút Chuyển Sang Trang Liên Hệ */}
                                            <a
                                                href="/liên-hệ"
                                                className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white w-[7.25rem] h-[3.25rem] sm:w-32 sm:h-16 font-semibold rounded-[2rem] shadow-lg xl:right-11 flex items-center justify-center relative group transition-all"
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
                                                href="/liên-hệ"
                                                className="relative font-[Oswald] font-bold tracking-widest uppercase text-[0.85rem] sm:text-base hover:text-[#38bdf8] px-1 py-4 group right-2"
                                            >
                                                Hợp tác ngay

                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Partners section*/}
            <div className="relative bg-custom-about w-full">
                {/* Content */}
                <div className="relative  sm:pt-0 z-10">
                    <div className="mx-auto w-full max-w-full">
                        <div className=" py-4">
                            <div className="">

                                {/* Slider logo */}
                                <div className="overflow-hidden relative">
                                    <div className="flex space-x-24 md:space-x-64 animate-slide">
                                        {/* Thêm các logo */}
                                        {[
                                            "/assets/images/partnerlogo/lark.png",
                                            "/assets/images/partnerlogo/pancake.png",
                                            "/assets/images/partnerlogo/pancake.png",
                                            "/assets/images/partnerlogo/pancake.png",
                                        ].map((logo, index) => (
                                            <div key={index} className="flex-shrink-0">
                                                <img
                                                    src={logo}
                                                    alt={`Logo Partner ${index + 1}`}
                                                    className="h-16 object-contain transition-all duration-200 transform hover:grayscale-0 grayscale"
                                                />
                                            </div>
                                        ))}
                                        {[
                                            "/assets/images/partnerlogo/lark.png",
                                            "/assets/images/partnerlogo/pancake.png",
                                            "/assets/images/partnerlogo/pancake.png",
                                            "/assets/images/partnerlogo/pancake.png",
                                        ].map((logo, index) => (
                                            <div key={index} className="flex-shrink-0">
                                                <img
                                                    src={logo}
                                                    alt={`Logo Partner ${index + 1}`}
                                                    className="h-16 object-contain transition-all duration-200 transform hover:grayscale-0 grayscale"
                                                />
                                            </div>
                                        ))}
                                        {[
                                            "/assets/images/partnerlogo/lark.png",
                                            "/assets/images/partnerlogo/pancake.png",
                                            "/assets/images/partnerlogo/pancake.png",
                                            "/assets/images/partnerlogo/pancake.png",
                                        ].map((logo, index) => (
                                            <div key={index} className="flex-shrink-0">
                                                <img
                                                    src={logo}
                                                    alt={`Logo Partner ${index + 1}`}
                                                    className="h-16 object-contain transition-all duration-200 transform hover:grayscale-0 grayscale"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*Quy Trinh section*/}
            <div className="relative bg-custom-gradient w-full pt-8 "
                 style={{
                     backgroundImage: "url('/assets/images/banner/bgsec5.png')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center center",
                     minHeight: "100vh",
                 }}>
                {/* SVG Pattern */}
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] z-0"
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
                <div className="px-6 sm:px-8 md:px-10 relative z-10">
                    <div className="mx-auto w-full max-w-7xl ">
                        <div className="">
                            <section className="py-9 font-[Oswald] rounded-3xl">
                                <div className="container mx-auto flex flex-col items-center space-y-10">
                                    {services.map((service) => (
                                        <div key={service.id} className="relative flex items-center">
                                            {/* Vòng tròn */}
                                            <div
                                                className={`relative flex flex-col items-center justify-center w-44 h-44 right-32 rounded-full border-[5px] cursor-pointer transition-all duration-500 ${
                                                    activeCircle === service.id
                                                        ? "w-44 h-44 sm:w-52 sm:h-52 bg-gradient-to-r from-blue-900 via-blue-800 to-sky-400 border-sky-400 text-white"
                                                        : "bg-white border-sky-600 shadow-lg shadow-blue-900 text-sky-600 translate-x-32 "
                                                } ${
                                                    service.id % 2 === 0 && activeCircle === service.id
                                                        ? "xl:translate-x-[33rem] mb-80 sm:mb-0"
                                                        : service.id % 2 !== 0 && activeCircle === service.id
                                                            ? "xl:-translate-x-64 mb-32 sm:mb-0"
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
                                                            className="flex flex-wrap w-1/4 items-center h-14 rounded-[3rem] bg-gradient-to-r from-blue-900 via-blue-800 to-sky-400 shadow-lg"

                                                        >
                                                            {/* Icon */}
                                                            <img
                                                                src={iconItem.icon}
                                                                alt={`icon-${index}`}
                                                                className="w-14 h-14 bg-white mr-2 border-2 border-blue-800 rounded-[3rem] "
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


            {/*Services section*/}
            <div
                className="relative bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950 w-full border-t-8 border-blue-400">
                <div className="px-6 sm:px-8 md:px-10 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl ">
                        <div className=" py-10 sm:py-32">
                            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                                <h2 className="text-center text-2xl font-semibold text-blue-500">NextGency</h2>
                                <p className="mx-auto text-white mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                                    Chúng tôi thổi hồn vào các thương hiệu, định hình bản sắc của họ bằng chiến lược
                                    sáng tạo
                                </p>
                                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                                    <div className="relative lg:row-span-2 h-[530px] my-auto">
                                        <div
                                            className="absolute inset-px rounded-lg bg-gradient-to-br from-sky-800 via-blue-950 to-gray-800 border-l-4 border-t-4 border-sky-400 max-lg:rounded-b-[2rem] lg:rounded-l-[2rem]"></div>
                                        <div
                                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">

                                            {/* Căn giữa chữ và nút trên màn hình nhỏ */}
                                            <div
                                                className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 flex flex-col items-center justify-center h-full">
                                                <h3 className="mt-2 text-3xl font-medium tracking-tight text-white text-center uppercase">
                                                    Content
                                                </h3>

                                                <ul className="mt-4 text-xl text-gray-100 text-center">
                                                    <li>Content Branding - Content Viral</li>
                                                    <li>Seeing Campaign - Event Planer</li>
                                                    <li>Marketing Plan</li>
                                                </ul>

                                                {/* Nút More */}
                                                <Link
                                                    to="/dịch-vụ#content"
                                                    className="px-6 py-3 mt-5 bg-blue-600 hover:bg-blue-800 text-white w-32 h-16 font-semibold rounded-[2rem] shadow-lg flex items-center justify-center relative transition-all"
                                                >
                <span className="absolute text-3xl group-hover:opacity-0 transition-opacity duration-300">
                    <MdReadMore/>
                </span>
                                                    <span
                                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Xem Thêm
                </span>
                                                </Link>
                                            </div>

                                            <div className="relative min-h-[30rem] w-full grow">
                                                <div
                                                    className="flex items-center justify-center px-8 sm:px-10 lg:pb-2">
                                                    <img
                                                        className="w-full max-lg:max-w-xs"
                                                        src="/assets/images/elements/4.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative max-lg:row-start-1 flex items-center justify-center text-center">
                                        <div
                                            className="absolute inset-px rounded-lg bg-custom-gradient rounded-t-[2rem]"></div>
                                        <div
                                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                                <div className="">
                                                    <p className="ml-4 mt-2 text-3xl font-medium tracking-tight text-blue-600 max-lg:text-center uppercase">Media</p>
                                                </div>
                                                <p className="mt-2 max-w-lg text-xl sm:ml-5 lg:ml-2 text-gray-700 max-lg:text-center">
                                                    Design - Video Edit
                                                    <br/>Media & Production House

                                                </p>
                                            </div>
                                            <div
                                                className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                                <img
                                                    className="w-full max-lg:max-w-xs"
                                                    src="/assets/images/elements/2.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                                    </div>
                                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 flex items-center justify-center text-center">
                                        <div
                                            className="absolute inset-px rounded-lg bg-custom-gradient sm:rounded-b-[2rem] "></div>
                                        <div
                                            className="relative flex h-full flex-col overflow-hidden  ">
                                            <div className="px-8 pt-8 sm:px-10 sm:pt-10 ">
                                                <div className="">
                                                    <p className="ml-4 mt-2 text-3xl font-medium tracking-tight text-blue-600 max-lg:text-center uppercase">Digital
                                                        Ads + Traffic</p>
                                                </div>
                                                <p className="mt-2 max-w-lg text-xl sm:ml-5 lg:ml-2 text-gray-700 max-lg:text-center">
                                                    Digital Ads: Facebook - TikTok, Google
                                                    <br/>Chăm sóc khách hàng
                                                </p>
                                            </div>
                                            <div
                                                className="flex flex-1 items-center  max-lg:py-6 lg:pb-2 mx-10">
                                            <img
                                                    className="size-full object-cover object-top "
                                                    src="/assets/images/elements/3.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                                    </div>
                                    <div className="relative lg:row-span-2 h-[550px] my-auto">
                                        <div
                                            className="absolute inset-px rounded-lg bg-gradient-to-br from-sky-800 via-blue-950 to-gray-800 border-r-4 border-t-4 border-sky-400 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                                        <div
                                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">

                                            {/* Căn giữa chữ và nút trên màn hình nhỏ */}
                                            <div
                                                className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 flex flex-col items-center justify-center h-full">
                                                <h3 className="mt-2 text-3xl font-medium tracking-tight text-white text-center uppercase">
                                                    Marketing
                                                </h3>

                                                <ul className="mt-4 text-xl text-gray-100 text-center">
                                                    <li>Performance Marketing</li>
                                                    <li>Content Marketing</li>
                                                    <li>Influencer Marketing</li>
                                                    <li>Marketing Automation</li>
                                                </ul>

                                                {/* Nút More */}
                                                <Link
                                                    to="/dịch-vụ#marketing"
                                                    className="px-6 py-3 mt-5 bg-blue-600 hover:bg-blue-800 text-white w-32 h-16 font-semibold rounded-[2rem] shadow-lg flex items-center justify-center relative transition-all"
                                                >
                <span className="absolute text-3xl group-hover:opacity-0 transition-opacity duration-300">
                    <MdReadMore/>
                </span>
                                                    <span
                                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Xem Thêm
                </span>
                                                </Link>
                                            </div>

                                            <div className="relative min-h-[30rem] w-full grow">
                                                <div
                                                    className="flex flex-1 items-center justify-center px-8 sm:px-10 lg:pb-2">
                                                    <img
                                                        className="w-full max-lg:max-w-xs"
                                                        src="/assets/images/elements/5.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="">
                            <div className="mx-auto max-w-7xl pb-24 sm:px-6 sm:pb-32 lg:px-8">
                                <div
                                    className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                                    >
                                        <circle r={512} cx={512} cy={512}
                                                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7"/>
                                        <defs>
                                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                                <stop stopColor="#7775D6"/>
                                                <stop offset={1} stopColor="#1d4ed8"/>
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                    <div
                                        className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                            Hợp tác cùng NextGency – Đưa thương hiệu của bạn vươn xa hơn bao giờ hết !
                                        </h2>
                                        <p className="mt-6 text-pretty text-xl text-gray-300">
                                            NextGency đồng hành để nâng tầm thương hiệu và chinh phục mọi mục tiêu kinh
                                            doanh.
                                        </p>
                                        <div className="mt-10 sm:mt-24 flex justify-center gap-4">
                                            {/* Nút Chuyển Sang Trang Liên Hệ */}
                                            <a
                                                href="/liên-hệ"
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
                                                href="/liên-hệ"
                                                className="relative font-[Oswald] text-white font-bold tracking-widest uppercase text-base hover:text-[#38bdf8] px-1 py-4 group right-2"
                                            >
                                                Hợp tác ngay
                                                <span
                                                    className="absolute left-0 bottom-3 w-full h-[1px] bg-white transition-all duration-300 group-hover:bg-[#38bdf8]"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="relative mt-16 h-auto lg:mt-8 max-w-screen-lg mx-auto">
                                        <img
                                            alt="App screenshot"
                                            src="/assets/images/elements/hoptac.jpg"
                                            className="w-full h-auto rounded-md bg-white/5 ring-1 ring-white/10"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/*About us section*/}
            <div className="  relative bg-custom-gradient w-full"
                 style={{
                     backgroundImage: "url('/assets/images/banner/bgsec5.png')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center center",
                     minHeight: "100vh",
                 }}>
                {/* SVG Pattern */}
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] z-0"
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
                <div className="relative z-10 px-6 sm:px-8 md:px-10 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl ">
                        <div className="overflow-hidden py-10 sm:py-32">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div
                                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                    <div className="lg:pr-8 ">
                                        <div className="lg:max-w-lg">
                                            <h2 className="text-base/7 font-semibold text-blue-600 text-center">NEXTGENCY</h2>
                                            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center">
                                                Khám phá về NextGency
                                            </p>
                                            <p className="mt-6 text-lg/8 text-gray-600 text-center">
                                                "Khám phá NextGency – Nơi sáng tạo và chiến lược hội tụ để thúc đẩy sự
                                                bứt
                                                phá vượt mọi giới hạn"
                                            </p>
                                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                                {features.map((feature) => (
                                                    <div key={feature.name} className="relative pl-9">
                                                        <dt className="inline font-semibold text-gray-900">
                                                            <feature.icon aria-hidden="true"
                                                                          className="absolute left-1 top-1 size-6 text-blue-600"/>
                                                            {feature.name}
                                                        </dt>
                                                        {' '}
                                                        <dd className="inline">{feature.description}</dd>
                                                    </div>
                                                ))}
                                            </dl>
                                            <div className="mt-24 flex justify-center gap-4">
                                                {/* Nút Chuyển Sang Trang Liên Hệ */}
                                                <a
                                                    href="/giới-thiệu"
                                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white w-32 h-16 font-semibold rounded-[2rem] shadow-lg xl:right-11 flex items-center justify-center relative group transition-all"
                                                >
                                            <span
                                                className="absolute text-2xl group-hover:opacity-0 transition-opacity duration-300">
                                            <MdCallMade/>
                                            </span>
                                                    <span
                                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Xem Thêm</span>
                                                </a>

                                                {/* Nút Hợp Tác Ngay */}
                                                <a
                                                    href="/liên-hệ"
                                                    className="relative font-[Oswald] font-bold tracking-widest uppercase text-base hover:text-[#38bdf8] px-1 py-4 group right-2"
                                                >
                                                    Hợp tác ngay
                                                    <span
                                                        className="absolute left-0 bottom-3 w-full h-[1px] bg-[#1F2937] transition-all duration-300 group-hover:bg-[#38bdf8]"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        alt="Product screenshot"
                                        src="/assets/images/about/about-us.jpg"
                                        width={2432}
                                        height={1442}
                                        className="w-full md:mt-14 max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0 grayscale-[50%] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" pb-24 sm:pb-32">
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


            {/*Feedback section*/}
            <div
                className="relative bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950 w-full border-t-8 border-blue-400">
                <div className="px-6 sm:px-8 md:px-10 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl ">

                        <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                            <div className="md:flex md:items-end md:justify-between">
                                <div className="max-w-xl">
                                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                        Đánh giá từ khách hàng đã tin tưởng
                                        <span
                                            className="text-4xl font-bold tracking-tight text-blue-500 sm:text-5xl"> Nextgency</span>
                                    </h2>

                                    <p className="mt-6 max-w-lg leading-relaxed text-white">
                                        Đánh giá từ khách hàng đã tin tưởng Nextgency, là minh chứng rõ ràng cho chất
                                        lượng và cam kết của chúng tôi. Những phản hồi tích cực không chỉ là kết quả của
                                        sự hợp tác hiệu quả mà còn là động lực để Nextgency tiếp tục phát triển và mang
                                        đến những giải pháp sáng tạo, đột phá cho mỗi đối tác.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                                <blockquote
                                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
                                    <div>
                                        <div className="flex gap-0.5 text-red-600">
                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-2xl font-bold text-gray-800 sm:text-3xl">Thật sự ấn
                                                tượng</p>

                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Nextgency đã giúp chúng tôi phát triển chiến lược marketing sáng tạo và
                                                hiệu quả, mang lại kết quả vượt mong đợi. Đội ngũ chuyên nghiệp, luôn
                                                sẵn sàng hỗ trợ và điều chỉnh theo nhu cầu cụ thể của doanh nghiệp.
                                                Chúng tôi rất hài lòng.
                                            </p>
                                        </div>
                                    </div>

                                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                        &mdash; Nguyễn Thị Lan, CEO - Lan Huế Bakery
                                    </footer>
                                </blockquote>

                                <blockquote
                                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
                                    <div>
                                        <div className="flex gap-0.5 text-red-600">
                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-2xl font-bold text-gray-800 sm:text-3xl">Rất đáng tin
                                                cậy</p>

                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Chúng tôi đã tìm được đối tác đáng tin cậy với Nextgency. Các giải pháp
                                                marketing của họ không chỉ sáng tạo mà còn rất thực tế, giúp tăng trưởng
                                                doanh thu và nâng cao thương hiệu một cách bền vững.
                                            </p>
                                        </div>
                                    </div>

                                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                        &mdash; Hoàng Minh, Giám đốc - Tech Solutions
                                    </footer>
                                </blockquote>

                                <blockquote
                                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
                                    <div>
                                        <div className="flex gap-0.5 text-red-600">
                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>

                                            <svg
                                                className="size-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-2xl font-bold text-gray-800 sm:text-3xl">Nextgency số
                                                1</p>

                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Nextgency đã thay đổi cách chúng tôi tiếp cận khách hàng, giúp tối ưu
                                                hóa chiến dịch marketing và gia tăng tỉ lệ chuyển đổi. Họ thực sự hiểu
                                                rõ nhu cầu và mang lại những giải pháp hiệu quả nhất.
                                            </p>
                                        </div>
                                    </div>

                                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                        &mdash; Nguyễn Minh Tân, Giám đốc - Tân Phú Electronics
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Partners section*/}
            <div className="relative w-full">
                {/* Content */}
                <div className="relative  sm:pt-0 z-10">
                    <div className="mx-auto w-full max-w-full">
                        <div className=" py-7">
                            <div className="">

                                {/* Slider logo */}
                                <div className="overflow-hidden relative">
                                    <div className="flex space-x-24 md:space-x-64 animate-slide">
                                        {/* Thêm các logo */}
                                        {[
                                            "/assets/images/partnerlogo/larklight.png",
                                            "/assets/images/partnerlogo/pancakelight.png",
                                            "/assets/images/partnerlogo/pancakelight.png",
                                            "/assets/images/partnerlogo/pancakelight.png",
                                        ].map((logo, index) => (
                                            <div key={index} className="flex-shrink-0">
                                                <img
                                                    src={logo}
                                                    alt={`Logo Partner ${index + 1}`}
                                                    className="h-16 object-contain transition-all duration-200 transform hover:grayscale-0 grayscale-[80%]"
                                                />
                                            </div>
                                        ))}
                                        {[
                                            "/assets/images/partnerlogo/larklight.png",
                                            "/assets/images/partnerlogo/pancakelight.png",
                                            "/assets/images/partnerlogo/pancakelight.png",
                                            "/assets/images/partnerlogo/pancakelight.png",
                                        ].map((logo, index) => (
                                            <div key={index} className="flex-shrink-0">
                                                <img
                                                    src={logo}
                                                    alt={`Logo Partner ${index + 1}`}
                                                    className="h-16 object-contain transition-all duration-200 transform hover:grayscale-0 grayscale-[80%] "
                                                />
                                            </div>
                                        ))}
                                        {[
                                            "/assets/images/partnerlogo/larklight.png",
                                            "/assets/images/partnerlogo/pancakelight.png",
                                            "/assets/images/partnerlogo/pancakelight.png",
                                            "/assets/images/partnerlogo/pancakelight.png",
                                        ].map((logo, index) => (
                                            <div key={index} className="flex-shrink-0">
                                                <img
                                                    src={logo}
                                                    alt={`Logo Partner ${index + 1}`}
                                                    className="h-16 object-contain transition-all duration-200 transform hover:grayscale-0 grayscale-[80%]"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative pt-16 sm:pt-32 md:pt-48 w-full pb-52 xl:pb-[30rem] border-b-8 border-blue-400"
                 style={{
                     backgroundImage: "url('/assets/images/banner/anhsection.jpg')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center center",
                     minHeight: "100vh",
                 }}
            >
            </div>


            <div className="relative bg-custom-gradient py-10 sm:py-10"
                 style={{
                     backgroundImage: "url('/assets/images/banner/bgsec5.png')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center center",
                     minHeight: "90vh",
                 }}>
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] z-0"
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

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950 mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-44 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-white">Tổng Quan Bảng Giá</h3>
                            <p className="mt-6 text-base leading-7 text-gray-100">Khám phá bảng giá linh hoạt của Nextgency, được thiết kế phù hợp với mọi nhu cầu marketing, giúp bạn tối ưu ngân sách và đạt hiệu quả vượt mong đợi.</p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-xl font-semibold leading-6 text-blue-500">Bao Gồm</h4>
                                <div className="h-px flex-auto bg-gray-100"></div>
                            </div>
                            <ul role="list"
                                className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                                <Link to="/dịch-vụ#content" className="flex gap-x-3 text-white hover:text-blue-500">
                                    <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Content
                                </Link>
                                <Link to="/dịch-vụ#digital" className="flex gap-x-3 text-white hover:text-blue-500">
                                    <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Digital Ads + Traffic
                                </Link>
                                <Link to="/dịch-vụ#media" className="flex gap-x-3 text-white hover:text-blue-500">
                                    <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Media
                                </Link>
                                <Link to="/dịch-vụ#marketing" className="flex gap-x-3 text-white hover:text-blue-500">
                                    <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Marketing
                                </Link>
                            </ul>
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
                            <div
                                className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div className="mx-auto max-w-xs px-8">
                                    <p className="text-base font-semibold text-gray-600"></p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-3xl font-bold tracking-tight text-gray-900">Bảng Giá Niêm Yết</span>
                                        <span
                                            className="text-sm font-semibold leading-6 tracking-wide text-gray-600"></span>
                                    </p>
                                    <a href="/Price"
                                       className="mt-10 block w-full rounded-[4rem] bg-blue-600 py-4 text-center text-lg font-bold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">Xem Bảng Giá</a>
                                    <p className="mt-6 text-lg leading-5 text-gray-600">Liên hệ trực tiếp để nhận giá khuyến mãi </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Blog section*/}
            <div className="relative bg-custom-gradient w-full"
                 style={{
                     backgroundImage: "url('/assets/images/banner/bgsec5.png')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center center",
                     minHeight: "80vh",
                 }}>

                <div className="relative z-10 px-6 sm:px-8 md:px-10 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl ">
                        <div className=" py-10 sm:py-20">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div className="mx-auto max-w-full text-center lg:mx-0">
                                    <h2 className="uppercase text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">Blog</h2>
                                    <p className="mt-2 text-lg/8 text-gray-600">Đây là nơi đội ngũ của chúng tôi chia sẻ
                                        những bài học và góc nhìn về tiếp thị, chiến lược số, tăng trưởng, SEO, sản
                                        phẩm, và nhiều hơn nữa.</p>
                                </div>
                                <div
                                    className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {posts.map((post) => (
                                        <article key={post.id}
                                                 className="flex max-w-xl flex-col items-start justify-between">
                                            <div className="flex items-center gap-x-4 text-xs">
                                                <a
                                                    href={post.category.href}
                                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                                >
                                                    {post.category.title}
                                                </a>
                                            </div>
                                            <div className="group relative">
                                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                                    <a href={post.href}>
                                                        <span className="absolute inset-0"/>
                                                        {post.title}
                                                    </a>
                                                </h3>
                                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                                            </div>
                                            <div className="relative mt-8 flex items-center gap-x-4">
                                                <img alt="" src={post.author.imageUrl}
                                                     className="size-10 rounded-full bg-gray-50"/>
                                                <div className="text-sm/6">
                                                    <p className="font-semibold text-gray-900">
                                                        <a href={post.author.href}>
                                                            <span className="absolute inset-0"/>
                                                            {post.author.name}
                                                        </a>
                                                    </p>
                                                    <p className="text-gray-600">{post.author.role}</p>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default HomePage;
