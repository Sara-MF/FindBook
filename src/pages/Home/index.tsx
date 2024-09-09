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
                <SectionTitle title='O que você quer ler hoje?' />
                <div className="gap-4 grid sm:grid-cols-4 md:grid-cols-9">
                    {booksGender.map(book =>
                        <Button title={book}
                                variant={selectedGender.includes(book) ? 'dark' : 'light'} 
                                onClick={() => handleSelect(book)} />
                    )}
                </div>
            </Container>
        </>
    )
}