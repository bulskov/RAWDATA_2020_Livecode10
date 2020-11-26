define(['knockout', 'dataservice'], (ko, ds) => {
    return function (params) {
        let category = ko.observableArray();
        let id = params.id;

        ds.getCategory(id, function (data) { category(data) });

        return {
            category
        }
    }
});