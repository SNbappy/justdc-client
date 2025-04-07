import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';

const AddAlumni = () => {
    const { user } = useContext(AuthContext);
    const [alumni, setAlumni] = useState({
        name: '',
        batch: '',
        position: '',
        bio: '',
        photo: null,
    });

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

                    if (width > maxWidth || height > maxHeight) {
                        const scale = Math.min(maxWidth / width, maxHeight / height);
                        width *= scale;
                        height *= scale;
                    }

                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);

                    canvas.toBlob((blob) => resolve(blob), 'image/jpeg', quality);
                };
            };
        });
    };

    const handleImageUpload = async (imageFile) => {
        try {
            const compressedImage = await compressImage(imageFile);

            const formData = new FormData();
            formData.append('image', compressedImage, 'compressed.jpg');

            const res = await axios.post('https://api.imgbb.com/1/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                params: { key: '24baa728d298bbb9d014b2a241a98e99' },
            });

            return res.data.data.url;
        } catch (err) {
            console.error('Image upload failed:', err.response?.data || err.message);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return alert('You must be logged in to add an alumni!');

        try {
            const token = await user.getIdToken();

            let photoUrl = '';
            if (alumni.photo) {
                photoUrl = await handleImageUpload(alumni.photo);
                if (!photoUrl) return alert('Image upload failed!');
            }

            await axios.post(
                'http://localhost:5000/alumni',
                {
                    name: alumni.name,
                    batch: alumni.batch,
                    position: alumni.position,
                    bio: alumni.bio,
                    photo: photoUrl,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            alert('Alumni added successfully');
        } catch (err) {
            alert('Failed to add alumni: ' + err.message);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="mb-5 text-2xl font-bold text-center">Add Alumni</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 border"
                    onChange={(e) => setAlumni((prev) => ({ ...prev, name: e.target.value }))}
                    required
                />
                <input
                    type="text"
                    placeholder="Batch (e.g., 2018-2022)"
                    className="w-full p-2 border"
                    onChange={(e) => setAlumni((prev) => ({ ...prev, batch: e.target.value }))}
                    required
                />
                <input
                    type="text"
                    placeholder="Position"
                    className="w-full p-2 border"
                    onChange={(e) => setAlumni((prev) => ({ ...prev, position: e.target.value }))}
                    required
                />
                <textarea
                    placeholder="Short Bio"
                    className="w-full p-2 border"
                    onChange={(e) => setAlumni((prev) => ({ ...prev, bio: e.target.value }))}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    className="w-full p-2 border"
                    onChange={(e) => setAlumni((prev) => ({ ...prev, photo: e.target.files[0] }))}
                    required
                />
                <button type="submit" className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-700">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddAlumni;
