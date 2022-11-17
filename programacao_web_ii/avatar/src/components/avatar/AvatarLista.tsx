import { Link } from "react-router-dom";

export function AvatarLista() {

    return (
        <>
            <Link to={'/avatar/cadastro'}>Cadastrar Avatar</Link>

            <h1>Página Avatar Lista</h1>
        </>
    );
}