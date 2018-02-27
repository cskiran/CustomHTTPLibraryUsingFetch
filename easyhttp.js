class EasyHttp{

  //HTTP GET request
  get(url){
    return new Promise(function(resolve,reject){
      fetch(url)
      .then(res => res.json())
      .then(data =>resolve(data));
    });
   
  }

  //HTTP POST request

  post(url,data){
    return new Promise(function(resolve,reject){
      fetch(url,{
        method : 'POST',
        headers : {
          'Content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  //HTTP PUT request
  put(url,data){
    return new Promise(function(resolve,reject){
      fetch(url,{
        method : 'PUT',
        headers : {
          'Content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  //HTTP delete
delete(url){
  return new Promise((resolve,reject)=>{
    fetch(url,{
      method:'DELETE',
      headers:{
        'content-type' : 'application/json'
      }
    })
    .then(res => res.json())
    .then(() => resolve('user deleted'))
    .catch(err => reject(err));
  });
}


}