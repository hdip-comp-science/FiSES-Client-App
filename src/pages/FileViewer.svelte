<script>
  import {onMount} from 'svelte'
  import {navBar, mainBar, subTitle, title} from "../store";

  title.set("Field Service Engineering Solutions");
  subTitle.set("Document Viewer");
  navBar.set({
    bar: mainBar
  });



  const url = `http://localhost:4000/api/v1/document/{document.ID}`;

  let responseObject;

  onMount(async () => {
    const response = await fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      responseObject = {};
      console.log(error);
    })
  })

</script>

<div class="uk-child-width-expand@s uk-text-center" uk-grid>
  <div class="uk-card uk-card-default uk-card-body">
    <h1>hello</h1>
  </div>
</div>
