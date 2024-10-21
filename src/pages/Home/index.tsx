import { Header } from "../../components/Header"
import { SectionTitle } from "../../components/SectionTitle"
import { Container } from "../../components/Container"
import { Button } from "../../components/Button"
import { useCallback, useState } from "react"

const booksGender = [
  'Ação',
  'Aventura',
  'Comédia',
  'Romance',
  'Drama',
  'Fantasia',
  'Ficção'
]

export function Home() {

    const [selectedGender, setSelectedGender] = useState<string[]>([]);

    const handleSelect = useCallback((title: string) => {
        if(selectedGender.includes(title)) {
            const removeGender = selectedGender.filter(item => item !== title)
            setSelectedGender(removeGender)
        } else {
            setSelectedGender([... selectedGender, title])
        }
    }, [selectedGender]);

    return (
        <>
            <Header />
            <Container>
                <div>
                    <SectionTitle title='O que você quer ler hoje?' />
                    <div className="gap-4 grid sm:grid-cols-4 md:grid-cols-9">
                        {booksGender.map(book =>
                            <Button title={book}
                                    variant={selectedGender.includes(book) ? 'dark' : 'light'} 
                                    onClick={() => handleSelect(book)} />
                        )}
                    </div>
                </div>
                <div>
                    <p className="text-zinc-700 text-2xl mt-8 mb-5">Sobre o que você gostaria de receber uma recomendação de livro hoje?</p>
                    <input className="w-full outline-1 outline-emerald-500 py-2 px-4 rounded-lg mb-16 border-2 border-slate-300 shadow-lg"
                        type="text" placeholder="Eu gostaria de ler sobre..." />
                </div>
            </Container>
        </>
    )
}