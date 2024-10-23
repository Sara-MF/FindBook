import { Header } from "../../components/Header"
import { SectionTitle } from "../../components/SectionTitle"
import { Container } from "../../components/Container"
import { Button } from "../../components/Button"
import { useCallback, useState } from "react"
import { Card } from "../../components/Card"
import { Input } from "../../components/Input"

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
        <div className="mb-10">
            <Header />
            <Container>
                <div>
                    <SectionTitle title='O que você quer ler hoje?' />
                    <div className="gap-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9">
                        {booksGender.map((book, index) =>
                            <Button key={index}
                                    title={book}
                                    variant={selectedGender.includes(book) ? 'dark' : 'light'} 
                                    onClick={() => handleSelect(book)} />
                        )}
                    </div>
                </div>
                <div>
                    <p className="text-zinc-700 text-2xl mt-8 mb-5">Sobre o que você gostaria de receber uma recomendação de livro hoje?</p>
                    <Input placeholder="Eu gostaria de ler sobre..." />
                </div>
            <SectionTitle title='Livros recomendados' />
            <div className="lg:grid lg:grid-cols-2">
                <Card id={1} />
                <Card id={1} />
                <Card id={1} />
                <Card id={1} />
                <Card id={1} />
                <Card id={1} />
            </div>
            </Container>
        </div>
    )
}