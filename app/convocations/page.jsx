"use client";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NextImage from "next/image";

// Convocation data array with imported images
const convocations = [
	{
		year: "14th",
		guest: "Shri. Sudhir Mehta",
		alt: "Shri Sudhir Mehta",
		image: require("@/public/assets/images/convocations/Sudhir_Mehta.webp"),
		description: `The 14<sup>th</sup> Convocation of CHARUSAT was held on January 6, 2025, celebrating the academic journey of 2,735 graduates, including 35 PhD scholars. The ceremony highlighted CHARUSAT’s growing impact in research, innovation, digital education, and its strong industry collaborations. Students from diverse faculties were awarded degrees, with over 50 Gold Medals recognizing academic excellence. The convocation showcased the university’s commitment to nation-building through knowledge and skill development. Shri Sudhir Mehta graced the occasion as Chief Guest, emphasizing values of leadership, ethics, and entrepreneurship. His address aligned with CHARUSAT’s vision of nurturing globally competent and socially responsible graduates.`,
	},
	{
		year: "13th",
		guest: "Shri. Dharmendra Pradhan",
		alt: "Shri Dharmendra Pradhan",
		image: require("@/public/assets/images/convocations/dharmendra_pradhan.jpeg"),
		description: `The 13<sup>th</sup> Convocation of CHARUSAT took place on January 6, 2024. A total of 2650 students from various disciplines were conferred with degrees, marking a significant milestone in their academic journey. Among the graduates, there were 30 accomplished individuals who successfully earned their PhDs, showcasing their dedication to advanced research and scholarship. Adding to the significance of the event, the convocation was graced by a special guest, Dharmendra Pradhan, the Cabinet Minister for Education and Skill Development and Entrepreneurship in the Government of India. His presence added a unique perspective to the ceremony, highlighting the government’s commitment to education, skill development, and entrepreneurship.`,
	},
	{
		year: "12th",
		guest: "Shri. Ashok Patel",
		alt: "Shri Ashok Patel",
		image: require("@/public/assets/images/convocations/Ashok-Patel.jpg"),
		description: `The 12<sup>th</sup> Convocation of CHARUSAT was held on 13th January, 2023. In all, 2558 students from 6 different faculties of CHARUSAT namely, Faculty of Technology and Engineering, Faculty of Computer Science and Applications, Faculty of Pharmacy, Faculty of Management Studies, Faculty of Applied Sciences, and Faculty of Medical Sciences were awarded with the degrees including 27 PhD Scholars. Importantly, 45 students with academic excellence were awarded with different Gold Medals. The occasion was graced by the presence of Shri Ashok Patel, US based Technopreneur and Industrialist.`,
	},
	{
		year: "11th",
		guest: "Dr. Bimal Patel",
		alt: "Dr. Bimal Patel",
		image: require("@/public/assets/images/convocations/Dr_Bimal_Patel.webp"),
		description: `The 11<sup>th</sup> Convocation of CHARUSAT was held on 12th, 13th and 17th January, 2022. In all, 2271 students from 6 different faculties of CHARUSAT namely, Faculty of Technology and Engineering, Faculty of Computer Science and Applications, Faculty of Pharmacy, Faculty of Management Studies, Faculty of Applied Sciences, and Faculty of Medical Sciences were awarded with the degrees including 32 PhD Scholars. Importantly, 41 students with academic excellence were awarded with different Gold Medals. The occasion was graced by the presence of Dr Bimal Patel, Member, International Law Commission, and UN & Vice-Chancellor Rashtriya Raksha University.`,
	},
	{
		year: "10th",
		guest: "Shri. Harish Mehta",
		alt: "Shri. Harish Mehta",
		image: require("@/public/assets/images/convocations/convocation_10.jpg"),
		description: `Amid coronavirus pandemic, CHARUSAT, a leading university situated in Charotar region,celebrated the 10<sup>th</sup> Convocation event on 9<sup>th</sup>, 11<sup>th</sup> and 12<sup>th</sup> January 2021 at six different venues following strict social distancing norms. In all, 1813 students from 5 different faculties of CHARUSAT were awarded with the degrees including 28 PhD Scholars. Importantly, 30 students with academic excellence were awarded with different Gold Medals. Shri Harish Mehta, Founder & Executive Chairman of Onward Technologies and First elected Chairman of NASSCOM graced the occasion as the Chief Guest and delivered the convocation address online.`,
	},
	{
		year: "9th",
		guest: "Hon’ble Arif Mohammed Khan",
		alt: "Arif Mohammed Khan",
		image: require("@/public/assets/images/convocations/convocation9_1.jpg"),
		description: `CHARUSAT, a leading university situated in Charotar region, celebrated the 9<sup>th</sup> Convocation event on 11th January 2020. Hon’ble Governor of Kerala and former cabinet minister Mr Arif Mohammed Khan, graced the occasion as the Chief Guest and delivered the convocation address. Dr George Musser, a renowned American writer and a contributing editor for ‘Scientific American’ magazine, was the Guest of Honour for the event.`,
	},
	{
		year: "8th",
		guest: "Dr. R Chidambaram",
		alt: "Dr. R CHIDAMBARAM",
		image: require("@/public/assets/images/convocations/R-Chidambaram.jpg"),
		description: `The 8<sup>th</sup> Convocation of CHARUSAT was held on Saturday – January 12, 2019 (Academic Year 2017-18). In all, 1995 students from Faculty of Technology and Engineering, Faculty of Computer Science and Applications, Faculty of Pharmacy, Faculty of Management Studies, Faculty of Applied Sciences, and Faculty of Medical Sciences were awarded the degrees. In all, 34 gold medals were awarded to the deserving students. The 8th Convocation was an important landmark for CHARUSAT as 30 PhD Scholars were awarded degrees. It was graced by the presence of Dr. R Chidambaram, Padma Vibhushan and Padma Shri as the Chief Guest.`,
	},
	{
		year: "7th",
		guest: "Shri. A S Kiran Kumar",
		alt: "Shri. A S Kiran Kumar",
		image: require("@/public/assets/images/convocations/Kiran-Kumar.jpg"),
		description: `The 7<sup>th</sup> Convocation of CHARUSAT was held on Monday – January 08, 2018 (Academic Year 2016-17). In all, 1941 students from Faculty of Technology and Engineering, Faculty of Computer Science and Applications, Faculty of Pharmacy, Faculty of Management Studies, Faculty of Applied Sciences, and Faculty of Medical Sciences were awarded with the degrees. In all, 35 gold medals were awarded to the deserving students. The 7th Convocation was an important landmark for CHARUSAT as 46 Ph.D. Scholars were awarded degrees It was graced by the presence of Shri. A S Kiran Kumar, Chairman, ISRO as the Chief Guest.`,
	},
	{
		year: "6th",
		guest: "Dr. M I Patel",
		alt: "Dr. M I Patel",
		image: require("@/public/assets/images/convocations/Dr-M-I-Patel.jpg"),
		description: `The 6<sup>th</sup> Convocation of CHARUSAT was held on Saturday – December 24, 2016 (Academic Year 2015-16). In all, 1714 students from Faculty of Technology and Engineering, Faculty of Computer Science and Applications, Faculty of Pharmacy, Faculty of Management Studies, Faculty of Applied Sciences, and Faculty of Medical Sciences were awarded with the degrees. In all, 29 gold medals were awarded to the deserving students. The 6th Convocation was an important landmark for CHARUSAT as 21 Ph D Scholars were awarded degrees It was graced by the presence of Dr. M I Patel, Former Sheriff, Mumbai as the Chief Guest.`,
	},
	{
		year: "5th",
		guest: "Shri. O P Kohli",
		alt: "Shri. O P Kohli",
		image: require("@/public/assets/images/convocations/O-P-Kohli.jpg"),
		description: `The 5<sup>th</sup> Convocation of CHARUSAT was held on Saturday – December 5, 2015 (Academic Year 2014-15). In all, 1619 students from Faculty of Technology and Engineering, Faculty of Computer Science and Applications, Faculty of Pharmacy, Faculty of Management Studies, Faculty of Applied Sciences, and Faculty of Medical Sciences were awarded with the degrees. In all, 27 gold medals were awarded to the deserving students. The 5th Convocation was an important landmark for CHARUSAT as 7 Ph D Scholars were awarded degrees It was graced by the presence of Shri. O P Kohli, Hon. Governorshree of Gujarat as the Chief Guest.`,
	},
	{
		year: "4th",
		guest: "Dr. T. Ramasami",
		alt: "Dr. T. Ramasami",
		image: require("@/public/assets/images/convocations/Dr-T-Ramasami.jpg"),
		description: `The 4<sup>th</sup> Convocation of CHARUSAT was held on Saturday – December 20, 2014 (Academic Year 2013-14). In all, 1352 students from Faculty of Technology and Engineering, Faculty of Computer Science and Applications, Faculty of Pharmacy, Faculty of Management Studies, Faculty of Applied Sciences, and Faculty of Medical Sciences were awarded with the degrees. In all, 27 gold medals were awarded to the deserving students. It was graced by the presence of Padma Shri and Padma Bhushan Dr. T. Ramasami, Former Secretary, Department of Science and Technology (DST), Government of India as the Chief Guest.`,
	},
	{
		year: "3rd",
		guest: "Mr. Pankaj Patel",
		alt: "Mr. Pankaj Patel",
		image: require("@/public/assets/images/convocations/Mr-Pankaj-Patel.jpg"),
		description: `3<sup>rd</sup> Convocation of CHARUSAT was celebrated on January 11, 2014 (Academic Year 2012-13). The occasion was graced by Mr. Pankaj Patel, Chairman and Managing Director of ZydusCadila Healthcare Ltd as the Chief Guest. In all, 27 students with academic excellence were awarded with Gold Medals and 1288 students from 6 faculties including students of M. Phil and Ph. D were awarded with the degrees.`,
	},
	{
		year: "2nd",
		guest: "DR. R A Mashelkar",
		alt: "DR. R A Mashelkar",
		image: require("@/public/assets/images/convocations/dr_r_a_mashelkar.jpg"),
		description: `2<sup>nd</sup> Convocation of CHARUSAT was organized on February 16, 2013 (Academic Year 2011-12). The occasion was graced by Dr. R A Mashelkar, National Professor and President, Global Research Alliance National Chemical Laboratory as the Chief Guest. Global Research Alliance National Chemical Laboratory is a network of publicly funded R&D institutes from Asia-Pacific, Africa, Europe and USA with over 60,000 scientists. 390 students from 5 different faculties of CHARUSAT were awarded with the degrees. Importantly, 13 students with academic excellence were awarded with different Gold Medals.`,
	},
	{
		year: "1st",
		guest: "Dr. APJ Abdul Kalam",
		alt: "Dr. APJ Abdul Kalam",
		image: require("@/public/assets/images/convocations/APJ.jpg"),
		description: `The 1<sup>st</sup> Convocation of CHARUSAT was held on January 18, 2012 (Academic Year 2010-11). In all, 160 students from Faculty of Technology and Engineering, Faculty of Pharmacy, Faculty of Management Studies, and Faculty of Applied Sciences were awarded with Bachelor and Master Degrees. Students with highest CGPA were awarded with gold medals. In all, 8 gold medals were awarded to the deserving students. The occasion was graced by the presence of the Former President, India; Architect of the Missile Programme of India; and Bharat Ratna Dr. APJ Abdul Kalam the Chief Guest.`,
	},
];

