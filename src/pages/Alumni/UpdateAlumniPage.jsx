import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const UpdateAlumniPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [alumni, setAlumni] = useState(null);
    const [newPhoto, setNewPhoto] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/alumni/${id}`).then(res => {
            setAlumni(res.data);
        }).catch(() => alert('Failed to load alumni data'));
    }, [id]);

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
        const compressedImage = await compressImage(imageFile);
        const formData = new FormData();
        formData.append('image', compressedImage, 'compressed.jpg');

        const res = await axios.post('https://api.imgbb.com/1/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            params: { key: '24baa728d298bbb9d014b2a241a98e99' },
        });

        return res.data.data.url;
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const token = await user.getIdToken();
        let photoURL = alumni.photo;

        if (newPhoto) {
            photoURL = await handleImageUpload(newPhoto);
            if (!photoURL) return alert("Image upload failed!");
        }

        try {
            await axios.put(
                `http://localhost:5000/alumni/${id}`,
                {
                    ...alumni,
                    photo: photoURL,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            alert('Alumni updated successfully');
            navigate('/alumni');
        } catch (err) {
            alert('Failed to update alumni');
            console.error(err);
        }
    };

    if (!alumni) return <p className="mt-10 text-center">Loading...</p>;

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="mb-5 text-2xl font-bold text-center">Update Alumni</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
                <input
                    type="text"
                    value={alumni.name}
                    className="w-full p-2 border"
                    onChange={(e) => setAlumni({ ...alumni, name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    value={alumni.batch}
                    className="w-full p-2 border"
                    onChange={(e) => setAlumni({ ...alumni, batch: e.target.value })}
                    required
                />
                <input
                    type="text"
                    value={alumni.position}
                    className="w-full p-2 border"
                    onChange={(e) => setAlumni({ ...alumni, position: e.target.value })}
                    required
                />
                <textarea
                    value={alumni.bio}
                    className="w-full p-2 border"
                    onChange={(e) => setAlumni({ ...alumni, bio: e.target.value })}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    className="w-full p-2 border"
                    onChange={(e) => setNewPhoto(e.target.files[0])}
                />
                <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateAlumniPage;
