/**
 * Created by lee on 10/25/17.
 */

describe('this is angular test', function() {
    beforeEach(module('testingAngularApp'));

    describe('test angular constroller1', function () {
        var ctr,scope
        beforeEach(inject(function($controller,$rootScope) {
            scope = $rootScope.$new();
            ctr = $controller('testingAngularCtrl',{$scope:scope});
        }))
        it('should initializa the title in the scipe', function() {
            expect(scope.title).toBe('hello');
        })
    })
})