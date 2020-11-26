define(['knockout', 'dataservice'], (ko, ds) => {
    return function (params) {
        let categories = ko.observableArray([]);

        ds.getCategories(function (data) { categories(data) });

        return {
            categories
        }
    }
});