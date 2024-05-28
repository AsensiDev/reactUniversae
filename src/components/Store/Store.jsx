import '/src/components/Store/Store.css'
import CharacterList from '../CharacterList/CharacterList';

export default function Store() {
    return (
        <div className="store">
            <h1 className="p-5">Descubre Todos Nuestros Cursos </h1>
            <CharacterList />
        </div>
    );
}
