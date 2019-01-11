angular.module('mainModule',[])


			

            .controller('MainController', function($scope){
            
            	 $scope.date = new Date();

            	//El objetivo es visualizar esta informacion en la directiva
            	$scope.libro = {autor:'Gabriel Garcia marquez',
            					titulo:'Cien años de soledad', 
            					publicado: 1967
            					};

            					$scope.libros = [{	'autor':'Gabriel Garcia marquez',
            						'titulo':'Cien años de soledad', 
            						'publicado': 1967
            					} ,{	'autor':'Jose Emilio Pacheco',
            						'titulo':'Las batallas en el desierto', 
            						'publicado': 1981
            					} ,
            					{	'autor':'Thomas Girones',
            						'titulo':'El gran libro de android', 
            						'publicado': 2015
            					}   					];


            

            

         })