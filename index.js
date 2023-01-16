function perform(){
    let movie = document.getElementById("movie").value;
    
    const url = `https://omdbapi.com/?apikey=85ebf0eb&s=${movie}`;

async function getMovies(){

    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);

        document.getElementById("x").innerHTML="";
        document.getElementById("container").innerHTML="";
        data.Search.forEach(function(el){
       
        let image = document.createElement("img");
        image.src = el.Poster;

        let h4 = document.createElement("h4");
        h4.innerText=el.Title;

        let p = document.createElement("p");
        p.innerText=`Release Year: ${el.Year}`;

        let div = document.createElement("div");
        
        div.append(image,h4,p);
        document.getElementById("container").append(div);
    })
    }catch(err){
        console.log(1)
        let container = document.createElement("div");
        container.setAttribute("id","x");
        let image = document.createElement("img");
        image.src = "https://nsw.md.go.th/mdpilotinfo/img/jisunpark_404-error.gif";

        container.append(image);
        document.querySelector("body").append(container);
    }
    
    

    
    
}

getMovies();
}
