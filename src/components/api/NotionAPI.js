import axios from "axios";

export class NotionAPI {
  static async fetchData() {
    // Les settings de la req
    let settings = {
      headers: {
        authorization:
          "Bearer secret_o8n6JOsleFRGnEUL1flbR7jwhisq9usjVH1RR7I4X6X",
        "notion-version": "2021-08-16",
      },
    };
    const { data } = await axios.post(
      "https://api.notion.com/v1/databases/9d4ab685f1db4798b6db0efa3cc3257b/query",
      {},
      settings
    );
    console.log(data);
    return data.results;
  }
}
