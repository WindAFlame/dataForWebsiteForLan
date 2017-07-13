/*

 */
app.controller('MainCtrl',function($scope){

    // Formulaire
    $scope.form = {};
    $scope.form.model = {};
    $scope.form.input = {};
    $scope.form.input.release = new Date();
    $scope.form.input.download = {};
    $scope.form.input.download.model = {};
    $scope.form.input.download.list = [];
    $scope.form.input.download.value = {};
    $scope.form.submit = function(){
        if ($scope.form.model.$valid){
            alert(JSON.stringify(formatResult($scope.form.input)));
        } else {
        }
    };
    $scope.form.input.download.submit = function(){
        if ($scope.form.input.download.model.$valid){
            $scope.form.input.download.list.push({
                'name': $scope.form.input.download.value.name,
                'link': $scope.form.input.download.value.link,
                'size': $scope.form.input.download.value.size,
                'system': $scope.form.input.download.value.system
            });
            $scope.form.input.download.value.name = null;
            $scope.form.input.download.value.link = null;
            $scope.form.input.download.value.size = null;
            $scope.form.input.download.value.system = null;
        }
    };
});

let formatResult = function(inputList){
    let releaseDate = [];
    releaseDate.push(inputList.release);
    return {
        'title': inputList.title,
        'synopsis': inputList.synopsis,
        'cover': inputList.cover,
        'picture': null,
        'info': {
            'genre': formatListOfObjectToListOfList(inputList.genre),
            'developer': formatListOfObjectToListOfList(inputList.developer),
            'editor': formatListOfObjectToListOfList(inputList.editor),
            'audio': formatListOfObjectToListOfList(inputList.audio),
            'subtitle': formatListOfObjectToListOfList(inputList.subtitle),
            'system': formatListOfObjectToListOfList(inputList.system),
            'release': releaseDate
        }
    }
}

let formatListOfObjectToListOfList = function(listObject){
    let listList = [];
    angular.forEach(listObject,function(value,key){
        listList.push(value.text);
    });
    return listList;
}