/**
 * Created by lee on 10/25/17.
 */
describe('testing angularjs filter', function() {
    it('name',inject(function($filter)){
        var filter = $filter;
        var data =[];
        expect(data.length).toBe(3);
        var newdata = filter('filterName')(filterElement, 15)
        expect(newdata.length).toBe(2);
        expect(newdata.city).toBe('')
        expect(newdta).toBe()
    } )

})