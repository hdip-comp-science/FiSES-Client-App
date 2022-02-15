<script>
  import {onMount, getContext} from 'svelte'
  const documentService = getContext("DocumentService");
  
  let documentList;
  onMount(async () => {
    documentList = await documentService.getDocuments()
  })
</script>

<h3 class="uk-heading-divider">
  Document List
</h3>
<div class="uk-table uk-table-striped">
  <table class="uk-table">
    <thead>
      <th>
        Name
      </th>
      <th>
        Author
      </th>
      <th>
        Version
      </th>
    </thead>
    <tbody class="uk-text-left">
      {#if documentList}
        {#each documentList as document}
          <tr>
            <td>{document.ID}</td>
            <td>{document.Author}</td>
            <td>{document.Body}</td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
