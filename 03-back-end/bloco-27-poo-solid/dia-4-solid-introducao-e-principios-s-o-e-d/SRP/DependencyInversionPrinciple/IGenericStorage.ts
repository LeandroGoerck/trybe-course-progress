interface IGenericStorage {
  read(): string[];
  insert(obj: string);
}

export default IGenericStorage;