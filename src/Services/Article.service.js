import { addCommentToArticle, createArticle, deleteArticle, getAllArticles, getArticlesByAuthor, getArticlesByCategory, getOneArticle, updateArticle } from "../Repository/Article.repository";

export const addArticle = async ({title, content, category, author, images, comments}) => {
    try {
        const result = await createArticle({title, content, category, author, images, comments});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getArticles = async () => {
    try {
        const result = await getAllArticles();
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getArticleById = async (id) => {
    try {
        const result = await getOneArticle(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getArticlesUsingCategory = async (category) => {
    try {
        const result = await getArticlesByCategory(category);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
};

export const updateArticleById = async (id, {title, content, category, author, images, comments}) => {
    console.log("service", id, title, content, category, author, images, comments);
    try {
        const result = await updateArticle(id, {title, content, category, author, images, comments});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const addCommentToAnArticle = async (id, {user, comment}) => {
    console.log("service comment", id, user, comment);
    try {
        const result = await addCommentToArticle(id, {user, comment});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const deleteArticleById = async (id) => {
    try {
        const result = await deleteArticle(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getAuthorArticles = async (author) => {
    try {
        const result = await getArticlesByAuthor(author);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}