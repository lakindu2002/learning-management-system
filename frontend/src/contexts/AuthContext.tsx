import React, { createContext, FC, useContext, useReducer } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { toast } from 'react-hot-toast';
import { amplifyConfig } from 'src/config';
import { User } from 'src/models/user';
import { LoginRequest, SignUpRequest } from 'src/models/requests';

console.log(amplifyConfig);
Amplify.configure(amplifyConfig);

interface State {
  user: User | undefined;
  isAuthenticated: boolean
}

const initialState: State = {
  user: undefined,
  isAuthenticated: false
}

interface AuthContextValue extends State {
  login: (request: LoginRequest) => Promise<void>,
  logout: () => Promise<void>,
  register: (request: SignUpRequest) => Promise<void>
}

const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
});

interface AuthProviderProps {
  children: React.ReactNode;
}

type LoginAction = {
  type: 'LOGIN',
  payload: {
    user: User
  }
}

type InitializeAction = {
  type: 'INITIALIZE',
  payload: {
  }
}


type LogoutAction = {
  type: 'LOGOUT',
}

type RegsiterAction = {
  type: 'REGISTER',
}

type Action = LoginAction | LogoutAction | InitializeAction | RegsiterAction;

const handlers: Record<string, (state: State, action: Action) => State> = {
  LOGIN: (state: State, action: LoginAction): State => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  LOGOUT: (state: State): State => ({
    ...state,
    isAuthenticated: false,
    user: undefined
  }),
  REGISTER: (state: State): State => ({ ...state, }),
};

const reducer = (state: State, action: Action): State => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, initialState);

  const logout = async (global: boolean = false) => {
    try {
      await Auth.signOut({
        global // default, sign out of current device
      });
      dispatcher({ type: 'LOGOUT' })
    } catch (err) {
      toast.error('We ran into an error while signing out');
    }
  }

  const login = async ({ email, password }: LoginRequest) => {
    await Auth.signIn({
      password,
      username: email,
    })
    // TODO: Fetch logged in user information from the API.
    // TODO: Set up axios with request interception.
  }

  const register = async ({ email, insituteName, password, fullName }: SignUpRequest) => {
    await Auth.signUp({
      password,
      username: email.toLowerCase().trim(),
      attributes: {
        'custom:institute_name': insituteName.trim(),
        email: email.toLowerCase().trim(),
        name: fullName.trim()
      }
    })
  }

  return <AuthContext.Provider value={{
    ...state,
    login,
    logout,
    register
  }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
