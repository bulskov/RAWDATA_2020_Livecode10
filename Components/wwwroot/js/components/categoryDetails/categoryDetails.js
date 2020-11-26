define(['knockout', 'dataservice', 'postman'], (ko, ds, postman) => {
    return function (params) {
        let category = params.category;
        //let id = params.id || 1;
        //debugger;
        //ds.getCategory(id, function (data) { category(data) });

        postman.subscribe('changeCategory', category => {
            console.log(category);
        });

        return {
            category
        }
    }
});