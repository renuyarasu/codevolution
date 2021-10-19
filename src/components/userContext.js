import React from 'react';

const UserContext = React.createContext('Learn React Js')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }