import React, { useEffect, useState } from 'react';

const GallerySection = () => {
    const [images, setImages] = useState([]); // State to hold gallery data
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        // Fetch gallery data from the backend API
        const fetchGalleryData = async () => {
            try {
                const response = await fetch('http://localhost:5000/gallery');
                const data = await response.json();

                if (response.ok) {
                    setImages(data); // Directly set the response data (since it's an array of images)
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='pt-20'>
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
                        JUSTDC Gallery
                    </h2>
                    <p className='flex items-center pt-2 text-xl font-semibold'>Home / Image Gallery</p>
                    {/* <p className="mt-2 font-sans text-xl font-medium">
                        A glimpse into our events, achievements, and the vibrant spirit of the JUST Debate Club.
                    </p> */}
                </div>
            </div>
            <section className="pb-16 max-w-[1250px] mx-auto  px-4 sm:px-8 md:px-12 xl:px-0">
                <div className="container">
                    <div className="grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-4">
                        {images.length > 0 ? (
                            images.map((image) => (
                                <div
                                    key={image._id} // Assuming _id is unique
                                    className=""
                                    
                                >
                                    <div className='relative overflow-hidden border-2 border-gray-200 group'>
                                        <img
                                            src={image.image} // Assuming the image URL is in 'image' field
                                            alt={image.caption}
                                            className="object-cover w-full px-12 py-8 h-[200px]"
                                        />
                                   </div>
                                    <p className='pt-4 font-sans text-xl font-semibold text-center'>{image.caption}</p>
                                </div>
                            ))
                        ) : (
                            <div>No gallery images available.</div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GallerySection;
