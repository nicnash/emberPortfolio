var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function(){
    this.route('index', {path: '/index'});
	this.route('about', {path: '/about'});
    this.resource('project', function(){
                        this.resource('project',{path: '/:title'});
                    });
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.ProjectsController = Ember.Controller.extend({

});

App.PROJECTS = DS.Model.extend({
                title:DS.attr('string'),
                description:DS.attr('string'),
                languages:DS.attr('string')
        });

App.PROJECTS.FIXTURES = [

    {
        title:'jumbo bsns',
        description:'displays all jumbo things',
        languages:'dance aroudn guys!'
    },
    {
        title:'aimp',
        description:'asset info platform',
        languages:'dance aroudn guys!'
    },
    {
        title:'tutor r us',
        description:'jfee',
        languages:'fortran!'
    }

];

App.ProjectRoute = Ember.Route.extend({
  model: function(params) {
    return App.PROJECTS.findBy('title', params.title);
  }
});
 