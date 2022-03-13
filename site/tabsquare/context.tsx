import { getCookie, removeCookies, setCookies } from 'cookies-next'
import React, { FC, useCallback, useEffect, useMemo } from 'react'
import { User } from './types'

type State = {
  locale: string
  token: string | undefined
  user: User | undefined
}

const initialState: State = {
  locale: 'en-US',
  token: getCookie('token')?.toString(),
  user: undefined,
}

type Action =
  | { type: 'SET_TOKEN'; value?: string }
  | { type: 'SET_USER'; value?: User }
  | { type: 'LOGOUT' }

export const TabSquareContext = React.createContext<State>(initialState)
TabSquareContext.displayName = 'TabSquareContext'

const tabsquareReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_TOKEN': {
      if (action.value) setCookies('token', action.value)

      return {
        ...state,
        token: action.value,
      }
    }
    case 'SET_USER': {
      if (action.value) setCookies('user_id', action.value.id)

      return {
        ...state,
        user: action.value,
      }
    }
    case 'LOGOUT': {
      removeCookies('token')
      removeCookies('user_id')
      return {
        ...state,
        token: undefined,
        user: undefined,
      }
    }
  }
}

export const TabSquareProvider: FC = (props): JSX.Element => {
  const [state, dispatch] = React.useReducer(tabsquareReducer, initialState)

  const setToken = useCallback(
    (value: string) => dispatch({ type: 'SET_TOKEN', value }),
    [dispatch]
  )

  const setUser = useCallback(
    (value: any) => dispatch({ type: 'SET_USER', value }),
    [dispatch]
  )

  const logout = useCallback(() => dispatch({ type: 'LOGOUT' }), [dispatch])

  const memoValue = useMemo(
    () => ({
      ...state,
      setToken,
      setUser,
      logout,
    }),
    [state]
  )

  useEffect(() => {
    if (state.token) {
      console.log(state.token)
    }
  }, [state.token])

  useEffect(() => {
    console.log(state, 'TabSquareContext')
  }, [state])

  return <TabSquareContext.Provider value={memoValue} {...props} />
}

export const useTabSquare = () => {
  const context = React.useContext(TabSquareContext)
  if (context === undefined) {
    throw new Error(`useTabSquare must be used within a TabSquareProvider`)
  }
  return context
}
