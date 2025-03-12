"use client";

import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    useDisclosure,
} from "@heroui/react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { CLIENT_ROUTES, NAV_ITEMS } from "@/lib/constants";

export default function TopNavbar() {
    const pathName = usePathname();

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <Navbar isBordered>
            {/* Side Navigation Drawer for Mobile */}
            <Button
                disableRipple
                className="sm:hidden px-0 justify-start"
                color="primary"
                size="sm"
                variant="light"
                onPress={onOpen}
            >
                <Menu className="text-foreground" />
            </Button>

            <Drawer
                className="w-48"
                isOpen={isOpen}
                placement="left"
                onOpenChange={onOpenChange}
            >
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerBody className="mt-8">
                                {NAV_ITEMS.map((item) => {
                                    return (
                                        <Link
                                            key={item.key}
                                            href={item.href}
                                            onClick={onClose}
                                        >
                                            <p
                                                className={`${
                                                    pathName === item.href
                                                        ? "text-primary"
                                                        : "text-foreground"
                                                }`}
                                            >
                                                {item.title}
                                            </p>
                                        </Link>
                                    );
                                })}
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>

            {/* Top Navigation */}
            <NavbarBrand className="flex gap-1">
                <Image
                    alt="Nexus Logo"
                    height={16}
                    src="/images/NexusLogo.svg"
                    width={16}
                />
                <Link
                    className="font-bold text-primary text-xl"
                    href={CLIENT_ROUTES.HOME}
                >
                    Nexus
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {NAV_ITEMS.map((item) => {
                    return (
                        <NavbarItem
                            key={item.key}
                            isActive={pathName === item.href}
                        >
                            <Link href={item.href}>
                                <p
                                    className={`${
                                        pathName === item.href
                                            ? "text-primary"
                                            : "text-foreground"
                                    }`}
                                >
                                    {item.title}
                                </p>
                            </Link>
                        </NavbarItem>
                    );
                })}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
