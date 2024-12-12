import React, {useState} from "react";
import {
    MdCallMade,
    MdContentPaste,
    MdEmail,
    MdOutlineAnalytics,
    MdPersonSearch,
    MdSettings,
    MdShare
} from "react-icons/md";
import {
    CheckCircleIcon,
    CogIcon,
    LightBulbIcon,
    ServerIcon,
    ShieldCheckIcon,
    UserGroupIcon
} from "@heroicons/react/16/solid";

const AboutPage = () => {
    const icons = {
        1: <LightBulbIcon className="w-12 h-12 text-blue-800" />,
        2: <ServerIcon className="w-12 h-12 text-blue-800" />,
        3: <ShieldCheckIcon className="w-12 h-12 text-blue-800" />,
        4: <UserGroupIcon className="w-12 h-12 text-blue-800" />,
        5: <CogIcon className="w-12 h-12 text-blue-800" />,
        6: <CheckCircleIcon className="w-12 h-12 text-blue-800" />,
    };

    const data = [
        {
            id: 1,
            title: "Sáng tạo không giới hạn",

            details: ["Phát huy tư duy sáng tạo để tạo ra các chiến dịch độc đáo, phù hợp với thương hiệu và thu hút đối tượng khách hàng mục tiêu.",
                "Đội ngũ Nextgency thường xuyên tổ chức brainstorming và thử nghiệm những ý tưởng mới, chẳng hạn sử dụng video ngắn trên TikTok hoặc tổ chức các chiến dịch tương tác qua mạng xã hội.",
            ],
            image: "/assets/images/marketing/pm.jpg",
        },
        {
            id: 2,
            title: "Hiệu quả dữ liệu làm nền tảng",

            details: ["Đưa ra quyết định dựa trên phân tích dữ liệu, sử dụng các công cụ như Google Analytics, Data Studio để thu thập và đánh giá hiệu suất chiến dịch.",
                "Từng quyết định tối ưu hóa đều dựa vào dữ liệu thực tế, như phân tích hành vi người dùng trên website để điều chỉnh các nội dung quảng cáo hoặc thời gian đăng bài.",
                ],
            image: "/assets/images/marketing/cm.jpg",
        },
        {
            id: 3,
            title: "Minh bạch và đáng tin cậy",

            details: ["Mỗi bước thực hiện đều minh bạch với khách hàng, cung cấp báo cáo định kỳ và phân tích hiệu quả chi tiết để khách hàng có cái nhìn rõ ràng về sự phát triển của chiến dịch. Điều này tạo dựng niềm tin và duy trì mối quan hệ lâu dài."
            ],
            image: "/assets/images/marketing/im.jpg",
        },
        {
            id: 4,
            title: "Khách hàng làm trung tâm",

            details: ["Từng chiến dịch đều xoay quanh nhu cầu và mong muốn thực tế của khách hàng, xây dựng giải pháp phù hợp nhất với mô hình kinh doanh của họ, đồng thời luôn sẵn sàng điều chỉnh theo phản hồi từ khách hàng."
            ],
            image: "/assets/images/marketing/sm.jpg",
        },
        {
            id: 5,
            title: "Liên tục đổi mới và cải tiến",

            details: [" Luôn cập nhật và thử nghiệm các công nghệ và xu hướng mới như tự động hóa tiếp thị, chatbot AI, và thực tế ảo để đảm bảo hiệu quả và mang lại trải nghiệm mới mẻ cho khách hàng."],
            image: "/assets/images/marketing/am.jpg",
        },
        {
            id: 6,
            title: "Cam kết trách nhiệm và chất lượng",

            details: ["Mọi chiến dịch đều được giám sát chặt chẽ để đảm bảo chất lượng và đạt được KPI đề ra. Nextgency xem thành công của khách hàng là thành công của chính mình, luôn duy trì tiêu chuẩn cao nhất trong mọi dự án."
            ],
            image: "/assets/images/marketing/em.jpg",
        },

    ];

    const [selectedItem, setSelectedItem] = useState(data[0]);

    const [activeTab, setActiveTab] = useState(0); // Tab index
    const [openIndex, setOpenIndex] = useState(null); // Accordion index

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const tabs = [
        {
            title: "Mục Tiêu",
            items: [
                { question: "Tối ưu hóa chi phí quảng cáo", answer: "Tạo ra hiệu suất cao từ ngân sách quảng cáo của khách hàng. Agency thường cam kết đạt mức Return on Ad Spend (ROAS) hoặc Cost Per Lead (CPL) tối ưu hơn tiêu chuẩn thị trường, ví dụ ROAS đạt từ 1.5-2x so với trung bình." },
                { question: "Tăng trưởng doanh thu cho khách hàng", answer: "Tập trung vào các chiến dịch thúc đẩy doanh thu thực tế. Ví dụ, mục tiêu tăng trưởng doanh thu của khách hàng từ 20-30% thông qua chiến dịch tiếp thị số, nhắm đến các chỉ số như tỷ lệ chuyển đổi (Conversion Rate) từ 10-15%." },
                { question: "Dẫn đầu về sáng tạo trong ngành", answer: "Phát triển các chiến dịch độc đáo và thu hút, áp dụng những công nghệ và xu hướng tiếp thị mới nhất (VR, AI, influencer marketing) nhằm tạo lợi thế cạnh tranh cho khách hàng." },
                { question: "Mở rộng phạm vi và lĩnh vực ngành hàng", answer: "Đạt được sự đa dạng hóa ngành hàng, phục vụ các lĩnh vực như bán lẻ, y tế, tài chính, và thương mại điện tử, nhằm phát triển kinh nghiệm đa ngành và cung cấp dịch vụ chuyên biệt hơn." },
                { question: "Xây dựng mạng lưới khách hàng bền vững", answer: "Đạt tỷ lệ giữ chân khách hàng trên 80%, tạo dựng mối quan hệ lâu dài với khách hàng thông qua sự tin cậy, hiệu quả và hỗ trợ liên tục." },
            ],
        },
        {
            title: "Sứ Mệnh",
            items: [
                { question: "Cầu nối giữa doanh nghiệp và khách hàng mục tiêu", answer: "Nextgency đóng vai trò là cầu nối, xây dựng chiến lược giúp doanh nghiệp tiếp cận đúng đối tượng khách hàng tiềm năng, tối ưu hóa trải nghiệm của khách hàng để tăng cường lòng trung thành và giá trị lâu dài." },
                { question: "Thúc đẩy tăng trưởng bền vững", answer: "Tập trung vào giải pháp không chỉ mang lại doanh thu ngắn hạn mà còn củng cố thương hiệu dài hạn, giúp doanh nghiệp phát triển ổn định. Sứ mệnh này bao gồm việc áp dụng các chiến lược bền vững như tiếp thị nội dung, tối ưu SEO và tối ưu trải nghiệm người dùng (UX) để giữ chân khách hàng và tăng trưởng tự nhiên." },
                { question: "Đối tác đáng tin cậy, tư vấn chuyên nghiệp", answer: "Đặt mục tiêu trở thành một người đồng hành thực thụ của khách hàng, Nextgency không chỉ cung cấp dịch vụ mà còn tư vấn chiến lược, định hướng kinh doanh dài hạn, đưa ra những khuyến nghị có tính thực tiễn và dựa trên dữ liệu." },
                { question: "Dẫn dắt sáng tạo và đổi mới", answer: "Sứ mệnh này thể hiện qua việc luôn đi trước xu hướng, áp dụng các giải pháp công nghệ mới nhất để giúp khách hàng đón đầu trong ngành của mình. Ví dụ, Nextgency áp dụng trí tuệ nhân tạo trong tối ưu quảng cáo và tự động hóa quy trình tiếp thị, hoặc thử nghiệm chiến dịch tương tác sử dụng thực tế ảo tăng cường (AR) nhằm gia tăng trải nghiệm người dùng." },
                { question: "Tối ưu hóa trải nghiệm khách hàng", answer: "Mỗi chiến lược đều được thiết kế để mang lại trải nghiệm khách hàng tích cực và liền mạch, giúp họ nhớ đến thương hiệu thông qua các điểm chạm tinh tế, từ quảng cáo đến website và dịch vụ sau bán hàng." },
            ],
        },
    ];
    return (
        <main
            className="relative  min-h-screen w-screen overflow-hidden font-[Oswald] z-0 text-gray-800">
            <div className="bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950">
                <div className="relative pt-16 sm:pt-32 md:pt-48 w-full "
                     style={{
                         backgroundImage: "url('/assets/images/banner/absection.png')",
                         backgroundSize: "cover",
                         backgroundRepeat: "no-repeat",
                         backgroundPosition: "center center",
                         minHeight: "100vh",
                     }}
                >
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

                        <rect fill="url(#pattern-id)" width="100%" height="100%" strokeWidth={0}/>
                    </svg>
                    {/* SVG Pattern */}
                    <div className=" relative flex items-center justify-center overflow-hidden z-50 ">

                        <div
                            className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                            <div className="flex flex-col items-center justify-between lg:flex-row py-16">
                                <div className=" relative ">
                                    <div className="lg:max-w-xl lg:pr-5 relative z-40">
                                        <p className="flex text-xl font-bold text-blue-500 uppercase text-g1 ">
                                            About Us
                                        </p>
                                        <h2 className="mb-6 max-w-2xl text-5xl text-white font-medium leading-snug tracking-wide sm:text-7xl sm:leading-snug">
                                            <span
                                                className="inline-block text-white font-bold text-g4 ">NextGency</span> kiến
                                            tạo sự

                                            <span
                                                className="my-1 inline-block text-blue-500 px-4 font-bold text-g4 ">khác biệt</span>
                                        </h2>
                                        <p className="text-base text-gray-100">Đội ngũ sáng tạo và tận tâm,
                                            đứng sau các chiến lược đột phá,
                                            đưa ý tưởng thành hiện thực và nâng tầm thương hiệu của bạn.</p>
                                        <div className="mt-10 flex justify-center gap-4">
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
                                                className="relative font-[Oswald] font-bold text-white tracking-widest uppercase text-base hover:text-[#38bdf8] px-1 py-4 group right-2"
                                            >
                                                Hợp tác ngay
                                                <span
                                                    className="absolute left-0 bottom-3 w-full h-[1px] bg-white transition-all duration-300 group-hover:bg-[#38bdf8]"></span>
                                            </a>
                                        </div>
                                    </div>


                                </div>
                                <div className="relative mt-10 lg:mt-0 lg:ml-32 lg:w-[50%] ">
                                    <div
                                        className="border-l-2 border-b-2 border-blue-500   w-fit overflow-hidden rounded-[6rem] rounded-bl-none rounded-tr-none">
                                        <img src="/assets/images/banner/about.jpg " className="grayscale-[50%] hue-rotate-15"/>
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
                        <div className=" py-7">
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


            <div className="relative bg-custom-gradient w-full"
                 style={{
                     backgroundImage: "url('/assets/images/banner/bgsec5.png')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center center",
                     minHeight: "100vh",
                 }}>
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
                <section className="relative lg:pt-20 pt-0 z-10 lg:pl-8 h-full">
                    <div
                        className="rounded-2xl  py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl ">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
                                <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
                                    <div
                                        className="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start">
                                        <span
                                            className="bg-blue-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3 ">ABOUT US</span>
                                    </div>
                                    <h1 className="py-8 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px]">

                                        BEST IN CLASS SINCE <span className="text-blue-600">DAY ONE</span>
                                    </h1>
                                    <p className=" text-blue-800 text-lg lg:text-xl text-center lg:text-left">
                                        Được thành lập với tầm nhìn hướng tới tương lai, NEXTGENCY là một công ty trẻ
                                        đầy năng động, tạo dấu ấn mạnh mẽ ngay từ những bước đi đầu tiên. Mặc dù mới ra
                                        mắt, chúng tôi đã nhanh chóng khẳng định mình là một lực lượng sáng tạo, cung
                                        cấp các thiết kế web đột phá và các chiến lược tiếp thị số ấn tượng, thu hút
                                        khán giả hiện đại.
                                    </p>
                                    <p className=" mt-14 text-gray-700 text-lg lg:text-xl text-center lg:text-left">
                                        Dựa trên nền tảng của sự đam mê và sáng tạo, NEXTGENCY hiểu rõ giá trị của việc
                                        xây dựng thương hiệu mạnh và tiếp thị chiến lược. Đối với các công ty khởi
                                        nghiệp và đang phát triển, đội ngũ của chúng tôi luôn xuất sắc trong việc tạo
                                        dựng bản sắc thương hiệu độc đáo và thiết kế các chiến dịch số không chỉ nổi bật
                                        mà còn mang lại hiệu quả đáng kể. Với NEXTGENCY, mỗi dự án bắt đầu bằng tham
                                        vọng và kết thúc bằng thành công.
                                    </p>

                                    <div className="mt-10 flex justify-center gap-4">
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
                                            className="relative font-[Oswald] font-bold text-gray-950 tracking-widest uppercase text-base hover:text-[#38bdf8] px-1 py-4 group right-2"
                                        >
                                            Hợp tác ngay
                                            <span
                                                className="absolute left-0 bottom-3 w-full h-[1px] bg-black transition-all duration-300 group-hover:bg-[#38bdf8]"></span>
                                        </a>
                                    </div>
                                </div>

                                <div className="w-full xl:col-span-7  lg:col-span-6 block">
                                    <div className="w-full  sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                                        <img src="https://pagedone.io/asset/uploads/1694846193.png"
                                             alt="Dashboard image" className="rounded-l-3xl object-cover"
                                             className="w-full  lg:h-auto "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div
                className="relative bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950 w-full border-t-8 border-blue-400">
                <div className="px-6 sm:px-8 md:px-10 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl py-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                            {/* Authenticity */}
                            <div
                                className="p-6 text-center bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition border-x-2 border-blue-700">
                                <img
                                    src="/assets/images/about/auth.svg"
                                    alt="Authenticity Icon"
                                    className="mx-auto mb-4 w-16 h-16"
                                />
                                <h3 className="text-lg font-semibold text-blue-400">Tính Chính Thống</h3>
                                <p className="mt-2 text-sm text-gray-300">
                                    Chúng tôi hợp tác với những thương hiệu và con người mà chúng tôi tin tưởng, đảm bảo
                                    rằng trái tim và khối óc của chúng tôi hoàn toàn cam kết với sự thành công của bạn.
                                </p>
                            </div>
                            {/* Top Talent */}
                            <div
                                className="p-6 text-center bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition border-x-2 border-blue-700">
                                <img
                                    src="/assets/images/about/talent.svg"
                                    alt="Top Talent Icon"
                                    className="mx-auto mb-4 w-16 h-16"
                                />
                                <h3 className="text-lg font-semibold text-blue-400">Tài Năng Hàng Đầu</h3>
                                <p className="mt-2 text-sm text-gray-300">
                                    Đội ngũ của chúng tôi bao gồm những nhà tiếp thị xuất sắc, đam mê công việc của
                                    mình, luôn phát triển và giữ chân nhân tài.
                                </p>
                            </div>
                            {/* Strategy */}
                            <div
                                className="p-6 text-center bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition border-x-2 border-blue-700">
                                <img
                                    src="/assets/images/about/strat.svg"
                                    alt="Strategy Icon"
                                    className="mx-auto mb-4 w-16 h-16"
                                />
                                <h3 className="text-lg font-semibold text-blue-400">Chiến Lược</h3>
                                <p className="mt-2 text-sm text-gray-300">
                                    Chúng tôi phối hợp mục tiêu kinh doanh của bạn với chiến lược tiếp thị phù hợp để
                                    đảm bảo mọi nỗ lực đều hướng đến thành công.
                                </p>
                            </div>
                            {/* Breakthroughs */}
                            <div
                                className="p-6 text-center bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition border-x-2 border-blue-700">
                                <img
                                    src="/assets/images/about/break.svg"
                                    alt="Breakthrough Icon"
                                    className="mx-auto mb-4 w-16 h-16"
                                />
                                <h3 className="text-lg font-semibold text-blue-400">Đột Phá</h3>
                                <p className="mt-2 text-sm text-gray-300">
                                    Chúng tôi tận dụng những người tài năng, công cụ và công nghệ phù hợp để mang lại
                                    kết quả đột phá.
                                </p>
                            </div>
                            {/* Exclusivity */}
                            <div
                                className="p-6 text-center bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition border-x-2 border-blue-700">
                                <img
                                    src="/assets/images/about/exc.svg"
                                    alt="Exclusivity Icon"
                                    className="mx-auto mb-4 w-16 h-16"
                                />
                                <h3 className="text-lg font-semibold text-blue-400">Độc Quyền</h3>
                                <p className="mt-2 text-sm text-gray-300">
                                    Bạn sẽ có quyền tiếp cận các mối quan hệ, nội dung và cộng đồng độc quyền để gia
                                    tăng ảnh hưởng của mình.
                                </p>
                            </div>
                            {/* Innovation (New) */}
                            <div
                                className="p-6 text-center bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition border-x-2 border-blue-700">
                                <img
                                    src="/assets/images/about/creative.svg"
                                    alt="Innovation Icon"
                                    className="mx-auto mb-4 w-16 h-16"
                                />
                                <h3 className="text-lg font-semibold text-blue-400">Sáng Tạo</h3>
                                <p className="mt-2 text-sm text-gray-300">
                                    Liên tục mở rộng giới hạn, khám phá những khả năng mới và tạo ra những giải pháp
                                    sáng tạo cho sự thành công của bạn.
                                </p>
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
            <div className="relative bg-custom-gradient w-full">
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
                <section className="relative z-10">
                    <div className="h-[32rem] ">
                        <div className="container px-6 py-10 mx-auto">
                            <div
                                className="flex items-center text-sm font-medium text-gray-500 justify-center mb-6">
                                        <span
                                            className="bg-blue-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3 ">ABOUT US</span>
                            </div>
                            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">Đội
                                Ngũ Chuyên Nghiệp</h1>

                            <div className="flex justify-center mx-auto mt-6">
                                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                            </div>

                            <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 ">
                                Đội ngũ chuyên nghiệp của chúng tôi gồm những chuyên gia giàu kinh nghiệm và đam mê,
                                luôn sẵn sàng cung cấp các giải pháp sáng tạo, hiệu quả để giúp doanh nghiệp của bạn
                                phát triển bền vững.
                            </p>
                        </div>
                    </div>

                    <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                            <div
                                className="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
                                <img className="object-cover w-full rounded-xl aspect-square"
                                     src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                     alt=""/>

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">arthur
                                    melo</h1>

                                <p className="mt-2 text-gray-600 capitalize font-medium">design director</p>


                            </div>

                            <div
                                className="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
                                <img className="object-cover w-full rounded-xl aspect-square"
                                     src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                     alt=""/>

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Alexander</h1>

                                <p className="mt-2 text-gray-600 capitalize font-medium">Full stack developer</p>


                            </div>

                            <div
                                className="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
                                <img className="object-cover w-full rounded-xl aspect-square"
                                     src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                     alt=""/>

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">John
                                    Doe</h1>

                                <p className="mt-2 text-gray-600 capitalize font-medium">Full stack developer</p>


                            </div>
                            <div
                                className="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
                                <img className="object-cover w-full rounded-xl aspect-square"
                                     src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                     alt=""/>

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">arthur
                                    melo</h1>

                                <p className="mt-2 text-gray-600 capitalize font-medium">design director</p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div
                 className="relative bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950 w-full px-6 py-10 border-t-8 border-blue-400">
                <div className="mb-10">
                    <h2 className="text-center text-2xl font-semibold text-indigo-600">Next.Gency</h2>
                    <p className="mx-auto text-white mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                        Giá Trị Cốt Lõi
                    </p>
                </div>
                {/* Grid 6 hình chữ nhật */}
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 justify-items-center">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center cursor-pointer transition ${
                                selectedItem?.id === item.id
                                    ? "bg-gradient-to-r from-blue-900 via-blue-800 to-sky-400 text-white border-8 border-sky-400"
                                    : "bg-white hover:bg-gray-700 text-sky-800 hover:text-white border-8 border-sky-400"
                            }`}
                            onClick={() => setSelectedItem(item)}
                        >
                            {/* Số thứ tự */}
                            <div
                                className="absolute top-2 left-2 bg-sky-400 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
                            >
                                {item.id}
                            </div>
                            {/* Icon */}
                            <div className="flex justify-center items-center text-2xl">
                                {icons[item.id]}
                            </div>
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


            <div className="relative bg-custom-gradient w-full"
                 style={{
                     backgroundImage: "url('/assets/images/banner/bgsec5.png')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center center",
                     minHeight: "100vh",
                 }}>
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
                <section className="relative py-24 z-10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div
                            className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
                            <div className="w-full lg:w-1/2">
                                <img
                                    src="https://pagedone.io/asset/uploads/1696230182.png"
                                    alt="FAQ section"
                                    className="w-full rounded-xl object-cover"
                                />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="lg:max-w-xl">
                                    <div className="mb-6 lg:mb-16">
                                        <div className="flex justify-center lg:justify-start space-x-4">
                                            {tabs.map((tab, index) => (
                                                <button
                                                    key={index}
                                                    className={`text-xl h-16 w-28 font-medium px-4 py-2 rounded-3xl transition-all ${
                                                        activeTab === index
                                                            ? "w-[7.75rem] bg-gradient-to-r from-blue-900 via-blue-800 to-sky-400 text-white border-4 border-blue-400"
                                                            : "bg-gray-200 text-gray-900 border-2 border-gray-400"
                                                    }`}
                                                    onClick={() => setActiveTab(index)}
                                                >
                                                    {tab.title}
                                                </button>
                                            ))}
                                        </div>
                                        <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mt-6 lg:text-left">
                                            {tabs[activeTab].title}
                                        </h2>
                                    </div>
                                    <div className="accordion-group">
                                        {tabs[activeTab].items.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`accordion py-8 border-b border-solid border-gray-200 transition-all ${
                                                    openIndex === index ? "accordion-active" : ""
                                                }`}
                                            >
                                                <button
                                                    className={`accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 w-full transition duration-500 hover:text-blue-600 ${
                                                        openIndex === index
                                                            ? "text-blue-600 font-semibold"  // Chỉnh màu chữ khi mở accordion
                                                            : "text-gray-700"  // Màu chữ khi đóng accordion
                                                    }`}
                                                    onClick={() => toggleAccordion(index)}
                                                >
                                                    <h5>{item.question}</h5>
                                                    <svg
                                                        className={`text-gray-900 transition duration-500 group-hover:text-blue-600 ${
                                                            openIndex === index ? "rotate-180" : ""
                                                        }`}
                                                        width="22"
                                                        height="22"
                                                        viewBox="0 0 22 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                            stroke="currentColor"
                                                            strokeWidth="1.6"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </button>
                                                <div
                                                    className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${
                                                        openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                                    }`}
                                                >
                                                    <p className="text-[1.15rem] text-gray-700 font-normal">{item.answer}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </main>
    );
};

export default AboutPage;
