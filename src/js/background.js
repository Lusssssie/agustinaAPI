import $ from 'jquery';//dit à web pack que quand on met $ ca fait référence à jquery
import SearchBar from './searchBar';

/*
* Objectif : récupérer une image aléatoire à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une image de façon asynchrone à partir de l'API d'Unsplash (https://source.unsplash.com/)
* 3- Définir l'image comme fond
* */

export default class Background {

	constructor() {
		this.initEls();//initialisation des éléments 
		this.initEvents();
	}

	initEls(){

		this.$els = {//this fait ref à background
			background:$('.js-background'),
		};
		this.url='https://source.unsplash.com/1600x900/?stars,space,moon,planet,planets';
	/*
		this.url='https://source.unsplash.com/collection';
		this.cat='638440';//catégorie
		this.size='1920x1080';//this fait reference à background*/
	}

	initEvents(){

		this.loadImage();//this fait reference à background
	}

	loadImage(){
		//on fait une promesse en js

		const promise = new Promise((resolve, reject)=>{

			const image = new Image();

			image.src = `${this.url}/${this.cat}/${this.size}`;	//template deadresse de l'img
			image.onload = () => {
				resolve(image);//si marche
			};
			image.onerror = (error) => {
				reject(error);//si marche pas
			}
		});

		promise.then((image)=> {
			this.addBackground(image);
		});//si fonctionne

		promise.catch((error)=>{
			console.log('Error with the Unsplash image', error);
		});//si fonctionne pas
	}

	addBackground(image){
		this.$els.background.css('background-image',`url(${image.src})`);
		this.$els.background.addClass('is-ready');
		new SearchBar();
	}

}