import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarService } from "./AvatarService";

export function AvatarCadastro() {

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');

    function salvar(event: any) {
        event.preventDefault();

        let avatar: Avatar = {
            nome: nome,
            imagem: imagem
        };

        AvatarService.salvar(avatar);
    }

    return (
        <>
            <Link to={'/avatar'}>Voltar</Link>

            <h1>Página Avatar Cadastro</h1>

            <form onSubmit={salvar}>
                <div>
                    <label>Nome</label>
                    <input type="text" onChange={(event) => setNome(event.target.value)} />
                </div>
                <div>
                    <label>Avatar (imagem)</label>
                    <input type="text" onChange={(event) => setImagem(event.target.value)} />
                </div>

                <button>Salvar</button>
            </form>
        </>
    );
}