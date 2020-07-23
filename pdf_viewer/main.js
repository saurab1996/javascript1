
const url="pdf.pdf";
let pdfdoc=null,
pageNum=1,
pageIsRendering=false,
pageNumIsPending=null;

const scale=1;
var canvas='';
     canvas=document.getElementById('pdf');
            const ctx=canvas.getContext('2d');
            console.log(ctx);
    
            const renderPage=num =>{
               pageIsRendering=true;
               pdfdoc.getPage(num).then(page =>
                {
                // console.log(page);
                const viewport=page.getViewport({scale:scale});
                canvas.height=viewport.height;
                canvas.width=viewport.width;
                  const renderCtx={
                      canvasContext:ctx,
                      viewport
                  }
                page.render(renderCtx).promise.then(pdfdoc_ =>{
                    pageIsRendering=false;
                    if(pageNumIsPending)
                    {
                      renderPage(pageNumIsPending);
                      pageNumIsPending=null;
                    }
                });
                //output current page
                document.querySelector('#page_no').textContent=num;

                });

            };
 //check for page rendering
 const queueRenderPage=(num)=>
 {
 if(pageIsRendering)
 {
     pageNumIsPending=num;
 }
 else
 {
     renderPage(num);
 }
 };
 // show previous page
 const showPrevPage=()  =>{
     if(pageNum <=1)
     {
         return;
     }
     else
     {
         pageNum--;
         queueRenderPage(pageNum);
     }
 }
 //show next page
 const showNextPage=()  =>{
    if(pageNum >= pdfdoc.numPages)
    {
        return;
    }
    else
    {
        pageNum++;
        queueRenderPage(pageNum);
    }
}
 pdfjsLib.getDocument(url).promise.then(pdfdoc_ =>
    {  
        pdfdoc=pdfdoc_;
        console.log(pdfdoc);
        document.getElementById('page_count').textContent=pdfdoc.numPages;
        renderPage(pageNum);
    })
    .catch(err =>
        {
            const div=document.createElement('div');
            div.className="error";
            div.appendChild(document.createTextNode(err.message));
            document.querySelector('body').insertBefore(div,canvas);
            document.querySelector(".top-bar").style.display='none';
        })
   

document.querySelector("#prev-page").
addEventListener('click',showPrevPage);

document.querySelector("#next-page").
addEventListener('click',showNextPage);
