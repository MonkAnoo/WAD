
function hide()
{
    let div = document.getElementById("getUser");
    div.style.display = 'none';
    let question = document.getElementById("questions");
    question.style.display = 'block';
}

function qdivHide()
{
    let question = document.getElementById("questions");
    question.style.display = 'none';
    let div = document.getElementById("score");
    div.style.display = 'none';
}

function sendValue()
{
    let userName = document.getElementById("userName").value;
    alert(userName);
}

function validation()
{
    let question = document.getElementById("score");
    question.style.display = 'block';

    // question 1 true 
    if(document.getElementById('True').checked == true ) 
    {
        document.getElementById("ans1").innerHTML = "correct";
    }
    else
    {
        document.getElementById("ans1").innerHTML = "wrong";   
    }
    //  question 2 typeError
    if(document.getElementById('typeError').checked == true ) 
    {
        document.getElementById("ans2").innerHTML = "correct";
    }
    else
    {
        document.getElementById("ans2").innerHTML = "wrong";   
    }
}