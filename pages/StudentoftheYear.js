import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import * as config from "../config"

const StudentoftheYear = () => {

    const [stdOfMonth, setStdOfMonth] = useState(null)
    const [instructorOfMonth, setInstructorOfMonth] = useState(null)
    const FetchStdOfTheMonth = async () => {
        try {
            const response = await axios.get(config.backendUrl + "/api/studentofmonth");
            // Handle the successful response here
            setStdOfMonth(...response.data);
        } catch (error) {
            // Handle the error here
            console.error(error);
        }
    };
    const FetchInstructorOfTheMonth = async () => {
        try {
            const response = await axios.get(config.backendUrl + "/api/instructorofmonth");
            // Handle the successful response here
            setInstructorOfMonth(...response.data);
        } catch (error) {
            // Handle the error here
            console.error(error);
        }
    };

    useEffect(() => {
        FetchStdOfTheMonth();
        FetchInstructorOfTheMonth();
    }, []);


    return (
        <div className='row'>

            <div className='col-sm-12 col-lg-6 d-flex justify-content-center'>
                <div className="containerForSOY">
                    <div className="card cardSOY">
                        <div className="image text-center">
                            <img src={`${config.backendUrl}/api/instructorofmonth/${instructorOfMonth ? instructorOfMonth.img : ""}`} />
                            <h5 className='text-nowrap'>Instructor Of The Month 🏆</h5>
                        </div>
                        <div className='content'>
                            <h3>{instructorOfMonth ? instructorOfMonth.name : "NA"}</h3>
                            < p > course :  {instructorOfMonth ? instructorOfMonth.course : "NA"}</p>
                            <p>Description : {instructorOfMonth ? instructorOfMonth.desc : "NA"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-sm-12 mobileTopMargin col-lg-6 d-flex justify-content-center'>
                <div className="containerForSOY">
                    <div className="card cardSOY">
                        <div className="image text-center">
                            <img src={`${config.backendUrl}/api/studentofmonth/${stdOfMonth ? stdOfMonth.img : ""}`} />

                            <h5>Student Of The Month 🏆</h5>
                        </div>
                        <div className='content'>
                            <h3>{stdOfMonth ? stdOfMonth.name : ""} </h3>
                            <p>Course : {stdOfMonth ? stdOfMonth.course : ""}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentoftheYear;