# Smize

> [Smize App](https://smize-app.vercel.app/) \| [App GitHub Repo](https://github.com/ikarskarn/smize-app.git) \| [Api GitHub Repo](https://github.com/ikarskarn/smize-api.git)

Smize utilizes the custom API created by Marc Tucker. [API DOCUMENTATION HERE](https://github.com/ikarskarn/smize-api/blob/master/README.md)

## Introduction

Smize; Smile with your eyes!

The phrase was coined by Tara Banks. Smiling with your eyes is the best way to get a natural smile for the camera. The Smize App is designed for photographers to encourage their clients to do just that. One of the most challenging aspects of being a photographer, is getting a natural smile out of the client. Smize displays humorous (sometimes) sayings, jokes, and statements for the photographer to read while taking photos of clients.

> This version of the app is intended to demo the app's functionality and provides observers with the opportunity to create a delete their own to experience the app without credentials.

## Tools

The tools used in the creation of this app include:

Front end: **React** \| **CSS** \| **HTML** \| **JQuery**
Back end: **Express** \| **Node.js** \| **PostgreSQL**

## Purpose

Photographers from all over can add their own sayings with the Share Your Smize feature to expand the app even further. They can share their own or just use the app to get a laugh or a chuckle out of their clients. They just have to choose a category and watch the Smize roll. They can even pick a preferred speed!

## Style

Below is a list of the current pages and a brief description of their purpose and intentional design.

## Landing Page

The landing page is to simply provide users with a brief description about the app and what steps can be taken next.

<img src="src/Images/landingPage_mobile_01.JPG" alt="Mobile Home Page" width="250"/> &nbsp; &nbsp; &nbsp; <img src="src/Images/landingPage_mobile_02.JPG" alt="Mobile Home Page" width="250"/>

<img src="src/Images/landingPage_tablet.JPG" alt="Tablet Home Page" width="525"/>

## Smize Page

The Smize page is in two parts. Part 1 is a category selection. Part 2 displays sayings from the chosen category.

<img src="src/Images/smizePage_mobile_01.JPG" alt="Mobile Smize Category Selection" width="250"/> &nbsp; &nbsp; &nbsp; <img src="src/Images/smizePage_mobile_02.JPG" alt="Mobile Smize Slideshow Example" width="250"/>

<img src="src/Images/smizePage_tablet.JPG" alt="Tablet Smize Catalog Choice" width="525"/>

## Smize Share Page

The Smize Share page provides a list of all sayings divided into categories. A user can simply add a new saying by click **Add +** next to the category they wish to create a new saying for. They can also delete a Smize by simply clicking the delete button next to the saying.
\*This would normally be filtered by user as well but for demonstration purposes, it has not.

<img src="src/Images/smizeSharePage_mobile_01.JPG" alt="Mobile Smize Share Page" width="250"/> &nbsp; &nbsp; &nbsp; <img src="src/Images/smizeSharePage_mobile_02.JPG" alt="Mobile Smize Share Add Example" width="250"/>

<img src="src/Images/smizeSharePage_desktop.JPG" alt="Desktop Smize Share Page" width="525"/>

## API ENDPOINTS

Below are the list of endpoints available for the API

### CATEGORIES

/api/categories

-   **GET**: get all categories

### SAYINGS

/api/sayings

-   **GET**: get all saying
-   **POST**: post new saying

/api/sayings/:saying_id

-   **DELETE**: delete saying by id
