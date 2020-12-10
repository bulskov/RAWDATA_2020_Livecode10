define(['knockout', 'dataservice', 'store'], (ko, ds, store) => {
    return function (params) {
        let categories = ko.observableArray([]);
        let selectedCategory = ko.observable(store.getState().selectedCategory);

        let selectCategory = category => {
            selectedCategory(category);
            store.dispatch(store.actions.changeCategory(category));
        }

        ds.getCategories(function (data) { categories(data) });

        return {
            categories,
            selectCategory,
            selectedCategory
        }
    }
});