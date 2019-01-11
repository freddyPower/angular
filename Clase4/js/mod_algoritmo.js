angular.module('modAlgoritmo',[])
            .controller('MainController', function($scope){
                       	
            	$scope.inicializar = function(){
            		$scope.intentos = 0;
	            	$scope.numeroUsuario = null;
	            	$scope.diferencia = null;
	            	$scope.numeroSecreto = Math.floor( (100*Math.random()) + 1 );
            	};

            	$scope.verificar = function(){
            		$scope.intentos +=1;
            		$scope.diferencia = $scope.numeroSecreto - $scope.numeroUsuario;
            	};

            	$scope.inicializar();

         })