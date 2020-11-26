define(['knockout', 'dataservice', 'postman'], (ko, ds, postman) => {
    let selectedComponent = ko.observable('category-list');
    let selectedCategory = ko.observable();
    let currentParams = ko.observable({ selectedCategory });

    let changeContent = () => {
        if (selectedComponent() === "category-list") {
            currentParams({ category: selectedCategory });
            selectedComponent('category-details');
            postman.publish('changeCategory', selectedCategory());
        } else {
            currentParams({ selectedCategory });
            selectedComponent('category-list');
        }
    }

    postman.subscribe('changeCategory', selectedCategory);

    return {
        selectedComponent,
        currentParams,
        changeContent
    };
});