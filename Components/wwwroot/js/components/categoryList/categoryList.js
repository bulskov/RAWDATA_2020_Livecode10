define(['knockout', 'dataservice', 'postman'], (ko, ds, postman) => {
    return function (params) {
        let categories = ko.observableArray([]);
        let selectedCategory = ko.observable();

        let selectCategory = category => {
            console.log(category);
            selectedCategory(category);
            postman.publish('changeCategory', category);
        }

        ds.getCategories(function (data) { categories(data) });

        return {
            categories,
            selectCategory,
            selectedCategory
        }
    }
});