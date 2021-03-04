<?php
function words($var)
{
    $len =strlen($var);
    $arr = array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    $arrNum = array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    $split = str_split($var, 1);
    for($i=0;$i<$len;$i++)
    {
       for($j=0;$j<26;$j++)
       {
           if($split[$i] == $arr[$j])
           {
                $arrNum[$j] = $arrNum[$j] + 1;
           }
       }
    }
    $count  =0;
    foreach ($arrNum as $k) {
        $count ++;
        if($k !=0 )
        {
            echo $arr[$count-1] . " == " .$k . "<br>";
        }
    }
}
words("aabqwertuihsdsllllsa")
?>