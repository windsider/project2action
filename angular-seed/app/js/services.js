'use strict';

angular.module('myApp.services', [])
    .factory('IdeaService', ['$http', function($http){
        var service = {
            onError:function (data, status, headers, config) {
                if(status == 500 && headers('Error') == 1000 && headers('Message') == 'Unauthorised')
                    window.location = '/project2action/signin.html';
                    //window.location = '/InQueue/signin.html';
            },
            load:function(callback){
                $http.get('/api/idea').success(callback).error(service.onError);
            },
            create: function(idea, callback){
                $http.post('/api/idea', idea).success(callback);
            },
            getIdea: function(ideaId, callback){
                $http.get('/api/idea/'+ideaId).success(callback);
            },
            createProject:function(project, callback){
                $http.post('/api/project/', project).success(callback);
            },
            getProjects:function(ideaId, callback){
                $http.get('/api/i/'+queueId).success(callback).error(service.onError);
            },
            like:function(idea, callback){
                $http.put('/api/idea/'+idea.id+'/like').success(callback);
            },
            removePerson:function(person){
                $http.delete('/api/person/'+ person.id);
            },
            find:function(input, callback){
                $http.get('/api/queue/find/'+input).success(callback).error(service.onError);
            },
            jumpIn: function(queue){
                $http.post('/api/queue/'+queue.id+'/jumpIn');
            },
            loadMemberQueue: function(callback){
                $http.get('/api/queue/memberIn').success(callback);
            }
        }
        return service;
    }])
    .value('version', '0.1');
