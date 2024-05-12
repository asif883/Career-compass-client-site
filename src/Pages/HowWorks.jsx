import { Zoom } from "react-awesome-reveal";
import { useContext } from "react";
import { AuthContext } from "../Provider/Context";


const HowWorks = () => {

    const {isDarkMode} = useContext(AuthContext);
    return (
        <div className={isDarkMode ? 'background-dark' : 'background'}>
         <div className="p-8">
           <div className="max-w-7xl mx-auto pt-10">

                <div className="text-center">
                    <h1 className="text-4xl font-semibold">How It Works?</h1>
                    <p className="text-gray-500 text-lg mt-2">Job for anyone, anywhere</p>
                </div>

                <Zoom delay={3}>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                {/*  */}
                <div className="card w-96  hover:shadow-xl">
                        <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/SnBB6w7/f1.jpg" alt="Shoes" className="rounded-full" />
                    </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Free Resume Assessments</h2>
                            <p>
                                Free resume assessments provide valuable feedback on resume content, format, and effectiveness, aiding in improving job search success and presentation.
                            </p>
                            
                    </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="card w-96  hover:shadow-xl">
                        <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/DtpJq1k/f2.jpg" alt="Shoes" className="rounded-full" />
                    </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Job fit Scoring</h2>
                            <p>Job fit scoring evaluates candidates suitability for a role based on skills, experience, optimizing hiring decisions effectively.</p>
                            
                    </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="card w-96  hover:shadow-xl">
                        <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/KsnbfV9/f3.png" alt="Shoes" className="rounded-full" />
                    </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> Help every steps of the way</h2>
                            <p>We provide comprehensive support at every stage, ensuring smooth progression towards your goals with guidance, resources, and encouragement.</p>
                        
                    </div>
                </div>
                {/*  */}

                </div>
                </Zoom>
                </div>
       </div>
        </div>
       
    );
};

export default HowWorks;