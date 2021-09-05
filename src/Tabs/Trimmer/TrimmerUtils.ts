function ValidateCollectionFile(collectionFile: File | undefined): string {
  if (collectionFile === undefined) {
    return "File undefined"
  }

  if (collectionFile.type !== "text/csv") {
    return "File must be of type \".csv\""
  }

  return "";
}

export { ValidateCollectionFile }