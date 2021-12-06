function message() {
    setTimeout( function() { 
        var newLine = "\r\n"
        var msg = "Before this video starts, I would like to say the following message:"
        msg += newLine
        msg += newLine
        msg += "Mr. Frescas, you've been an outstanding opponent in this race, but I believe it's time for people to know who you really are."
        alert(msg)
    }, 3000);
    setTimeout(function() {
        var vid = document.getElementById("political-ad");
        vid.play();
    }, 6000)
}

const noContext = document.getElementById('political-ad');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});

document.getElementById("political-ad").onplay = function(){videoVoid()};

function videoVoid() {
    
}
