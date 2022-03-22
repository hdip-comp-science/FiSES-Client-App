import axios from "axios";
import post from 'svelte-spa-router';
export class DocumentService {

  // assign an empty array to newly created documentList variable
  documentList = []
  baseUrl = "";
  removeDocument;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getDocuments() {
    try {
      const response = await axios.get(this.baseUrl + "/api/v1/document")
      this.documentList = await response.data;
      console.info(this.documentList)
      return this.documentList;
    } catch (error) {
      if (error.response) { // get response with a status code not in range 2xx
        console.debug(error.response.data);
        console.debug(error.response.status);
        console.debug(error.response.headers);
      } else if (error.request) { // no response
        console.debug(error.request);
      } else { // Something wrong in setting up the request
        console.log('Error', error.message);
      }
      console.log(error.config);
      return [];
    }
  }
  /*
    Ensure API call can only delete it from the frontend if its a success so you can add this code in API success call back. So, if the delete call fails don't delete it on the front end either
  */

  async removeDoc(id: any) {
    try {
      // let headers = new Headers();
      // headers.append('Content-Type', 'application/json');
      // headers.append('Accept', 'application/json');

      // headers.append('Access-Control-Allow-Origin', '*');
      // headers.append('Access-Control-Allow-Credentials', 'true');

      // headers.append('Access-Control-Allow-Credentials', 'true');

      // headers.append('Access-Control-Allow-Method', 'DELETE');
      const response = await axios.delete(this.baseUrl+`/api/v1/document/${id}`);
      this.removeDoc  = await response.data;
      console.log(this.removeDoc);

      const updatedList = this.documentList.filter(document => document.id !== id);
      console.info(updatedList)
      return updatedList;
      
    } catch (error) {
      console.error(error);
    }
  }

  /*
    1. create button in list with on:click event, passing Id of file
    2. click on delete icon - update data in the doc list and trigger a call back func. Inside call back, return filter array 
    3.check if doc id matches chosen file to remove
    4. refresh the list to observe the change.

  */
  async deleteDocument() {
    try {
      const response = await axios.delete(this.baseUrl + "/api/v1/document/{id}")
      this.removeDocument = await response.data;
      console.info(this.removeDocument)
      return this.documentList;
    } catch (error: any) {
      console.error('Error:', error);
      return [];
    }
  }
  
}
