var express = require("express");
var fs = require("fs");
var axios = require("axios");
var cheerio = require("cheerio");
var app = express();

app.get("/", function(req, res) {
  const link = "https://de.indeed.com/jobs?q=Programmierer&l=deutschland";

  let jobList = [];
  axios.get(link).then(response => {
    const $ = cheerio.load(response.data);
    $(".jobsearch-SerpJobCard").map((i, el) => {
      const title = $(el)
        .find(".title")
        .text()
        .trim();
      const company = $(el)
        .find(".company")
        .text()
        .trim();
      const location = $(el)
        .find(".location")
        .text()
        .trim();
      const description = $(el)
        .find(".summary li")
        .first()
        .text()
        .trim();

      jobList.push({ title, company, location, description });
    });

    fs.writeFile(
      "../../../src/jobScraping.json",
      JSON.stringify(jobList, null, 4),
      function(err) {
        console.log(
          "File successfully written! - Check your project directory for the output.json file"
        );
      }
    );
  });

  // res.send("Check your terminal!");
});

app.listen("8081");

console.log("Magic happens on port 8081");

exports = module.exports = app;
