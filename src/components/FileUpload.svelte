<script>
  let postVar="myfile";
  let fileVar;


  function submitForm(){
    event.preventDefault();

    // const dataArray = new FormData();
    // dataArray.append("myfile", postVar);
    // dataArray.append("uploadFile", fileVar);

    let url = 'http://localhost:4000/api/v1/upload'

    const formdata = new FormData();
    formdata.append("myfile", postVar); 
    formdata.append("dataFile", fileVar);

    const requestOptions = {
      method: 'POST',
      body: formdata
    };

    fetch(url, requestOptions)
    // .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

</script>



<div>
  <form on:submit={submitForm}>
    <input
      type="hidden"
      bind:value={postVar}
      placeholder={"Enter File Name"}
    />
    <!-- {@debug postVar} -->
    <br />
    <input 
      type="file" 
      bind:files={fileVar} />
      {@debug fileVar}
    <input type="submit"/>
  </form>
</div>
