import * as actionTypes from './actionTypes'

const initialState: ArticleState = {
    articles:[
        {
            id: 1,
            title: "Post 1",
            body:"bibbity-bobbity-boo"
        },
        {
            id: 2,
            title: "Post 2",
            body: "Alakazam"
        }
    ]
}

const reducer = (state:ArticleState = initialState, action:ArticleAction) => {
    switch(action.type) {
        case "ADD_ARTICLE":
            const newArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle)
            }
        case "REMOVE_ARTICLE":
            const updatedArticles:IArticle[] = state.articles.filter(article => article.id !== action.article.id)
            return {
                ...state,
                articles: updatedArticles
            }
    }
    return state;
}

export default reducer;