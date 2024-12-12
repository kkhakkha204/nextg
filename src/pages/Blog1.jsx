import React from "react";

const Blog1 = () => {
    return (
        <main className="relative min-h-screen w-screen bg-custom-gradient overflow-hidden font-[Oswald] text-gray-800">

            <div className="relative pt-16 sm:pt-32 md:pt-48 w-full">
                <div className="px-6 sm:px-8 md:px-10 pt-14 sm:pt-0">
                    <div className="mx-auto w-full max-w-7xl ">
                        {/* Main Content */}
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Blog Content */}
                            <div className="w-full lg:w-3/4">
                                {/* Featured Image */}
                                <img
                                    src="/assets/images/blog/main-article.jpg"
                                    alt="Featured Blog Post"
                                    className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md mb-6"
                                />

                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                    5 Bí Quyết Tăng Tốc Chiến Dịch Marketing Hiệu Quả
                                </h1>

                                {/* Date */}
                                <p className="text-sm text-gray-600 mb-6">Written on December 12, 2024</p>

                                {/* Blog Content */}
                                <article className="prose prose-lg max-w-none text-gray-700 mb-8">
                                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Khám phá những chiến lược hàng đầu giúp tối ưu hóa chiến dịch marketing, tăng hiệu quả truyền thông và thúc đẩy doanh số bán hàng. Học cách làm chủ cuộc chơi trong thời đại số!</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sem eu nisi
                                        dictum
                                        scelerisque. Ut vitae est magna. Curabitur vehicula fermentum mauris, et
                                        accumsan dolor
                                        venenatis ut. Suspendisse potenti. Nulla et lorem at magna finibus aliquam.
                                    </p>
                                    <p>
                                        Vestibulum sit amet scelerisque ligula. Praesent in risus nec lorem tristique
                                        aliquet.
                                        Integer in dignissim nulla. Cras suscipit enim nec dui dictum, vitae facilisis
                                        enim
                                        vehicula. Duis at massa a turpis tincidunt tincidunt vel et augue.
                                    </p>
                                </article>

                                {/* Author */}
                                <p className="text-sm text-gray-600 font-medium">
                                    Written by <span className="text-blue-600">John Doe</span>
                                </p>
                            </div>

                            {/* Sidebar */}
                            <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Posts</h2>
                                <ul className="space-y-4">
                                    <li>
                                        <a
                                            href="#"
                                            className="block text-gray-700 hover:text-blue-600 transition"
                                        >
                                            <h3 className="text-md font-semibold">Related Blog Post 1</h3>
                                            <p className="text-sm text-gray-500">Published on December 10, 2024</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block text-gray-700 hover:text-blue-600 transition"
                                        >
                                            <h3 className="text-md font-semibold">Related Blog Post 2</h3>
                                            <p className="text-sm text-gray-500">Published on November 28, 2024</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block text-gray-700 hover:text-blue-600 transition"
                                        >
                                            <h3 className="text-md font-semibold">Related Blog Post 3</h3>
                                            <p className="text-sm text-gray-500">Published on November 15, 2024</p>
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </main>
);
};

export default Blog1;
