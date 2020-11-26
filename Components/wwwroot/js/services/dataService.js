define([], () => {

    let getCategories = (callback) => 
    {
        fetch('api/categories')
            .then(response => response.json())
            .then(callback);
    }

    let getCategory = (id, callback) => {
        fetch('api/categories/' + id)
            .then(response => response.json())
            .then(callback);
    }

    return {
        getCategories,
        getCategory
    }
});