import "./FilterBox.css";

interface FilterProps {
    setStatus: (page: string) => void,
    setSpecies: (page: string) => void,
    setGender: (page: string) => void,
    setCurrentPage: (page: number) => void,
}


const FilterBox: React.FC<FilterProps> = ({ setStatus, setSpecies, setGender, setCurrentPage }) => {

    function handleReset() {
        setCurrentPage(1);
        setStatus("");
        setSpecies("");
        setGender("");
    }

    function handleChange(e: any) {
        if (e.target.name === "status") {

            setCurrentPage(1);
            setStatus(e.target.value);

        } else if (e.target.name === "species") {

            setCurrentPage(1);
            setSpecies(e.target.value);

        } else if (e.target.name === "gender") {

            setCurrentPage(1);
            setGender(e.target.value);

        }
    }


    return (
        <form onReset={handleReset} className="filter-form" onChange={handleChange}>
            <input className="reset-button" type="reset" value="Reset" onChange={handleChange} />
            <fieldset id='status'>
                <legend>Status</legend>
                <input type="radio" name="status" id="alive" value="alive" />
                <label htmlFor="alive">Alive</label>
                <br />
                <input type="radio" name="status" id="dead" value="dead" />
                <label htmlFor="dead">Dead</label>
                <br />
                <input type="radio" name="status" id="status-unknown" value="unknown" />
                <label htmlFor="status-unknown">Unknown</label>

            </fieldset>

            <fieldset id='species'>
                <legend>Species</legend>
                <input type="radio" name="species" id="human" value="Human" />
                <label htmlFor="human">Human</label>
                <br />
                <input type="radio" name="species" id="alien" value="Alien" />
                <label htmlFor="alien">Alien</label>
                <br />
                <input type="radio" name="species" id="humanoid" value="Humanoid" />
                <label htmlFor="humanoid">Humanoid</label>
                <br />
                <input type="radio" name="species" id="poopybutthole" value="Poopybutthole" />
                <label htmlFor="poopybutthole">Poopybutthole</label>
                <br />
                <input type="radio" name="species" id="mythological" value="Mythological Creature" />
                <label htmlFor="mythological">Mythological Creature</label>
                <br />
                <input type="radio" name="species" id="robot" value="Robot" />
                <label htmlFor="robot">Robot</label>
                <br />
                <input type="radio" name="species" id="animal" value="Animal" />
                <label htmlFor="animal">Animal</label>
                <br />
                <input type="radio" name="species" id="cronenberg" value="Cronenberg" />
                <label htmlFor="cronenberg">Cronenberg</label>
                <br />
                <input type="radio" name="species" id="disease" value="Disease" />
                <label htmlFor="disease">Disease</label>

            </fieldset>

            <fieldset id='gender'>
                <legend>Gender</legend>
                <input type="radio" name="gender" id="male" value="male" />
                <label htmlFor="male">Male</label>
                <br />
                <input type="radio" name="gender" id="female" value="female" />
                <label htmlFor="female">Female</label>
                <br />
                <input type="radio" name="gender" id="genderless" value="genderless" />
                <label htmlFor="genderless">Genderless</label>
                <br />
                <input type="radio" name="gender" id="gender-unknown" value="unknown" />
                <label htmlFor="gender-unknown">Unknown</label>

            </fieldset>

        </form>
    )
}

export default FilterBox