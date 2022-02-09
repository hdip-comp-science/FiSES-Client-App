<script>
  let postVar;
  let fileVar;

  function submitForm(){
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("FileName", postVar);
    dataArray.append("uploadFile", fileVar);

    fetch("http://localhost:4000/api/v1/upload", {
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
</script>

<div>
  <form on:submit={submitForm}>
    <input
      type="text"
      bind:value={postVar}
      placeholder={"Enter File Name"}
    />
    <br />
    <input 
      type="file" 
      bind:files={fileVar} />
    <br />
    <input type="submit" />
  </form>
</div>
