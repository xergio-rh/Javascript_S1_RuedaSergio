document.addEventListener("DOMContentLoaded",()=>{
    const datosContenedor = document.querySelector(".opciones");

    async function fetchData(){
        const res = await fetch("https://6818a2ff5a4b07b9d1d01958.mockapi.io/Tasks");
        data = await res.json ();
        return data;
    }
    function displayCapsula(data){
        datosContenedor.innerHTML="";
        data.forEach(cap =>{
            const capDiv=document.createElement("div");
            if(cap.status="On Hold"){
                capDiv.innerHTML="<div class="capsula">
                <div
            }
        }
    }
    fetchData().then(data=>{
        console.log(data);
        displayCapsula(data);
    })
})
