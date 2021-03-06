﻿require.config({
    baseUrl: "js",
    paths: {
        knockout: "lib/knockout/knockout-latest.debug",
        text: "lib/require-text/text.min",
        dataservice: "services/dataService",
        postman: "services/postman",
        store: "services/store"
    }
});

require(['knockout', 'text'], (ko) => {
    ko.components.register("my", {
        viewModel: {require: "components/my/my"},
        template: { require: "text!components/my/my.html" }
    });

    ko.components.register("category-list",
        {
            viewModel: { require: "components/categoryList/categoryList" },
            template: { require: "text!components/categoryList/categoryList.html" }
        });

    ko.components.register("category-details",
        {
            viewModel: { require: "components/categoryDetails/categoryDetails" },
            template: { require: "text!components/categoryDetails/categoryDetails.html" }
        });
});


require(['knockout', 'viewModel', 'store'], (ko, vm, store) => {
    store.subscribe(() => console.log(JSON.stringify(store.getState())));
    ko.applyBindings(vm);
});