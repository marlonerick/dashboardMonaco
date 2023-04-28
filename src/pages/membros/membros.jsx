import { ArrowUpCircle, ArrowDownCircle, UserMinus } from 'lucide-react'
import { useState } from 'react'
import { Aside } from '../../components/aside/aside'
import { Footer } from '../../components/footer/footer'
import ModalRemove from '../../components/modalRemove/modalRemove'
import ModalPromover from '../../components/modalpromove/modalPromover'
import ModalRebaixar from '../../components/modalRebaixar/modalRebaixar'

export function Membros() {

    const [show, setShow] = useState(false)

    const [open, setOpen] = useState(false)

    const [expose, setExpose] = useState(false)

    return (
        <div className='rounded-xl w-2/3 h-2/3 flex flex-col'>
            <div className="flex flex-1">

                <Aside />

                <main className='
                xs:text-sm xs:w-40
                sm:text-md sm:w-64
                md:text-xl
                flex-1 bg-zinc-400 p-4 text-black font-mono font-bold text-xl rounded-tr-xl'>
                    <h1>Lista de membros</h1>
                    <div className='flex flex-col justify-between p-2'>
                        <div className='h-64 overflow-y-scroll '>
                            <table className='w-full'>
                                <thead className='bg-zinc-300'>
                                    <tr>
                                        <th>Membros</th>
                                        <th>Cargo</th>
                                        <th>Celular</th>
                                        <th>Editar</th>
                                        <th>Status</th>
                                        <th>Remover</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center overflow-y-scroll'>
                                    <tr>
                                        <td>Jesse James</td>
                                        <td>Lider</td>
                                        <td>336-357</td>
                                        <td className='flex flex-row items-center justify-center'>
                                            <button onClick={() => setExpose(true)}>
                                                <ArrowDownCircle size={24} color='yellow' />
                                            </button>/
                                            <button onClick={() => setShow(true)}>
                                                <ArrowUpCircle size={24} color='#0F0' />
                                            </button>
                                        </td>
                                        <td>Online</td>
                                        <td className='flex flex-row items-center justify-center'>
                                            <button onClick={() => setOpen(true)}>
                                                <UserMinus size={24} color='red' />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {expose ? <ModalRebaixar onClose={() => setExpose(false)} /> : null}
                            {show ? <ModalPromover onClose={() => setShow(false)} /> : null}
                            {open ? <ModalRemove onClose={() => setOpen(false)} /> : null}
                        </div>
                    </div>
                </main>
            </div>

            <Footer />

        </div>
    )
}


