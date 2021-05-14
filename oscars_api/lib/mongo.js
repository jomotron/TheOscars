const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/oscars";
const dbName = "oscars";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(function (error) {
  if (error) throw error;
  console.log("Connection to mongo successful...");
});

//grabs all categories
const getCategories = async () => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    resolve(db.collection("data").distinct("category"));
  });
};

//grabs specific category
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

const getCategoryWinner = async (category, year) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    const categoryWinnerQuery = {
      category: { $regex: new RegExp(category, "i") },
      winner: "True",
      year_film: String(year),
    };

    db.collection("data")
      .find(categoryWinnerQuery)
      .toArray(function (error, result) {
        if (error) reject(error);
        resolve(result);
      });
  });
};

//gets all movies made during a specific year
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

//gets all movies made during specific ceremony year
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

//gets all movies made during specific ceremony
const getCeremonyNumber = async (ceremonyNumber) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    const ceremonyNumberQuery = { ceremony: ceremonyNumber };

    db.collection("data")
      .find(ceremonyNumberQuery)
      .toArray(function (error, result) {
        if (error) reject(error);
        resolve(result);
      });
  });
};

const getCeremonyNumberWinner = async (ceremonyNumber, category) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    const ceremonyNumberWinnerQuery = {
      ceremony: ceremonyNumber,
      category: { $regex: new RegExp(category, "i") },
      winner: "True",
    };

    db.collection("data")
      .find(ceremonyNumberWinnerQuery)
      .toArray(function (error, result) {
        if (error) reject(error);
        resolve(result);
      });
  });
};

//gets all winners
const getResults = async () => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    const resultQuery = { winner: "True" };

    db.collection("data")
      .find(resultQuery)
      .toArray(function (error, result) {
        if (error) reject(error);
        resolve(result);
      });
  });
};

//gets specific movie results
const getFilmName = async (filmName, winner) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);
    var filmQuery = null;
    if (winner === null) {
      filmQuery = { film: { $regex: new RegExp(filmName, "i") } };
    } else {
      filmQuery = {
        film: { $regex: new RegExp(filmName, "i") },
        winner: { $regex: new RegExp(winner, "i") },
      };
    }

    db.collection("data")
      .find(filmQuery)
      .toArray(function (error, result) {
        if (error) reject(error);
        resolve(result);
      });
  });
};

//lists all unique movies
const getFilmNames = async () => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    resolve(db.collection("data").distinct("film"));
  });
};

//lists all involvement of a specific actor/actress
const getActorName = async (actorName, winner) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    var namesQuery = null;
    if (winner === null) {
      namesQuery = { name: { $regex: new RegExp(actorName, "i") } };
    } else {
      namesQuery = {
        name: { $regex: new RegExp(actorName, "i") },
        winner: { $regex: new RegExp(winner, "i") },
      };
    }

    db.collection("data")
      .find(namesQuery)
      .toArray(function (error, result) {
        if (error) reject(error);
        resolve(result);
      });
  });
};

//method will get years between and pull all movies in between date
const rangeOfYears = async (year1, year2, winner) => {
  return new Promise((resolve, reject) => {
    const db = client.db(dbName);

    var dateRangeQuery = null;
    if (winner === null) {
      dateRangeQuery = { year_film: { $gte: year1, $lte: year2 } };
    } else {
      dateRangeQuery = {
        year_film: { $gte: year1, $lte: year2 },
        winner: { $regex: new RegExp(winner, "i") },
      };
    }

    db.collection("data")
      .find(dateRangeQuery)
      .toArray(function (error, result) {
        if (error) reject(error);
        resolve(result);
      });
  });
};

module.exports.rangeOfYears = rangeOfYears;
module.exports.getFilmNames = getFilmNames;
module.exports.getActorName = getActorName;
module.exports.getFilmName = getFilmName;
module.exports.getResults = getResults;
module.exports.getCategories = getCategories;
module.exports.getCategory = getCategory;
module.exports.getCategoryWinner = getCategoryWinner;
module.exports.getFilmYear = getFilmYear;
module.exports.getCeremonyYear = getCeremonyYear;
module.exports.getCeremonyNumber = getCeremonyNumber;
module.exports.getCeremonyNumberWinner = getCeremonyNumberWinner;
