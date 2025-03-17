import { RxDotFilled } from 'react-icons/rx';
import MeetOurTeamCard from '../MeetOurTeamCard/MeetOurTeamCard';

const MeetOurTeam = () => {
    return (
        <div
        >
            {/* Section Title */}
            <div className='text-center mx-auto max-w-[850px] mt-20 xl:mt-28'>
                <div className='font-sans lg:text-[40px] font-bold uppercase text-[#003366] text-[26px]'>
                    Meet Our Executive Team
                </div>
                <div className="w-[140px] h-[3px] bg-[#fdb714] my-6 mx-auto"></div>
                {/* <p className='mt-4 mb-10 text-lg'>
                    Behind every great debate is a team of passionate leaders. Meet the{' '}
                    <span className='font-bold'>JUST Debate Club</span> Executive Team, committed to fostering a vibrant community of thinkers and communicators.
                </p> */}
            </div>
            <MeetOurTeamCard />
            <div className='pt-8'>
                            <RxDotFilled className='mx-auto text-[#fdb714]' />
                            <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                            <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                            <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                            <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px]' />
                            <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px] hidden lg:flex' />
                            <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px] hidden lg:flex' />
                            <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px] hidden lg:flex' />
                            <RxDotFilled className='mx-auto text-[#fdb714] mt-[-3px] hidden lg:flex' />
                        </div>
        </div>
    );
};

export default MeetOurTeam;
