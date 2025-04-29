# Little Lemon Capstone Project
This is a project I completed for the Meta Front-end Developer Course on Coursera.

### Prompt
 - Utilizing React build the app and add a Reserve A Table feature per client request
 - Identify Target Market utilizing UX Research ideologies
 - Develop a prototype in Figma showcasing the Design Style requested by client
 - App is to have functional form that requires input in order to submit
 - Utlize API's for features included in website

 ## Table Of Contents
  - [Overview](#overview)
    - [How To Use](#how-to-use)
    - [Tech Stack](#tech-stack)
    - [What I Learned](#what-i-learned)
  - [My Process](#my-process)
    - [UX Research UI intergration](#ux-research-ui-intergration)
      - [Problem Statement](#problem-statement)
      - [Persona](#persona)
      - [User Journey Map](#user-journey-map)
      - [Design Style](#design-style)
      - [Wireframe](#wireframe)
      - [Prototype](#prototype)
    - [Developing Code](#developing-code)
      - [Establishing Base](#establishing-base)
      - [Implementing Form](#implementing-form)
      - [Utilizing CSS](#utilizing-css)
      - [Final Product](#final-product)
  - [Useful Resources](#useful-resources)
  - [Author](#author)

## Overview
### How to Use
In the project directory open the terminal:

### `cd littlecap`

  This navigates to the folder holding the application.

### `npm install`

This will download any dependencies required to run the app.
Next input into terminal:

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### Tech Stack
  - HTML
  - CSS
  - JavaScript
  - React
  - Figma
  - VS code Studio
  - GitHub
    
### What I Learned
  - Expanded understanding of coding languages
  - Learned how they interact with each other with API's and EffectHooks
  - Utilizing Soft Skills like empathy is equally important to hard coding skills.
    
## My Process

### UX Research UI Intergration
  This is a key portion to the assignment, as it is necessary to understand from both the client and customers point-of-view in order to build the product they desire.
  
#### Problem Statement
  Little Lemon Restaurant has been increasing in size. With an influx of customers, table availability varies greatly day-to-day. In order to better accommodate their customer base they are in need of a way to reserve tables ahead of time. Thus allowing them to accommodate larger groups.
  
#### Persona
  I created a persona in order to utilizing empathy of what kind of person may be using this new feature. 
  ![image]
  
#### User Journey Map
  This showcases what the established persona goes through currently before addition of new feature.
  ![image]
  
#### Design Style
  This is provided by the client who wants the feature added to the website and showcases their brand image.
  ![image]
  
#### WireFrame
  Based on the previous information it is utilized to create a Wireframe that showcases the addition of the feature.
  ![image]
  
#### Prototype
  Finally, a prototype is put together marrying the brands image to the inclusion of the feature.
  ![image]
  
##
### Developing Code
  This is where we begin to utilizing the skills learned in class to build the app. First by starting with React's create-react-app feature.
  
#### Establishing Base
  Upon the creation of the app, I remove any unnecessary elements that are given and start in the HTML document to establish metadata tags. This will allow clients using search engines to find the Little Lemon website.
  ### here is a code snippit
  ```
<html lang="en">
  <head>
    <meta name="language" content="en" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="A new restaurant based in Chicago called Little Lemon. Its centralizes around fresh mediterranean food." />
    <meta name="og:title" content="Little Lemon Restaurant" />
    <meta name="og:description" content="Little Lemon is a mediterranean restaurant with new refreshing specials!"/>
    <meta name="og:image" content="llcap\llcapstone\littlecap\logos\small logo.jpg" />
    <meta name="author" content="Maginolia Taubman" />
      <link rel="stylesheet" href="llcap\llcapstone\littlecap\src\App.css" />
    <title>Little Lemon</title>
  </head>
```
#### Implementing Form
  Various issues need to be addressed when establishing the form such as a way to validate the information is put in correctly, and various hooks to establish changes of the state of the form.

  Here is a code snippet displaying utilization.
```
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


function ReserveForm(props){
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [guest, setGuest] = useState("");
    const [date, setDate] = useState("");
    const [options, setOptions] = useState("");
    const [occasion, setOccasion] = useState("");
    const [comments, setComments] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [finalTime, setFinalTime] =useState(
        props.availableTimes.map((times) => <option>{times}</option>)
    );
    const handleSubmit = (e) => {
        e.preventDefault ();
    }
    const isFormValid = () => {
        return (
            fName &&
            lName &&
            email &&
            tel &&
            guest &&
            date !== "Select a Date");
        };

    function handleDateChange(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        const date= new Date(stringify);

        props.updateTimes(date);

        setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
    }

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fName">First Name</label><br />
                <input
                    className="fieldBox"
                    type="text"
                    id="fName"
                    placeholder="First Name"
                    required
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}></input>
            </div>
```

#### Utilizing CSS
  With many of the base elements established, it is important that the product matches the clients brand. Otherwise a customer could confuse the website for another restaurant

  Here is a code snippet showing use of fonts and other elements specified through the Design Sheet
```

@font-face {
  font-family: "Markazi Text";
  src: local("Markazi_Text"),
    url("./assets/fonts/Markazi_Text/MarkaziText-VariableFont_wght.ttf") format("truetype");
}

@font-face {
  font-family: "Karla";
  src: local("Karla"),
      url("./assets/fonts/Karla/Karla-VariableFont_wght.ttf") format("truetype");
}

.action-button {
  background-color: #f4ce14;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 16px;
  font-family: "Karla";
  font-size: 2rem;
}

.action-button:hover {
  background-color: #495e57;
  color: #eeeeee;
  border-style: solid;
  border-width: 1px;
  border-color: #edefee;
  transition: 0.2s;
}
```
#### Final Product
 Here is screenshots of the final product in use.
 ![image]
 ![image]
 ![image]
 ![image]
 
## Useful Resources
  These are some resources I found useful when establishing my application
  - [To Better Understand Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
  - [Tips for Hooks in React](https://react.dev/blog/2023/03/16/introducing-react-dev)
  - [Website Navigation](https://reactrouter.com/6.5.0/hooks/use-navigate)
  - [Testing Recipes](https://legacy.reactjs.org/docs/testing-recipes.html)

# Author
- [Maginolia Taubman](https://github.com/mptaubman)
- [LinkedIn](https://www.linkedin.com/in/maginolia-taubman/)
- [Certificates](https://www.coursera.org/learner/maginolia-taubman)
