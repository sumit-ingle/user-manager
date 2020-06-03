export class User {

    constructor(
      public name: string,
      public email: string,
      public roleType: string,
      public status: string,
      public mobileNo?: string,
      public createdAt?: string
    ) {  }
  
  }