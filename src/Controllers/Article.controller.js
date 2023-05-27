import { addArticle, addCommentToAnArticle, deleteArticleById, getArticleById, getArticles, getArticlesUsingCategory, getAuthorArticles, updateArticleById } from "../Services/Article.service"

export const createArticle = async (req, res) => {
    const {title, content, category, author, images, comments} = req.body;
    try {
        const result = await addArticle({title, content, category, author, images, comments});
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}

export const getAllArticles = async (req, res) => {
    try {
        const result = await getArticles();
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}

export const getOneArticle = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await getArticleById(id);
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}

export const getArticlesByCategory = async (req, res) => {
    const category = req.params.category;
    try {
        const result = await getArticlesUsingCategory(category);
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}

export const updateArticle = async (req, res) => {
    const id = req.params.id;
    const {title, content, category, author, images, comments} = req.body;
    console.log("controller", id, title, content, category, author, images, comments);
    try {
        const result = await updateArticleById(id, {title, content, category, author, images, comments});
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}

export const addCommentToArticle = async (req, res) => {
    const id = req.params.id;
    const {user, comment} = req.body;
    try {
        const result = await addCommentToAnArticle(id, {user, comment});
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}

export const deleteArticle = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await deleteArticleById(id);
        res.status(200).json({ data: result, status: 'success' });
    }
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}

export const getArticlesByAuthor = async (req, res) => {
    try{
        const result = await getAuthorArticles(req.params.author);
        res.status(200).json({ data: result, status: 'success' });
    }   
    catch (error) {
        res.status(400).json({ data: error.message, status: 'error' });
    }
}