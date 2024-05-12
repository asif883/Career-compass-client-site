import Banner from "./Banner";
import HowWorks from "./HowWorks";
import JobsByCategory from "./JobsByCategory";
import JobsOptions from "./JobsOptions";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <JobsByCategory></JobsByCategory>
            <JobsOptions></JobsOptions>
        </div>
    );
};

export default Home;