import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import axios from 'axios';

const AddEvent = () => {
    const { user } = useContext(AuthContext);
    const [event, setEvent] = useState({ title: '', date: '', description: '', image: null });

    // Compress Image Function
    const compressImage = (file, maxWidth = 800, maxHeight = 600, quality = 0.7) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    let width = img.width;
                    let height = img.height;

                    // Resize if needed
                    if (width > maxWidth || height > maxHeight) {
                        const scale = Math.min(maxWidth / width, maxHeight / height);
                        width *= scale;
                        height *= scale;
                    }

                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);

                    // Convert to Blob and resolve
                    canvas.toBlob((blob) => resolve(blob), 'image/jpeg', quality);
                };
            };
        });
    };

    // Upload Image to ImgBB
    const handleImageUpload = async (imageFile) => {
        try {
            const compressedImage = await compressImage(imageFile);

            const formData = new FormData();
            formData.append('image', compressedImage, 'compressed.jpg');

            const res = await axios.post('https://api.imgbb.com/1/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                params: { key: '24baa728d298bbb9d014b2a241a98e99' }, // API key
            });

            return res.data.data.url; // Return the uploaded image URL
        } catch (err) {
            console.error('Image upload failed:', err.response?.data || err.message);
            return null;
        }
    };

    // Submit Form Handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return alert('You must be logged in to add an event!');

        try {
            const token = await user.getIdToken(); // Get Firebase ID token
            const isoDate = new Date(event.date).toISOString(); // Format date

            let imageUrl = '';
            if (event.image) {
                imageUrl = await handleImageUpload(event.image); // Upload compressed image
                if (!imageUrl) return alert('Image upload failed!');
            }

            // Send event data to backend
            await axios.post(
                'http://localhost:5000/events',
                {
                    title: event.title,
                    date: isoDate,
                    description: event.description,
                    image: imageUrl,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            alert('Event added successfully');
        } catch (err) {
            alert('Failed to add event: ' + err.message);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="mb-5 text-2xl font-bold text-center">Add Event</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Event Title"
                    className="w-full p-2 border"
                    onChange={(e) => setEvent((prev) => ({ ...prev, title: e.target.value }))}
                    required
                />
                <input
                    type="date"
                    className="w-full p-2 border"
                    onChange={(e) => setEvent((prev) => ({ ...prev, date: e.target.value }))}
                    required
                />
                <textarea
                    placeholder="Description"
                    className="w-full p-2 border"
                    onChange={(e) => setEvent((prev) => ({ ...prev, description: e.target.value }))}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    className="w-full p-2 border"
                    onChange={(e) => setEvent((prev) => ({ ...prev, image: e.target.files[0] }))}
                    required
                />
                <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddEvent;
