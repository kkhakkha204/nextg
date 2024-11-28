import React from "react";
import { useState } from "react";
import {MdCallMade, MdReadMore} from "react-icons/md";

const ServicesPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const data = [
        {
            id: 1,
            title: "Performance Marketing",
            description: "Đo lường hiệu quả, tối ưu chi phí quảng cáo.",
            details: ["Chiến lược: Sử dụng phân tích dữ liệu để tối ưu hóa các chiến dịch quảng cáo nhằm tăng tỷ lệ chuyển đổi và tối đa hóa lợi tức đầu tư quảng cáo (ROAS).",
                "Cách triển khai: Bao gồm quảng cáo nhắm mục tiêu dựa trên hành vi và thói quen mua sắm của khách hàng, các chiến dịch tiếp thị liên kết, và đo lường hiệu suất từng chiến dịch để điều chỉnh kịp thời.",
                "Các công cụ chính: Google Analytics, Facebook Ads Manager, SEMrush."],
            image: "/assets/images/marketing/pm.jpg",
        },
        {
            id: 2,
            title: "Content Marketing",
            description: "Nội dung chất lượng, thu hút và giữ chân khách hàng.",
            details: ["Chiến lược: Xây dựng và phân phối nội dung giá trị nhằm tăng cường sự hiện diện thương hiệu và tạo dựng lòng tin của khách hàng.",
                "Cách triển khai: Phát triển nội dung dạng bài viết blog, video hướng dẫn, đồ họa thông tin (infographics), và ebook. Nội dung phải phù hợp với từng giai đoạn trong hành trình khách hàng, từ thông tin chung đến hướng dẫn chi tiết.",
                "Các kênh sử dụng: Website, blog, YouTube, LinkedIn."],
            image: "/assets/images/marketing/cm.jpg",
        },
        {
            id: 3,
            title: "Influencer Marketing",
            description: "Hợp tác cùng KOLs để tăng độ phủ thương hiệu.",
            details: ["Chiến lược: Hợp tác với những người ảnh hưởng (influencers) phù hợp với tệp khách hàng mục tiêu của thương hiệu để tăng độ tin cậy và tiếp cận.",
                "Cách triển khai: Tìm kiếm các influencers có uy tín và tương tác tốt, sau đó thiết lập các chiến dịch đánh giá sản phẩm, video mở hộp, hoặc livestream dùng thử sản phẩm để thu hút khách hàng.",
                "Các kênh sử dụng: Instagram, YouTube, TikTok."],
            image: "/assets/images/marketing/im.jpg",
        },
        {
            id: 4,
            title: "Social Media Marketing",
            description: "Kết nối khách hàng qua nền tảng mạng xã hội.",
            details: ["Chiến lược: Tận dụng sức mạnh của các nền tảng mạng xã hội để xây dựng sự gắn kết với khách hàng và quảng bá sản phẩm/dịch vụ.",
                "Cách triển khai: Tạo nội dung tương tác như cuộc thi, khảo sát, livestream, và bài đăng đa dạng phù hợp với từng nền tảng mạng xã hội.",
                "Các công cụ quản lý: Hootsuite, Buffer, Sprout Social."],
            image: "/assets/images/marketing/sm.jpg",
        },
        {
            id: 5,
            title: "Marketing Automation",
            description: "Tự động hóa tiếp thị, tối ưu hóa quy trình.",
            details: ["Chiến lược: Sử dụng công nghệ tự động hóa để tối ưu hóa và cá nhân hóa quy trình chăm sóc khách hàng.",
                "Cách triển khai: Phân khúc khách hàng, thiết lập chuỗi email chào mừng, nhắc nhở giỏ hàng bỏ dở, và gửi thông báo về các ưu đãi mới đến khách hàng cũ.",
                "Các công cụ chính: HubSpot, Marketo, ActiveCampaign."],
            image: "/assets/images/marketing/am.jpg",
        },
        {
            id: 6,
            title: "Email Marketing",
            description: "Gửi email đúng đối tượng, nâng cao tỷ lệ chuyển đổi.",
            details: ["Chiến lược: Xây dựng danh sách email và phát triển các chuỗi email tự động để giữ chân và chăm sóc khách hàng tiềm năng.",
                "Cách triển khai: Gửi email chào mừng, thông báo khuyến mãi, và các nội dung chăm sóc khách hàng, có tính cá nhân hóa để tăng tỷ lệ mở và tương tác.",
                "Các công cụ email marketing: Mailchimp, Klaviyo, Drip."],
            image: "/assets/images/marketing/em.jpg",
        },
    ];

    return (
        <main className="relative min-h-screen w-screen bg-custom-gradient overflow-hidden font-[Oswald] text-gray-800">

            <div className="relative pt-16 sm:pt-32 md:pt-48 w-full"
                 style={{
                     backgroundImage: "url('/assets/images/banner/servicebg3.png')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center center",
                     minHeight: "100vh",
                 }}>
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
                                <h1 className="tracking-wide mt-0 mb-1 text-gray-800 font-[Oswald] text-[4.05rem] sm:text-[5.5rem] md:text-[9.25rem] lg:text-[12.25rem] xl:text-[14.25rem] 2xl:text-[14.75rem] xl:mt-14 2xl:mt-10 font-bold ">
                                    NEXTGENCY
                                </h1>
                            </div>

                            <div
                                className="mt-5 xl:absolute xl:top-[100%] xl:bottom-auto xl:left-auto xl:right-[0.5%] ">
                                <div>
                                    <p className="font-[Oswald] md:text-2xl text-lg font-[350] leading-[1.5] tracking-wider">
                                        Dù bạn đang bắt đầu xây dựng chiến lược marketing
                                        <br/>hay muốn khám phá các phương pháp mới,
                                        <br/>chúng tôi có đầy đủ công cụ và kinh nghiệm
                                        <br/>để giúp doanh nghiệp của bạn phát triển.
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
                    </div>
                </div>
            </div>


            <div className="relative bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950  w-full">
                <div className="px-6 sm:px-8 md:px-10 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl ">
                        <div
                            className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

                            <div
                                className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                                <div
                                    className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                    <div className="lg:pr-4">
                                        <div className="lg:max-w-lg">
                                            <p className="text-base/7 font-semibold text-indigo-600">NEXTGENCY</p>
                                            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl uppercase">
                                                Tư vấn và xây dựng thương hiệu
                                            </h1>
                                            <p className="mt-6 text-xl/8 text-gray-200">
                                                Chúng tôi giúp doanh nghiệp định hình bản sắc thương hiệu,
                                                tạo dựng giá trị cốt lõi và xây dựng hình ảnh mạnh mẽ trên thị trường.
                                                Với sự kết hợp giữa chiến lược sáng tạo và chuyên môn sâu rộng, chúng
                                                tôi
                                                không chỉ tư vấn mà còn đồng hành cùng bạn trong việc phát triển một
                                                thương hiệu bền vững, khác biệt và đầy sức hút.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                                        className="w-[48rem] max-w-none border-l-4 border-blue-400 ring-1 ring-gray-400/10 sm:w-[57rem]"
                                    />
                                </div>
                                <div
                                    className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                    <div className="lg:pr-4">
                                        <div className="max-w-xl text-base/7 text-gray-200 lg:max-w-lg">

                                            <ul role="list" className="mt-8 space-y-8 ">
                                                <li className="flex gap-x-3">

                                                    <span>
                    <strong className="font-bold text-blue-500 ">Chiến lược:</strong> Phát triển và củng cố thương hiệu bằng cách xác định thông điệp cốt lõi và bản sắc thương hiệu.
                  </span>
                                                </li>
                                                <li className="flex gap-x-3">

                                                    <span>
                    <strong className="font-bold text-blue-500 ">Cách triển khai:</strong> Phân tích thị trường, nghiên cứu hành vi người tiêu dùng, và xây dựng chiến lược thương hiệu bao gồm logo, slogan, và câu chuyện thương hiệu nhất quán trên mọi kênh.
                  </span>
                                                </li>
                                                <li className="flex gap-x-3">

                                                    <span>
                    <strong className="font-bold text-blue-500 ">Công cụ nghiên cứu:</strong> Các báo cáo thị trường, công cụ nghiên cứu đối thủ, khảo sát khách hàng.
                  </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-custom-gradient w-full"
                 style={{
                     backgroundImage: "url('/assets/images/banner/servicebg2.png')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center center",
                     minHeight: "100vh",
                 }}>
                <div className="px-6 sm:px-8 md:px-10 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl">
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
                            className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                            <div className="mx-auto grid max-w-2xl lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
                                {/* Image Section */}
                                <div className="lg:col-start-1 lg:row-start-1 lg:overflow-hidden">
                                    <img
                                        alt="NEXTGENCY"
                                        src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                    />
                                </div>
                                {/* Text Section */}
                                <div className="lg:col-start-2 lg:row-start-1 lg:pl-8">
                                    <p className="text-base font-semibold text-indigo-600">NEXTGENCY</p>
                                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl uppercase">
                                        Quảng cáo kỹ thuật số toàn diện
                                    </h1>
                                    <p className="mt-6 text-xl text-gray-700">
                                        Chúng tôi triển khai quảng cáo kỹ thuật số toàn diện,
                                        tối ưu hóa từng giai đoạn trong hành trình khách hàng.
                                        Từ nhận diện thương hiệu đến chuyển đổi và giữ chân,
                                        giải pháp của chúng tôi đảm bảo hiệu quả và tăng trưởng bền vững.
                                    </p>
                                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                        <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">Chiến lược:</strong> Triển khai chiến dịch quảng cáo theo mô hình phễu toàn diện để thúc đẩy hành trình khách hàng từ nhận thức đến chuyển đổi.
                </span>
                                        </li>
                                        <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">Cách triển khai:</strong> Quảng cáo hiển thị để tăng nhận diện thương hiệu, quảng cáo tìm kiếm và video để thúc đẩy sự quan tâm, retargeting cho các giai đoạn chuyển đổi cuối cùng.
                </span>
                                        </li>
                                        <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">Các kênh sử dụng:</strong> Google Display Network, YouTube, mạng xã hội như Facebook và Instagram.
                </span>
                                        </li>
                                    </ul>
                                    <div className="mt-24 flex justify-center gap-4">
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
                                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Liên Hệ</span>
                                        </a>

                                        {/* Nút Hợp Tác Ngay */}
                                        <a
                                            href="/liên-hệ"
                                            className="relative font-[Oswald] font-bold tracking-widest uppercase text-base hover:text-[#38bdf8] px-1 py-4 group right-2"
                                        >
                                            Gia Nhập Next.G
                                            <span
                                                className="absolute left-0 bottom-3 w-full h-[1px] bg-[#1F2937] transition-all duration-300 group-hover:bg-[#38bdf8]"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950 w-full px-6 py-10">
                {/* Grid 6 hình chữ nhật */}
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={`p-4 rounded-2xl shadow-md cursor-pointer transition ${
                                selectedItem?.id === item.id
                                    ? "bg-gradient-to-r from-blue-900 via-blue-800 to-sky-400 text-white border-4 border-sky-400"
                                    : "bg-white hover:bg-gray-700 text-sky-800 hover:text-white border-4 border-sky-600"
                            }`}
                            onClick={() => setSelectedItem(item)}
                        >
                            <h2 className="text-lg font-semibold">{item.id}</h2>
                            <h3 className="text-xl font-medium mt-2">{item.title}</h3>
                            <p className="text-base mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Khung thông tin chi tiết */}
                {selectedItem && (
                    <div
                        className="mt-10 w-full max-w-[90%] md:max-w-[70rem] mx-auto bg-gradient-to-br from-sky-800 via-blue-950 to-gray-800 p-6 border-l-4 border-t-4 border-sky-400 rounded-xl shadow-md text-white">
                        <h2 className="text-2xl font-semibold mb-4">{selectedItem.title}</h2>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            {/* Danh sách chi tiết */}
                            <ul className="list-disc pl-5 space-y-20 flex-1">
                                {selectedItem.details.map((detail, index) => (
                                    <li key={index} className="text-md">{detail}</li>
                                ))}
                                <div className="mt-24 flex justify-center gap-4">
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
                                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Liên Hệ</span>
                                    </a>

                                    {/* Nút Hợp Tác Ngay */}
                                    <a
                                        href="/liên-hệ"
                                        className="relative font-[Oswald] font-bold tracking-widest uppercase text-base hover:text-[#38bdf8] px-1 py-4 group right-2"
                                    >
                                        Gia Nhập Next.G
                                        <span
                                            className="absolute left-0 bottom-3 w-full h-[1px] bg-white transition-all duration-300 group-hover:bg-[#38bdf8]"></span>
                                    </a>
                                </div>
                            </ul>

                            {/* Ảnh minh họa */}
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="w-full max-w-[22rem] md:max-w-[28rem] rounded-md shadow-md"
                            />
                        </div>
                    </div>
                )}
            </div>


            <div className="relative bg-custom-gradient to-blue-950 w-full"
                 style={{
                     backgroundImage: "url('/assets/images/banner/servicebg2.png')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center center",
                     minHeight: "100vh",
                 }}>
                <div className="px-6 sm:px-8 md:px-10 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl ">
                        <div
                            className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

                            <div
                                className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                                <div
                                    className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                    <div className="lg:pr-4">
                                        <div className="lg:max-w-lg">
                                            <p className="text-base/7 font-semibold text-indigo-600">NEXTGENCY</p>
                                            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl uppercase">
                                                Tối ưu hóa công cụ tìm kiếm
                                            </h1>
                                            <p className="mt-6 text-xl/8 text-gray-700">
                                                Tối ưu hóa công cụ tìm kiếm (SEO) giúp cải thiện thứ hạng website trên
                                                Google và các nền tảng tìm kiếm,
                                                thu hút lưu lượng truy cập tự nhiên, tăng khả năng tiếp cận khách hàng
                                                tiềm năng và nâng cao uy tín thương hiệu.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                                        className="w-[48rem] max-w-none border-l-4 border-blue-400 ring-1 ring-gray-400/10 sm:w-[57rem]"
                                    />
                                </div>
                                <div
                                    className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                    <div className="lg:pr-4">
                                        <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">

                                            <ul role="list" className="mt-8 space-y-8 ">
                                                <li className="flex gap-x-3">

                                                    <span>
                    <strong className="font-bold text-gray-900 ">Chiến lược:</strong> Tăng cường khả năng hiển thị trên công cụ tìm kiếm để thu hút lưu lượng truy cập tự nhiên đến website.
                  </span>
                                                </li>
                                                <li className="flex gap-x-3">

                                                    <span>
                    <strong className="font-bold text-gray-900 ">Cách triển khai:</strong> Phân tích từ khóa, tối ưu hóa nội dung và cấu trúc trang web, cải thiện tốc độ tải trang, và xây dựng backlink chất lượng cao.
                  </span>
                                                </li>
                                                <li className="flex gap-x-3">

                                                    <span>
                    <strong className="font-bold text-gray-900 ">Các công cụ hỗ trợ:</strong> Ahrefs, Moz, Google Search Console.
                  </span>
                                                </li>
                                            </ul>
                                            <div className="mt-24 flex justify-center gap-4">
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
                                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Liên Hệ</span>
                                                </a>

                                                {/* Nút Hợp Tác Ngay */}
                                                <a
                                                    href="/liên-hệ"
                                                    className="relative font-[Oswald] font-bold tracking-widest uppercase text-base hover:text-[#38bdf8] px-1 py-4 group right-2"
                                                >
                                                    Gia Nhập Next.G
                                                    <span
                                                        className="absolute left-0 bottom-3 w-full h-[1px] bg-[#1F2937] transition-all duration-300 group-hover:bg-[#38bdf8]"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </main>


)
    ;
};

export default ServicesPage;
