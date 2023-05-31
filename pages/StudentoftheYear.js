import React from 'react'

const StudentoftheYear = () => {
    return (
        <div className='d-flex justify-content-around'>
            <div className="containerForSOY">
                <div className="card cardSOY">
                    <div className="image text-center">
                        <img src='assets/images/teams/member1.png' />
                        <h5 className='text-nowrap'>Instructor Of The Month 🏆</h5>
                    </div>
                    <div className='content'>
                        <h3>This is content</h3>
                        <p>DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual     form of a document or a typeface without         relying on meaningful content.</p>
                    </div>
                </div>
            </div>
            <div className="containerForSOY">
                <div className="card cardSOY">
                    <div className="image text-center">
                        <img src='assets/images/teams/member5.png' />

                        <h5>Student Of The Month 🏆</h5>
                    </div>
                    <div className='content'>
                        <h3>This is content</h3>
                        <p>DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual     form of a document or a typeface without         relying on meaningful content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentoftheYear