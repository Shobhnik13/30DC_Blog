import { createClient } from "next-sanity";

const projectId="xhcly8zh"
const dataset="production"
const apiVersion="2023-01-01"


export const client = createClient({
    projectId: "lqz08o01",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true
  });