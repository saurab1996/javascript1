const posts=[
    {title:'one',body:'this is one'},
    {title:'two',body:'this is two'}
];
function getpost()
{
    setTimeout(() =>
    {
        let output="";
        posts.forEach((post) =>
        {
            output += `<li>${post.title} ${post.body}</li>`;
        });
        document.body.innerHTML=output;
    },1000);

}/* 
function putpost(post,callback)
{
setTimeout(()=>
{
    posts.push(post);
    callback();

},1000)
} */
//promise 
function putpost(post,callback){
return new Promise((resolve,reject)=>
{
    setTimeout(() => {
        posts.push(post);
        const error=false;
        if (!error) {
            resolve();
            
        } else {
            reject();
        }
        
    }, 2000);
})
}

putpost({title:'three',body:"this is three"}).then(getpost);