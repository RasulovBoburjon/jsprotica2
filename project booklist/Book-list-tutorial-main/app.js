"use strict"
    window.addEventListener("DOMContentLoaded", () => {
        const title = document.querySelector("#title"),
        author = document.querySelector("#author"),   
        year = document.querySelector("#year"),
        btn = document.querySelector("#btn"),
        booklist = document.querySelector("#book-list");

        btn.addEventListener('click', (event) =>  {
            event.preventDefault();
            //Basic baf
            if(title.value == '' & author.value == '' & year.value == ''){
                alert('inputlardi tuldiring');
            }else{
                const newRow = document.createElement('tr')

                const newTitle = document.createElement('th')

                newTitle.innerHTML = title.value

                newRow.appendChild(newTitle);

                ///creat After

                const newAfter = document.createElement('th')

                newAfter.innerHTML = author.value

                newRow.appendChild(newAfter);

                //creaticng new year

                const Dats = document.createElement('th')

                Dats.innerHTML = year.value;
                newRow.appendChild(Dats);

                // displaying in ui

                booklist.appendChild(newRow);

                //

                title.value = "";
                year.value = "";
                author.value = "";
            }
        })
    })

