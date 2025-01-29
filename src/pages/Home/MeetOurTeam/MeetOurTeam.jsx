import MeetOurTeamCard from '../MeetOurTeamCard/MeetOurTeamCard';

const MeetOurTeam = () => {
    return (
        <div>
            <div className=' text-center mx-auto max-w-[850px] mt-28'>
                <div className='font-sans text-[40px] font-bold uppercase text-[#003366]'>
                    Meet Our Executive Team
                </div>
                <div className="w-24 h-[2px] bg-[#fdb714] mt-6 mx-auto"></div>
                <p className='mt-4 mb-10 text-lg'>Behind every great debate is a team of passionate leaders. Meet the <span className='font-bold'>JUST Debate Club</span> Executive Team, committed to fostering a vibrant community of thinkers and communicators.</p>
            </div>
            <div>
                <MeetOurTeamCard />
            </div>
        </div>
    );
};

export default MeetOurTeam;