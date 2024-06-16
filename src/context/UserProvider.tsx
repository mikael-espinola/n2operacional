"use client";
import ordens, { Ordem } from "@/data/ordens";
import users, { User } from "@/data/users";
import { getSession } from "next-auth/react";
import React, { createContext, useContext, useEffect, useState } from "react";

interface UserContextProps {
  userName: string | undefined;
  userId: number | undefined;
  id: string | undefined;
  isOpen: boolean;
  updatedUsers: any;
  ordensList: Ordem[];
  setOrdensList: (value: Ordem[]) => void;
  setUpdateUsers: (value: any[]) => void;
  setIsOpen: (value: boolean) => void;
  setId: (value: string | undefined) => void;
  setUserName: (value: string | undefined) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const UserProvider = ({ children }: any) => {
  const [userName, setUserName] = useState<string | undefined>();
  const [id, setId] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState<number | undefined>();
  const [updatedUsers, setUpdateUsers] = useState<User[]>(users);
  const [ordensList, setOrdensList] = useState<Ordem[]>(ordens);

  useEffect(() => {
    const fetchUser = async () => {
      const session = await getSession();
      const sessionUser = session?.user?.email;
      const currentUser = users.find(
        (dataUser) => dataUser.user === sessionUser
      );
      setUserName(currentUser ? currentUser.user : undefined);
      setUserId(currentUser ? currentUser.id : undefined);
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userName,
        id,
        setId,
        setUserName,
        isOpen,
        setIsOpen,
        userId,
        updatedUsers,
        setUpdateUsers,
        setOrdensList,
        ordensList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UsersProvider is not defined");
  }
  return context;
};
