
import { Fade, Slide } from "react-awesome-reveal";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
const JobsOptions = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 lg:mt-20">
          <Fade delay={2}>
          <div className="flex gap-20 flex-col lg:flex-row">
                  <Slide className="flex-1" direction="left">
                  <div className=" relative">
                    <img src="https://i.ibb.co/PFqQSrn/work.jpg" alt="" />
                     <div className="absolute top-3/4 left-1/3 md:-right-1/4">
                        <img src="https://i.ibb.co/3d2jfR3/employers.png" alt="" />
                     </div>
                 </div>
                  </Slide>
                 <Slide className="flex-1" direction="right">
                 <div>
                    <h1 className="text-4xl font-semibold">Millions of Jobs.Find the <br /> one that suits you.</h1>
                    <p className="text-lg text-gray-500 mt-4">
                        Search all the open positions on the web. Get your own
                        personalized salary estimate. Read reviews on over 600,000
                        companies worldwide.
                    </p>
                    <div className="mt-6 space-y-3">
                        <p className="flex gap-3 items-center"><MdDone />Bring to the table win-win survival
                       </p>
                        <p className="flex gap-3 items-center"><MdDone />Capitalize on low hanging fruit to identify
                       </p>
                        <p className="flex gap-3 items-center"><MdDone />But I must explain to you how all this
                       </p>
                        
                    </div>

                   <div className="mt-10">
                      <Link to='/all-jobs'> <button className="bg-[#5BBC2E] px-6 py-4 rounded-lg font-semibold text-lg text-white hover:bg-white hover:border hover:border-green-500 hover:text-green-600">Get Started</button>
                      </Link>
                   </div>
                </div>
                 </Slide>
            </div>
          </Fade>
        </div>
    );
};

export default JobsOptions;