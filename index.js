

require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "Abhishek-7408",
  "id": 105623789,
  "node_id": "U_kgDOBkuw7Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/105623789?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Abhishek-7408",
  "html_url": "https://github.com/Abhishek-7408",
  "followers_url": "https://api.github.com/users/Abhishek-7408/followers",
  "following_url": "https://api.github.com/users/Abhishek-7408/following{/other_user}",
  "gists_url": "https://api.github.com/users/Abhishek-7408/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Abhishek-7408/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Abhishek-7408/subscriptions",
  "organizations_url": "https://api.github.com/users/Abhishek-7408/orgs",
  "repos_url": "https://api.github.com/users/Abhishek-7408/repos",
  "events_url": "https://api.github.com/users/Abhishek-7408/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Abhishek-7408/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Abhishek Kushwaha",
  "company": null,
  "blog": "https://www.linkedin.com/in/abhishek-kushwaha-3396a3255/",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": "Software Developer | MERN, Full Stack Developer | Cloud architect | AWS | Competitive Programming",
  "twitter_username": null,
  "public_repos": 27,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2022-05-16T05:17:15Z",
  "updated_at": "2023-12-13T06:39:42Z"
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter',(req,res) =>{
res.send('abhishekkuswha')
})


app.get('/login',(req,res) => 
res.send('<h1>please login at site</h1>')
)

app.get('/youtube',(req,res)=>{
  res.send('<h2> chai aur code </h2>')
})

app.get('/githubData',(req,res) => {
  res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})