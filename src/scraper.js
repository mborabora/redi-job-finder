const axios = require('axios');
const cheerio = require('cheerio');

export const jobsScraping = (link) => {
  return axios
    .get(link)
    .then(response => {
      const $ = cheerio.load(response.data);
      let jobList = [];
      const results = $(".jobsearch-SerpJobCard").map((i, el) => {
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
        jobList.push({ title, company, location });
      });
      return jobList;
    });
}