import React from 'react';

import startup from '../assets/images/startup.png';
import leadership from '../assets/images/leadership.png';
import write from '../assets/images/write.png';
import read from '../assets/images/read.png';
import puzzle from '../assets/images/puzzle.png';
import code from '../assets/images/code.png';

const Interests = () => (
	<section className="interests" id="interests">
	<div className="flex flex--center">
		<div className="col-1">
			<ul className="items">
				<li className="item" style={{backgroundImage: "url("+ startup +")"}}>
					<div className="bubble">
						<p><span style={{fontWeight: 'bold'}}>ENTREPRENEURSHIP</span> has the power to change reality and bring innovation to the most diverse areas, causing economies to grow and more opportunities arise. I am an entrepreneur. And you?</p>
					</div>
				</li>

				<li className="item" style={{backgroundImage: "url("+ leadership +")"}}>
					<div className="bubble">
						<p><span style={{fontWeight: 'bold'}}>LEADERSHIP</span> is one of the great skills that someone who wants to change the world needs to have. I work hard to exercise my leadership every day in everything I'm involved.</p>
					</div>
				</li>

				<li className="item" style={{backgroundImage: "url("+ write +")"}}>
					<div className="bubble">
						<p><span style={{fontWeight: 'bold'}}>WRITE</span> is one of the ways I have found to put order in the ideas bubbling in my head. Writing also helps me in the study process. I usually write about everything I'm studying and this has helped me a lot.</p>
					</div>
				</li>

				<li className="item" style={{backgroundImage: "url("+ read +")"}}>
					<div className="bubble">
						<p><span style={{fontWeight: 'bold'}}>READ</span> gives me the power to go further and see the world from a different perspective from mine. I read everything and do not spend a single day without reading something (article, book, ebook, etc ..). In my GitHub has a repository only with books and ebooks I have ever read.</p>
					</div>
				</li>

				<li className="item" style={{backgroundImage: "url("+ puzzle +")"}}>
					<div className="bubble">
						<p><span style={{fontWeight: 'bold'}}>STUDY</span> shows me that I always have something new to learn and I should never stay in my comfort zone. I love to study and know that every day I know a little bit more than the previous day.</p>
					</div>
				</li>

				<li className="item" style={{backgroundImage: "url("+ code +")"}}>
					<div className="bubble">
						<p>Knowing how to <span style={{fontWeight: 'bold'}}>CODE</span> is like having super powers. And I believe that I have powers to create awesome things and share to world.</p>
					</div>
				</li>
				
				<li className="back-btn item"></li>

			</ul>
		</div>

		<div className="col-1">
			<p className="home-lead outdented">...Passionate about some things...</p>
			<a href="https://twitter.com/padilhano" className="home-cta">See more things</a>
		</div>
	</div>
</section>
)

export default Interests;