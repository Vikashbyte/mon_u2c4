// write js code here corresponding to favourites.html
var favoMatch= JSON.parse(localStorage.getItem("favourites")) || []

var favourites=JSON.parse(localStorage.getItem("favourite")) || []

displayFav(favoMatch)

function displayFav(data){
    
        
            data.forEach(function(ele){
                var matches=document.createElement("tr")
                var Matchnum=document.createElement("td")
                var team1=document.createElement("td")
                var team2=document.createElement("td")
                var date=document.createElement("td")
                var venue=document.createElement("td")
                var del=document.createElement("td")
        
                Matchnum.innerText=ele.Mnumber
                team1.innerText=ele.Mteam1
                team2.innerText=ele.Mteam2
                date.innerText=ele.Mdate
                venue.innerText=ele.Mvenue
               del.innerText="delete"

              del.style.color="red"
              del.style.cursor="pointer"
              del.addEventListener("click",delefav)
                matches.append(Matchnum,team1,team2,date,venue,del)
                document.querySelector("tbody").append(matches)
        function delefav(ele,index){
            favourites.splice(index,1)
            localStorage.setItem("favourite",JSON.stringify(favourites))
        }
            }) 
        }
