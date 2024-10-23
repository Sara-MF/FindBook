import { Container } from "../../components/Container"
import { SectionTitle } from "../../components/SectionTitle"
import { Card } from "../../components/Card"
import { useParams } from 'react-router-dom'

export function BookDetails() {

  const { id }= useParams();

  return (
    
    <Container>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 mb-16">
        <div>
          <h2 className="text-5xl font-bold text-zinc-600">Nome do livro</h2>
          <p className="text-xl text-gray-400 font-light py-4">Autor</p>
          <p className="text-gray-500 mt-6">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </div>

        <div className="bg-slate-600 w-full h-96"></div>
      </div>

      <SectionTitle title='Recomendações com base nesse livro' />
      <div className="lg:grid lg:grid-cols-2">
                <Card id={1} />
                <Card id={1} />
                <Card id={1} />
                <Card id={1} />
                <Card id={1} />
                <Card id={1} />
            </div>
    </Container>
    
  )

}