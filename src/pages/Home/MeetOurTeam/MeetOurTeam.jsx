import React from 'react';
import MeetOurTeamCard from '../MeetOurTeamCard/MeetOurTeamCard';
import TeamSection from '../MeetOurTeamCard/MeetOurTeamCard';

const MeetOurTeam = () => {
    return (
        <div className='max-w-[1250px] mx-auto'>
            <div>
                <div className='font-sans text-[40px] font-bold uppercase text-[#98002E] text-center pt-20'>
                    Meet Our Team
                </div>
                <div className="w-24 h-[2px] bg-[#fdb714] mt-6 mx-auto"></div>
            </div>
            <div className='pt-16'>
                <MeetOurTeamCard />
            </div>
        </div>
    );
};

export default MeetOurTeam;