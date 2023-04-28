import { Link } from 'react-router-dom'
import LogoFac from '../../assets/img/monaco256.png'
import { HomeIcon, Users, Archive, } from 'lucide-react'

export function Aside() {

    function handleClickExit() {
        alert('saiu')
    }
    return (
        <>
            <aside className="w-48 text-white font-mono text-xl text-center py-4 bg-zinc-700 rounded-tl-xl">
                <div className='flex px-4 gap-2'>
                    <button className='w-3 h-3 bg-red-500 rounded-full' onClick={handleClickExit} />
                    <div className='w-3 h-3 bg-yellow-500 rounded-full' />
                    <div className='w-3 h-3 bg-green-500 rounded-full' />

                </div>

                <div className='w-24 h-24 mx-auto mb-32'>
                    <img src={LogoFac} alt='Logo do time da monaco nas cores padrão do time dourado vermelho e branco, com escrito MONACO FC' />
                    <h1>Painel Monaco</h1>
                </div>

                <div className='flex flex-col justify-between'>
                    <Link to='/' className='flex items-center mx-auto m-2'><HomeIcon /> GERAL</Link>
                    <Link to='/membros' className='flex items-center mx-auto m-2'><Users /> MEMBROS</Link>
                    <Link to='/bau' className='flex items-center mx-auto m-2'><Archive />BAU</Link>
                </div>
            </aside>
        </>
    )
}

