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

function rollNumberCheck()
{
    let rnumber = document.getElementById("rNumber").value;
    var l = rnumber.length;
    
    for(let i =0;i<l;i++)
    {
        let x = parseInt(rnumber);
        alert(x)
        // if(!isNaN(x))
        // {
        //     alert("");
        // }
        // if(Number(rnumber[i]))
        // {
        //     alert("nuber");
        // }
        
    }

}