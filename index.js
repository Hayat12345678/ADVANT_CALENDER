    // welcher Tag ist heute?
    let date = new Date().getDate(); // => 16
    for (i = 1; i <= date; i++) {
        document.getElementById(i).style = "background-color: rgb(226, 217, 94)";
    }

    function showGift(indexTag) {
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
        // prüfen, ob der Tag in der Vergangenheit oder Gegenwart liegt, dann Zitat anzeigen, sost nicht
        if (indexTag > date) {
            // Türchen ist noch nicht frei
            alert("Try again another day.")
        } else {
            document.getElementById("quote").innerHTML = quotesArray[indexTag - 1].text;
            document.getElementById("author").innerHTML = quotesArray[indexTag - 1].author;
            // Zitat anzeigen
            //alert(quotesArray[indexTag -1].text + " von Author: " + quotesArray[indexTag -1].author);
        }
    }

    function closeModal() {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    // quote = Zitat => im Array
    let quotesArray = [];

    // Zitate erstellen
    quotesArray.push({
        text: "Christmas is built upon a beautiful and intentional paradox; that the birth of the homeless should be celebrated in every home",
        author: "G.K. Chesterton",
        src: "/images/1.jpg"
    });
    quotesArray.push({
        text: "The rooms were very still while the pages were softly turned and the winter sunshine crept in to touch the bright heads and serious faces with a Christmas greeting",
        author: "Louisa May Alcott"
    });
    quotesArray.push({
        text: "If my Valentine you won't be, I'll hang myself on your Christmas tree.",
        author: "Ernest Hemingway"
    });
    quotesArray.push({
        text: "Blessed is the season which engages the whole world in a conspiracy of love.",
        author: "Hamilton Wright Mabie"
    });
    quotesArray.push({
        text: "Christmas, my child, is love in action. Every time we love, every time we give, it’s Christmas.",
        author: "Dale Evans Rogers"
    });
    quotesArray.push({
        text: "Christmas waves a magic wand over this world, and behold, everything is softer and more beautiful",
        author: "Norman Vincent Peale"
    });
    quotesArray.push({
        text: "My idea of Christmas, whether old-fashioned or modern, is very simple: loving others.",
        author: "Bob Hope"
    });
    quotesArray.push({
        text: "Christmas is doing a little something extra for someone.",
        author: "Charles M. Schulz"
    });
    quotesArray.push({
        text: "I will honor Christmas in my heart, and try to keep it all the year.",
        author: "Charles Dickens",
        src: "/images/1.jpg"
    });
    quotesArray.push({
        text: " Christmas is a piece of one’s home that one carries in one’s heart..",
        author: "Freya Stark"
    });
    quotesArray.push({
        text: "Unless we make Christmas an occasion to share our blessings, all the snow in Alaska won’t make it white.",
        author: "Bing Crosby"
    });
    quotesArray.push({
        text: "Christmas is forever, not for just one day. For loving, sharing, giving, are not to put away.",
        author: "Norman Wesley Brooks"
    });
    quotesArray.push({
        text: "Christmas is like candy; it slowly melts in your mouth sweetening every taste bud, making you wish it could last forever.",
        author: "Richelle E. Goodrich"
    });
    quotesArray.push({
        text: "Christmas is not as much about opening our presents as opening our hearts.",
        author: "Janice Maeditere"
    });
    quotesArray.push({
        text: "Just remember, the true spirit of Christmas lies in your heart.",
        author: "The Polar Express"
    });
    quotesArray.push({
        text: "Peace on earth will come to stay, when we live Christmas every day.",
        author: "Helen Steiner Rice"
    });
    quotesArray.push({
        text: "Christmas now surrounds us, Happiness is everywhere. Our hands are busy with many tasks as carols fill the air.",
        author: "Shirley Sallay"
    });
    quotesArray.push({
        text: "The best way to spread Christmas cheer is singing loud for all to hear.",
        author: "Will Ferrell, 'Elf'"
    });
    quotesArray.push({
        text: "Christmas is a season not only of rejoicing but of reflection.",
        author: "Winston Churchill"
    });
    quotesArray.push({
        text: "Christmas will always be as long as we stand heart to heart and hand in hand.",
        author: "JDr. Seuss"
    });
    quotesArray.push({
        text: "T'was the night before Christmas, when all through the house, not a creature was stirring, not even a mouse.",
        author: "Clement Clarke Moore"
    });
    quotesArray.push({
        text: "May you never be too grown up to search the skies on Christmas Eve.",
        author: "Anonymous"
    });
    quotesArray.push({
        text: "Christmas always rustled. It rustled every time, mysteriously, with silver and gold paper, tissue paper and a rich abundance of shiny paper, decorating and hiding everything and giving a feeling reckless extravagance.",
        author: "Tove Jansson"
    });
    quotesArray.push({
        text: "It's not how much we give but how much love we put into giving",
        author: "Mother Theresa"
    });


    console.log(quotesArray);
    console.log(quotesArray.length);