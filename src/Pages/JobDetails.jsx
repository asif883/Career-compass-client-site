import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const loadedJobs = useLoaderData()
   
    const {job_title,job_category,banner,deadline,salary_range,number,job_description} =loadedJobs
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-8">
               <div className="flex gap-7">
                <img className="w-[400px] h-[450px] rounded-lg" src={banner} alt="" />
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">{job_title}</h1>
                      
                       <li><span className="text-xl font-semibold ">Salary: </span>{salary_range}</li>
                        <li><span className="text-xl font-semibold ">Category: </span>{job_category}</li>
                       
                     
                        <li><span className="text-xl font-semibold ">Apply deadline: </span>{deadline}</li>
                        <li><span className="text-xl font-semibold ">Contact Info: </span>{number}</li>
                     
                    <p> <span className="text-2xl font-semibold underline">Job Description: </span> <br />
                        {job_description}</p>
                    <p> <span className="text-xl font-semibold underline">Objectives of this role: </span> <br />
                    <li>Guard all company data, particularly sensitive information, from both internal and external threats by designing broad defenses against would-be intruders</li>
                    <li>Take the lead in day-to-day monitoring for unusual activities, implement defensive protocols, and report incidents</li>
                    <li>Collaborate with other members of the cybersecurity team to develop new protocols, layers of protection, and other proactive and defensive systems for remaining ahead of cybercriminals</li>
                    <li>Maintain documentation of security guidelines, procedures, standards, and controls</li>
                    </p>    
                    <p> <span className="text-xl font-semibold underline">Responsibilities: </span> <br />
                    <li>Collect data on current security measures for risk analysis, and write systems status reports regularly</li>
                    <li>Monitor constantly for attacks and run appropriate defensive protocols if a breach occurs</li>
                    <li>Conduct testing to identify vulnerabilities, and collaborate with cybersecurity team to update defensive protocols when necessary</li>
                    <li>Help lead employee training to prevent phishing and other forms of cyberattack</li>
                    </p>    
                    <p> <span className="text-xl font-semibold underline">Required skills and qualifications: </span> <br />
                    <li>Three to five years of experience in cybersecurity at a midsize or large company in our industry</li>
                    <li>Deep knowledge of IT, including hardware, software, and networks</li>
                    <li>Meticulous eye for detail and an ability to multitask in a fast-paced environment</li>
                    <li>Strong abilities in critical thinking, problem-solving, logic, and forensics Preferred skills and qualifications</li>
                    </p> 

                    <div className="text-center pt-10">
                     <button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">Apply Now</button> 
                    </div>  
                </div>
               </div>
            </div>
        </div>
    );
};

export default JobDetails;