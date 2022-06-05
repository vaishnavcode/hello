const firebaseConfig = { 
apiKey: "AIzaSyCwvC2PBW0pTtC2lz1WnVBoBaaRI9MCEgE", authDomain: "vimoweb-javascript.firebaseapp.com", databaseURL: "https://vimoweb-javascript-default-rtdb.firebaseio.com", 
projectId: "vimoweb-javascript", storageBucket: "vimoweb-javascript.appspot.com", messagingSenderId: "880730176154", 
appId: "1:880730176154:web:bd9eef168f45b16a693d23", measurementId: "G-SRB960BE0X" 
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var btn1=document.getElementById("btn1");
    btn2=document.getElementById("btn2");
btn1.addEventListener("click",sendMessage);
myName=prompt("Enter your name ");
fname=prompt("Enter friend name ");
function sendMessage() {
var message =
document.getElementById("message").value;
firebase.database().ref("messages").push().set({
"sender": myName,
"message": message
});
}
firebase.database().ref("messages").on("child_added", function (snapshot) {
var html = "";
if(snapshot.val().sender==myName) {
html += "<li id='message-" + snapshot.key + "' style='color:lavender;margin-left:130px;margin-top:10px;margin-bottom:10px;width:150px;font-weight:bolder; height:auto;background:#202020;word-wrap:break-word;border-radius:0.5rem;padding:0.5rem;text-align:left;'>";
html += snapshot.val().sender + ": " + snapshot.val().message;
html += "</li>";
document.getElementById("messages").innerHTML += html;				
}else if(snapshot.val().sender==fname){
html += "<li id='message-" + snapshot.key + "' style='color:#202020;margin-left:-20px;margin-top:10px;margin-bottom:10px;width:150px;font-weight:bolder; height:auto;background:#d4d4d4;word-wrap:break-word;border-radius:0.5rem;padding:0.5rem;text-align:left;'>";
html += snapshot.val().sender + ": " + snapshot.val().message;
html += "</li>";
document.getElementById("messages").innerHTML += html;				
}
});
