//Assignment 4
function palindrome(data)
{
    let newdata = data.toLowerCase();
    let reversedata = data.split("").reverse().join("");
    if (newdata == reversedata ) 
    {
        console.log('true');
    }
    else
    {
        console.log('false');
    }
}
palindrome("sas");
palindrome('messssem');
palindrome('haha');