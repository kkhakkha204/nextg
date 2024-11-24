import React, { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send to API or email)
        console.log(formData);
    };

    return (
        <div className="container mx-auto py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Liên hệ với Nextg</h1>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg">Họ tên</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg">Tin nhắn</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">Gửi</button>
            </form>
        </div>
    );
};

export default ContactPage;
