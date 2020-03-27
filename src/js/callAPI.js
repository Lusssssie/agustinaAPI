import $ from 'jquery';
export default class Background {

	constructor() {
		this.initEls();//initialisation des éléments 
		this.initEvents();
	}

	initEls(){

		this.$els = {
			search:$('#search'),
			button:$('#button'),
			englishName:$('.name'),
			equaRadius:$('.js-radius'),
			mass:$('.js-mass'),
			exponent:$('.js-exponent'),
			gravity:$('.js-gravity'),
			rotation:$('.js-rotation'),
			container:$('.info')
		};
	}

	initEvents(){
		$(this.$els.button).click( () => {
            this.getData();
        });
		
	}

	getAPI(){
		const api={
			endpoint:`https://api.le-systeme-solaire.net/rest/bodies/`,
		};
		$.getJSON(api.endpoint).then((response)=>{
			console.log(response);
		}).catch((e)=>{
			console.log('error',e);
		});
	}

	getData(){
		const api={
			endpoint:'https://api.le-systeme-solaire.net/rest/bodies/'+this.$els.search.val(),
		};
		$.getJSON(api.endpoint).then((response)=>{
			console.log(response.equaRadius);
			console.log(response.mass.massValue);
			console.log(response.mass.massExponent);
			console.log(response.gravity);
			console.log(response.sideralRotation);
			this.renderPlanets(response.englishName,response.equaRadius,response.mass.massValue,response.mass.massExponent,response.gravity,response.sideralRotation);
/*	
			console.log(response.name),
			console.log(response.englishName),
			$('#bodyName').text(response.englishName),
			console.log(response.equaRadius),
			$('#ici').text(response.equaRadius),
			console.log(response.mass),
			$('#la').text(response.mass);*/
			


//ici pour afficheeeeeeeeeeeeeeeeeeeeeeeeeeer

		}).catch((e)=>{
			console.log('error',e);
		});
	}
	renderPlanets(englishName,equaRadius,massValue,massExponent,gravity,rotation,container){
		
		this.$els.container.addClass("show");


		this.$els.englishName.text(englishName);
		this.$els.equaRadius.text(equaRadius+' km');
		this.$els.mass.text(massValue+'x10');
		this.$els.exponent.text(massExponent+' kg');
		this.$els.gravity.text(gravity+' m/s²');
		this.$els.rotation.text(rotation+' hours');
	}
}