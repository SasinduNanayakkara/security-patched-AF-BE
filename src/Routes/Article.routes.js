import { Router } from "express";
import * as ArticleController from "../Controllers/Article.controller";
const router = Router();

router.post("/", ArticleController.createArticle);
router.get("/", ArticleController.getAllArticles);
router.get("/:id", ArticleController.getOneArticle);
router.get("/category/:category", ArticleController.getArticlesByCategory);
router.put("/:id", ArticleController.updateArticle);
router.delete("/:id", ArticleController.deleteArticle);
router.put("/comments/:id", ArticleController.addCommentToArticle);
router.get("/author/:author", ArticleController.getArticlesByAuthor);

export default router;