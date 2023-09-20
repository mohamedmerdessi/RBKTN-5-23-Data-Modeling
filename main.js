function makeBook (title,author,msrp,genre,NumberOfpages,Description){
return {
title:title,
author:author,
msrp:msrp,
genre:genre,
NumberOfpages:NumberOfpages,
Description:Description,
};
}

var book1=makeBook('harry Potter and the Sorcerers Stone','J.K. Rowling','80 Dollars','fantasy literature','223','The book is about 11 year old Harry Potter to attend Hogwarts');
var book2=makeBook('Romeo and Juliet','William Shakespeare','80 Dollars','fantasy literature','223','The book is about Romeo Juliet');
var book3=makeBook('Structure and Interpretation of Computer Programs','Gerald Jay Sussman Hal Abelson','80 Dollars','fantasy literature','223','The book is about structure');


function displayBook (book) {
return book.title+' '+book.msrp+' '+book.genre;
}

    var books = [
        ['Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', '80 Dollars', 'fantasy literature', '223', 'The book is about 11-year-old Harry Potter attending Hogwarts'],
        ['Romeo and Juliet', 'William Shakespeare', '80 Dollars', 'fantasy literature', '223', 'The book is about Romeo and Juliet'],
        ['Structure and Interpretation of Computer Programs', 'Gerald Jay-Sussman, Hal Abelson', '80 Dollars', 'computer science', '223', 'The book is about program structure'],
      ];

      function displayBooks(books) {
        var result = '';
        for (var i = 0; i < books.length; i++) {
          result += `${i + 1}. ${books[i][0]}`;
          if (i < books.length - 1) {
            result += ' \n ';
          }
        }
        return result;
      }
      
      function removeBook(title, book) {
        return book.splice(book => book.title !== title);
      }
      
      
      
      
      function makeMovie (title,Director,ReleaseDate,genre,Duration,Rating){
        return {
        title:title,
        Director:Director,
        ReleaseDate:ReleaseDate,
        genre:genre,
        Duration:Duration,
        Rating:Rating,
        };
        }


        var Movie = [
            ['Oppenheimer', 'Christopher Nolan', '2023', ' Drama/Thriller', '3 Hours', 'good movie'],
            ['Romeo and Juliet', 'William Shakespeare', '80 Dollars', 'fantasy literature', '223', 'The book is about Romeo and Juliet'],
            ['Structure and Interpretation of Computer Programs', 'Gerald Jay-Sussman, Hal Abelson', '80 Dollars', 'computer science', '223', 'The book is about program structure'],
          ];
    
   