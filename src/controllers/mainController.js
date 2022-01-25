const { anywhere } = require("../config/db");
const db = require("../config/db");

exports.getMainPage = (req, res) => {
  res.render("home", { home: db.home });
};

exports.getContact = (req, res) => {
  res.render("contact", { contact: db.contact });
};

exports.getAbout = (req, res) => {
  res.render("about", { about: db.about });
};

// anywhere controller
exports.getAnywhere = (req, res) => {
  res.render("anywhere", { anywhere: db.anywhere });
};

exports.getIm = (req, res) => {
  res.render("im", { im: db.im });
};

exports.getWe = (req, res) => {
  res.render("we", { we: db.we });
};

exports.getLive = (req, res) => {
  res.render("live", { live: db.live });
};

exports.getDreamy = (req, res) => {
  res.render("dreamy", { dreamy: db.dreamy });
};

exports.getNotes = (req, res) => {
  res.render("notes", { notes: db.notes });
};

exports.getScl = (req, res) => {
  res.render("scl", { scl: db.scl });
};

exports.getSsl = (req, res) => {
  res.render("ssl", { ssl: db.ssl });
};

exports.getAstika = (req, res) => {
  res.render("astika", { astika: db.astika });
};

exports.getRazder = (req, res) => {
  res.render("razder", { razder: db.razder });
};

exports.getStf = (req, res) => {
  res.render("stf", { stf: db.stf });
};

exports.getCP = (req, res) => {
  res.render("clearPaper", { clearPaper: db.clearPaper });
};

exports.getAll = (req, res) => {
  res.render("error", { error: db.error });
};
