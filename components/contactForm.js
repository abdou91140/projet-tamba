// components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            console.error('Error sending message');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 bg-gray-200 p-2 rounded-md">
            <label className="block mb-2">
                <span className="text-gray-700">Nom:</span>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input p-1 mt-1 block w-full rounded-md border-black-300"
                />
            </label>

            <label className="block mb-2">
                <span className="text-gray-700">Email:</span>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300"
                />
            </label>

            <label className="block mb-2">
                <span className="text-gray-700">Message:</span>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="form-textarea mt-1 block w-full rounded-md border-gray-300"
                />
            </label>
            <div className='flex justify-center'>
                <button type="submit" className="bg-transparent text-main-color px-4 py-2 rounded-full shadow hover:bg-yellow-600 ">
                    Envoyer
                </button></div>
        </form>
    );
};

export default ContactForm;
