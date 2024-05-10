import { useContext } from "react";
import { AuthContext } from "../Provider/Context";


const AddJob = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="max-w-4xl mx-auto mt-10 p-8 shadow-xl  rounded-xl">
        <h1 className="text-center text-4xl text-[#5BBC2E] font-bold">Add A Job</h1>
  
        <form className="mt-10" >
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
            <label className="font-medium">Job Title:</label><br />
              <input className="input input-bordered border border-green-500 w-full" type="text" id="job-title" name="job-title" required />
            </div>
  
             <div className="flex-1">
              <label className="font-medium">Job Category:</label><br />
              <input className="input input-bordered border border-green-500  w-full" type="text" id="job-category" name="job-category"  required />
             </div>
          </div>
          <div className="flex gap-4 mb-4">
               <div className="flex-1">
                  <label className="font-medium">Job Banner:</label><br />
                  <input className="input input-bordered border border-green-500  w-full" type="text" id="banner" name="banner"  required />
  
               </div>
                  <div className="flex-1">
                      
                      <label className="font-medium">Application Deadline:</label><br />
                      <input className="input input-bordered border border-green-500 w-full" type="text" id="deadline" name="deadline"  required />
                  </div>
           </div>
       
           <div className="flex gap-4 mb-4">
               <div className="flex-1">
                  <label className="font-medium">Salary range:</label><br />
                  <input className="input input-bordered border border-green-500  w-full" type="text" id="salary-range" name="salary-range" required />
               </div>
  
               <div className="flex-1">
               <label className="font-medium">Job Applicants Number:</label><br />
              <input className="input input-bordered border border-green-500  w-full" type="text" id="number" name="number"  required />
              </div>
           </div>
           
           <div className="flex gap-4 mb-4">
                  
                 <div className="flex-1">
                   <label className="font-medium" >User Email:</label><br />
                   <input defaultValue={user?.email} className="input input-bordered border border-green-500  w-full" type="email" id="user_email" name="user_email"  required />
                </div>
                <div className="flex-1">
                   
                  <label className="font-medium">User Name:</label><br />
                  <input defaultValue={user?.displayName} className="input input-bordered border border-green-500  w-full" type="text" id="user_name" name="user_name"  required />
                  </div>
           </div>
           
  
          <div>
              <label className="font-medium ">Job Description:</label><br />
              <textarea className="w-full rounded-lg border border-green-500" id="job-description" name="job-description"  rows="4" required></textarea><br /><br />
  
              <input className="w-full border  p-3 btn bg-[#5BBC2E] text-lg font-medium text-white" type="submit" value="Add" />
          </div>
        </form>
      </div>
    );
};

export default AddJob;