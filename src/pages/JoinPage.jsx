import React from "react";

const JoinPage = () => {
    return (
        <div className="container mx-auto py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Gia nhập Nextg</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
                Chúng tôi luôn tìm kiếm những cá nhân tài năng và nhiệt huyết để gia nhập đội ngũ Nextg. Nếu bạn đam mê công nghệ và muốn phát triển cùng chúng tôi, hãy nộp đơn ngay!
            </p>
            <div className="text-center">
                <a href="/apply" className="bg-blue-600 text-white px-6 py-2 rounded-md">
                    Nộp Đơn
                </a>
            </div>
        </div>
    );
};

export default JoinPage;
