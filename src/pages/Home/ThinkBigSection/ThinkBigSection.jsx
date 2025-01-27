import myImage from '../../../assets/content_area_pattern_triangle.svg';

const ThinkBigSection = () => {
    return (
        <div
            className="mt-[184px] bg-[#98002E] text-center p-24"
            style={{
                backgroundImage: `url(${myImage})`
            }}
        >
            <div className="text-[#FDB714] text-5xl font-semibold font-sans">Think Big, Speak Bold, Lead Fearlessly</div>
            <div className="pt-8 text-xl text-white">
                JUST Debate Club equips you with the skills to influence, inspire, and innovate.<br />
                Your journey to becoming a changemaker starts here.
            </div>
            <div className='pt-6'>
                <button className="px-6 py-2 rounded-full bg-[#FDB714] hover:bg-[#E38B25] text-xl">Join Us</button>
            </div>
        </div>
    );
};

export default ThinkBigSection;