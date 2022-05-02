// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",addMatch)
var matchArr= JSON.parse(localStorage.getItem("schedule")) || []
function addMatch(){
    var matchObj={
           Mnumber:masaiForm.matchNum.value,
           Mteam1:masaiForm.teamA.value,
           Mteam2:masaiForm.teamB.value,
           Mdate:masaiForm.date.value,
           Mvenue:masaiForm.venue.value,
           Maddmatch:masaiForm.submit.value
    }
    matchArr.push(matchObj)
    localStorage.setItem("schedule", JSON.stringify(matchArr))
    window.location.href="matches.html"
}