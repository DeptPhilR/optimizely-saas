import { BlobServiceClient } from "@azure/storage-blob";
import { v4 as uuid } from "uuid";

export async function uploadAnImageToBlob(file: File) {
  // Connection string
  const connString = process.env.AZURE_STORAGE_CONNECTION_STRING;
  if (!connString) throw Error("Azure Storage Connection string not found");

  const filename = file.name.replaceAll(" ", "_");
  const newFileName = "image" + uuid() + filename;
  console.log("Looking to upload: "+newFileName);
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  // Client
  const client = BlobServiceClient.fromConnectionString(connString);
  console.log("connected to blob storage");
  const containerClient = client.getContainerClient("images");
  console.log("getting container");
  const blockBlobClient = containerClient.getBlockBlobClient(newFileName);
  console.log("getting blobblockclient");
  await blockBlobClient.uploadData(await file.arrayBuffer(), options);
  console.log("File uploaded");
  return newFileName;
}
