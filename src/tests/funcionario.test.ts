import { CLT, Estagiario } from "../exercises/funcionario";

describe("CLT", () => {
    test("deve criar um funcionario CLT", () => {
        const clt = new CLT(3000, "Ana", 25, ["vale alimentação", "vale transporte"]);

        expect(clt.nome).toBe("Ana");
        expect(clt.idade).toBe(25);
        expect(clt.salario).toBe(3000);
        expect(clt.beneficios).toEqual(["vale alimentação", "vale transporte"]);
    });

    test("deve verificar maior de idade", () => {
        const clt = new CLT(2000, "João", 17, []);

        expect(clt.maior_de_idade()).toBe(false);
    });

    test("deve verificar se é aprendiz", () => {
        const clt = new CLT(1500, "Pedro", 16, []);

        expect(clt.eh_aprendiz()).toBe(true);
    });
});

describe("Estagiario", () => {
    test("deve criar um estagiário corretamente", () => {
        const est = new Estagiario("Maria", 20, "UFRN", 1200);

        expect(est.nome).toBe("Maria");
        expect(est.idade).toBe(20);
        expect(est.salario).toBe(1200);
        expect(est.universidade).toBe("UFRN");
    });

    test("deve verificar maior de idade", () => {
        const est = new Estagiario("Lucas", 17, "IFRN", 1000);

        expect(est.maior_de_idade()).toBe(false);
    });

    test("deve sempre ser estagiário", () => {
        const est = new Estagiario("Carla", 22, "UFRN", 1300);

        expect(est.eh_estagiario()).toBe(true);
    });

    test("deve retornar benefícios do estagiário", () => {
        const est = new Estagiario("Rafael", 21, "IFRN", 1100);

        expect(est.beneficios()).toEqual(["vale transporte"]);
    });
});