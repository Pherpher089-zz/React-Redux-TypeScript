interface IArticle {
    id: number,
    title: string,
    body: string,
}

type ArticleState = {
    articles: IArticle[]
}

type ArticleAction = {
    type: string, // Action type goes here
    article: IArticle // Payload goes here
}

type DispatchType = (args: ArticleAction) => ArticleAction