import { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const JobsByCategory = () => {

    const [displayJob , setDisplayJob]= useState([])
    const [jobs, setJobs] =useState([]);

    useEffect(()=>{
           fetch('http://localhost:5000/jobs') 
           .then(res => res.json())
           .then(data => setJobs(data))
    },[])
   console.log(jobs)

   
   const handleFilterText = filter =>{
    if(filter === 'All'){
        setDisplayJob(jobs)
    }
    else if (filter ==='Remote'){
        const RemoteJob = jobs?.filter(job => job.job_category === 'Remote');
        setDisplayJob(RemoteJob)
    }
    else if( filter === 'On-Site'){
        const OnSiteJob = jobs?.filter(job => job.job_category === 'On-Site')
        setDisplayJob(OnSiteJob)
    }
    else if( filter === 'Part-Time'){
        const partTime = jobs?.filter (job => job.job_category ==='Part-Time')
        setDisplayJob(partTime);
    }
}

   
    return (
        <div className='mt-10 max-w-7xl mx-auto'>
            <div className='text-center my-8'>
                <h1 className='text-4xl font-bold mb-2'>Featured Jobs</h1>
                <p className='text-lg text-gray-500 font-semibold'>Know your worth and find the job that qualify your life</p>
            </div>
            
              


        <Tabs>
            <TabList className='text-xl font-semibold'>
            <Tab onClick={()=>handleFilterText('All')}>All Jobs</Tab>
            <Tab onClick={()=> handleFilterText('Remote')}>Remote Job</Tab>
            <Tab onClick={()=> handleFilterText('On-Site')}>On-Site Job</Tab>
            <Tab onClick={()=> handleFilterText('Part-Time')}>Part-Time</Tab>
            </TabList>

            <TabPanel>
            <Slide direction='right' >
            <div className='mt-8 grid gap-8 grid-cols-1 md:grid-cols-2'>
            {
                jobs?.map((job,idx) => 
                <div className=' mb-4 border border-green-300 rounded-xl ' key={idx}>
                   <div>
                     <div className="card lg:card-side  shadow-xl">
                      <figure><img className='w-60 h-full rounded-lg' src={job.banner} alt="Album"/></figure>
                      <div className="card-body">
                        <h2 className="card-title text-2xl">{job.job_title}</h2>
                        <div className='mt-4'>
                        <li><span className='text-xl font-medium '>Type: </span>{job.job_category}</li>
                        <li><span className='text-xl font-medium'>Salary: </span>{job.salary_range}</li>
                        <li><span className='text-xl font-medium '>Deadline: </span>{job.deadline}</li>
                        <li><span className='text-xl font-medium'>Post Date: </span>1 May 2024</li>
                         
                       </div>
                        <div className="card-actions mt-3 justify-end">
                         <Link to={`/details/${job._id}`}><button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">View Details</button>
                       
                         </Link>
                         </div>
                       </div>
                     </div>
                   </div>
               </div>
             )}  
            </div>
            </Slide>
            </TabPanel>
            <TabPanel>
            <div className='mt-8 grid gap-4 grid-cols-1 md:grid-cols-2'>
            {
                displayJob?.map((job,idx) => 
                <div className=' mb-4 ' key={idx}>
                   <div>
                     <div className="card lg:card-side  shadow-xl">
                      <figure><img className='w-60 h-full rounded-lg' src={job.banner} alt="Album"/></figure>
                      <div className="card-body">
                        <h2 className="card-title text-2xl">{job.job_title}</h2>
                       <div className='mt-4'>
                        <li><span className='text-xl font-medium '>Type: </span>{job.job_category}</li>
                        <li><span className='text-xl font-medium'>Salary: </span>{job.salary_range}</li>
                        <li><span className='text-xl font-medium '>Deadline: </span>{job.deadline}</li>
                        <li><span className='text-xl font-medium'>Post Date: </span>1 May 2024</li>
                         
                       </div>
                        <div className="card-actions justify-end">
                        <Link to={`/details/${job._id}`}><button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">View Details</button>
                       
                       </Link>
                        </div>
                       </div>
                     </div>
                   </div>
               </div>
             )}  
            </div>
            </TabPanel>
            <TabPanel>
            <div className='mt-8 grid gap-4 grid-cols-1 md:grid-cols-2'>
            {
                displayJob?.map((job,idx) => 
                <div className=' mb-4 ' key={idx}>
                   <div>
                     <div className="card lg:card-side  shadow-xl">
                      <figure><img className='w-60 h-full rounded-lg' src={job.banner} alt="Album"/></figure>
                      <div className="card-body">
                        <h2 className="card-title text-2xl">{job.job_title}</h2>
                        <div className='mt-4'>
                        <li><span className='text-xl font-medium '>Type: </span>{job.job_category}</li>
                        <li><span className='text-xl font-medium'>Salary: </span>{job.salary_range}</li>
                        <li><span className='text-xl font-medium '>Deadline: </span>{job.deadline}</li>
                        <li><span className='text-xl font-medium'>Post Date: </span>1 May 2024</li>
                         
                       </div>
                        <div className="card-actions justify-end">
                        <Link to={`/details/${job._id}`}><button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">View Details</button>
                       
                       </Link>
                        </div>
                       </div>
                     </div>
                   </div>
               </div>
             )}  
            </div>
            </TabPanel>
            <TabPanel>
            <div className='mt-8 grid gap-4 grid-cols-1 md:grid-cols-2'>
            {
                displayJob?.map((job,idx) => 
                <div className=' mb-4 ' key={idx}>
                   <div>
                     <div className="card lg:card-side  shadow-xl">
                      <figure><img className='w-60 h-full rounded-lg' src={job.banner} alt="Album"/></figure>
                      <div className="card-body">
                        <h2 className="card-title text-2xl">{job.job_title}</h2>
                        <div className='mt-4'>
                        <li><span className='text-xl font-medium '>Type: </span>{job.job_category}</li>
                        <li><span className='text-xl font-medium'>Salary: </span>{job.salary_range}</li>
                        <li><span className='text-xl font-medium '>Deadline: </span>{job.deadline}</li>
                        <li><span className='text-xl font-medium'>Post Date: </span>1 May 2024</li>
                         
                       </div>
                        <div className="card-actions justify-end">
                        <Link to={`/details/${job._id}`}><button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">View Details</button>
                       
                       </Link>
                        </div>
                       </div>
                     </div>
                   </div>
               </div>
             )}  
            </div>
            </TabPanel>
        </Tabs>

            
        </div>
    );
};

export default JobsByCategory;