export class ProfileDetailsDto {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string | null;
}

export class LinksDto {
  platform: {
    backgroundColor: string;
    icon: string;
    name: string;
    id: string;
    textColor: string;
  };
  url: string;
}
