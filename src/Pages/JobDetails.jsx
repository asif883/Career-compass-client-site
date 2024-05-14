import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/Context";
import axios from "axios";
import Swal from "sweetalert2";


const JobDetails = () => {

    const {user} = useContext(AuthContext);

    const handleAppliedJobs = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const resume = form.resume.value
        
        const appliedJobsInfo ={name,resume,email,job_title,banner,job_category}
         
        console.log(appliedJobsInfo);

        axios.post('http://localhost:5000/appliedJobs', appliedJobsInfo)
        .then(res =>{
            const data = res.data;
              if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'You have applied Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
              }

        })

    }
    const loadedJobs = useLoaderData()
   
    const {job_title,job_category,banner,deadline,salary_range,number,job_description} =loadedJobs;

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${year}-0${month}-${date}`;
      }
   
      const [currentDate, setCurrentDate] = useState(getDate());
      
    
      console.log(currentDate)
      console.log(deadline)      
    //   if(deadline === currentDate){
    //      return <>Applied date is over</>
    //   }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-8">
               <div className="flex flex-col lg:flex-row gap-7">
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
                    <div className="text-center ">

                    {
                        deadline===currentDate ? <p className="text-xl font-semibold text-red-600 mt-16">Applied date is over <span className="text-xl font-semibold text-green-400 underline"><Link to='/all-jobs'>Try Another</Link></span> </p>
                        :
                        <>
                         <div className="text-center pt-10">
                     {/* Open the modal using document.getElementById('ID').showModal() method */}
                     {/* <button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">Apply Now</button>  */}
                        <button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>Apply</button>
                        <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                              <form onSubmit={handleAppliedJobs}>
                              <label className="input input-bordered flex items-center gap-2 mb-4"> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" className="grow" defaultValue={user?.email} placeholder="Email" id="email" name="email"/>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" placeholder="Full Name" id="name" name="name"/>
                                </label>
                                <p className="text-start text-xl font-medium mb-2">Your Resume:</p>
                                <input type="file"  className="file-input file-input-bordered file-input-sm w-full" id="resume"
                                name="resume" />
                                <button className="mt-5 w-full">
                                    <input className="bg-[#5BBC2E] px-4 py-2  w-full rounded-lg font-semibold text-lg text-white" type="submit" value="Submit Your Resume" />
                                </button>
                              </form>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="border border-green-400 text-green-600 px-4 py-2 rounded-lg font-semibold text-lg ">Cancel</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                        </div> 
                        
                        </>
                      }
                    {/*  */}
                   </div> 
                    
                    
                </div>
               </div>
            </div>
        </div>
    );
};

export default JobDetails;