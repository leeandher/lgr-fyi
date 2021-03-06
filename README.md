# lgr-fyi

Welcome to [lgr.fyi](https://lgr.fyi)! It's a simple, open-source, Link Shortener that I developed while I was learning Node.js. I later scrapped that build and tried to re-engineer it completely, making a bunch of UI changes as well as changing some stuff about how it was deployed. The final product is pretty nifty if I do say so myself. 

## Using the app

You've definitely used a URL shortener before so I really don't think I need to explain it to you but I'll do it anyway. You just add any link you want to the input field and the app will spit out a nice, short `lgr.fyi` link that will redirect to your linked resource. It makes sure links are unique, and even lets you add a custom suffix to your link if you prefer that. Any of your immediate links will be stored in your local storage, to keep them nice and accessible!

## How it works

The initial version of the app was actually a Node App running on an EC2 instance through [AWS](https://aws.amazon.com/). It was set up with Elastic Beanstalk to have load balancing and better performance, but as my AWS Free Tier limits are quickly approaching, I decided to remove it from there and host in on [Digital Ocean](https://www.digitalocean.com/). I don't have much experience with the DevOps world, so setting up a Linux Box to run the app was a welcome challenge. 

The actual tech behind the app is pretty simple. The URLs, short and long, are all inside a **MongoDB** database, while the **Node** app sits on an **Express** server somewhere in the _Digital Ocean_. There's CORS stuff implemented to prevent any abuse, but besides that it all just works!

The frontend is actually a **Vue** app because I've been doing a lot of _React_ thus far, and I kinda wanna mix things up a little bit. It's served statically from the express server, and built together with **TypeScript** to enforce some extra rules. 

The main difficulty that came from deployment, so I actually wrote a little blog post about it, which I welcome you to check out! [leander.xyz/blog/real-deployment](https://leander.xyz/blog/real-deployment)


## Redeployment (Edit)

If you're ever making changes (@leeandher in the future), these are the steps you need to take to update the DO droplet and not cause downtime.

After connecting to the server and pulling the latest changes...

If it's a server-side change (/server):
```shell
# Start a new task with the 'start-x' command
# pm2 start npm --name "lgr.fyi" -- run start-x
# To reload the task
pm2 reload lgr.fyi
``` 
If it's client-side (/client):
```shell
npm run build
```
