<!-- <script>
  let postVar;
  let fileVar;

  function submitForm(){
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("FileName", postVar);
    dataArray.append("uploadFile", fileVar);

    fetch("http://localhost:4000/api/v1/document", {
      method: "POST",
      headers: [["Content-Type", "multipart/form-data"]],
      body: dataArray
    })
      .then(response => {
        // Successfully uploaded
        console.log("Successfully uploaded file")
      })
      .catch(error => {
        // 
        console.log("Upload failed")
      });
  }
</script> -->

 <!-- point action to upload api endpoint -->
 <form action="http://localhost:3000/#/documents" method="post" enctype="multipart/form-data">
         
  upload a file<br>
  <!-- specify a file on local machine user wishes to upload -->
  <input type="file" name="myfile" />

  <input type="submit" value="upload file..." />
</form>


<!-- <div>
  <form on:submit={submitForm}>
    <input
      type="text"
      bind:value={postVar}
      placeholder={"Enter File Name"}
    />
    <br />
    <input 
      type="file" 
      name="usrFile"
      bind:files={fileVar} />
    <br />
    <input type="submit"/>
  </form>
</div> -->
