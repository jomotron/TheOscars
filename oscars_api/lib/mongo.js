const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/oscars";
const dbName = "oscars";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(function (error) {
  if (error) throw error;
  console.log("Connection to mongo successfull...");
});

const getCategories = async () => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    resolve(db.collection("data").distinct("category"));
  });
};

const getCategory = async (category) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    const categoryQuery = { category: category };

    db.collection("data")
      .find(categoryQuery)
      .toArray(function (error, result) {
        if (error) reject(error);
        resolve(result);
      });
  });
};

const getFilmYear = async (year) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    const filmYearQuery = { year_film: year };

    db.collection("data")
      .find(filmYearQuery)
      .toArray(function (error, result) {
        if (error) reject(error);
        resolve(result);
      });
  });
};

const getCeremonyYear = async (year) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    const ceremonyYearQuery = { year_ceremony: year };

    db.collection("data")
      .find(ceremonyYearQuery)
      .toArray(function (error, result) {
        if (error) reject(error);
        resolve(result);
      });
  });
};

module.exports.getCategories = getCategories;
module.exports.getCategory = getCategory;
module.exports.getFilmYear = getFilmYear;
module.exports.getCeremonyYear = getCeremonyYear;
