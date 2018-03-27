# Tumblr Redesign

This project has three purposes.

1 Demonstrate the author's skills with React
2 Demonstrate the author's skills (acquired while writing this code) with GraphQL
3 Demo some minor UX enhancements to the tumblr website.

## Table of Contents
- [The UX Enhancements](#the-ux-enhancements)
- [Choosing Which Features to Implement](#choosing-which-features-to-implement)
- [When Reviewing the Code](#reviewing-the-code)
- [Viewing the App](#viewing-the-app)
- [What Else Do I Need to Run This](#what-else-do-i-need-to-run-this)
- [Tech Used](#tech-used)
- [Tutorials and Resources](#tutorials-and-resources)


## The UX Enhancements

The inspiration for this project comes from two observations:
1 Spending a lot of time on social media can be fatiguing due to the abundance of clutter in most social media UIs. Each thing the user sees on the screen subtracts from their limited pool of willingness to continue browsing.
2 Yet looking at the same content sources indefinitely can get boring. At will, the user wants to be able to entertain some other options. Maybe at one time, this desire is for a little peek. Another time, it may be for the full exploration experience.

Let me observe, first, that the tumblr website UI is *very good.* Its appealing to use, and they are, largely, getting all the things right. The challenges appointed above probably cannot be completely overcome, but may be improved upon with small tweaks.

I chose my tweaks to include
- **theater mode** to address the first challenge
- **incremental exploration** to address the second

Theater mode simulates watching your feed like a movie. It focuses the user's attention on the content and only the content. Try it out by clicking the film reel.

Incremental exploration gives the user 3 levels of immersion, depending on how much attention they want to divert from typical content browsing.
- Level 1, they can just cast a glance at the sidebar to see recommended blogs.
- Level 2, They can click the header of the recommended blogs to get an overlay showing the top post from each recommendation.
- Level 3, THey can click anywhere in the overlay to completely switch to the exploration view.

## Choosing Which Features to Implement

Tumblr has a fairly complete and complex set of functionality. For this demo, I chose to only implement the things needed for the two UX enhancements described above.

Specifically, I implemented feed display, exploration, and single blog display. Bells and whistles like messaging, account maintenance and authorization/authentication were excluded because they are irrelevant to the demo goal.

## When Reviewing the Code

Expect to find FeedApp, ExploreApp and BlogApp, the three SPAs that makeup this demo.

The code mostly speaks for itself. The main components, Feed and Explore, share use of a SidebarOverlay and a NavBar.

Nearly every Component has an accompanying CSS file. Most Components draw all their styles from their accompanying .css. There are a few shared classes (.rounded, .shadow) in index.css. There are also some derivative Components that reuse styles from a similar but more primary Component.

For example, the Sidebar in the FeedApp contains a (mimicking tumblr) feature called Radar that shows a single post from the top recommended blog. The ExploreApp also uses the Radar layout to display posts via a component called ExploreRadar. For that reason, ExploreRadar shares many classes with Radar and the Sidebar in general.

## Viewing the App

```
yarn start
```

## What Else Do I Need to Run This

It stands alone. However, if you want the app to display data, you'll need another project running on localhost:4000.

Right now, in order to run this and have it work, you need to look at the first blog created in the database. Use MongoDB Compass to do that and copy the blogId into FeedApp.js.

The db created by the backend package will generate randomized UIDs, so any time you drop the database or
deploy the app for the first time, you need to grab that authorName=this-user blogId and paste it into FeedApp.

Coming soon, a heroku instance of all this so you can play without pasting. Happy Trails. 

[TODO include that project here]

## Tech Used

- This is a [React project](https://reactjs.org/docs/hello-world.html).
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
- This project uses [react-apollo](https://github.com/apollographql/react-apollo) to make [graphql](https://graphql.org/) queries.
- This project uses [react-router](https://github.com/ReactTraining/react-router/blob/25776d4dc89b8fb2f575884749766355992116b5/packages/react-router/docs/guides/migrating.md#the-router) to a limited extent.
- This project animates its SidebarOverlay with [velocity-react](https://github.com/google-fabric/velocity-react)

## Tutorials and Resources

I made use of quite a large number of tutorials and various resources while learning and writing code. Here are most, hopefully all of them:

### Create React App
I encountered some problems with create-react-app that others do not appear to be having (possibly because I developed in bash on Ubuntu on Windows). For example, `npm i --save react-apollo` removed react and react-dom. I verified this was not expected behavior using the below, and found they could just be reinstalled.
-[Create React App readme](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)
-[How to use `create-react-app` with GraphQL & Apollo](https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff)

### React Apollo
I set up react-apollo using the following resources:
-[Get started (with Apollo Client)](https://www.apollographql.com/docs/react/essentials/get-started.html)
There's not much documentation on `compose` (from 'react-apollo'). I found a good example here:
-[Use result for first query in second query with Apollo Client?
(StackOverflow)](https://stackoverflow.com/questions/48880071/use-result-for-first-query-in-second-query-with-apollo-client)

### GraphQL Mutations
I used the following as a direct template for CreatePost:
- [How to GraphQL: Mutations: Creating Links](https://www.howtographql.com/react-apollo/3-mutations-creating-links/)

### React Router
-[Beginners guide to React Router (freecodecamp)](https://medium.freecodecamp.org/beginner-s-guide-to-react-router-53094349669)
-[A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
And for sorting out the differences between v3 and v4:
-[Migrating from v2/v3 to v4](https://github.com/ReactTraining/react-router/blob/25776d4dc89b8fb2f575884749766355992116b5/packages/react-router/docs/guides/migrating.md#the-router)

### Velocity
-[Simple And Clean Animations with Velocity in React](https://medium.com/@Corvidaee/simple-and-clean-animations-with-velocity-in-react-33a5cd82b8bb)

### Styling
-[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
-[Styling Broken Images](https://bitsofco.de/styling-broken-images/)
