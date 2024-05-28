import Banner from "../Banner/Banner";
import CharacterList from "../CharacterList/CharacterList";
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <Banner />
            <CharacterList />
        </div>
        
    )
}