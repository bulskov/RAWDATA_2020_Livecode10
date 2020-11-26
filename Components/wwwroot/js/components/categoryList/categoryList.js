define(['knockout', 'dataservice', 'postman'], (ko, ds, postman) => {
    return function (params) {
        let categories = ko.observableArray([]);
        let selectedCategory = params.selectedCategory;

        let selectCategory = category => {
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