angular.module('modAlcance',[])

            .run(function($rootScope){
                $rootScope.propiedadRaiz="Scope Raiz"
            })


            .controller('controladorExterno', function($scope){         	
            		$scope.propiedadExterna = "Scope Externo";
            })

             .controller('controladorInterno', function($scope){            
                    $scope.propiedadInterna = "Scope Interno";

                    $scope.mensaje = "Desde este scope podemos ver: " + $scope.propiedadRaiz 
                    + " " + $scope.propiedadExterna + " " + $scope.propiedadInterna;

            })