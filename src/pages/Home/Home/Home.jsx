import MessageOfVc from "../../MessageOfVc/MessageOfVc";
import OurAchievement from "../../OurAchievement/OurAchievement";
import Banner from "../Banner/Banner";
import ThinkBigSection from "../ThinkBigSection/ThinkBigSection";
import WhatWeProvide from "../WhatWeProvide/WhatWeProvide";

const Home = () => {
    return (
        <div>
            <Banner />
            <ThinkBigSection />
            <WhatWeProvide />
            <OurAchievement />
            <MessageOfVc />
        </div>
    );
};

export default Home;