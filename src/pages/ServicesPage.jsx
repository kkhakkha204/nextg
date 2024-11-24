import React from "react";

const ServicesPage = () => {
    return (
        <div className="container mx-auto py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Dịch vụ của chúng tôi</h1>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Dịch vụ 1 */}
                <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold mb-4">Dịch vụ 1</h3>
                    <p>Giải pháp công nghệ cho doanh nghiệp vừa và nhỏ.</p>
                </div>

                {/* Dịch vụ 2 */}
                <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold mb-4">Dịch vụ 2</h3>
                    <p>Tư vấn và triển khai hệ thống IoT hiện đại.</p>
                </div>

                {/* Dịch vụ 3 */}
                <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold mb-4">Dịch vụ 3</h3>
                    <p>Phát triển phần mềm và ứng dụng web theo yêu cầu.</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
