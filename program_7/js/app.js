let p1 = 2999;
let p2 = 3899;
let p3 = 4000;
let p4 = 4100;
let p5 = 4399;

let price = [2999,3899,4000,4100,4399]

let total =0 ;

function cal()
{
    let qp1 = document.getElementById("p1").value;
    let qp2 = document.getElementById("p2").value;
    let qp3 = document.getElementById("p3").value;
    let qp4 = document.getElementById("p4").value;
    let qp5 = document.getElementById("p5").value;
    let quantity =[qp1,qp2,qp3,qp4,qp5]
    let count = 0;
    for(i =0 ;i<5;i++)
    {
        if(quantity[i]>=100)
        {
            count++;
            let discount =(10/100)*price[i];
            total =total + price[i] - discount;
        }
        else
        {
            total = total + quantity[i] * price[i];
        }
    }
    if(count == 5)
    {
        let display = document.getElementById("numHasDis");
        display.innerHTML = "all product have 10% discount";
    }
    else
    {
        let display = document.getElementById("numHasDis");
        display.innerHTML = count  +" only have 10% discount ";
    }

    
    let displayTotal = document.getElementById("total");
    displayTotal.innerHTML= "Rs: " + total ;

}