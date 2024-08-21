// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("node:fs");
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  data = data.slice(0, parseInt(req.query.count));

  let myfile;
  let allblog = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf8");
    allblog.push(JSON.parse(myfile));
  }
  res.status(200).json(allblog);
}
