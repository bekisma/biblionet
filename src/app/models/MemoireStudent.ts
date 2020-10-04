export interface MemoireStudent{
    id?:string;
    nom?:string;
    prenom?:string;
    matricule?:string;
    cycle?:string;
    parcours?:string;
    entreprise?:string;
    encadreur?:string;
    theme?:string;
    annee?:string;
    url?:string;
    fileref?:string;


  }

  export interface Cycle{
    id?:string;
    name?: string;
  }

  export interface Data{
    id:string;
    url:string;
  }

//   export interface Course {
//     id:string;
//     titles: {
//         description:string;
//         longDescription: string;
//     };
//     iconUrl: string;
//     uploadedImageUrl:string;
//     courseListIcon: string;
//     categories:string[];
//     lessonsCount:number;
// }



