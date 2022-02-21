<script>
  let files;
  let statusCode=0;
 
  async function handleSubmit() {
    if (files.length > 0) {
      const formData = new FormData();
      formData.append("file", files[0]);
      const response = await fetch("http://localhost:4000/api/v1/upload", {
        method: "POST",
        body: formData
      });
      statusCode = response.status;
      if (statusCode == 200) {
        console.log( 'File upload successful, status code: ' +
            response.status );
      } else {
        console.log( 'Failed to upload file, status code: ' +
            response.status );
        return;
      }
    }
  }
  // check if status code = 200. 
</script>
 
<form on:submit|preventDefault={handleSubmit}>
  <label for="file">File</label>
  <input required id="file" type="file" bind:files />
  <input type="submit" value="Upload file" />
</form>
