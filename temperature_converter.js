function clicked()
{
    let deg=document.getElementById('degree').value;
    let cel=document.getElementById('cel').checked;
    let far=document.getElementById('far').checked;
    let result=document.getElementById('result');
    if ((deg!="") && (cel)) {
        res=(deg * 1.8) + 32;
        result.innerText=res+" F";
    }
    else if ((deg!="") && (far)) {
        res=(deg-32)*0.555555;
        result.innerText=res+" C";
    }
    else
    {
        alert("Enter all the fields");
    }
}



