import React, { Fragment } from 'react'
import Image from 'next/image'
import CampusMap from "@/public/assets/images/map/charusat-map.jpg"
const campusMap = () => {
    return (
        <Fragment>
            <div className="blog-section  section-bg">
                <br />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    <div className="post-content">
                                                        <h3 style={{ textAlign: "center" }}>Campus Map</h3>
                                                        <hr />
                                                        <br />
                                                        <Image src={CampusMap} alt='Campus-map' height={800} width={800} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </Fragment>
    )
}

export default campusMap