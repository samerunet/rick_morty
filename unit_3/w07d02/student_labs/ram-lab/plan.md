1st ) Import api from url characters

    landing page create button to render all characters

    create buttons to scroll through pages

    add styling grid using bootstrap


    <p>{props.character.episode.map((e, i) => i + 1 + "." + e).join(" ")}</p>


    <button onClick={prevPage}>Previous</button>
