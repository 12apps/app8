notesTracker.controller('noteController',function(Note,$state, $scope){
  $scope.var = "test from noteController" ; 
  if($state.params.id){
    $scope.note = Note.get({noteId: $state.params.id});
  }

  // GET /api/v1/notes/ index
  $scope.notes = Note.query(function(){
  },function(err){});
  
  $scope.center = function(note){
    return note.lat + ',' + note.lon ;
  }
  $scope.saveNote = function(){
    getLocation(function(position){
      $scope.newNote.lat = position.coords.latitude;
      $scope.newNote.lon = position.coords.longitude;
      var toSave = new Note($scope.newNote);
      
      // POST /api/v1/notes
      toSave.$save(function(){
        $scope.notes.push(toSave);
      })
    })
  };
  $scope.updateNote = function(note){
    
    //PUT /api/v1/notes/:id
    note.$update();
    $scope.notes = Note.query();

  };
  $scope.deleteNote = function(note){
    
    // delete /api/v1/notes/:id
    note.$remove(function(){
      console.log('deleted');
      $scope.notes.splice($scope.notes.indexOf(note),1);
    });
  };
  function getLocation(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(callback);
    } 
  }

});