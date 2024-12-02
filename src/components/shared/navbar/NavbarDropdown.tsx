"use client";
import { protectedRoutes } from "@/constant";
import { useUser } from "@/context/user.provider";
import { logout } from "@/services/AuthService";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function NavbarDropdown() {
  const { setIsLoading: userLoading, user } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigation = (pathName: string) => {
    router.push(pathName);
  };

  const handleLogout = () => {
    logout();
    userLoading(true);
    toast.success("User Logged out successful!");
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className="cursor-pointer" src={user?.profileImg} />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="dashboard"
            onClick={() => handleNavigation(`/${user?.role}/dashboard`)}
          >
            Dashboard
          </DropdownItem>
          <DropdownItem key="home" onClick={() => handleNavigation("/")}>
            Home
          </DropdownItem>

          <DropdownItem
            onClick={handleLogout}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
