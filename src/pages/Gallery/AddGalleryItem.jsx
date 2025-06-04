import React, { useState, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const AddGalleryItem = () => {
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [images, setImages] = useState([]); // will hold File objects
    const [loading, setLoading] = useState(false);

    // Compress image (same as before)
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

    const handleImageUpload = async (file) => {
        const compressed = await compressImage(file);
        const formData = new FormData();
        formData.append('image', compressed, 'compressed.jpg');

        const res = await axios.post('https://api.imgbb.com/1/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            params: { key: '24baa728d298bbb9d014b2a241a98e99' },
        });

        return res.data.data.url;
    };

    // Add new files cumulatively instead of replacing
    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        // Combine existing images with new ones
        setImages(prev => [...prev, ...newFiles]);
    };

    // Remove a selected image by index
    const removeImage = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return alert('You must be logged in to add a gallery item!');
        if (images.length === 0) return alert('Please select at least one image.');

        setLoading(true);
        try {
            const token = await user.getIdToken();

            const uploadPromises = images.map(file => handleImageUpload(file));
            const uploadedUrls = await Promise.all(uploadPromises);

            await axios.post(
                'http://localhost:5000/gallery',
                {
                    title,
                    coverImage: uploadedUrls[0], // First image as cover
                    images: uploadedUrls,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            alert('Event gallery created successfully!');
            setTitle('');
            setImages([]);
        } catch (err) {
            alert('Failed to create gallery event: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="mb-5 text-2xl font-bold text-center">Create New Gallery Event</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Event Title"
                    className="w-full p-2 border"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="w-full p-2 border"
                    onChange={handleFileChange}
                />

                {/* Preview selected images */}
                {images.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                        {images.map((file, index) => {
                            const url = URL.createObjectURL(file);
                            return (
                                <div key={index} className="relative w-24 h-24 overflow-hidden border rounded">
                                    <img
                                        src={url}
                                        alt={`preview-${index}`}
                                        className="object-cover w-full h-full"
                                        onLoad={() => URL.revokeObjectURL(url)} // free memory
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute flex items-center justify-center w-6 h-6 text-xs text-white bg-red-600 rounded-full top-1 right-1 hover:bg-red-800"
                                        title="Remove image"
                                    >
                                        &times;
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full p-2 text-white rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'
                        }`}
                >
                    {loading ? 'Uploading...' : 'Create Event'}
                </button>
            </form>
        </div>
    );
};

export default AddGalleryItem;
