define(['knockout', 'dataservice', 'postman'], (ko, ds, postman) => {
    return function (params) {
        let category = ko.observable();
        
        postman.subscribe('changeCategory', category);

        return {
            category
        }
    }
});