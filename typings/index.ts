export type UserState = {
  isSignin: boolean;
  user: null;
  signupData: Record<string, never>;
  signinData: Record<string, never>;
};

export type SigninProps = {
  id: string;
  password: string;
};

export type ProfileProps = {
  header: string;
  data: { nickname: string }[];
};

export type PostData = {
  post: any;
};

export type UserData = {
  user: {
    user: {
      id: number;
    };
  };
};

export type PostImgData = {
  images: Record<string, never>[];
};

export type LayoutProps = {
  children: React.ReactNode;
};
