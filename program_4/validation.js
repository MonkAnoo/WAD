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
    let rNumber = document.getElementById("rNumber").value;
    var l = rNumber.length;
    let alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let flagNum=0, flagAlp = 0;

    for(let i =0;i<l;i++)
    {
        if(res = parseInt(rNumber[i]))
        {
            flagNum = flagNum +1;
            console.log("num"+flagNum);
        }
        else
        {
            for(j=0;j<26;j++)
            {
                
                    if(rNumber[i] === alp[j])
                    {
                        flagAlp = flagAlp +1;
                        console.log("alp" + flagAlp);
                    }
                           
               
            }
        }
       
       
        
    }

}