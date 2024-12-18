import React, {useState} from "react";

const Price = () => {
    const [isPMTNModalOpen, setPMTNModalOpen] = useState(false);
    const [isCSKHModalOpen, setCSKHModalOpen] = useState(false);
    const [isVideoNganModalOpen, setVideoNganModalOpen] = useState(false);
    const [isFanpageModalOpen, setFanpageModalOpen] = useState(false);
    const [isTK1ModalOpen, setTK1ModalOpen] = useState(false);
    const [isTK2ModalOpen, setTK2ModalOpen] = useState(false);
    const [isTK3ModalOpen, setTK3ModalOpen] = useState(false);
    const [isM1ModalOpen, setM1ModalOpen] = useState(false);
    const [isM2ModalOpen, setM2ModalOpen] = useState(false);
    const [isM3ModalOpen, setM3ModalOpen] = useState(false);
    const [isAD1ModalOpen, setAD1ModalOpen] = useState(false);
    const [isAD2ModalOpen, setAD2ModalOpen] = useState(false);
    const togglePMTNModal = () => {
        setPMTNModalOpen(!isPMTNModalOpen);
    };

    const toggleCSKHModal = () => {
        setCSKHModalOpen(!isCSKHModalOpen);
    };

    const toggleVideoNganModal = () => {
        setVideoNganModalOpen(!isVideoNganModalOpen);
    };

    const toggleFanpageModal = () => {
        setFanpageModalOpen(!isFanpageModalOpen);
    };

    const toggleTK1Modal = () => {
        setTK1ModalOpen(!isTK1ModalOpen);
    };

    const toggleTK2Modal = () => {
        setTK2ModalOpen(!isTK2ModalOpen);
    };
    const toggleTK3Modal = () => {
        setTK3ModalOpen(!isTK3ModalOpen);
    };
    const toggleM1Modal = () => {
        setM1ModalOpen(!isM1ModalOpen);
    };
    const toggleM2Modal = () => {
        setM2ModalOpen(!isM2ModalOpen);
    };
    const toggleM3Modal = () => {
        setM3ModalOpen(!isM3ModalOpen);
    };
    const toggleAD1Modal = () => {
        setAD1ModalOpen(!isAD1ModalOpen);
    };
    const toggleAD2Modal = () => {
        setAD2ModalOpen(!isAD2ModalOpen);
    };
    return (
        <main
            className="relative bg-custom-gradient md:min-h-screen w-screen overflow-hidden font-[Oswald] text-gray-800 min-h-[70vh]">
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
            <div className="relative pt-16 sm:pt-32 md:pt-48 w-full pb-[5rem] xl:pb-[10rem]">
                <div className="px-6 sm:px-8 md:px-10 pt-14 sm:pt-0">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 uppercase text-center">
                        Bảng Giá NEXTGENCY
                    </h1>

                    {/* Divider */}
                    <div className="border-t border-gray-400 my-10"></div>
                    {/* Bảng giá */}
                    <div className="overflow-x-auto">
                        <div>
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        Phòng Marketing Thuê Ngoài
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={togglePMTNModal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        25 Triệu VND/ 1 tháng<br/>Ký tối thiểu 3 tháng
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isPMTNModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={togglePMTNModal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Nghiên cứu dịch vụ, khách hàng của Brand.</li>
                                            <li>Định hình gu, tone, trải nghiệm đọc của Page.</li>
                                            <li>Lên chiến lược marketing tổng thể theo tháng.</li>
                                            <li>Lên flow content đổ nền Fanpage.</li>
                                            <li>Viết bài chi tiết theo flow content đã duyệt.</li>
                                            <li>Viết kịch bản quảng cáo chất lượng.</li>
                                            <li>Thiết kế hình ảnh theo flow content.</li>
                                            <li>Dựng video theo kịch bản đã duyệt.</li>
                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={togglePMTNModal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>


                        <div>
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        Chăm sóc khách hàng
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={toggleCSKHModal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        3 - 6 Triệu VND/ 1 tháng<br/>Ký tối thiểu 3 tháng
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isCSKHModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={toggleCSKHModal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Xây dựng kịch bản tin nhắn phù hợp với dịch vụ và ưu đãi.</li>
                                            <li>Nhắn tin CSKH hoặc chốt đơn linh hoạt theo kịch bản.</li>
                                            <li>Xử lý phàn nàn khéo léo, bảo vệ uy tín thương hiệu.</li>
                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={toggleCSKHModal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Ảnh ngăn cách */}
                        <div className="w-full h-[150px] bg-cover bg-center border-x-4 border-gray-800"
                             style={{backgroundImage: "url('/assets/images/price/contentprice.jpg')"}}></div>

                        <div>
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        Sản xuất kịch bản video ngắn
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={toggleVideoNganModal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        Tùy theo yêu cầu
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isVideoNganModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={toggleVideoNganModal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Xây dựng outline kịch bản video, TVC liền mạch, phù hợp chiến dịch.</li>
                                            <li>Viết kịch bản chi tiết theo outline đã duyệt.</li>
                                            <li>Tách Call sheet gồm: đạo cụ, bối cảnh, footage, text, demo, ghi chú hỗ
                                                trợ production.
                                            </li>
                                            <li>Số lượng: 10-30 kịch bản.</li>
                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={toggleVideoNganModal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        Chăm sóc fanpage
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={toggleFanpageModal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        12 - 15 Triệu VND/ 1 tháng
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isFanpageModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={toggleFanpageModal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Lập kế hoạch nội dung hàng tháng: Xây dựng kế hoạch nội dung fanpage
                                                liên kết chặt chẽ giữa các bài viết.
                                            </li>
                                            <li>Triển khai và đăng bài viết: Thực hiện và đăng các bài viết theo khung
                                                nội dung đã duyệt.
                                            </li>
                                            <li>Soạn thảo nội dung fanpage: Tạo và quản lý nội dung bài viết trên
                                                Fanpage.
                                            </li>
                                            <li>Đặt hàng thiết kế: Gửi yêu cầu thiết kế theo kế hoạch, phối hợp và đảm
                                                bảo tiến độ với team thiết kế.
                                            </li>
                                            <li>Đặt hình ảnh: Yêu cầu hình ảnh từ khách hàng hoặc studio, lựa chọn và
                                                cung cấp cho team thiết kế.
                                            </li>
                                            <li>Số lượng bài viết: Đăng từ 30-35 bài mỗi tháng.</li>
                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={toggleFanpageModal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Ảnh ngăn cách */}
                        <div className="w-full h-[150px] bg-cover bg-center border-x-4 border-gray-800"
                             style={{backgroundImage: "url('/assets/images/price/ThietKePrice.jpg')"}}></div>

                        <div>
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        Thiết kế nhận diện thương hiệu
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={toggleTK1Modal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        7 - 20 Triệu VND/ 1 tháng
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isTK1ModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={toggleTK1Modal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Thiết kế logo thương hiệu, định hình gu thẩm mỹ và phong cách.
                                            </li>
                                            <li>Thiết kế các ấn phẩm thương hiệu phái sinh chuyên nghiệp.
                                            </li>
                                            <li>Đưa các ấn phẩm nhận diện thương hiệu lên mockup ấn tượng.
                                            </li>

                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={toggleTK1Modal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        Thiết kế ấn phẩm sự kiện
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={toggleTK2Modal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        800,000 VND/ 1 ấn phẩm
                                        <br/>(Tùy theo yêu cầu)
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isTK2ModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={toggleTK2Modal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Nghiên cứu visual, palette màu và asset hình ảnh cho sự kiện.
                                            </li>
                                            <li>Thiết kế demo visual của sự kiện.
                                            </li>
                                            <li>Lên outline và nội dung chi tiết cho ấn phẩm thiết kế.
                                            </li>
                                            <li>Team nội dung gửi yêu cầu thiết kế theo kế hoạch.
                                            </li>
                                            <li>Danh sách ấn phẩm sự kiện: 1 backdrop, 2 standee, 4 hashtag, 20 thư mời.
                                            </li>

                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={toggleTK2Modal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        Thiết kế catalogue/ brochure/ flyer
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={toggleTK3Modal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        Tùy theo yêu cầu
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isTK3ModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={toggleTK3Modal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Thu thập thông tin và yêu cầu từ nhãn hàng.
                                            </li>
                                            <li>Nghiên cứu nhận diện thương hiệu.
                                            </li>
                                            <li>Xây dựng outline và bố cục thiết kế.
                                            </li>
                                            <li>Hoàn thiện nội dung chi tiết.
                                            </li>
                                            <li>Thiết kế theo nội dung đã duyệt.
                                            </li>
                                            <li>Chỉnh sửa theo yêu cầu.
                                            </li>
                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={toggleTK3Modal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* Ảnh ngăn cách */}
                        <div className="w-full h-[150px] bg-cover bg-center border-x-4 border-gray-800"
                             style={{backgroundImage: "url('/assets/images/price/MediaPrice.jpg')"}}></div>

                        <div>
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        Quay chụp dịch vụ, cơ sở, tvc giới thiệu doanh nghiệp
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={toggleM1Modal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        Tùy theo yêu cầu
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isM1ModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={toggleM1Modal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Lập kế hoạch kịch bản quay, chụp dịch vụ.
                                            </li>
                                            <li>Triển khai quay, chụp theo kế hoạch đã duyệt.
                                            </li>
                                            <li>Hậu kỳ ảnh, video phù hợp mục đích thiết kế, chạy quảng cáo.
                                            </li>
                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={toggleM1Modal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        quay chụp sự kiện
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={toggleM2Modal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        Tùy theo yêu cầu
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isM2ModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={toggleM2Modal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Xây dựng kịch bản chi tiết, xác định những khoảnh khắc quan trọng trong
                                                sự kiện.
                                            </li>
                                            <li>Thực hiện quay và chụp các khoảnh khắc, hoạt động nổi bật trong suốt sự
                                                kiện.
                                            </li>
                                            <li>Sửa chữa, cắt ghép, tạo dựng video và ảnh chất lượng cao phù hợp với yêu
                                                cầu.
                                            </li>
                                            <li>Đảm bảo giao sản phẩm chỉnh sửa nhanh chóng, đáp ứng mọi nhu cầu của
                                                khách hàng.
                                            </li>
                                            <li>Số lượng: 1 video sự kiện chung, 3-4 video tập trung vào celeb.
                                            </li>
                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={toggleM2Modal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        Quay dựng/ Sản xuất video ngắn
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={toggleM3Modal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        Tùy theo yêu cầu
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isM3ModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={toggleM3Modal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Xây dựng kịch bản sáng tạo, phù hợp với mục tiêu truyền thông.
                                            </li>
                                            <li>Thực hiện quay video ngắn với chất lượng hình ảnh sắc nét, đảm bảo nội
                                                dung hấp dẫn.
                                            </li>
                                            <li>Sử dụng kỹ thuật dựng video hiện đại, tạo ra những sản phẩm ngắn gọn, ấn
                                                tượng.
                                            </li>
                                            <li>Thêm hiệu ứng hình ảnh, âm thanh sống động, phù hợp với phong cách
                                                video.
                                            </li>
                                            <li>Số lượng: 20 kịch bản
                                            </li>
                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={toggleM3Modal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Ảnh ngăn cách */}
                        <div className="w-full h-[150px] bg-cover bg-center border-x-4 border-gray-800"
                             style={{backgroundImage: "url('/assets/images/price/DigitalAdsPrice.jpg')"}}></div>

                        <div>
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        Chi phí ads 01 tháng dưới 40 triệu
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={toggleAD1Modal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        15% phí tối ưu
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isAD1ModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={toggleAD1Modal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Lên ma trận ads chậy quảng cáo phù hợp.
                                            </li>
                                            <li>Lập kế hoạch ads và dự trù ngân sách ads.
                                            </li>
                                            <li>Tối ưu ma trận ads.
                                            </li>
                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={toggleAD1Modal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <table className=" min-w-full table-auto">
                                <thead>
                                <tr className="border-4 border-gray-800 bg-gradient-to-b from-gray-950 via-slate-800 to-blue-950">
                                    <th colSpan="2"
                                        className="px-4 py-2 text-center text-xl font-semibold text-white w-1/2">
                                        Chi phí ads 01 tháng trên 40 triệu
                                    </th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr className="border-y-2 border-4 border-gray-800 bg-slate-200">
                                    <td className="px-4 py-2 text-center border-x-2 border-gray-800 w-1/2">
                                        <button
                                            className="text-blue-600 underline"
                                            onClick={toggleAD2Modal}
                                        >
                                            Chi tiết
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center w-1/2">
                                        12% phí tối ưu
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* Modal */}
                            {isAD2ModalOpen && (
                                <div
                                    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
                                    onClick={toggleAD2Modal}
                                >
                                    <div
                                        className="bg-white p-8 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-semibold mb-4">Phạm vi công việc chi tiết</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Lên ma trận ads chậy quảng cáo phù hợp.
                                            </li>
                                            <li>Lập kế hoạch ads và dự trù ngân sách ads.
                                            </li>
                                            <li>Tối ưu ma trận ads.
                                            </li>
                                        </ul>
                                        <button
                                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                            onClick={toggleAD2Modal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Price;
