import MessageOfVc from "../MessageOfVc/MessageOfVc";
import OurAchievement from "../OurAchievement/OurAchievement";
import Banner from "../Banner/Banner";
import ThinkBigSection from "../ThinkBigSection/ThinkBigSection";
import WhatWeProvide from "../WhatWeProvide/WhatWeProvide";
import WhatMakesUsStandOut from "../WhatMakesUsStandOut/WhatMakesUsStandOut";
import PlatformForExcellence from "../PlatformForExcellence/PlatformForExcellence";
import MeetOurTeams from "../MeetOurTeam/MeetOurTeam";
import { Helmet } from "react-helmet-async";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import ImageGallery from "../ImageGallery/ImageGallery";
import JustdcToday from "../JustdcToday/JustdcToday";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>JUST Debate Club | Home</title>
            </Helmet>
            <Banner />
            <ThinkBigSection />
            <WhatWeProvide />
            <OurAchievement />
            <MessageOfVc />
            <WhatMakesUsStandOut />
            <PlatformForExcellence />
            <JustdcToday />
            <MeetOurTeams />
            <TestimonialSection />
            {/* <Gallery /> */}
            <ImageGallery />
        </div>
    );
};

export default Home;