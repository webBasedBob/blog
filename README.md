# NextJS Blog

Live version:https://blog-test-45680.web.app/


## Table of contents
- [Introduction](#introduction)
- [Tech stack](#tech-stack)
- [Project walk-through](#walk-through)
- [Setup/Launch](#setup)
- [Status](#status)

# Introduction
A blog made with NextJS, which uses the SSG (Static Site Generation) capabilities of the framework. It includes an 
admin console built from scratch that allows the admin to create blog posts. The blog has an article search feature that 
searches in the No-SQL Firestore database and returns paginated results. The entire website has SEO in place, with focus on 
the blog postings, which are also enriched google results.

# Tech Stack

- NextJS
- React
- Redux
- SASS
- Bootstrap + React Bootstrap
- PrimeReact (UI components library)
- Framer Motion
- Firebase

# Walk Through

Individual features worth mentioning:
 1. Search functionality
  - Keyword search that searches in the Firestore No-SQL database
  - It takes the lexical search approach (not the [semantic](https://en.wikipedia.org/wiki/Semantic_search) one - it's not Google)
  - Results are paginated to avoid unnecessary articles fetching (the next batch of results are fetched when "load more" is pressed)
  - It creates no-sql queryes on the client side for the Firestore api that is linked to the database
  
![image](https://github.com/webBasedBob/blog/assets/95532233/a7e0fdd1-bde7-42eb-8c2e-b4ed08476a24)

2. The blog posts are valid [Google Rich Results](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- This result is achieved by following Google's guide using [structured data](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)

![image](https://github.com/webBasedBob/blog/assets/95532233/57dc892d-c2e1-4ffc-952c-07f24d695c8d)

3. Social media sharing functionality
- Used Open [Graph protocol](https://ogp.me/) to achieve the article preview when shared on social media

![image](https://github.com/webBasedBob/blog/assets/95532233/7717d70d-f3a1-404e-b5eb-adcdd11791a2)

4. Admin Console - article builder
- the admin can build articles here by using the article sections in the toolbar dropdown as building blocks
- the data in the input fields are sent to the database and retrieved when the article is built for the user to access and read

![image](https://github.com/webBasedBob/blog/assets/95532233/5937b9aa-4367-4c2a-b18f-23f4ce4fd2b5)
printsreen 1: article builder with no sections added

![image](https://github.com/webBasedBob/blog/assets/95532233/e61129a3-c4b2-4fe3-86a8-bbe67eb43b11)
printsreen 1: article builder with sections added

Project's pages walkthrough:

#### [Home Page](https://blog-test-45680.web.app/)

The home page includes a hero section, a few "Popular Posts" sections (with carousels made of article cards, and a Newsletter sign up section.
![image](https://github.com/webBasedBob/blog/assets/95532233/d8083b19-9fb0-49ce-9bbb-f8e00ef5db25)

  
#### [Article Page]([https://react-course-proje.web.app/food](http://localhost:3000/article/how-to-prepare-for-a-job-interview-part-2/))

 The actual article that the final user interacts with
  
![image](https://github.com/webBasedBob/blog/assets/95532233/f0eefa1d-0b1a-4264-ba2c-71e54d461281)
  
![image](https://github.com/webBasedBob/blog/assets/95532233/48f2832f-85c3-4b32-aadc-b5e6dd835632)


# Setup

To run the the app on your machine and play around, just clone the repo and run npm install command in your terminal, then run npm run dev command to start a development server - and you're done.

# Status

The project is under active development.

