import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GallerySection = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGalleryData = async () => {
            try {
                const response = await fetch('http://localhost:5000/gallery');
                const data = await response.json();

                if (response.ok) {
                    setImages(data);
                    setLoading(false);
                } else {
                    setError(data.message || 'Error fetching gallery data');
                    setLoading(false);
                }
            } catch (error) {
                setError('Error fetching gallery data');
                setLoading(false);
            }
        };

        fetchGalleryData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='pt-20'>
            {/* Hero Section */}
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
                        JUSTDC Gallery
                    </h2>
                    <p className='flex items-center pt-2 text-xl font-semibold'>Home / Image Gallery</p>
                    {/* <p className="mt-2 font-sans text-xl font-medium">
                        A glimpse into our events, achievements, and the vibrant spirit of the JUST Debate Club.
                    </p> */}
                </div>
            </div>

            {/* Image Grid */}
            <section className="pb-16 max-w-[1250px] mx-auto px-4 sm:px-8 md:px-12 xl:px-0">
                <div className="grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-4">
                    {images.length > 0 ? (
                        images.map((event) => (
                            <Link key={event._id} to={`/event/${event._id}`}>
                                <div className="relative overflow-hidden transition border-2 border-gray-200 group hover:shadow-lg">
                                    <img
                                        src={event.coverImage}
                                        alt={event.title}
                                        className="object-cover w-full px-12 py-8 h-[200px]"
                                    />
                                    <p className="pt-4 text-xl font-semibold text-center">{event.title}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div>No gallery events available.</div>
                    )}


                </div>
            </section>
        </div>
    );
};

export default GallerySection;
