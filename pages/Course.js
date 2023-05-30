import React, { useState } from 'react'
import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import Pagination from "../src/Pagination";
import CourseGrid from './course-grid';
import CourseList from './course-list';

const Course = () => {

    const [Grid, setList] = useState(false)


    return (
        <Layout>
            <PageBanner pageName={"Our Courses"} />

            <section className="course-left-area py-130 rpy-100">
                <div className="container">
                    <div className="row large-gap">
                        <div className="col-lg-4">
                            <div className="course-sidebar rmb-55">
                                <div className="widget widget-search wow fadeInUp delay-0-2s">
                                    <form onSubmit={(e) => e.preventDefault()} action="#">
                                        <input type="text" placeholder="Search Here" required="" />
                                        <button
                                            type="submit"
                                            className="searchbutton fa fa-search"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="course-grids">
                                <div className="shop-shorter mb-40 wow fadeInUp delay-0-2s">
                                    <div className="sort-text">
                                        Showing <b>85</b> Courses For 505 Course
                                    </div>
                                    <ul className="grid-list">
                                        <li>
                                            <a onClick={() => setList(true)} >
                                                <i className="fas fa-list-ul" />
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={() => setList(false)} className="active">
                                                <i className="fas fa-border-all" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="products-dropdown">
                                        <select>
                                            <option value="default">Filter by</option>
                                            <option value="new" selected="">
                                                Latest
                                            </option>
                                            <option value="old">Oldest</option>
                                            <option value="hight-to-low">High To Low</option>
                                            <option value="low-to-high">Low To High</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row large-gap' >
                        <div className='col-lg-12'>
                            {
                                Grid ? <CourseGrid /> : <CourseList />
                            }
                        </div>
                        {/* <ul className="pagination flex-wrap mt-20">
                            <Pagination
                                paginationCls={".course-grids .row .col-md-6"}
                                sort={4}
                            />
                        </ul> */}
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Course