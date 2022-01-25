const router = require("express").Router();
const main = require("../controllers/mainController");

router.get("/", main.getMainPage);
router.get("/contact", main.getContact);
router.get("/about", main.getAbout);
// Anywhere routes
router.get("/projects/anywhere", main.getAnywhere);
router.get("/projects/anywhere/im", main.getIm);
router.get("/projects/anywhere/we", main.getWe);
router.get("/projects/anywhere/live", main.getLive);
router.get("/projects/anywhere/dreamy", main.getDreamy);
router.get("/projects/anywhere/notes", main.getNotes);

// SCL routes
router.get("/projects/scl", main.getScl);

// SSl Routes
router.get("/projects/ssl", main.getSsl);
router.get("/projects/ssl/astika", main.getAstika);

// Razder
router.get("/projects/razder", main.getRazder);

//Stnon fashion
router.get("/projects/stf", main.getStf);

// Life is Gift
router.get("/projects/life-is-a-gift/clear-paper", main.getCP);

router.get("/*", main.getAll);
module.exports = router;
