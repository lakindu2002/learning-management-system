export interface SignUpRequest {
  email: string;
  password: string;
  insituteName: string;
  fullName: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface VerifyCodeRequest {
  email: string;
  code: string;
}
