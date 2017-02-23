$(document).ready(function(){

	heightItemModule.action($(".b-features__list"));
	heightItemModule.action($(".b-slogan__list"));
	heightItemModule.action($(".b-bottom-footer_bg"));

});


var heightItemModule = (function(){
	var maxHeight = 0; // начальное значение высоты

	var _maxHeight = function(arrElements){
		for(var i = 0; i < arrElements.length; i += 1){

			elemHeight = $(arrElements[i]).height();

			if(maxHeight < elemHeight){
				maxHeight = elemHeight;
			}
		}
		console.log(maxHeight);
	}

	var _heightElements = function(arrElements){
		for(var i = 0; i < arrElements.length; i += 1){
			$(arrElements[i]).height(maxHeight);
		}
	}
	return {
		action : function(classContainer){
			console.log(classContainer);
			var mainElement = classContainer, // контейнер, в которм нужно равнять дочерние блоки
				arrElements = mainElement.children(), // массив дочерних блоков 
				arrElementsLength = arrElements.length; // количество элементов массива
				

			_maxHeight(arrElements);
			_heightElements(arrElements);
		}
	}
})();