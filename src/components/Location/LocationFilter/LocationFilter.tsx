import "./LocationFilter.css";

interface FilterProps {
    setStatus: (page: string) => void,
}


const LocationFilter: React.FC<FilterProps> = ({ setStatus }) => {

    function handleReset() {
        setStatus("");
    }

    function handleChange(e: any) {
        if (e.target.name === "status") {

            setStatus(e.target.value);

        }
    }

    return (
        <form onReset={handleReset} className="lc-filter-form" onChange={handleChange}>
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
        </form>
    )
}

export default LocationFilter