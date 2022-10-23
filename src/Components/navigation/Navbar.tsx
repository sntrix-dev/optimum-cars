import { FC } from "react"
import { Avatar } from "../../packages/design/components/Avatar"
import { ChevronDownIcon, HeartIcon, NotificationIcon, SettingIcon } from "../../packages/design/icons"
import { Logo } from "../shared/Logo"
import { NavItem, NavWrapper } from "./Navs"

export const Navbaar: FC = () => {
    return (
        <header className="w-screen  bg-white z-10">
            <div className="w-full max-w-[1500px] mx-auto flex items-center justify-between px-4 py-6 border-b-2 border-[#F6F7F9]">
                <div className="flex items-center space-x-20">
                    <Logo />
                    <NavWrapper>
                        <NavItem active>Booking</NavItem>
                        <NavItem>About Us</NavItem>
                        <NavItem>Support</NavItem>
                        <NavItem>Term & Conditions</NavItem>
                    </NavWrapper>
                </div>
                <NavWrapper>
                    <NavItem>
                        <HeartIcon />
                    </NavItem>
                    <NavItem>
                        <NotificationIcon />
                    </NavItem>
                    <NavItem>
                        <SettingIcon />
                    </NavItem>
                    <NavItem>
                        <div className="flex items-center space-x-2">
                            <Avatar />
                            <ChevronDownIcon />
                        </div>
                    </NavItem>
                </NavWrapper>
            </div>
        </header>
    )
}