let arr=[
    'What did the zookeeper say after the python broke free? Nothing.'
    ,
    'A new wine has been made for cats. It won’t be long before they start sending regrettable texts and waking up with headaches.'
    ,
    'Why don’t cats play poker in the jungle? Too many cheetahs.'
    ,
    'At which school did Sherlock Holmes get so smart? Elementary.'
    ,
    'Two men walk into a bar. You’d think at least one of them would have ducked.'
    ,
    'The morning after, Dave wanted some hair of the dog that bit him. He’s at the hospital getting checked for rabies now.'
    ,
    'What do you call a guy who’s had too much to drink? A cab.'
    ,
    'Where does a winemaker get his gossip? Through the grapevine.'
    ,
    'What do you call a parade of rabbits hopping backward? A receding hare line.'
    ,
    'Why did the teddy bear say no to dessert? Because he was stuffed.']
    
    document.addEventListener("DOMContentLoaded", function() {
        var a = document.querySelector(".btn");
      
        a.addEventListener("click", function() {
          var index = Math.floor(Math.random() * arr.length);
          document.querySelector("p").innerHTML = arr[index];
        });
      });
   