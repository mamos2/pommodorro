
var m = 0; // Minute
var s = 59; // Seconde

var temps; 
var bon = true; // permettra de control l'exécution doublon du code
var cycle = 0;
function dchiffre(nb)
{
  if(nb < 10) // si chiffre indiqué est inférieurs à dix ...
  {
    nb = "0"+nb; // .. on ajoute un zéro devant avant affichage
  }
  
  return nb;
}





$("#start").click(function()
{
  if(bon) //  pour savoir si un autre Intervalle est lancé
  { playSound("merde");
    
    alert ("vous allez commencez à travailler, concentrez vous!")
    temps = setInterval(function()
    {
        s--;
        if (m == 0 && s < 1 ) 
        {
         cycle++;
         
        if (cycle == 1 || cycle == 3) {
        m=4;
        s=59;
        alert ("vous méritez une petite pause")
        }

        if (cycle ==2 || cycle == 4) {
          m=19;
          s=59;
          alert ("allez on boss à fond!")
        }

        if (cycle == 5) {
          m=29;
          s=59;
          alert ("bravo ta bien bossé, tu mérite une grande pause")
        }
       
      }


      
      if(s < 0)
      {
        m--;
        s = 59;
      }
      
      
      $("#m").html(dchiffre(m));
      $("#s").html(dchiffre(s));
      
      
      
    },1000);
    
                //  affecte false à bon pour empécher un second Intervalle de se lancer
    bon = false; 
    playSound("toutaFait");

  }
});


$("#pause").click(function()
{
  alert ("t'es pas censé bossé?")
  clearInterval(temps); // On stop l'intervalle lancer
  
       //  affiche les variable dans les conteneur dédié
  $("#s").html(dchiffre(s));
  $("#m").html(dchiffre(m));
  
  
       // Affecter true a bo pour indiquer si actif
  bon = true
  playSound('laser');
});


$("#reset").click(function()
{
  
  s = 0;
  m = 20;
    
  $("#s").html("00");
  $("#m").html("20");
  
  
  if(bon == false)
  {
  clearInterval(temps);
  }
  
  bon = true;
  playSound("jeuVideoReset");
  
});


var playSound = (function(){
  var s,
      sounds = {},
      soundUrls = {
    laser: "http://s1download-universal-soundbank.com/mp3/sounds/2011.mp3",
    jeuVideo1: "http://s1download-universal-soundbank.com/mp3/sounds/12466.mp3",
    jeuVideoReset: "http://s1download-universal-soundbank.com/mp3/sounds/12479.mp3",
    crie : "http://www.memoclic.com/medias/sons-wav/2/719.wav",
    merde: "http://www.memoclic.com/medias/sons-wav/0/168.wav",
    toutaFait: "http://www.memoclic.com/medias/sons-wav/0/167.wav"


  };
  
  for(s in soundUrls){
    sounds[s] = new Audio(soundUrls[s]);
    sounds[s].preload = 'auto';
    sounds[s].load();
  }
   
   return function(soundname){
     if(soundname in sounds){
       sounds[soundname].play();
     }
   };
})();