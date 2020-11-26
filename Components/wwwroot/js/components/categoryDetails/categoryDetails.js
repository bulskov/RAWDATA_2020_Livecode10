define(['knockout', 'dataservice'], (ko, ds) => {
    return function (params) {
        let category = ko.observable(params.category);
        //let id = params.id || 1;
        //debugger;
        //ds.getCategory(id, function (data) { category(data) });

        return {
            category
        }
    }
});