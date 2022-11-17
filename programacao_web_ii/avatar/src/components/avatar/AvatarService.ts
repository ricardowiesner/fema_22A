
export interface Avatar {
    id?: string;
    nome: string;
    imagem: string
}

export class AvatarService {

    static list: Avatar[] = [];

    static salvar(avatar: Avatar) {
        if (avatar.id) {
            let index = AvatarService.list.findIndex(a => a.id == avatar.id);
            AvatarService.list[index].nome = avatar.nome;
            AvatarService.list[index].imagem = avatar.imagem;
        } else {
            avatar.id = Math.random().toString(36);
            AvatarService.list.push(avatar);
        }
        
        console.log('list ' , AvatarService.list);
    }
}