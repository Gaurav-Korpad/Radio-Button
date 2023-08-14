import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { DROPDOWN } from './constant';

function Form() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        contact: '',
        dropdown: '',
    });

    const [data, setData] = useState([]);
    const [isPhone, setIsPhone] = useState(0);

    // const [isEmail, setIsEmail] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, formData])
    }


    const handleChange = (e) => {
        // console.log(e.target.value);
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    console.log(data);

    // const handlePhone = () => {
    //     setIsPhone(true)
    // }
    // const handleEmail=()=>{

    // }

    useEffect(() => {
        if (data) {
            localStorage.setItem("data", JSON.stringify(data))
        }
    }, [data])

    return (
        <>
            <div className='container mt-4 border border-black p-2'>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-10'>

                            <div className='col-6'>
                                <div className="form-group ">
                                    <label >First Name</label>
                                    <input className="form-control"
                                        type="text"
                                        name='fname'
                                        value={formData.fname}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="form-group ">
                                    <label >Last Name</label>
                                    <input className="form-control"
                                        type="text"
                                        name='lname'
                                        value={formData.lname}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                {/* <div className="form-group">
                                    <label >How should we contact you?</label>
                                    <select className="form-control" >
                                        <option onClick={() => setIsPhone(1)} >Phone</option>
                                        <option onClick={() => setIsPhone(2)} >Email</option>
                                    </select>
                                </div> */}
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Choose</InputLabel>
                                    <Select
                                        value={FormData.dropdown}
                                        label="choose"
                                        name='contact'
                                        onChange={handleChange}

                                    >
                                        {DROPDOWN.map((e) => {
                                            return <MenuItem value={e}>{e}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </div>


                            {/* {isPhone && <div className='col-6'>
                            <div className="form-group ">
                                <label >{isPhone ? "Phone Number" : "Email"}</label>
                                <input className="form-control"
                                    type="text"
                                    name='contact'
                                    value={form.contact}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>} */}
                            {formData.contact === "Phone" && <div className='col-6'>
                                <div className="form-group ">

                                    <label >Phone</label>
                                    <input className="form-control"
                                        type="text"
                                        name='Phone'
                                        // value={formData.contact}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>}
                            {formData.contact === "Email" && <div className='col-6'>
                                <div className="form-group ">

                                    <label >Email </label>
                                    <input className="form-control"
                                        type="text"
                                        name='Email'
                                        // value={formData.contact}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Form


