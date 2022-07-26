const Container = (props) => {
    if (props.darkMode) {
        return (
            <div className={`class1 ${props.darkMode? 'trur': 'false'}`} style={{ backgroundColor: "black"}}>
                <h2 style={{ color: "white" }}> current is dark mode</h2>
            </div>

        );

    } else {
        return (
            <div>
                <h2> current is light mode</h2>
            </div>

        );

    }

}