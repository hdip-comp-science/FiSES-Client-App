<script>
	import {onMount, getContext} from 'svelte'
	import RoleGuard from '../components/RoleGuard.svelte';
	const documentService = getContext("DocumentService");

	let documentList;
	onMount(async () => {
	documentList = await documentService.getDocuments()
	});

	// function removeDocument(id) { 
	//   documentService.removeDoc(id) 
	// }
	let removeDocument = id => documentService.removeDoc(id)

</script>


<h3 class="uk-heading-divider">
  Document List
</h3>
<div class="uk-table uk-table-striped">
  <table class="uk-table">
    <thead>
      <th>
        <b style="color: black;">Title</b>
      </th>
      <th>
        <b style="color: black;">Author</b>
      </th>
      <th>
        <b style="color: black;">Version</b>
      </th>
      <RoleGuard roles=app-admin>
        <th>
          <b style="color: black;">Remove</b>
        </th>
      </RoleGuard>
      
    </thead>
    <tbody class="uk-text-left">
      {#if documentList}
        {#each documentList as document}
          <tr>
            <td><a href="http://localhost:4000/api/v1/document/{document.ID}" target="_blank" >{document.title}</a></td>
            <td>{document.author}</td>
            <td>{document.version}</td>
            <RoleGuard roles=app-admin>
              <td><i class="fas fa-trash fa-1x" style="color:rgb(255,3,3)" on:click={() => removeDocument(document.ID)}></i></td>
            </RoleGuard>
            
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
