define([], () => {

    const changeCategory = "CHANGE_CATEGORY";
    const currentComponent = "CURRENT_COMPONENT";
     
    let currentState = {};
    let subscribers = [];

    let getState = () => currentState;

    let subscribe = callback => {
        subscribers.push(callback);

        return () => {
            subscribers = subscribers.filter(x => x !== callback);
        }

    };

    let reducer = (state, action) => {
        switch (action.type) {
            case changeCategory:
                return Object.assign({}, state, { selectedCategory: action.selectedCategory });
            case currentComponent:
                return Object.assign({}, state, { currentComponent: action.currentComponent });
            default:
                return state;
        }
    }

    let dispatch = action => {
        currentState = reducer(currentState, action);

        subscribers.forEach(callback => callback());
    }


    let actions = {
        changeCategory: category => ({ type: changeCategory, selectedCategory: category }),
        currentComponent: name => ({ type: currentComponent, currentComponent: name })

    };
    
    return {
        getState,
        dispatch,
        subscribe,
        actions
    }

});