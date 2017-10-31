import React from 'react';

const skills = [
	'HTML/CSS',
	'JavaScript',
	'Git',
	'Bootstrap',
	'Gulp',
	'Sass',
	'Requirements Analysis',
	'PHP',
	'Wordpress',
	'Email Design',
	'jQuery',
	'Design Interfaces'
];

const Skills = () => (
<section className="skills" id="skills">
	<div className="flex flex--space-around">
		<div className="col-1 skill">
		{
			skills.map((skill, index) => (
				<p key={index}>{ skill }</p>
			))
		}
		</div>

		<div className="col-1 description">
			<div className="desc-wrap">
				<p className="home-lead outdented">...And have some cool skills...</p>
				<a href="https://br.linkedin.com/in/julianopadilha" className="home-cta">Checkout more Skills</a>
			</div>
		</div>
	</div>
</section>
)

export default Skills;