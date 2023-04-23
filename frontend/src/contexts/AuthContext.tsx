import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer
} from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { toast } from 'react-hot-toast';
import axios from 'src/lib/axios';
import { amplifyConfig } from 'src/config';
import { User } from 'src/models/user';
import {
  LoginRequest,
  ResetDefaultPasswordRequest,
  SignUpRequest,
  VerifyCodeRequest
} from 'src/models/requests';
import { Router, useNavigate } from 'react-router';

Amplify.configure(amplifyConfig);

interface State {
  user: User | undefined;
  isAuthenticated: boolean;
  isInitialized: boolean;
}

const initialState: State = {
  user: undefined,
  isAuthenticated: false,
  isInitialized: false
};

interface AuthContextValue extends State {
  login: (request: LoginRequest) => Promise<ChallengeName | undefined>;
  logout: () => Promise<void>;
  register: (request: SignUpRequest) => Promise<void>;
  verifySignUpCode: (request: VerifyCodeRequest) => Promise<void>;
  resetDefaultPassword: (request: ResetDefaultPasswordRequest) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  login: () => Promise.resolve('NEW_PASSWORD_REQUIRED'),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  verifySignUpCode: () => Promise.resolve(),
  resetDefaultPassword: () => Promise.resolve()
});

interface AuthProviderProps {
  children: React.ReactNode;
}

type ChallengeName = 'NEW_PASSWORD_REQUIRED';

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    user: User;
    isInitialized?: boolean;
    isAuthenticated?: boolean;
  };
};

type LogoutAction = {
  type: 'LOGOUT';
};

type RegsiterAction = {
  type: 'REGISTER';
};

type RegsiterConfirmed = {
  type: 'REGISTER_CONFIRMED';
};

type Action =
  | InitializeAction
  | LogoutAction
  | RegsiterAction
  | RegsiterConfirmed;

const loadUserInformation = async (): Promise<User> => {
  const resp = await axios.get<{ user: User }>('/api/me');
  return { ...resp.data.user, currentInstitute: resp.data.user.institutes[0] };
};

const handlers: Record<string, (state: State, action: Action) => State> = {
  INITIALIZE: (state: State, action: InitializeAction): State => {
    const {
      user,
      isAuthenticated = true,
      isInitialized = true
    } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized,
      user
    };
  },
  LOGOUT: (state: State): State => ({
    ...state,
    isAuthenticated: false,
    user: undefined
  }),
  REGISTER: (state: State): State => ({ ...state }),
  REGISTER_CONFIRMED: (state: State): State => ({ ...state })
};

const reducer = (state: State, action: Action): State =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const logout = async (global: boolean = false) => {
    try {
      await Auth.signOut({
        global // default, sign out of current device
      });
      dispatcher({ type: 'LOGOUT' });
      navigate('/login');
    } catch (err) {
      toast.error('We ran into an error while signing out');
    }
  };

  const login = async ({
    email,
    password
  }: LoginRequest): Promise<ChallengeName | undefined> => {
    const resp = await Auth.signIn({
      password,
      username: email
    });
    if (resp.challengeName === 'NEW_PASSWORD_REQUIRED') {
      toast.error('New Password Required');
      return 'NEW_PASSWORD_REQUIRED';
    }
    const user = await loadUserInformation();
    dispatcher({
      payload: {
        user
      },
      type: 'INITIALIZE'
    });
  };

  const register = async ({
    email,
    insituteName,
    password,
    fullName
  }: SignUpRequest) => {
    await Auth.signUp({
      password,
      username: email.toLowerCase().trim(),
      attributes: {
        'custom:institute_name': insituteName.trim(),
        email: email.toLowerCase().trim(),
        name: fullName.trim()
      }
    });
  };

  const verifySignUpCode = async ({ code, email }: VerifyCodeRequest) => {
    await Auth.confirmSignUp(email, code);
    dispatcher({ type: 'REGISTER_CONFIRMED' });
  };

  const resetDefaultPassword = async ({
    email,
    fullName,
    newPassword,
    tempPassword
  }: ResetDefaultPasswordRequest) => {
    const user = await Auth.signIn({
      password: tempPassword,
      username: email
    });

    await Auth.completeNewPassword(user, newPassword, {
      name: fullName.trim()
    });

    await axios.post(`/api/me/activate`, { fullName });

    const activatedUser = await loadUserInformation();

    dispatcher({
      type: 'INITIALIZE',
      payload: {
        user: activatedUser,
        isAuthenticated: true,
        isInitialized: true
      }
    });
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userInfo = await loadUserInformation();
        dispatcher({
          type: 'INITIALIZE',
          payload: {
            user: userInfo
          }
        });
      } catch (err) {
        dispatcher({
          type: 'INITIALIZE',
          payload: {
            user: undefined,
            isAuthenticated: false,
            isInitialized: true
          }
        });
        console.log(err);
      }
    };
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        register,
        resetDefaultPassword,
        verifySignUpCode
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
