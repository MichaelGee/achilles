import Loader from "@/components/molecules/Loader/loader";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const withProtectedRoute = (Component: React.FC) => {
  const ProtectedRoute = ({ children }: Props) => {
    const router = useRouter();
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
      if (!user) {
        router.push("/auth/login");
      } else {
        router.push("/");
      }
    }, [user]);

    //@ts-ignore
    return !user ? <Loader /> : <Component>{children}</Component>;
  };

  return ProtectedRoute;
};
