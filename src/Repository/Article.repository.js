import { Article } from "../Models/Article.model";

export const createArticle = async ({title, content, author, images, comments}) => {
    try {
        const result = await Article.create({title, content,author, images, comments});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getAllArticles = async () => {
    try {
        const result = await Article.find().populate("author").populate("comments.user");
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getOneArticle = async (id) => {
    try {
        const result = await Article.findById(id).populate("author").populate("comments.user");
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getArticlesByCategory = async (category) => {
    try {
        const result = await Article.find({category: category});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export  const updateArticle = async (id, {title, content,author, images, comments}) => {
    try {
        const result = await Article.findByIdAndUpdate(id, {title, content,author, images, comments});
        console.log("repo result", result);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const addCommentToArticle = async (id, {user, comment}) => {
    try {
        console.log("repo comment", id, user, comment);
        const result = await Article.findByIdAndUpdate(id, {$push: {comments: {user, comment}}});
        // const article = await getOneArticle(id);
        // console.log("comments", article.comments);
        // if (article) {
        //     article.comments.push({user, comment});
        //     const result = await article.save();
        //     return result;
        // }
        console.log("repo result", result);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const deleteArticle = async (id) => {
    try {
        const result = await Article.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getArticlesByAuthor = async (author) => {
    try {
        const result = await Article.find({author: author});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}