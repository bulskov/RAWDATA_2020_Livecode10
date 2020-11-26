define(['knockout', 'dataservice'], (ko, ds) => {
    let selectedComponent = ko.observable('category-details');
    let currentParams = ko.observable();

    let changeContent = () => {
        if (selectedComponent() === "category-list") {
            ds.getCategory(1,
                function(category) {
                    currentParams({ category });
                    selectedComponent('category-details');
                });
        } else {
            selectedComponent('category-list');
        }
    }
    return {
        selectedComponent,
        currentParams,
        changeContent
    };
});