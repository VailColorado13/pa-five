console.log('loaded')
const initApp = () => {
    const droparea = document.querySelector('.droparea');
  
    const active = () => droparea.classList.add("blue-border");
  
    const inactive = () => droparea.classList.remove("blue-border");
  
    const prevents = (e) => e.preventDefault();
  
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evtName => {
        droparea.addEventListener(evtName, prevents);
    });
  
    ['dragenter', 'dragover'].forEach(evtName => {
        droparea.addEventListener(evtName, active);
    });
  
    ['dragleave', 'drop'].forEach(evtName => {
        droparea.addEventListener(evtName, inactive);
    });
  
    droparea.addEventListener("drop", handleDrop);
  
  }
  
  document.addEventListener("DOMContentLoaded", initApp)


   async function handleDrop (e)  {
    const ID = crypto.randomUUID()
    const fr = new FileReader()
    const dt = e.dataTransfer;
    const files = dt.files;
   
   
    const fileArray = [...files]

    nameArray = []

   fileArray.forEach((file) => nameArray.push(file.name))

   let data = {
    ID: ID,
    nameArray: nameArray,
    }
  
const options = {
    method: 'post', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
    }
    
    fetch('/createJob', options).then((response) => {
        if (response.ok) {window.location.href = `/written`}
        else {alert('Sorry, something has gone wrong. Please try again.')}
      }) 
    }