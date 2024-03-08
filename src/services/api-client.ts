import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "802672dc13564158948fb6bf134dec79",
  },
});
