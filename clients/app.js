'use strict';
var engApp = angular.module('engApp', ['ngRoute']);

    engApp.config(function($routeProvider){
      $routeProvider.when('/', {
        templateUrl: '/views/home/default.html',
        controller: 'HomeCtrl'
      })
    });
