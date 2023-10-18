var ora=perc=mp = 0;
console.log(ido);


function Indit() {
    var t = document.getElementById("ora").value
var ido = t.split(':')
    if(ido.length == 3)
{
    ora=ido[0]
    perc=ido[1]
    mp=ido[2]
}
else if(ido.length == 2)
{
    perc=ido[0]
    mp=ido[1]
}
if(ido.length == 1)
{
    mp=ido[0]
}

    var s = setInterval(() => {
        document.getElementById("ido").innerHTML = Forma(ora)+":"+Forma(perc)+":"+Forma(mp)
        
        if (mp!=0) {
            mp--
        }
        else if (perc != 0) {
            perc--
            mp += 59
        }
        else{
            ora--
            perc += 59
            mp += 59
        }
        if (ora == 0 && perc == 0 && mp == 0) {
            clearInterval(s)
            document.getElementById("ido").innerHTML = "00:00:00"
            alert("Idő vége")   
        }
    }, 1000);
}

function Forma(x) {
    if (x < 10) {
        return "0"+x
    }
    else{
        return x
    }
}