import { Aside } from '../../components/aside/aside'
import { Footer } from '../../components/footer/footer'

export function Chest() {
    return (
        <div className='w-2/3 h-2/3 flex flex-col rounded-tr-xl'>
            <div className="flex flex-1 rounded-xl">

                <Aside />

                <main className="
                xs:text-sm xs:w-40
                sm:text-md sm:w-64
                md:text-xl
                flex-1 bg-zinc-400 p-4 text-black font-mono font-bold text-xl rounded-tr-xl">
                    <h1>Registro do bau</h1>
                    <div className='flex flex-col justify-between p-2 '>
                        <div className='
                        sm:h-60 
                        md:h-72
                        h-96
                         bg-stone-300 text-md font-bold p-2 rounded-xl overflow-y-scroll'>
                            <h1>Passaporte:<a className='text-red-500'> 1045 </a>Retirou: <a className='text-green-500'>250x Dinheiro Sujo</a>  Data/Hora: <a className='text-yellow-500'>19/04/2023 21:44</a> </h1>
                            <h1>Passaporte: 1045 Guardou: 250x Dinheiro Sujo Data/Hora: 19/04/2023 21:45</h1>
                            <h1>Passaporte: 1045 Retirou: 250x Dinheiro Sujo Data/Hora: 19/04/2023 21:54</h1>
                            <h1>Passaporte: 1045 Guardou: 250x Dinheiro Sujo Data/Hora: 19/04/2023 21:54</h1>
                            <h1>Passaporte: 1045 Retirou: 1x Lockpick de Alumínio Data/Hora: 20/04/2023 22:54</h1>
                            <h1>Passaporte: 1045 Guardou: 1x Lockpick de Alumínio Data/Hora: 20/04/2023 22:55</h1>
                            <h1>Passaporte: 1045 Guardou: 1x MasterPick Data/Hora: 20/04/2023 22:57</h1>

                        </div>
                    </div>
                </main>
            </div>

            <Footer />

        </div>
    )
}


