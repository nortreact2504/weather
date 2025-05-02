function LeftPane({locations, locationSelected}) {
    return (
        locations.map((loc, index) => {
            return (
                <div key={index}>
                    <span onClick={() => locationSelected(index)} >{loc.name}</span>
                </div>
            )
        })
    )
}

export default LeftPane;