const Convocations = () => {
	return (
		<Fragment>
			<title>Convocations @ CHARUSAT</title>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="CHARUSAT Convocations" />
			<meta name="robots" content="index" />
			<meta name="robots" content="follow" />
			<meta name="googlebot" content="index, follow" />
			<meta name="keywords" content="CHARUSAT Convocations" />
			<meta name="author" content="CHARUSAT" />
			<div className="blog-section padding-tb section-bg ">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12">
							<article>
								<div className="section-wrapper">
									<div className="row row-cols-1 justify-content-center g-4">
										<div className="col">
											<div className="post-item style-2">
												<div className="post-inner">
													<div className="post-content">
														<h3 className="fw-bold">Convocations </h3>
														<hr />
														<br />
														<Container style={{ textAlign: "justify" }}>
															<Row>
																<Col>
																	<span>
																		Convocation is a special event that marks
																		the culmination of academic pursuits for
																		students. At CHARUSAT, we organize our
																		convocations with utmost piety and Indian
																		tradition, making it a memorable experience
																		for all. We take great pride in conferring
																		degrees to our students in person, in a
																		dignified manner, and awarding them with
																		real gold medals and certificates, unlike
																		the trend of gold plated medals. We also
																		provide our students and their parents with
																		special attention and hospitality during the
																		event. <br />
																		<br />
																		Our convocation is a unique representation
																		of Indian culture, with the procession
																		scented with Ganpati Vandana and degree
																		conferment accompanied by Vedic shlokas. Our
																		students dress in traditional Indian
																		costumes and the convocation is inaugurated
																		with a traditional Deep Pragatya ceremony.
																		Notably, our convocation has been blessed by
																		dignitaries who have made substantial
																		contributions to the national development.
																		We are organizing convocations at CHARUSAT,
																		each one showcasing our commitment to
																		academic excellence and Indian culture.
																		Catch the glimpse of convocations.
																	</span>
																</Col>
															</Row>
															{convocations.map((conv, idx) => (
																<Fragment key={conv.year}>
																	<Row className="p-2">
																		<Col>
																			<hr />
																			<h6 className="fw-bold p-1">
																				{conv.year}
																				<sup>
																					{conv.year === "1st"
																						? "st"
																						: conv.year === "2nd"
																						? "nd"
																						: conv.year === "3rd"
																						? "rd"
																						: "th"}
																				</sup>{" "}
																				Convocation – {conv.guest}
																			</h6>
																		</Col>
																	</Row>
																	<Row className="p-2">
																		<Col md={2}>
																			<NextImage
																				src={conv.image.default}
																				alt={conv.alt}
																				style={{
																					width: "100%",
																					height: "auto",
																					borderRadius: "8px",
																				}}
																			/>
																		</Col>
																		<Col md={10}>
																			<span
																				dangerouslySetInnerHTML={{
																					__html: conv.description,
																				}}
																			/>
																		</Col>
																	</Row>
																</Fragment>
															))}
														</Container>
														<br />
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
			</div>
		</Fragment>
	);
};

export default Convocations;
