import myImage from '../../../assets/content_area_pattern_triangle.svg';

const ThinkBigSection = () => {
    return (
        <div
            className="mt-[184px] bg-[#003366] text-center p-24"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0.8)), url(${myImage})`,
            }}
        >
            <div className="text-[#fdb714] text-5xl font-semibold font-sans">Think Big, Speak Bold, Lead Fearlessly</div>
            <div className="pt-8 text-xl text-white">
                JUST Debate Club equips you with the skills to influence, inspire, and innovate.<br />
                Your journey to becoming a changemaker starts here.
            </div>
            <div className='pt-6'>
                <button className="px-6 py-2 rounded-full bg-[#fdb714] hover:bg-[#E38B25] text-xl font-sans uppercase font-semibold text-[#98002E]">Join Us</button>
            </div>
        </div>
    );
};

export default ThinkBigSection;