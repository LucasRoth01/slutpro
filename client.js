getData();



async function getData(){
try {
    let response = await fetch("/data");
    let data =await response.json();
    printData(data);
} catch (error) {
    console.log(error)
}
  
}
function printData(data){

    let div=document.getElementById("content");
    let html = data.map(function(item){

        return `
        <p>${item.body} - ${item.id}</p>
        
        `

    });

    div.innerHTML =html.join("<hr>");

}
async function postData(){
try {
    let input = document.getElementById("input").value;
    let todo =JSON.stringify({body:input});
     let response=await fetch("/save",{

        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:todo

     });
     let message=await response.json();
     console.log(message);
     getData();
} catch (error) {
    console.log(error)
}
   


}
