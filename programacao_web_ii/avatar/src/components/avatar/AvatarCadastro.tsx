import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar, AvatarService } from "./AvatarService";

export function AvatarCadastro() {

    const navigate = useNavigate();
    // destructuring
    const { id } = useParams();

    const [avatar, setAvatar] = useState<Avatar>({nome: '', imagem: ''});

    //const [codigo, setCodigo] = useState('');
    //const [nome, setNome] = useState('');
    //const [imagem, setImagem] = useState('');

    function valueChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        
        setAvatar({...avatar, [name]: value});
    }

    useEffect(() => {
        if (id) {
            let avatar = AvatarService.buscarPorId(id);
            if (avatar) {
                setAvatar(avatar);
            }            
            //setCodigo(avatar && avatar?.id ? avatar?.id : '');
            //setNome(avatar ? avatar?.nome : '');
            //setImagem(avatar ? avatar?.imagem : '');

            console.log('avatar ', avatar);
        }
    }, []);

    function salvar(event: any) {
        event.preventDefault();

        //let avatar: Avatar = {
        //    nome: nome,
        //    imagem: imagem
        //};
        if (avatar) {
            AvatarService.salvar(avatar);
        }        
        navigate('/avatar');
    }

    return (
        <>
            <Link to={'/avatar'}>Voltar</Link>

            <h1>Página Avatar Cadastro</h1>

            <form onSubmit={salvar}>
                <div>
                    <label>Nome</label>
                    <input type="text" name="nome" value={avatar.nome} onChange={valueChange} />
                </div>
                <div>
                    <label>Avatar (imagem)</label>
                    <input type="text" name="imagem" value={avatar.imagem} onChange={valueChange} />
                </div>

                <button>Salvar</button>
            </form>
        </>
    );
}