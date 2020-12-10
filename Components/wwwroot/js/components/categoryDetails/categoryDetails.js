define(['knockout', 'store'], (ko, store) => {
    return function (params) {
        let category = ko.observable(store.getState().selectedCategory);
        
        store.subscribe(() => category(store.getState().selectedCategory));


        return {
            category
        }
    }
});