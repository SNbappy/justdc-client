import MessageOfVc from "../MessageOfVc/MessageOfVc";
import OurAchievement from "../OurAchievement/OurAchievement";
import Banner from "../Banner/Banner";
import ThinkBigSection from "../ThinkBigSection/ThinkBigSection";
import WhatWeProvide from "../WhatWeProvide/WhatWeProvide";
import WhatMakesUsStandOut from "../WhatMakesUsStandOut/WhatMakesUsStandOut";
import PlatformForExcellence from "../PlatformForExcellence/PlatformForExcellence";
import JustdcToday from "../JustDcToday/JustdcToday";
import MeetOurTeams from "../MeetOurTeam/MeetOurTeam";

const Home = () => {
    return (
        <div>
            <Banner />
            <ThinkBigSection />
            <WhatWeProvide />
            <OurAchievement />
            <MessageOfVc />
            <WhatMakesUsStandOut />
            <PlatformForExcellence />
            <JustdcToday />
            <MeetOurTeams />
        </div>
    );
};

export default Home;