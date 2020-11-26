define(['knockout', 'dataservice'], (ko, ds) => {
    let selectedComponent = ko.observable('category-list');
    let selectedCategory = ko.observable();
    let currentParams = ko.observable({ selectedCategory });

    let changeContent = () => {
        if (selectedComponent() === "category-list") {
            currentParams({ category: selectedCategory });
            selectedComponent('category-details');
        } else {
            currentParams({ selectedCategory });
            selectedComponent('category-list');
        }
    }
    return {
        selectedComponent,
        currentParams,
        changeContent
    };
});