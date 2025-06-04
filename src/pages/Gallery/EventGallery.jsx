import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const EventGallery = () => {
    const { eventId } = useParams();
    const { user } = useContext(AuthContext);

    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    // For new images to add
    const [newImages, setNewImages] = useState([]);
    const [uploading, setUploading] = useState(false);

    // Fetch event details and images
    useEffect(() => {
        const fetchEventImages = async () => {
            try {
                const response = await fetch(`http://localhost:5000/gallery/${eventId}`);
                const data = await response.json();
                setEvent(data);
            } catch (error) {
                console.error("Error fetching event:", error);
                setEvent(null);
            } finally {
                setLoading(false);
            }
        };
        fetchEventImages();
    }, [eventId]);

    // Compress image helper (same as your previous function)
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

    // Add newly selected images cumulatively
    const handleNewImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setNewImages(prev => [...prev, ...files]);
    };

    // Remove a selected new image before upload
    const removeNewImage = (index) => {
        setNewImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleAddImages = async () => {
        if (!user) return alert('You must be logged in to add images!');
        if (newImages.length === 0) return alert('Please select images to add.');

        setUploading(true);
        try {
            const token = await user.getIdToken();

            // Upload all new images
            const uploadedUrls = await Promise.all(newImages.map(file => handleImageUpload(file)));

            // Append new images URLs to existing event images
            const updatedImages = [...(event.images || []), ...uploadedUrls];

            // Send updated images array to backend to update event
            await axios.put(
                `http://localhost:5000/gallery/${eventId}/add-images`,
                { images: updatedImages },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Update local event state to show new images immediately
            setEvent(prev => ({
                ...prev,
                images: updatedImages,
            }));

            setNewImages([]);
            alert('Images added successfully!');
        } catch (err) {
            alert('Failed to add images: ' + err.message);
        } finally {
            setUploading(false);
        }
    };

    if (loading) return <div>Loading event images...</div>;
    if (!event) return <div>Event not found or failed to load.</div>;

    return (
        <div className="pt-24 px-6 max-w-[1250px] mx-auto">
            <h2 className="text-3xl font-bold text-[#003366] mb-8">{event.title}</h2>

            <div className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2 md:grid-cols-3">
                {event.images.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded shadow-md">
                        <img src={img} alt={`Event image ${index + 1}`} className="object-cover w-full h-64" />
                    </div>
                ))}
            </div>

            {/* Add More Images Section */}
            <div className="max-w-lg mx-auto">
                <h3 className="mb-4 text-xl font-semibold">Add More Images</h3>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleNewImagesChange}
                    className="w-full p-2 mb-4 border"
                />

                {/* Preview new images */}
                {newImages.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-4">
                        {newImages.map((file, idx) => {
                            const url = URL.createObjectURL(file);
                            return (
                                <div key={idx} className="relative w-24 h-24 overflow-hidden border rounded">
                                    <img
                                        src={url}
                                        alt={`new preview ${idx}`}
                                        className="object-cover w-full h-full"
                                        onLoad={() => URL.revokeObjectURL(url)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeNewImage(idx)}
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
                    type="button"
                    onClick={handleAddImages}
                    disabled={uploading}
                    className={`w-full p-2 text-white rounded ${uploading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-800'
                        }`}
                >
                    {uploading ? 'Uploading...' : 'Add Images'}
                </button>
            </div>
        </div>
    );
};

export default EventGallery;
