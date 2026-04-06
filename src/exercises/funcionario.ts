interface Funcionario {
    nome: string;
    idade: number;
    salario: number;

    maior_de_idade(): boolean;
}

export class CLT implements Funcionario {
    nome: string;
    idade: number;
    salario: number;
    beneficios: string[];

    constructor(s: number, n: string, i: number, b: string[]) {
        this.salario = s;
        this.nome = n;
        this.idade = i;
        this.beneficios = b
    }

    maior_de_idade(): boolean {
        return this.idade >= 18;
    }

    eh_aprendiz(): boolean {
        return this.idade < 18;
    }
}

export class Estagiario implements Funcionario {
    nome: string;
    idade: number;
    universidade: string;
    salario: number;

    constructor(n: string, i: number, u: string, s: number) {
        this.nome = n;
        this.idade = i;
        this.universidade = u;
        this.salario = s;
    }

    maior_de_idade(): boolean {
        return this.idade >= 18;
    }

    eh_estagiario(): boolean {
        return true;
    }

    beneficios(): string[] {
        return ["vale transporte"]
    }
}