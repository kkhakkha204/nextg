import React from "react";

const Price = () => {
    return (
        <main className="relative bg-custom-gradient md:min-h-screen w-screen overflow-hidden font-[Oswald] text-gray-800 min-h-[70vh]">
            <div className="relative pt-16 sm:pt-32 md:pt-48 w-full pb-[5rem] xl:pb-[10rem]">
                <div className="px-6 sm:px-8 md:px-10 pt-14 sm:pt-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 uppercase">
                            Bảng Giá NEXTGENCY
                        </h1>

                    {/* Divider */}
                    <div className="border-t border-gray-400 my-10"></div>
                    {/* Bảng giá */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead>
                            <tr className="border-4 border-gray-800 bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950">

                                <th className="px-4 py-2 text-left text-xl font-semibold text-white uppercase">Gói dịch vụ</th>
                                <th className="px-4 py-2 text-left text-xl font-semibold text-white uppercase">Phạm vi công
                                    việc
                                </th>
                                <th className="px-4 py-2 text-left text-xl font-semibold text-white uppercase">Giá niêm yết</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-y-2 border-4 border-gray-800">

                                <td className="px-4 py-2 uppercase">Phòng Marketing Thuê Ngoài</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Nghiên cứu dịch vụ, khách hàng
                                    của Brand.
                                    <br/>2. Định hình gu, tone, trải nghiệm đọc. Của Page.
                                    <br/>3. Lên chiến lược marketing tổng thể theo tháng.
                                    <br/>4. Lên flow content đổ nền Fanpage.
                                    <br/>5. Viết bài chi tiết theo flow content đã duyệt.
                                    <br/>6. Viết kịch bản quảng cáo chất lượng.
                                    <br/>7. Thiết kế hình ảnh theo flow content.
                                    <br/>8. Dựng video theo kịch bản đã duyệt.
                                </td>
                                <td className="px-4 py-2">25,000,000 VND/ 1 tháng<br/>Ký hợp đồng tối thiểu 3 tháng</td>

                            </tr>
                            <tr className="border-y-2 border-x-4 border-gray-800">

                                <td className="px-4 py-2 uppercase">Chăm sóc khách hàng</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Xây dựng kịch bản tin nhắn phù
                                    hợp với dịch vụ và ưu đãi.
                                    <br/>2. Nhắn tin CSKH hoặc chốt đơn linh hoạt theo kịch bản.
                                    <br/>3. Xử lý phàn nàn khéo léo, bảo vệ uy tín thương hiệu.
                                </td>
                                <td className="px-4 py-2">3,000,000 - 6,000,000 VND/ 1 tháng<br/>Ký hợp đồng tối thiểu 3
                                    tháng
                                </td>

                            </tr>
                            </tbody>
                        </table>

                        {/* Ảnh ngăn cách */}
                        <div className="w-full h-[300px] bg-cover bg-center border-x-4 border-gray-800"
                             style={{backgroundImage: "url('/assets/images/elements/price.jpg')"}}></div>

                        <table className="min-w-full table-auto">
                            <thead>
                            <tr className="border-4 border-gray-800 bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950">
                                <th colSpan="3"
                                    className="px-4 py-2 text-center text-xl font-semibold text-white uppercase">Content
                                </th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr className="border-y-2 border-x-4 border-gray-800">

                                <td className="px-4 py-2 uppercase">Sản xuất kịch bản video ngắn</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Xây dựng outline kịch bản video,
                                    TVC liền mạch, phù hợp chiến dịch.
                                    <br/>2. Viết kịch bản chi tiết theo outline đã duyệt.
                                    <br/>3. Tách Call sheet gồm: đạo cụ, bối cảnh, footage, text, demo, ghi chú hỗ trợ
                                    production.
                                    <br/>4. Số lượng: 10-30 kịch bản.

                                </td>
                                <td className="px-4 py-2">Tùy theo yêu cầu</td>

                            </tr>
                            <tr className="border-y-2 border-x-4 border-gray-800">

                                <td className="px-4 py-2 uppercase">Chăm sóc fanpage</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Lập kế hoạch nội dung hàng
                                    tháng: Xây dựng kế hoạch nội dung fanpage liên kết chặt chẽ giữa các bài viết.
                                    <br/>2. Triển khai và đăng bài viết: Thực hiện và đăng các bài viết theo khung nội
                                    dung đã duyệt.
                                    <br/>3. Soạn thảo nội dung fanpage: Tạo và quản lý nội dung bài viết trên Fanpage.
                                    <br/>4. Đặt hàng thiết kế: Gửi yêu cầu thiết kế theo kế hoạch, phối hợp và đảm bảo
                                    tiến độ với team thiết kế.
                                    <br/>5. Đặt hình ảnh: Yêu cầu hình ảnh từ khách hàng hoặc studio, lựa chọn và cung
                                    cấp cho team thiết kế.
                                    <br/>6. Số lượng bài viết: Đăng từ 30-35 bài mỗi tháng.
                                </td>
                                <td className="px-4 py-2">12,000,000 - 15,000,000 VND/ 1 tháng
                                </td>

                            </tr>
                            </tbody>
                        </table>

                        {/* Ảnh ngăn cách */}
                        <div className="w-full h-[300px] bg-cover bg-center border-x-4 border-gray-800"
                             style={{backgroundImage: "url('/assets/images/elements/price.jpg')"}}></div>

                        <table className="min-w-full table-auto">
                            <thead>
                            <tr className="border-4 border-gray-800 bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950">
                                <th colSpan="3"
                                    className="px-4 py-2 text-center text-xl font-semibold text-white uppercase">Thiết Kế
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-y-2 border-x-4 border-gray-800">

                                <td className="px-4 py-2 uppercase">Thiết kế nhận diện thương hiệu</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Thiết kế logo thương hiệu, định
                                    hình gu thẩm mỹ và phong
                                    cách.
                                    <br/>2. Thiết kế các ấn phẩm thương hiệu phái sinh chuyên nghiệp.
                                    <br/>3. Đưa các ấn phẩm nhận diện thương hiệu lên mockup ấn tượng.
                                </td>
                                <td className="px-4 py-2">7,000,000 - 20,000,000 VND</td>

                            </tr>
                            <tr className="border-y-2 border-x-4 border-gray-800">

                                <td className="px-4 py-2 uppercase">Thiết kế ấn phẩm sự kiện</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Nghiên cứu visual, palette màu
                                    và asset hình ảnh cho sự
                                    kiện.
                                    <br/>2. Thiết kế demo visual của sự kiện.
                                    <br/>3. Lên outline và nội dung chi tiết cho ấn phẩm thiết kế.
                                    <br/>4. Team nội dung gửi yêu cầu thiết kế theo kế hoạch.
                                    <br/>5. Danh sách ấn phẩm sự kiện: 1 backdrop, 2 standee, 4 hashtag, 20 thư mời.
                                </td>
                                <td className="px-4 py-2">800, 000 VND/ 1 ấn phẩm <br/>(Tùy theo yêu cầu)</td>
                            </tr>
                            <tr className="border-y-2 border-x-4 border-gray-800">

                                <td className="px-4 py-2 uppercase">Thiết kế catalogue/ brochure/ flyer</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Thu thập thông tin và yêu cầu từ
                                    nhãn hàng.
                                    <br/>2. Nghiên cứu nhận diện thương hiệu.
                                    <br/>3. Xây dựng outline và bố cục thiết kế.
                                    <br/>4. Hoàn thiện nội dung chi tiết.
                                    <br/>5. Thiết kế theo nội dung đã duyệt.
                                    <br/>5. Chỉnh sửa theo yêu cầu.
                                </td>
                                <td className="px-4 py-2">Tùy theo yêu cầu</td>
                            </tr>
                            <tr className="border-y-2 border-x-4 border-gray-800">

                                <td className="px-4 py-2 uppercase">Thiết kế tranh tường nội thất</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Lên kịch bản quay, chụp cơ sở,
                                    dịch vụ thiết kế ấn phẩm online/offline.
                                    <br/>2. Chọn vị trí hợp phong thủy, phù hợp nội thất.
                                    <br/>3. Lên nội dung tranh tường phù hợp công năng, mục đích.
                                    <br/>4. Thiết kế tranh tường đảm bảo nhận diện thương hiệu và không gian.
                                    <br/>5. Ấn phẩm tranh tường thẩm mỹ, kích thích sale, hợp phong thủy.
                                </td>
                                <td className="px-4 py-2">1, 500, 000 VND/ 1 bức</td>
                            </tr>
                            </tbody>
                        </table>

                        {/* Ảnh ngăn cách */}
                        <div className="w-full h-[300px] bg-cover bg-center border-x-4 border-gray-800"
                             style={{backgroundImage: "url('/assets/images/elements/price.jpg')"}}></div>

                        <table className="min-w-full table-auto">
                            <thead>
                            <tr className="border-4 border-gray-800 bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950">
                                <th colSpan="3"
                                    className="px-4 py-2 text-center text-xl font-semibold text-white uppercase">media
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-y-2 border-x-4 border-gray-800">
                                <td className="px-4 py-2 uppercase">Quay chụp dịch vụ, cơ sở, tvc giới thiệu doanh
                                    nghiệp
                                </td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Lập kế hoạch kịch bản quay, chụp
                                    dịch vụ.
                                    <br/>2. Triển khai quay, chụp theo kế hoạch đã duyệt.
                                    <br/>3. Hậu kỳ ảnh, video phù hợp mục đích thiết kế, chạy quảng cáo.
                                </td>
                                <td className="px-4 py-2">Tùy theo yêu cầu</td>

                            </tr>
                            <tr className="border-y-2 border-x-4 border-gray-800">

                                <td className="px-4 py-2 uppercase">quay chụp sự kiện</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Xây dựng kịch bản chi tiết, xác
                                    định những khoảnh khắc quan
                                    trọng trong sự kiện.
                                    <br/>2. Thực hiện quay và chụp các khoảnh khắc, hoạt động nổi bật trong suốt sự
                                    kiện.
                                    <br/>3. Sửa chữa, cắt ghép, tạo dựng video và ảnh chất lượng cao phù hợp với yêu
                                    cầu.
                                    <br/>4. Đảm bảo giao sản phẩm chỉnh sửa nhanh chóng, đáp ứng mọi nhu cầu của khách
                                    hàng.
                                    <br/>5. Số lượng: 1 video sự kiện chung, 3-4 video tập trung vào celeb.

                                </td>
                                <td className="px-4 py-2">Tùy theo yêu cầu</td>

                            </tr>

                            <tr className="border-y-2 border-x-4 border-gray-800">

                                <td className="px-4 py-2 uppercase">quay chụp sự kiện</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Xây dựng kịch bản sáng tạo, phù
                                    hợp với mục tiêu truyền thông
                                    <br/>2. Thực hiện quay video ngắn với chất lượng hình ảnh sắc nét, đảm bảo nội dung
                                    hấp dẫn.
                                    kiện.
                                    <br/>3. Sử dụng kỹ thuật dựng video hiện đại, tạo ra những sản phẩm ngắn gọn, ấn
                                    tượng.
                                    <br/>4. Thêm hiệu ứng hình ảnh, âm thanh sống động, phù hợp với phong cách video.
                                    <br/>5. Số lượng: 20 kịch bản

                                </td>
                                <td className="px-4 py-2">Tùy theo yêu cầu</td>

                            </tr>
                            </tbody>
                        </table>

                        {/* Ảnh ngăn cách */}
                        <div className="w-full h-[300px] bg-cover bg-center border-x-4 border-gray-800"
                             style={{backgroundImage: "url('/assets/images/elements/price.jpg')"}}></div>

                        <table className="min-w-full table-auto border-b-[45px] border-b-gray-800">
                            <thead>
                            <tr className="border-4 border-gray-800 bg-gradient-to-br from-gray-950 via-slate-800 to-blue-950">
                                <th colSpan="3"
                                    className="px-4 py-2 text-center text-xl font-semibold text-white uppercase">Digital Ads
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-y-2 border-x-4 border-gray-800">

                                <td className="px-4 py-2">Chi phí ads 01 tháng dưới 40 triệu</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Lên ma trận ads chậy quảng cáo
                                    phù hợp.
                                    <br/>2. Lập kế hoạch ads và dự trù ngân sách ads.
                                    <br/>3. Tối ưu ma trận ads.
                                </td>
                                <td className="px-4 py-2">15% phí tối ưu</td>

                            </tr>
                            <tr className="border-y-2 border-x-4 border-gray-800">

                                <td className="px-4 py-2">Chi phí ads 01 tháng trên 40 triệu</td>
                                <td className="px-4 py-2 border-x-2 border-gray-800">1. Lên ma trận ads chậy quảng cáo
                                    phù hợp.
                                    <br/>2. Lập kế hoạch ads và dự trù ngân sách ads.
                                    <br/>3. Tối ưu ma trận ads.
                                </td>
                                <td className="px-4 py-2 ">12% phí tối ưu</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Price;
