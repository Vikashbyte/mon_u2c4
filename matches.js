// write js code here corresponding to matches.html

var matchArr=JSON.parse(localStorage.getItem("schedule")) || []

var favoMatch= JSON.parse(localStorage.getItem("favourites")) || []
 
displayMatch(matchArr)

function displayMatch(data){
    data.forEach(function(ele){
        var matches=document.createElement("tr")
        var Matchnum=document.createElement("td")
        var team1=document.createElement("td")
        var team2=document.createElement("td")
        var date=document.createElement("td")
        var venue=document.createElement("td")
        var favo=document.createElement("td")

        Matchnum.innerText=ele.Mnumber
        team1.innerText=ele.Mteam1
        team2.innerText=ele.Mteam2
        date.innerText=ele.Mdate
        venue.innerText=ele.Mvenue
        favo.innerText="Add to Favourites"
        favo.style.color="green"
        favo.style.cursor="pointer"
        favo.addEventListener("click",addTofav)
        matches.append(Matchnum,team1,team2,date,venue,favo)
        document.querySelector("tbody").append(matches)

        
        function addTofav(ele){
            favoMatch.push(ele)
            localStorage.setItem("favourites",JSON.stringify(favoMatch))
            window.location.reload()
        }
    })
    
}