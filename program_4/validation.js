function checkName()
{
    let name = document.getElementById("name").value;
    var l = name.length;
    for(let i =0;i<l;i++)
    {
        let con = parseInt(name[i]);
        if(!isNaN(con))
        {
            alert("Enter the proper name");
        }
        
    }
}



function mobile()
{
    let Number = document.getElementById("Mobile").value;
    let lengthOfNumber = Number.length;
    if(lengthOfNumber != 10)
    {
        alert("You can type only 10 numbers.")
    }

}

function email()
{
    let email = document.getElementById("mail").value;
    let sl = email.split("@gmail");
    if(sl == email)
    {
        alert("need proper email");
    }
}
function done()
{
    alert("data send ")
}