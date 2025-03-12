import { useEffect, useRef, useState } from 'react';
import MeetOurTeamCard from '../MeetOurTeamCard/MeetOurTeamCard';

const MeetOurTeam = () => {
    return (
        <div
        >
            {/* Section Title */}
            <div className='text-center mx-auto max-w-[850px] mt-28'>
                <div className='font-sans text-[40px] font-bold uppercase text-[#003366]'>
                    Meet Our Executive Team
                </div>
                <div className="w-[140px] h-[3px] bg-[#fdb714] my-6 mx-auto"></div>
                <p className='mt-4 mb-10 text-lg'>
                    Behind every great debate is a team of passionate leaders. Meet the{' '}
                    <span className='font-bold'>JUST Debate Club</span> Executive Team, committed to fostering a vibrant community of thinkers and communicators.
                </p>
            </div>
                <MeetOurTeamCard />
        </div>
    );
};

export default MeetOurTeam;
