notesTracker.config(function($stateProvider){
  $stateProvider.state('notes',{
    url:'/notes' ,
    templateUrl: '/app/notes/note.html',
    controller: 'noteController'
  })
  .state('notes.edit' , {
    url:'/:id' ,
    templateUrl: '/app/notes/edit.html',
    controller: 'noteController'
  })
   .state('notes.new' , {
    url:'/new' ,
    templateUrl: '/app/notes/new.html',
    controller: 'noteController'
  });

});

notesTracker.factory('Note', function($resource){
  return $resource('/api/v1/notes/:noteId',{
    noteId: '@_id'
  }, {
    update: {
      method: 'PUT'
    } 
  })
})