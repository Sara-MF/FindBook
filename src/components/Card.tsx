import { useCallback } from "react"
import { Button } from "./Button"
import { Tag } from "./Tag"
import { useNavigate } from 'react-router-dom'

type Props = {
  id: number
}

export function Card({ id } : Props) {

  const navigate = useNavigate();
  const handleSelectBook = useCallback(()=> {
    navigate(`/${id}`)
  }, [id, navigate])

  return (
    <div className="grid grid-cols-3 shadow-lg rounded-lg border border-gray-200 lg:max-w-xl p-4 gap-4 mb-10">

      <div className="col-span-1 w-full bg-slate-600"></div>

      <div className="col-span-2">
        <p className="font-bold text-2xl text-zinc-600">Nome do livro</p>
        <p className="font-light text-md text-gray-400 mb-2">Autor</p>
        <div className="flex gap-2">
          <Tag title="Tag 1" />
          <Tag title="Tag 2" />
        </div>
        <p className="mb-4"><strong>Sinopse:</strong> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        <Button title="Ver mais" variant='light' className="w-full mb-0 hover:bg-emerald-500 hover:text-white" onClick={handleSelectBook}/>
      </div>

    </div>
  )

}