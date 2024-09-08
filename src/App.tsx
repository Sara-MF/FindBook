import { Header } from "./components/Header"
import { SectionTitle } from "./components/SectionTitle"
import { Container } from "./components/Container"
import { Button } from "./components/Button"

const booksGender = [
  'Ação',
  'Aventura',
  'Comédia',
  'Romance',
  'Drama',
  'Fantasia',
  'Ficção'
]

function App() {

  return (
    <>
      <Header />
      <Container>
        <SectionTitle title='O que você quer ler hoje?' />
        {booksGender.map(book =>
          <Button title={book} variant='light' className="mr-4"/>
        )}
      </Container>
    </>
  )
}

export default App
