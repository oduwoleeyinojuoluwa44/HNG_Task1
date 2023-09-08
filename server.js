const express = require('express');
const app = express();
const port = 3000; 


app.get('/api', (req, res) => {
  
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[new Date().getDay()];

  const currentDate = new Date ();
  const currentUTCTime = currentDate.toISOString();

  const githubRepoUrl = "https://github.com/oduwoleeyinojuoluwa44/HNG_Task1";
  const githubFileUrl = `${githubRepoUrl}/blob/main/server.js`; // Replace with actual file name

  if(!slack_name || !track){
    return res.status(400).json ({error: "Both parameters are required"});
    }

 res.status(200).send({
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: currentUTCTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

  
  