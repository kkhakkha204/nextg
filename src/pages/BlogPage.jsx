import React from "react";

const BlogPage = () => {
    return (
        <div className="container mx-auto py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Blog của Nextg</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Bài viết 1</h3>
                    <p>
                        Cập nhật mới nhất về các xu hướng công nghệ và các giải pháp Nextg đang áp dụng trong các dự án của mình.
                    </p>
                    <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Đọc thêm...</a>
                </div>

                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Bài viết 2</h3>
                    <p>
                        Tìm hiểu về những sáng tạo mới trong ngành công nghệ mà Nextg đang khám phá và triển khai.
                    </p>
                    <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Đọc thêm...</a>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
