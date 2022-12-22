const { Router } = require("express");
const { getStories, addStories } = require("../controller/stories.controller");



const storyRouter=Router()
storyRouter.get("/story",getStories)
storyRouter.post("/story",addStories)

module.exports={storyRouter}