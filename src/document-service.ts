export class DocumentService {
  documentList = []
  baseUrl = "";

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getDocuments() {
    const response = await fetch(this.baseUrl + "/api/v1/document")
    this.documentList = await response.json();
    return this.documentList;
  } catch (error: any) {
    console.error('Error:', error);
    return [];
  }
  
}
