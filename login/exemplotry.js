try
{
let a=0;
a=a+1;
}
catch(err)
{
    err.stack="";
    console.error(err.message);
}