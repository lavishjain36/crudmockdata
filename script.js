let url="https://62eca24055d2bd170e83c292.mockapi.io/users";

//HTTP Method to retrieve data(GET)
function getData(){
    fetch(url,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    })

}

// getData();


//HTTP Method to create data(POST)(Send data to server)
function createData(){
    let data={
        name:"Ramesh",
        email:"ramesh@gmail.in"
    }
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{

            "Content-Type":"application/json"
        }
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}
// createData();


//HTTP Method to update data(PUT)(Send data to server)
function updateData(){
    let data={
        name:"Ajinkya",
        email:"ajikya@gmail.com"
    }

    fetch(url+"/2",{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
            }
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        }).catch((error)=>{
            console.log(error);
        })

}

// updateData();


//HTTP Method to delete data(DELETE)
function deleteData(){
    fetch(url+"/5",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
}


    deleteData();













