import * as angular from 'angular';

"use strict";

angular.module('BasicModule')
    .controller('BasicController', BasicController);


BasicController.$inject = [];

function BasicController() {

    // Creating the view model reference
    var vm = this;

    vm.loadData = function () {
        try {

            vm.lines = [
                {
                    id: 1,
                    name: 'rafael',
                    element: [
                        {
                            id: 100,
                            name: 'Field 1'
                        },
                        {
                            id: 200,
                            name: 'Field 2'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'fatima',
                    element: [
                        {
                            id: 300,
                            name: 'Field 3'
                        },
                        {
                            id: 400,
                            name: 'Field 4'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'marianldo',
                    element: [
                        {
                            id: 500,
                            name: 'Field 5'
                        },
                        {
                            id: 600,
                            name: 'Field 6'
                        }
                    ]
                }

            ];

        } catch (exception) {
            switch (exception.constructor.name) {
                default:
                    console.log(exception.message);
            }
        }
    }
}