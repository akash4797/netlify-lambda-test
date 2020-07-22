function getData(callback){
    fetch("/.neltify/functions/getdata")
    .then(response=>{
        return response.json();
    })
    .then(response=>{
        callback(response);
    })
}


getData((response)=>{
    var count = 0;
    response.forEach(student => {        
        document.getElementById("students").innerHTML += `<div>
                                                            <span>${count+1}.</span>
                                                            <span>${student.User} ||</span>
                                                            <span>${student.Name} ||</span>
                                                            <span>${student.ID}</span>
                                                         </div>`;
        count += 1;                                                          
    });
});
