import {
    BlobServiceClient,
    ContainerClient,
    BlockBlobClient,
  } from '@azure/storage-blob';
  import * as dotenv from 'dotenv';
  
  dotenv.config();
  
  const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME || '';
  const AZURE_STORAGE_ACCOUNT_KEY = process.env.AZURE_STORAGE_ACCOUNT_KEY || '';
  const AZURE_STORAGE_CONTAINER_NAME =
    process.env.AZURE_STORAGE_CONTAINER_NAME || '';
  
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    `DefaultEndpointsProtocol=https;AccountName=${AZURE_STORAGE_ACCOUNT_NAME};AccountKey=${AZURE_STORAGE_ACCOUNT_KEY};EndpointSuffix=core.windows.net`,
  );
  
  async function uploadFile(
    fileData: Uint8Array,
    fileName: string,
  ): Promise<string> {
    const containerClient: ContainerClient = blobServiceClient.getContainerClient(
      AZURE_STORAGE_CONTAINER_NAME,
    );
    await containerClient.createIfNotExists();
    const blockBlobClient: BlockBlobClient =
      containerClient.getBlockBlobClient(fileName);
  
    await blockBlobClient.uploadData(fileData);
    return blockBlobClient.url;
  }
  
  async function uploadOdooFile(
    fileData: Uint8Array,
    fileName: string,
  ): Promise<string> {
    const containerClient: ContainerClient = blobServiceClient.getContainerClient(
      AZURE_STORAGE_CONTAINER_NAME,
    );
    await containerClient.createIfNotExists();
    const blockBlobClient: BlockBlobClient =
      containerClient.getBlockBlobClient(fileName);
  
    await blockBlobClient.uploadData(fileData);
    return blockBlobClient.url;
  }
  
  export { uploadFile, uploadOdooFile };
  