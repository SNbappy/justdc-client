import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const AlumniPage = () => {
    const [alumniData, setAlumniData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchAlumni = async () => {
            try {
                const response = await axios.get('http://localhost:5000/alumni');
                setAlumniData(response.data);
            } catch (err) {
                setError("Failed to load alumni data");
            } finally {
                setLoading(false);
            }
        };

        fetchAlumni();
    }, []);

    const handleDelete = async (id) => {
        if (!user) return;

        const confirmDelete = window.confirm("Are you sure you want to delete this alumni?");
        if (!confirmDelete) return;

        try {
            const token = await user.getIdToken();
            await axios.delete(`http://localhost:5000/alumni/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setAlumniData(prev => prev.filter(alumni => alumni._id !== id));
        } catch (err) {
            alert("Failed to delete alumni");
            console.error(err);
        }
    };

    return (
        <div className="pt-20">
            {/* Hero */}
            <div className="relative w-full">
                <div>
                    <img
                        src="/public/Hero Section/Gallery.jpg"
                        alt="Gallery Hero"
                        className={`object-cover w-full h-[200px] transition-transform duration-[1500ms] ease-in-out`}
                    />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A7EB4]/50 via-[#6EA8DB]/50 to-[#9EC4EC]/50 mix-blend-multiply backdrop-blur-[4px]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 mx-auto text-center text-white sm:max-w-full lg:pb-0">
                    <h2 className="font-sans text-5xl font-bold uppercase">
                        JUSTDC Alumni
                    </h2>
                    <p className='flex items-center pt-2 text-xl font-semibold'>Home / Alumni</p>
                    {/* <p className="mt-2 font-sans text-xl font-medium">
                        A glimpse into our events, achievements, and the vibrant spirit of the JUST Debate Club.
                    </p> */}
                </div>
            </div>
            {/* Alumni List */}
            <div className="max-w-6xl px-4 py-12 mx-auto space-y-10">
                {loading ? (
                    <p className="text-center text-gray-600">Loading alumni data...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : alumniData.length === 0 ? (
                    <p className="text-center text-gray-500">No alumni found.</p>
                ) : (
                    alumniData.map((alumni, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-between gap-6 p-6 bg-white shadow-md rounded-2xl md:flex-row"
                        >
                            <img
                                src={alumni.photo}
                                alt={alumni.name}
                                className="object-cover w-full h-64 rounded-xl md:w-1/3 md:h-56"
                            />
                            <div className="w-full space-y-2 text-center md:w-2/3 md:text-left">
                                <h3 className="text-2xl font-bold text-gray-800">{alumni.name}</h3>
                                <p className="text-sm text-gray-600">{alumni.batch} • {alumni.position}</p>
                                <p className="text-gray-700">{alumni.bio}</p>

                                {user && (
                                    <div className="flex gap-4 mt-4">
                                        <button
                                            onClick={() => handleDelete(alumni._id)}
                                            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                        <Link to={`/dashboard/update-alumni/${alumni._id}`}>
                                            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                                                Update
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AlumniPage;
