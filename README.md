# Animal adoption website
This is a React website, build using [Next.js v13.4.19](https://nextjs.org/) , [Prisma](https://www.prisma.io/) and [Mongo DB](https://www.mongodb.com/)

<img src="https://github.com/Costinnn/car-auction/assets/103998434/db622b8d-4756-4203-bb23-0a921f3ccd8c" width=70% >

## Introduction - project's aim
This is my third biggest project, and it's purpose was to help me deepen the understanding of Prisma schema model relations, Next.js features and API logic but also the arhitecture of a complex application with modal components, image carousel library Splidejs and bidding functionalities.

## Technologies
The technologies used in this project seem to me to be very efficient and oriented towards creating an efficient and easy-to-modify application in subsequent updates, and these are:

### React
React, a powerful library used in the front end of both applications, which helps you structure and organize in an easy-to-understand way, both javascript and jsx code.

### Next.js
Next.js a framework that brings major improvements to applications created with React that gives developers the option to create with server-side rendering and static websites.

### Prisma
Prisma was used to connect the application to database, to create models and to filter the posts that each page of the app needs.

### MongoDb
MongoDb is the database that I choosed to use for this project because of it's JSON-like data structure.

### HTML & SCSS
HTML & SCSS basic languages for web applications, I choosed SCSS over CSS only because it's nested structure, which helps me understand faster HTML components hierarchy.

## Dependencies :
### React-image-file-resizer
I used this package to compress the uploaded images, because if the size of the post was bigger that 10MB it wasn't uploaded to database.

### Axios
I used axios to fetch posts from database.

### Bcrypt
Bcrypt was used to hash the password before storing it to database, when a user register or login.

### Splidejs
I used this package to shorten the implementation time and to offer to the end user a simple, and robust image carousel.

## What I learned?
In this project compared to the previous one "adoption-website" I improved the API error and responses handling, prisma schema model relations, fetch functions with more efficient and secure methods of getting user data, overall project arhitercture and data props flow between pages and components.
Also something new that I introduced in this application is language selection (English and Romanian) and URL query params.

## Functionalities

### This is the main page where all the posts are displayed. Here the user can filter or search for specific auctions. Each post has a preview of 5 photos and information about the highest bid and the time left. In the auction page if you're not logged or the auction time expired you can't bid.
<img hspace="15" src="https://github.com/Costinnn/car-auction/assets/103998434/25cc9a45-daff-4a5c-9fa2-4869fcd8ad0b" width=30%><img hspace="15" src="https://github.com/Costinnn/car-auction/assets/103998434/9d89dbe0-8b02-4793-8243-f6408780cf97" width=30%><img hspace="15" src="https://github.com/Costinnn/car-auction/assets/103998434/5638d2df-aca6-4156-a12d-21fa4dee2545" width=30%>

### This is the main menu, if you're not logged you don't have access to these routes a sign up modal will open for user to log in.
<img src="https://github.com/Costinnn/car-auction/assets/103998434/a0883f3d-092f-4325-99a0-58d11095a332" width=30%>

### To access more functionality of the website you can create an account and login safely with you credentials. After a successful login you'll be able to add posts to favorites or create new auctions accessing the "Sell a car" button.
<img hspace="15" src="https://github.com/Costinnn/car-auction/assets/103998434/2626b324-1e4a-4f3b-9cde-5deb13e41f3e" width=30%><img hspace="15" src="https://github.com/Costinnn/car-auction/assets/103998434/9fac4163-faef-4b71-883e-a704f2426eaa" width=30%><img hspace="15" src="https://github.com/Costinnn/car-auction/assets/103998434/e158148a-9241-49c0-a3d2-9eb8d52a9e0b" width=30%>

### After a successful log in, you can access your account page and update your profile photo, username, bio or the settings about notifications.
<img hspace="20" src="https://github.com/Costinnn/car-auction/assets/103998434/1952a29c-f405-4652-b113-9e50827b6d33" width=30%><img hspace="20" src="https://github.com/Costinnn/car-auction/assets/103998434/95944591-480f-4bee-b571-a4d7b8f79d93" width=30%>

### If you're logged in you can view you auctions, bidded or saved ones.
<img src="https://github.com/Costinnn/car-auction/assets/103998434/60189381-4512-4650-9154-f56270728573" width=30%>

### Once you're logged you'll be able to bid on auctions that you're interested in
<img src="https://github.com/Costinnn/car-auction/assets/103998434/73b84a18-51f9-4857-a5db-0956412dbc35" width=30%>

## How to install the app on your computer

### Required environment variables:

DATABASE_URL=

NODE_ENV='development' OR 'production'

APP_URL=http://localhost:3000

NEXTAUTH_URL=http://localhost:3000

NEXTAUTH_SECRET=

NEXTAUTH_JWT_SECRET=

## Run the application

First, download the code and run 
```
npm install
```
then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

