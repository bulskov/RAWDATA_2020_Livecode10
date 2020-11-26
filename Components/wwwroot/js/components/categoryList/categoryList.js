define(['knockout', 'dataservice'], (ko, ds) => {
    return function (params) {
        let categories = ko.observableArray([]);
        let selectedCategory = ko.observable();

        let selectCategory = category => {
            console.log(category);
            selectedCategory(category);
        }

        ds.getCategories(function (data) { categories(data) });

        return {
            categories,
            selectCategory,
            selectedCategory
        }
    }
});