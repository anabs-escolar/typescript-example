import { CLT, Estagiario } from "../exercises/funcionario";

describe("Teste da interface Funcionario (maior_de_idade)", () => {

    test("deve validar maior de idade após alteração de atributos", () => {
        const clt = new CLT(3000, "Ana", 17, []);
        const est = new Estagiario("Carlos", 16, "UFRN", 1200);

        // inicialmente menores
        expect(clt.maior_de_idade()).toBe(false);
        expect(est.maior_de_idade()).toBe(false);

        // altera idade
        clt.idade = 20;
        est.idade = 22;

        // agora maiores
        expect(clt.maior_de_idade()).toBe(true);
        expect(est.maior_de_idade()).toBe(true);
    });

});