angular.module('mainModule',[])


			.directive('miDirectiva' , function(){
				return{
					restrict:'AECM',
					replace:true, //Remplaza el elemento donde se utiliza, por default en false
					//template:'<h1> Directiva personalizada en angular js</h1>'
					//templateUrl:'directivas/mi-directiva.html'
					templateUrl:'directivas/mi-directiva2.html',
					scope : { 
						//Indica que recibira un valor desde html
						libroAutor: "@", //Crea un enlace para pasar texto unicamente
						libroTitulo: "@",
						libroPublicado: "@",
						libroObjeto:"=", //Crea un enlace doble para pasar objetos completos
						enMayusculas: "&" //Simbolo para recibir funciones

						} //Esto indica que no se debe heredera el scope del controlador, la directiva tendra su propio scope
				}
			})


            .controller('MainController', function($scope){
            
            	//El objetivo es visualizar esta informacion en la directiva
            	$scope.libro = {autor:'Gabriel Garcia marquez',
            					titulo:'Cien años de soledad', 
            					publicado: 1967
            };

            //paso de funciones a travexz de directivas
            $scope.enMayusculas = function(libro){
            	return libro.titulo.toUpperCase() + ' ' + libro.autor.toUpperCase();
            } 

         })