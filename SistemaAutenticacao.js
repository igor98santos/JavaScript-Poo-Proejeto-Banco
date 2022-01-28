/*
Ser autenticavel significa ter o método autenticar

ducky type ele é bem conhecido em linguagens que tem tipagens fracas 
nota: leia mais sobre no wikipedia.
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel && 
       autenticavel.autenticar instanceof Function;
    }
}