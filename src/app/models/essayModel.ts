export class FileUpload {
  key: string;
  name: string;
  url: string;
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}


export class Course{
  id: string;
  nom: string;
  prenom: string;
  matricule: string;
  url: string;
  file: File;
}

export class memoire{
  id: string;
  nom: string;
  prenom: string;
  matricule: string;
  url: string;
  file: File;
}
