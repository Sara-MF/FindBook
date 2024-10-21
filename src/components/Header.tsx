import bgImg from '../assets/img/background-header.png'
import { Container } from './Container'
import { Title } from './Title'
import { Button } from './Button'

export function Header() {
    return (
        <div style={{backgroundImage: `url(${bgImg})`}} className="w-auto bg-cover bg-center bg-no-repeat">

            <Container>
                <Title />
                <div className="mt-28">
                    <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-zinc-700 mb-14">Encontre livros <br/> que são a sua cara!</p>
                    <Button title='Pesquisar Livros' />
                </div>
            </Container>
        </div>
    )
}