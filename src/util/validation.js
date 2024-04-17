function nameValidate(name)
{
    let pattern = /\d/;
    if(name==null || name =="")
    {
        alert("Name can't be blank!")
        return false;
    }
    else if(pattern.test(name))
    {
        alert("Name can't have any digit!")
        return false;
    }
    else
        return true;

}
function emailValidate(email)
{
    let pattern = /^[a-zA-Z][a-zA-Z\d\.]*\@[a-zA-Z]+\.[a-zA-Z]{3,}/;
    if(!pattern.test(email))
    {
        alert("Email id is not valid!");
        return false;
    }
    else
        return true;
}

export {nameValidate, emailValidate};