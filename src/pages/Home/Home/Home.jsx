import MessageOfVc from "../MessageOfVc/MessageOfVc";
import OurAchievement from "../OurAchievement/OurAchievement";
import Banner from "../Banner/Banner";
import ThinkBigSection from "../ThinkBigSection/ThinkBigSection";
import WhatWeProvide from "../WhatWeProvide/WhatWeProvide";
import WhatMakesUsStandOut from "../WhatMakesUsStandOut/WhatMakesUsStandOut";

const Home = () => {
    return (
        <div>
            <Banner />
            <ThinkBigSection />
            <WhatWeProvide />
            <OurAchievement />
            <MessageOfVc />
            <WhatMakesUsStandOut />
        </div>
    );
};

export default Home;