/*--------------------------------
----------comienzo del Slide-------
---------------------------------*/

	var numeroSlide = 1,
		formatearLoop = false,
		cantidadImagenes = $('#slide ul li').length;
		
	$(".slide ul").css({"width":(cantidadImagenes*100) + "%"});
	$(".slide ul li").css({"width":(100/cantidadImagenes) + "%"});

	// indicadores
	$('#indicadores li').click(function(){
		var roleIndicador = $(this).attr("role-indicador");
		
		$('#slide ul li').css({
			"display":"none"
		});

		$('#slide ul li:nth-child('+roleIndicador+')').fadeIn();

		$(".indicadores li").css({"opacity":".5"});

		$(this).css({"opacity":"1"});

		formatearLoop=true;

		numeroSlide=roleIndicador;

	});

    /*--------------------------------
	----------funciones-------------
	---------------------------------*/

	function avanzar(){
		if (numeroSlide<cantidadImagenes){
			numeroSlide++;
		} else {numeroSlide=1}

		$('#slide ul li').css({
			"display":"none"
		});

		$('#slide ul li:nth-child('+numeroSlide+')').fadeIn();

		$(".indicadores li").css({"opacity":".5"});

		$(".indicadores li:nth-child("+ numeroSlide+")").css({"opacity":"1"});
	}

	function retroceder(){
		if (numeroSlide>1){
			numeroSlide--;
		} else {numeroSlide=cantidadImagenes}

		$('#slide ul li').css({
			"display":"none"
		});

		$('#slide ul li:nth-child('+numeroSlide+')').fadeIn();

		$(".indicadores li").css({"opacity":".5"});

		$(".indicadores li:nth-child("+ numeroSlide+")").css({"opacity":"1"});
	}

	 /*--------------------------------
	------------flechas---------------
	---------------------------------*/

	//derecha
	$("#right").click(function(){
		avanzar();
		formatearLoop=true;
	});

	//izquierda
	$("#left").click(function(){
		retroceder();
		formatearLoop=true;
	});

// Automatización del slide

setInterval(function(){

	if (formatearLoop){
		formatearLoop=false;
	} else {
		avanzar();
	}

}, 4000);

// ---------------- fin de slide