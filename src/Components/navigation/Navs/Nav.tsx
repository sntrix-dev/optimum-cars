import { createElement, FC } from 'react'
import { Condition } from '../../../packages/utils/Components'

interface NavProps {
    children: JSX.Element | string
    active?: boolean
}

export const NavItem: FC<NavProps> = ({
    children,
    active = false
}) => createElement(
    "a",
    {
        className: `text-sm relative w-max font-medium ${active ? 'text-[#13171B] cursor-pointer' : 'text-[#A6AFBA]'}`
    },
    <>
        {children}
        <Condition condition={active}>
            <div className='w-full h-0.5 rounded-full bg-[#0A20E6] absolute -bottom-full' />
        </Condition>
    </>
)
