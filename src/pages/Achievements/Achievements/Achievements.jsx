import React, { useEffect, useState } from 'react';
import AchievementsCard from '../AchievementsCard/AchievementsCard';

const Achievements = () => {

    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        fetch('/public/achievements.json')
            .then(res => res.json())
        .then(data => setAchievements(data))
    }, [])

    return (
        <div>
            <div className='font-sans text-[40px] font-bold uppercase text-[#003366] text-center pt-36'>
                What We Provide
            </div>
            <div className="w-24 h-[2px] bg-[#fdb714] mx-auto mt-6"></div>
            {
                achievements.map(achievement => <AchievementsCard achievement={achievement} key={achievement.id}/>)
            }
        </div>
    );
};

export default Achievements;