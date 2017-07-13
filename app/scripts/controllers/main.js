/*

 */
app.controller('MainCtrl',function($scope){

    // Formulaire
    $scope.form = {};
    $scope.form.model = {};
    $scope.form.submit = function(){
        if ($scope.form.model.$valid){
            console.log(generateData(
                setGeneralInfo($scope.form.input.title,$scope.form.input.synopsis,$scope.form.input.cover),
                setDonwloadInfo(),
                setDetailData()
            ))            
        } else {
        }
    };
});