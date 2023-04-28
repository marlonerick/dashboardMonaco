import React from 'react'
import { Moon, LogOut, } from 'lucide-react'

export function Footer() {
    return (
        <>
            <footer className="
            xs:w-full
            w-full bg-zinc-700 text-white font-mono text-xl text-center rounded-b-xl">
                <div className='flex justify-center items-center py-4 px-16'>
                    <a className='flex flex-col items-center'><LogOut /> SAIR</a>
                </div>
            </footer>
        </>
    )
}

