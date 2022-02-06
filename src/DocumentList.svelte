<script>
  import {onMount} from 'svelte'
  import { DocumentService } from "./document-service";

  const documentService = new DocumentService("http://localhost:4000");

  let documentList;
  onMount(async () => {
    documentList = await documentService.getDocuments()
  })
</script>

<h3 class="uk-heading-divider">
  Document List
</h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
    <thead>
      <th>
        ID
      </th>
      <th>
        Body
      </th>
      <th>
        Author
      </th>
    </thead>
    <tbody class="uk-text-left">
      {#if documentList}
        {#each documentList as document}
          <tr>
            <td>{document.ID}</td>
            <td>{document.Body}</td>
            <td>{document.Author}</td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
