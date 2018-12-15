angular.module('counter',[])
            .controller('MainController', function($scope){
            $scope.contador = 0;
            
            $scope.sumarUno = function(){
                $scope.contador += 1;
            }
            
            $scope.restarUno = function(){
                $scope.contador -= 1;
            }
         })