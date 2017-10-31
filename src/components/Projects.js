import React from 'react';

import bg1 from '../assets/images/design-img/b-1.png';
import bg2 from '../assets/images/design-img/b-2.png';
import bg3 from '../assets/images/design-img/b-3.png';
import bg4 from '../assets/images/design-img/b-4.png';
import bg5 from '../assets/images/design-img/b-5.png';
import bg6 from '../assets/images/design-img/b-6.png';

const Projects = () => (
<section className="projects" id="projects">
	<div className="flex flex--center">
		<div className="col-50 flex flex--center behance" data-orig-color="#ea4c89">
			<div className="col-1">
				<p className="home-lead"> ...and Projects...</p>
				<a href="https://www.behance.net/gallery/42585751/Dribbble-4" className="design-img-link" data-color="#5aadb5">
					<img src={ bg1 } alt="" />
				</a>
				<a href="https://www.behance.net/gallery/44230307/Grava-Voz" className="design-img-link" data-color="#d32022">
					<img src={ bg2 } alt="" />
				</a>
				<a href="https://www.behance.net/gallery/42197111/Dribbble-2" className="design-img-link" data-color="#4c4c4c">
					<img src={ bg3 } alt="" />
				</a>
				<a href="https://www.behance.net/gallery/42196701/Dribbble-1" className="design-img-link" data-color="#f59e82">
					<img src={ bg4 } alt="" />
				</a>
				<a href="https://www.behance.net/gallery/41514021/Todo-List-App-in-JavaScript" className="design-img-link" data-color="#d57628">
					<img src={ bg5 } alt="" />
				</a>
				<a href="https://www.behance.net/gallery/41430265/E-mail-Marketing-Sampay" className="design-img-link" data-color="#f6c599">
					<img src={ bg6 } alt="" />
				</a>
				<div className="clearfix"></div>
				<a href="https://www.behance.net/julianopadilha" className="home-cta">See more on Behance</a>
			</div>
		</div>
	</div>
</section>
)

export default Projects;