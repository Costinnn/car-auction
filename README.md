# Car auction website
This is a React website, build using [Next.js v13.4.19](https://nextjs.org/) , [Prisma](https://www.prisma.io/) and [Mongo DB](https://www.mongodb.com/)

<img src="https://github.com/Costinnn/car-auction/assets/103998434/9f3a849e-8b8b-46b2-92fb-fc2b615fcf6c" width=70% >

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

#### Cloudinary
After problems with big sized data fetched from database I integrated Cloudinary Image API to reduce the size of data fetched from MongoDb and speed up the time for displaying high quality images on the website from a CDN.

#### React-image-file-resizer (replaced with cloudinary API)
I used this package to compress the uploaded images, because if the size of the post was bigger that 10MB it wasn't uploaded to database.

#### Axios
I used axios to fetch posts from database.

#### Bcrypt
Bcrypt was used to hash the password before storing it to database, when a user register or login.

#### Splidejs
I used this package to shorten the implementation time and to offer to the end user a simple, and robust image carousel.

## What I learned?
In this project compared to the previous one "adoption-website" I improved the API error and responses handling, prisma schema model relations, fetch functions with more efficient and secure methods of getting user data, overall project arhitercture and data props flow between pages and components.
Also something new that I introduced in this application is language selection (English and Romanian) and URL query params.

## Functionalities

#### This is the main page where all the posts are displayed. Here the user can filter or search for specific auctions. Each post has a preview of 5 photos and information about the highest bid and the time left. If you're not logged in you can't add posts to favorite and the sign up modal will pop up
<img src="https://github.com/Costinnn/car-auction/assets/103998434/76ba1ff4-255a-432b-ad39-56411a442ddd" width=48%><img hspace="15" src="https://github.com/Costinnn/car-auction/assets/103998434/4c1bdaff-d5ea-464a-a4ae-f66c2741c535" width=48%>
======

#### On the right is the main menu opened and if you're not logged in you don't have access to these routes. A sign up modal will open for user to log in. Also, you can still filter and search for you favorite car
<img src="https://github.com/Costinnn/car-auction/assets/103998434/289d82bf-543c-463a-a611-17a051075ff1" width=70%>.
======

#### To access more functionality of the website you can create an account and login safely with you credentials. After a successful login you'll be able to add posts to favorites or create new auctions accessing the "Sell a car" button.
<img src="https://github.com/Costinnn/car-auction/assets/103998434/2626b324-1e4a-4f3b-9cde-5deb13e41f3e" width=30%><img hspace="15" src="https://github.com/Costinnn/car-auction/assets/103998434/3a7d1636-1f4c-4301-b443-8b849bc6644d" width=65%>
======

#### After a successful log in, you can access your account page and update your profile photo, username, bio or the settings about notifications.
<img src="https://github.com/Costinnn/car-auction/assets/103998434/86270630-1013-45b6-8610-ea27ee10fe4c" width=70%>.
======

#### Once you're logged you'll be able to bid on auctions that you're interested in and view high quality images delivered from CDN
<img src="https://github.com/Costinnn/car-auction/assets/103998434/406b4355-e961-444c-b0be-21c347c7ca4d" width=48%><img hspace="15" src="https://github.com/Costinnn/car-auction/assets/103998434/1ffdbfc5-3faa-4b9c-8ba6-b18b341a1d33" width=48%>
======

#### Also you can view you auctions, bidded or saved ones.
<img src="https://github.com/Costinnn/car-auction/assets/103998434/60189381-4512-4650-9154-f56270728573" width=30%>.
======



## How to install the app on your computer

### Required environment variables:

DATABASE_URL=

NODE_ENV='development' OR 'production'

APP_URL=http://localhost:3000

NEXTAUTH_URL=http://localhost:3000

NEXTAUTH_SECRET=

NEXTAUTH_JWT_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

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

