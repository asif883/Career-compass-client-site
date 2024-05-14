import { useContext } from "react";
import { AuthContext } from "../Provider/Context";

import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const Update = () => {
     const updateJob = useLoaderData()

     console.log(updateJob)

     const {_id,job_title,job_category,banner,deadline,salary_range,number,job_description} = updateJob;

    const handleInfoUpdateAdd = event =>{
        event.preventDefault();
        const form = event.target;
        const job_title = form.job_title.value;
        const job_category = form.job_category.value;
        const banner = form.banner.value;
        const deadline = form.deadline.value;
        const salary_range = form.salary_range.value;
        const number = form.number.value;
        const email = user?.email;
        const name = form.user_name.value
        const job_description = form.job_description.value;
  
  
        const UpdateJobInfo = {job_title,job_category,banner,deadline,salary_range,number,email,name,job_description}
  
        console.log(UpdateJobInfo)



        fetch(`http://localhost:5000/updateJob/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'

            },
            body:JSON.stringify(UpdateJobInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Job Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
                }
        })
  
        // axios.put(`http://localhost:5000/updateJob/${_id}`,UpdateJobInfo)
        // .then(res =>{
        //   const data= res.data
        //   console.log(data)
        //   if(data.modifiedCount>0){
        //     Swal.fire({
        //       title: 'Success!',
        //       text: 'Job Updated Successfully',
        //       icon: 'success',
        //       confirmButtonText: 'Ok'
        //     });
        //   }
        // })
    }




    const { user } = useContext (AuthContext);

    return (
        <div className="max-w-4xl mx-auto mt-10 p-8 shadow-xl  rounded-xl">
        <h1 className="text-center text-4xl text-[#5BBC2E] font-bold">Update {job_title} Job</h1>
  
        <form onSubmit={handleInfoUpdateAdd} className="mt-10" >
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
            <label className="font-medium">Job Title:</label><br />
              <input className="input input-bordered border border-green-500 w-full" type="text" defaultValue={job_title} id="job_title" name="job_title" required />
            </div>
  
             <div className="flex-1">
              <label className="font-medium">Job Category:</label><br />
              <input className="input input-bordered border border-green-500  w-full" type="text" defaultValue={job_category} id="job-category" name="job_category"  required />
             </div>
          </div>
          <div className="flex gap-4 mb-4">
               <div className="flex-1">
                  <label className="font-medium">Job Banner:</label><br />
                  <input className="input input-bordered border border-green-500  w-full" defaultValue={banner} type="text" id="banner" name="banner"  required />
  
               </div>
               <div className="flex-1">
                      <label className="font-medium">Application Deadline:</label>  <br />
                     <input className="input w-full input-bordered border  border-green-500 " defaultValue={deadline} type="date" name="deadline" id="deadline" />
                  </div>
           </div>
       
           <div className="flex gap-4 mb-4">
               <div className="flex-1">
                  <label className="font-medium">Salary range:</label><br />
                  <input className="input input-bordered border border-green-500  w-full" defaultValue={salary_range} type="text" id="salary-range" name="salary_range" required />
               </div>
  
               <div className="flex-1">
               <label className="font-medium">Job Applicants Number:</label><br />
              <input className="input input-bordered border border-green-500  w-full" type="text" defaultValue={number} id="number" name="number"  required />
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
              <textarea className="w-full rounded-lg border border-green-500" id="job-description" defaultValue={job_description} name="job_description"  rows="4" required></textarea><br /><br />
  
              <input className="w-full border  p-3 btn bg-[#5BBC2E] text-lg font-medium text-white" type="submit" value="Update" />
          </div>
        </form>
      </div>
    );
};

export default Update;