import * as actionTypes from './actionTypes'

export const addArticle = (article:IArticle) => {
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article: article
    }

    return simulateHttpRequest(action); //This would be the fetch.
}

export const removeArticle = (article:IArticle) => {
    const action: ArticleAction = {
        type: actionTypes.REMOVE_ARTICLE,
        article: article
    }

    return simulateHttpRequest(action); //This would be the fetch.
}

export function simulateHttpRequest(action: ArticleAction) {
    return (dispatch: DispatchType) => {
        setTimeout(()=>{
            dispatch(action)
        }, 500)
    }
}