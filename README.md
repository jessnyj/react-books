# react-books

![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
* [Title](#title)
* [Deployed Link](#deployed-link)
* [Site Gif](#site-gif)
* [Technologies Used](#technologies-used)
* [Description](#description)
* [Work Involved](#work-involved)
* [Code Snippet](#code-snippet)
* [License](#license)
* [Authors](#authors)
* [Acknowledgments](#acknowledgments)

## Deployed Link
* Click this link to view the site.
[Deployed Link]()

## Site Gif
![Site]()

## Technologies Used
* React
* Mongoose
* MongoDB
* Google Books API
* HTML
* CSS
* javascript
* Bulma
* Robo3T
* Github
* Heroku

## Description
This is a full stack React based application that allows users to search for Google Books, add them to their Saved page, and delete them from their page as well. 

## Work Involved
For this application, we utilized React and Bulma in order to design the front end aspects of the site. For the backend, we utilized MongoDB and Mongoose in order to allow a user to save and delete books to the database. 

## Code Snippet
* This function utilizes the Google Books API in order to render the list of books. 
```
  searchBookName: function (bookName) {
    return new Promise((resolve, reject) => {
      console.log("https://www.googleapis.com/books/v1/volumes?q=" + bookName);
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName)
        .then((res) => {
          console.log(res.data.items);
          resolve(res.data.items.slice(0, 3));
        }).catch((err) => reject(err));
    })
  }
};
```

## License
This project is covered under MIT.

## Authors

**Jessny Joseph** 
* [Github](https://github.com/jessnyj)
* [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

**Muhammad Khalid**
* [Github](https://github.com/akhalid88)
* [LinkedIn]()

**Coleman Buffa** 
* [Github](https://github.com/coleman-buffa)
* [LinkedIn]()

## Acknowledgments
Trilogy Education Services
