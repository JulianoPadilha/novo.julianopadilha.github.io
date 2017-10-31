import React from 'react';

import braziljs2017 from '../assets/images/posts/thumbnails/braziljs2017.png';
import flexboxcss from '../assets/images/posts/thumbnails/flexbox-css.png';
import devtools from '../assets/images/posts/thumbnails/devtools.png';
import html5 from '../assets/images/posts/thumbnails/html5.png';
import github from '../assets/images/posts/thumbnails/github.png';
import progressive from '../assets/images/posts/thumbnails/progressive.jpg';
import javascript from '../assets/images/posts/thumbnails/javascript.png';
import nubank from '../assets/images/posts/thumbnails/nubank.jpg';


const Articles = () => (
<section className="articles" id="articles">
	<div className="flex flex--center">
		<div className="col-50">
			<div className="article-wrap">
				<a href="http://julianopadilha.com/blog/braziljs-maior-conferencia-javascript-universo" className="article-thumb" style={{backgroundImage: "url("+ braziljs2017 +")"}}>
					<div className="article-meta">
						<div className="name">Um pouco sobre a BrazilJS 2017: a maior conferência JavaScript do Universo</div>
					</div>
				</a>
				<a href="http://julianopadilha.com/blog/fundamentos-css-flexbox" className="article-thumb" style={{backgroundImage: "url("+ flexboxcss +")"}}>
					<div className="article-meta">
						<div className="name">Fundamentos do CSS: Flexbox</div>
					</div>
				</a>
				<a href="http://julianopadilha.com/blog/debug-fundamentals-chrome-developer-tools" className="article-thumb" style={{backgroundImage: "url("+ devtools +")"}}>
					<div className="article-meta">
						<div className="name">Debug tips: Chrome Developer Tools</div>
					</div>
				</a>
				<a href="http://julianopadilha.com/blog/back-to-basics-html5-fundamentals-and-elements" className="article-thumb" style={{backgroundImage: "url("+ html5 +")"}}>
					<div className="article-meta">
						<div className="name">Back to basics: HTML5 Fundamentals</div>
					</div>
				</a>
				<a href="http://julianopadilha.com/blog/como-usar-github-como-um-ser-humano-adequado" className="article-thumb" style={{backgroundImage: "url("+ github +")"}}>
					<div className="article-meta">
						<div className="name">Como usar o GitHub como um ser humano adequado</div>
					</div>
				</a>
				<a href="http://julianopadilha.com/blog/precisamos-falar-sobre-progressive-enhancement" className="article-thumb" style={{backgroundImage: "url("+ progressive +")"}}>
					<div className="article-meta">
						<div className="name">Precisamos falar sobre Progressive Enhancement</div>
					</div>
				</a>
				<a href="http://julianopadilha.com/blog/how-to-build-todo-list-with-javascript-and-web-storage" className="article-thumb" style={{backgroundImage: "url("+ javascript +")"}}>
					<div className="article-meta">
						<div className="name">How to build: Um To-Do List com JavaScript utilizando a API Web Storage do HTML</div>
					</div>
				</a>
				<a href="http://julianopadilha.com/blog/nubank-interface" className="article-thumb" style={{backgroundImage: "url("+ nubank +")"}}>
					<div className="article-meta">
						<div className="name">Criação: Interface do Nubank</div>
					</div>
				</a>
			</div>
		</div>

		<div className="col-50 flex flex--center order-first">
			<div className="col-1">
				<div className="desc-wrap">
					<p className="home-lead outdented">...Who likes to write and design things...</p>
					<a href="http://julianopadilha/blog/" className="home-cta">See All Articles</a>
				</div>
			</div>
		</div>
	</div>
</section>
)

export default Articles;