var search_btn = document.getElementById("search_btn");
search_btn.addEventListener('click',function(){
   var search = document.getElementById("search").value;
    fetch("https://www.googleapis.com/books/v1/volumes?q="+search)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        var title , img , author , desc , publish_date = "";
         for(var i=0;i<=data.items.length;i++)
         {
            title = $("<h2 class='p-2 bg-primary text-white '>"+  data.items[i].volumeInfo.title  +"</h2>");
            img  = $("<img width='300' height='300' src = "+ data.items[i].volumeInfo.imageLinks.thumbnail +"/>");
            author = $("<h2 class='p-1 bg-success text-white '>"+  data.items[i].volumeInfo.authors  +"</h2>");
            title.appendTo('.card');
            img.appendTo('.card');
            author.appendTo('.card')
         }
        // document.getElementById("title").innerHTML = data.items[0].volumeInfo.title
        // document.getElementById("img").src = data.items[0].volumeInfo.imageLinks.thumbnail;
    })
})