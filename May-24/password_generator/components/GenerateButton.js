const GenerateButton = (props) => {
    const [password, setPassword] = React.useState("");


    const generaterPassword = () => {
        // console.log(props.charCount, props.incNumber, props.incsplChar, props.casing);
        let chars = "";
        switch (props.casing) {
            case "lower":
                chars = "abcdefghijklmnopqrstuvwxyz";
                break;
            case "upper":
                chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                break;
            case "mixed":
                chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
                break;
            default:
                chars = "abcdefghijklmnopqrstuvwxyz"
                break;
        }

        if (props.incNumber) {
            chars = chars + "1234567890";
        }
        if (props.incNumber) {
            chars = chars + "!@#$%^&*";
        }

        let charCount = props.charCount;
        if (charCount > 16) { charCount = 1; }
        if (charCount < 1) { charCount = 1; }

        let pass = "";
        for (let i = 0; i < charCount; i++) {
            const index = Math.floor(Math.random() * chars.length);
            const singleChar = chars.charAt(index);
            pass = pass + singleChar;
        }
        setPassword(pass);

        console.log(chars);
    }
    return (
        <div>
            <button className="action_btn" onClick={generaterPassword}>Generate</button>
            <p className="op_pass">{password}</p>
        </div>
    )
}