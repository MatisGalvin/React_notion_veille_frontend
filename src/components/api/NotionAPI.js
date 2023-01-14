import axios from "axios";

export class NotionAPI {
  static async fetchData() {
    const { data } = await axios.get("http://localhost:8080");
    return data.results;
  }
}
