import * as actionTypes from "./actionTypes";

const initialSate: ArticleState = {
    articles: [
        {
            id: 1,
            title: "post1",
            body:
              "There once was a cat called Mr. Whiskers, he had a ship and it ran the seas!",
        },
        {
            id: 2,
            title: "post 2",
            body: "Yum my kitty cat yum" //Dont judge me
        },
    ],
}

const reducer = (
    state: ArticleState = initialSate,
    action: ArticleAction
): ArticleState => {
    switch(action.type) {
        case "ADD_ARTICLE":
            const newArticle: IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle)
            }
        case "REMOVE_ARTICLE":
            const updatedArticles: IArticle[] =  state.articles.filter(
                article => article.id !== action.article.id
            )
            return {
                ...state,
                articles: updatedArticles,
            }
    }
    return state;
}

export default reducer;