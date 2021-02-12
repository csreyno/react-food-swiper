require("dotenv").config();

const http = require("http");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const es6Renderer = require("express-es6-template-engine");
// need to npm i express-session session-file-store
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const { requireLogin } = require("./auth");

const { 
  userRouter, 
  memberRouter,
  cardRouter, 
  recipeRouter,
  listRouter 
} = require("./routers");

const {
  memberController,
  homeController,
  unauthorized,
} = require("./controllers");

const { recipes, likes } = require("./models");

const { memberLayout } = require("./utils");

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;
const HOST = "0.0.0.0";

const logger = morgan("tiny");

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.use(
  session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    rolling: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(logger);
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", homeController.home);
app.use("/api/users", userRouter);
app.use("/api/members-only", memberRouter);
app.use("/api/recipe-card", cardRouter);
app.use("/api/recipes", recipeRouter);
app.use("/api/list", listRouter);
app.get("/api/status", (req, res) => {
  if (req.session.user) {
    res.status(200).send("ok")
  } else {
    res.status(400).send("not ok")
  }
})

// app.get("/members-only", requireLogin, memberController.membersOnly); // requirelogin must be before function
// app.post("/members-only/addlike", memberController.addLike)
// app.get("/list", async (req, res) => {
//   const { username } = req.session.user;
//   const { id } = req.session.user;
//   const { recipeid } = req.body;
//   if (id) {
//     const myLikes = await likes.findAll({
//       where: {
//         user_id: id,
//       },
//       include: recipes,
//     });
//     console.log(JSON.stringify(myLikes, null, 4));
//     res.render("list", {
//       locals: {
//         username,
//         myRecipes: myLikes.map((l) => l.recipe),
//       },
//       ...memberLayout,
//     });
//   } else {
//     res.redirect("/");
//   }
// });

// app.get("/development", (req, res) => {
//   const { username } = req.session.user;
//   res.render("development", {
//     locals: {
//       username,
//     },
//     ...memberLayout,
//   });
// });

// app.get("/list/:recipeid", async (req, res) => {
//   const { recipeid } = req.params;
//   const recipeCard = await recipes.findByPk(recipeid);
//   const { username } = req.session.user;
//   res.render("recipe-card", {
//     locals: {
//       recipe: recipeCard,
//       ingredients: recipeCard.ingredients.split(","),
//       preparation: recipeCard.preparation.split("."),
//       username,
//     },
//     ...memberLayout,
//   });
// });

app.get("/unauthorized", unauthorized.badUser);

server.listen(PORT, HOST, () => {
  console.log(`Listening at port ${PORT}`);
});
