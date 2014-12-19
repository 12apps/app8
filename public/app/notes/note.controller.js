notesTracker.controller('noteController',function(Note,$scope){
  $scope.var = "test from noteController" ; 
  
  // GET /api/v1/notes/
  $scope.notes = Note.query(function(){
  });
  
  $scope.saveNote = function(){};
    $scope.updateNote = function(){};
    $scope.deleteNote = function(note){
      note.$remove(function(){
        console.log('deleted');
        $scope.notes.splice($scope.notes.indexOf(note),1);
      });
    };

  
});