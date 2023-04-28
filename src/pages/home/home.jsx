import { Banknote, User, Search } from 'lucide-react'

import { Aside } from '../../components/aside/aside'
import { Footer } from '../../components/footer/footer'

var nome = 'Jesse James'
var cargo = 'Lider'

export function Home() {
    return (
        <div className='
        xs:w-40
        sm:w-64
        md:w-2/3
        w-2/3 h-2/3 flex flex-col rounded-xl '>
            <div className='flex flex-1'>

                <Aside />

                <main className='
                flex-1 bg-zinc-400 p-4 text-black font-mono font-bold text-xl rounded-tr-xl'>
                    <h1>Informações Gerais</h1>
                    <div className='
                    flex justify-center m-2'>
                        <div className='
                        xs:w-24 xs:text-sm
                        sm:w-40 sm:text-md
                        md:w-40 md:text-lg
                        lg:w-60
                        w-60 flex flex-col items-center bg-zinc-300 rounded-xl justify-center p-1'>
                            <User size={48} />
                            <h6 className='md:text-xs text-sm font-normal flex-wrap'>
                                Seja Bem Vindo ao Painel .
                                <a className='md:text-sm text-xl font-bold'>
                                    {nome}
                                </a>.
                                Cargo atual
                                <a className='md:text-sm text-xl font-bold'>
                                    {cargo}
                                </a>
                            </h6>
                        </div>

                        <div className='
                        xs:w-24 xs:text-sm
                        sm:w-40 sm:text-md
                        md:w-40 md:text-lg
                        lg:w-60
                        w-64 flex flex-row items-center bg-zinc-300 rounded-xl justify-center p-2 mx-2'>
                            <User size={48} color='#0B0' />
                            <div className='flex flex-col first-letter:'>
                                <h1>ATIVOS</h1>
                                <h1>26/35</h1>
                            </div>
                        </div>
                        {/* <div className='w-64 flex flex-col items-center bg-zinc-300 rounded-xl justify-around p-2 mx-2'>
                            <h6 className='text-sm'>Saldo Disponivel</h6>
                            <Banknote size={60} color='#0C0' />
                            <h6 className='text-2xl'>{saldo}</h6>
                            <input className='w-48 m-2 rounded-md border border-stone-900 px-4 text-center' />
                            <div className='flex flex-row'>
                                <button className='w-24 text-green-500 text-sm font-bold bg-zinc-200 p-2 rounded-xl items-center text-center mx-1'>DEPOSITAR</button>
                                <button className='w-24 text-green-500 text-sm font-bold bg-zinc-200 p-2 rounded-xl items-center text-center mx-1'>SACAR</button>
                            </div>
                        </div> */}
                    </div>
                    <div className='flex justify-center m-2'>

                        <div className='
                        xs:w-24 xs:text-sm
                        sm:w-40 sm:text-md
                        md:w-40 md:text-md
                        lg:w-60 lg:text-md
                        w-64 h-32 flex flex-col items-center bg-zinc-300 rounded-xl justify-center p-1 mx-2'>
                            <h1>Adicionar Membro</h1>
                            <input className='
                            xs:w-20 xs:text-sm
                            sm:w-24 sm:text-md
                            md:w-28 sm:text-lg
                            lg:w-32
                            w-48 m-2 rounded-md border border-stone-900 px-4 text-center' />
                            <button className='
                            xs:w-20 xs:text-xs
                            sm:w-24 sm:text-sm
                            md:w-28 md:text-md
                            lg:w-32
                            w-24 flex flex-row items-center text-green-500 text-sm font-bold bg-zinc-200 p-2 rounded-xl text-center mx-1'><Search color='#0C0' /> BUSCAR</button>
                        </div>
                    </div>

                </main>
            </div>
            <Footer />

        </div>
    )
}


