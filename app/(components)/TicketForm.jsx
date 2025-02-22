"use client"

import { useRouter } from 'next/navigation'

import React, {useState} from 'react'

const TicketForm = () => {
    const router = useRouter();

    const startingData = {
        title: '',
        description: '',
        priority: 1,
        status: 'not started',
        progress: 0,
        category: "Hardware Problem"
    }

    const [formData, setFormData] = useState(startingData);

    const handleChange = (e)=>{
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prev)=>({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        const res = await fetch('/api/Tickets', {
            method: 'POST',
            body: JSON.stringify({formData}),
            'contentType': 'application/json',
            
        })
        
        if (!res.ok) {
            throw new Error('failed to create ticket');
        };
        
        router.refresh();
        router.push('/');
    }
  return (
    <div className='flex justify-center'>
        <form className='flex flex-col items-center gap-3 w-1/2' method='post' onSubmit={handleSubmit}>
            <h3>
                Create your ticket
                <hr/>
                <label>Title</label>
                <input id ="title" name="title" type='text' onChange={handleChange} required={true} value={formData.title}/>
                <label>Description</label>
                <input id ="Description" type='text' name="description" onChange={handleChange} required={true} value={formData.description}/>
                <label>Category</label>
                <select name="category" onChange={handleChange} required={true} value={formData.category}>
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Network Problem">Network Problem</option>
                    <option value="System Problem">System Problem</option>
                </select>

                <label>Priority</label>
                <div>
                    <input id = "priority-1" name='priority' type='radio' onChange={handleChange} value={1} checked = {formData.priority == 1} />
                    <label htmlFor="priority-1">1</label>
                    <input id = "priority-2" name='priority' type='radio' onChange={handleChange} value={2} checked = {formData.priority == 2} />
                    <label htmlFor="priority-2">2</label>
                    <input id = "priority-3" name='priority' type='radio' onChange={handleChange} value={2} checked = {formData.priority == 3} />
                    <label htmlFor="priority-3">3</label>
                    <input id = "priority-4" name='priority' type='radio' onChange={handleChange} value={2} checked = {formData.priority == 4} />
                    <label htmlFor="priority-4">4</label>
                    <input id = "priority-5" name='priority' type='radio' onChange={handleChange} value={2} checked = {formData.priority == 5} />
                    <label htmlFor="priority-5">5</label>
                </div>
                <label>Progress</label>
                <input type="range" id ='progress' name='progress' value={formData.progress} min={0} max={100} onChange={handleChange} />
                <label>Status</label>
                <select name="status" onChange={handleChange} required={true} value={formData.status}>
                    <option value="not started">Not Started</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <input type="submit" className='btn' value='Create Ticket'/>
            </h3>
        </form>
    </div>
  )
}

export default TicketForm