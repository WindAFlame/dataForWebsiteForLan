/*

 */
app.controller('MainCtrl',function($scope){

    // Formulaire
    $scope.form = {};
    $scope.form.model = {};
    $scope.form.input = {};
    $scope.form.input.release = new Date();
    $scope.form.submit = function(){
        if ($scope.form.model.$valid){
            alert(JSON.stringify(formatResult($scope.form.input)));
        } else {
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