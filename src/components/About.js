import React from 'react';

const About = (props) => (
	<section className="about" id="about">
		<div className="flex flex--space-around">
			<div className="col-1">
				<div className="image-strip"></div>
			</div>

			<div className="col-1 order-first">
				<h2 className="home-lead">{props.title}</h2>
				<p className="home-lead push-right">{props.subtitle}</p>
			</div>
		</div>
	</section>
)

export default About;