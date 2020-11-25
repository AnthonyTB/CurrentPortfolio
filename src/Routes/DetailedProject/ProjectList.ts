import { IProject } from "../../interfaces";

export const Projects: IProject[] = [
  {
    Id: 1,
    Title: "Smart Marketplace",
    Links: [
      {
        Link: "https://smartmarketplace.app/",
        Title: "Live",
        Icon: "fas fa-tv",
      },
      {
        Link: "https://github.com/thinkful-ei-iguana/Anthony-FirstCapstone",
        Title: "Repo",
        Icon: "fab fa-github",
      },
    ],
    UserDescription: `Smart Marketplace users have the ability to shop other users’ active listings or create listings of their own. Users have the ability to make changes to their own active listings. Ech user also has a Profile that showcases all of their active listings.`,
    CreatorDescription: `Starting with the front end of the app. I broke down each route into separate components. Then utilized dynamic react-router props to see which item or profile data I needed to display. Then styled the app in a mobile-first design scheme. Now onto the back end, I created a NodeJS API using expressJS's router for my endpoints. I also did all my password hashing and decrypting within my API. Finally, I made sure all the post endpoints data was serialized before being stored in the database to prevent XSS attacks.`,
    Images: [
      "https://i.gyazo.com/e58688f3515ac233467baf5900b3ecc4.png",
      "https://i.gyazo.com/e4a32b6f094d9cb9ce8732e89779a504.png",
      "https://i.gyazo.com/567a97e1e50f3b15d82356293e4a4101.png",
      "https://i.gyazo.com/4f62d794eaf9bc3cc50865907315c9a2.png",
      "https://i.gyazo.com/060f4642ae8741fca6d5023778fe3731.png",
      "https://i.gyazo.com/f0696bc437ae778f12655adbb5d0291a.png",
    ],
    Url: "/project/Smart-Marketplace",
    Tags: ["School", "React", "NodeJS", "PostgreSQL"],
  },
  {
    Id: 2,
    Title: "Lyric Hunter",
    Links: [
      {
        Link: "https://lyrichunter-app.anthonytb.now.sh/",
        Title: "Live",
        Icon: "fas fa-tv",
      },
      {
        Link: "https://github.com/AnthonyTB/Lyric-Search-App",
        Title: "Repo",
        Icon: "fab fa-github",
      },
    ],
    UserDescription: `Have you ever wondered the lyrics to your favorite song or a song you just heard about well Lyric Hunter has you covered. Users' can type in the song's name and artist and if we have the lyrics we will display the lyrics to the user if not Lyric Hunter will display an error message informing the user.`,
    CreatorDescription: `Lyric Hunter is a front end only app utilizing Lyrics.ovh's API which houses many song's lyrics. The app is made of only a few components. Uses React Router to hold state in the URL. For example, if the user searches for "riot by three days grace" the app would redirect the user to "appurl/three-days-grace/riot". This supports seamless browser refresh.`,
    Images: [
      "https://i.gyazo.com/b0919c83cbb2654510a90b4c6b428abc.png",
      "https://i.gyazo.com/50664bcba871399b6bc0833e4dddab93.png",
      "https://i.gyazo.com/26d0b6b730df03b1c722ec2786e916e1.png",
    ],
    Url: "/project/Lyric-Hunter",
    Tags: ["School", "React"],
  },
  {
    Id: 3,
    Title: "Code Ninjas",
    Links: [
      { Link: "https://code-ninjas.now.sh/", Title: "Live", Icon: "fas fa-tv" },
      {
        Link: "https://github.com/AnthonyTB/CN-ActivityManager",
        Title: "Repo",
        Icon: "fab fa-github",
      },
    ],
    UserDescription: `The Activity Manager is a small web app . When you first access the web app you are greeted by a Login route. This is a private app so you can't create accounts guests will be able to access the app via the demo credentials. Once logged in under the mentor account or demo account you will have full access to the app. There's a timer that once started and the time runs out will select a random item from the list based on a randomly generated number between 1 and the list length. Guest and mentors also have the ability to create and delete activities. I also created a student view that way the kids would be able to interact with the app while on their laptops. While in the student view they only have access to creating activities and viewing the activity list.`,
    CreatorDescription: `Starting with the front end. It was pretty simple and done in a few hours. It has basic mobile first styling and broken up components. Some of the nice user experiences I added was if you created a activity and the POST returned 200 then I would push the item to the activity list that way the user wouldn't have to refresh their browser to see their changes. I also did the same with deleteing if the request returned okay then I removed the item from the list. For the backend I created a simple NodeJS API using express for the router. For password hashing and decrypting I used JWT. Finally I made the activity creation data go through serialization to prevent any silly XSS.`,
    Images: [
      "https://i.gyazo.com/594a06b98976698e5776a11814518be5.png",
      "https://i.gyazo.com/ad49459900edfad87f1b148b85b767b6.png",
      "https://i.gyazo.com/570bb44ae85dd5102c76ed4e14aa15ce.png",
      "https://i.gyazo.com/c955ea088cfa9818a3bedb348c7009ee.png",
    ],
    Url: "/project/Code-Ninjas",
    Tags: ["Personal", "React", "NodeJS", "PostgreSQL"],
  },
  {
    Id: 4,
    Title: "Rogue",
    Links: [
      {
        Link: "https://rogue.vercel.app/",
        Title: "Live",
        Icon: "fas fa-tv",
      },
      {
        Link: "https://github.com/AnthonyTB/Rogue",
        Title: "Repo",
        Icon: "fab fa-github",
      },
    ],
    UserDescription: `This small app helps users' stay connected Rogue. It showcases his current social media following and his most recent content like Twitch stream and latest YouTube upload.`,
    CreatorDescription: `This app is fairly simple just has alot of data overhead. For example we are making calls to 4 social media platforms to get his most current data. Also I created a number incrementer to give a cool user experience when viewing his social media following. Another cool feature I added was when he is live on Twitch I have it render his stream but when he's not live I render his most recent past broadcast so the user isn't just viewing a offline image from Twitch.`,
    Images: [
      "https://i.gyazo.com/5ef4113667adb705d8fef337f23c7888.png",
      "https://i.gyazo.com/0bfc32d1fa051d2451ea4199f5f404fb.png",
      "https://i.gyazo.com/1b46af5e63e2a2c4caf08d6d75eba366.jpg",
    ],
    Url: "/project/Rogue",
    Tags: ["Personal", "React"],
  },
  {
    Id: 5,
    Title: "PVPX",
    Links: [
      { Link: "https://pvpx.live/", Title: "Live", Icon: "fas fa-tv" },
      {
        Link: "https://github.com/AnthonyTB/PVPX",
        Title: "Repo",
        Icon: "fas fa-github",
      },
    ],
    UserDescription: `On the home route the app showcases his current social media following and his most recent content like Twitch stream and latest YouTube upload. Then there's a "About Me" route that has his information plus a F.A.Q section. Finally, The last route is "Equipment" which showcases all his equipment he uses to game and also some furniture in his stream room.`,
    CreatorDescription: `Pretty straight forward app. Has broken down components. I created a reusable heading component where it takes an object and renders the desired heading. For the equipment component I created a object based listing system where if you wanted to add another item to the list you would create a object in the desired section with 3 keys (heading, link, name) and then the component iterates through the array of objects and renders the items in a list.`,
    Images: [
      "https://i.gyazo.com/da1235c5d391b58570c8165bc107ec9c.png",
      "https://i.gyazo.com/b1a9d3fcfa2d9c2fcf4aa6330dbcb7b6.png",
      "https://i.gyazo.com/48715e66baa98e25a7d4d984954c0962.png",
    ],
    Url: "/project/PVPX",
    Tags: ["Personal", "React"],
  },
  {
    Id: 6,
    Title: "Meta Threads Web Scraper",
    Links: [
      {
        Link: "https://metathreads.herokuapp.com/query/",
        Title: "Server",
        Icon: "fas fa-server",
      },
      {
        Link: "https://github.com/AnthonyTB/metathreads-collection-scraper",
        Title: "Repo",
        Icon: "fas fa-github",
      },
    ],
    UserDescription: `The purpose of this scraper is if another developer is building a site or app for a content creator that has a clothing collection on Meta Threads. The scraper takes the collection name from the request and grabs all the data for the clothing items and returns all the items in a neat JSON fromat.`,
    CreatorDescription: `This app is a Node Server writter in TypeScript. I used a JavaScript web scraping library called CheerioJS. CheerioJS is pretty awesome it uses jQuery selectors to grab element's data out of the HTML. I choose to use ExpressJS for my router because I am familiar with it.`,
    Images: [
      "https://i.gyazo.com/22e739667101551f9641e1de1f842510.png",
      "https://i.gyazo.com/51f11b67aebab80b19cd0959e51c1e6e.png",
    ],
    Url: "/project/Meta-Threads-Web-Scrapper",
    Tags: ["Personal", "NodeJS", "Web Scraping"],
  },
];
