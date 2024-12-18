

import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion"


const AllJobs = () => {
    const jobs =useLoaderData();

  

    return (

       

        <div  className="max-w-7xl mx-auto mt-16">
            <div className="text-center mb-5">
                <h1 className="text-4xl font-bold text-[#5EBD31]">Find Your Dream Job</h1>
                <p className="text-gray-500 mt-2 font-medium">If you seek remote work opportunities, recruiters   can discover <br /> your resume by searching for relevant keywords,<br />  job titles, skills, and other criteria</p>
            </div>
           <>
           <motion.div variants={{hidden:{opacity: 0},
        show:{opacity: 1, transition:{
            staggerChildren: 0.5,
        }}}} initial="hidden"
        animate="show" className="grid gap-5 grid-cols-1 md:grid-cols-2">
           {
                jobs?.map((job,idx) => <motion.div variants={{hidden:{opacity: 0}, show: {opacity: 1}}} className="border-2 rounded-xl p-6 border-green-200 shadow-xl" key={idx}>
                    <h1 className="text-2xl font-bold ">Job Name :
                     <span className="text-xl font-bold"> {job.job_title}</span></h1>
                     <li className='mt-3 flex items-center gap-2'><span className='text-xl font-semibold'>Post Date: </span>
                        {
                           job.date ? <p>{job.date}</p>
                           :
                           <p>10 May 2024</p>
                        }
                      </li>  
                    <li className="text-xl mt-2 font-semibold">Application Deadline :
                     <span className="font-medium text-lg"> {job.deadline}</span></li>
                    <li className="text-xl mt-2 font-semibold">Salary range :
                     <span className="font-medium text-lg"> {job.salary_range}</span></li>

                    <div className="text-end mt-4">
                     <Link  to={`/details/${job._id}`}> <button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">Details</button>
                     </Link>
                    </div>
                </motion.div>)
            }
           </motion.div>
           </>

           
        </div>
    );
};

export default AllJobs;