import React from 'react';

const AddMango = () => {
    const addMango=event=>{
        event.preventDefault()
        const photo= event.target.photo.value
        const name= event.target.name.value
        const information = {name,photo}
        // console.log(information)


        fetch('http://localhost:5000/mango',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(information)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)

            if (data.acknowledged) alert('successfully added')
                
        })
    }
    return (
        <div className='flex justify-center items-center h-screen'>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={addMango} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name:</span>
          </label>
          <input type="text" name='name' placeholder="Mango Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo uri</span>
          </label>
          <input type="text" name='photo' placeholder="photo uri" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default AddMango;