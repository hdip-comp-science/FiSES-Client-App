export class DocumentService {
  documentList = []
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getDocuments() {
    const response = await fetch(this.baseUrl + "/api/v1/document")
    this.documentList = await response.json();
    return this.documentList;
  } catch (error) {
    return [];
  }

  async uploadDocument() {
    const response = await fetch(this.baseUrl + "/api/v1/upload")
    this.documentList = await response.json();
    return this.documentList;
  } catch (error) {
    return [];
  }
}
