import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacaoView } from "../views/negociacaoView.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes()
    private negociacaoView = new NegociacaoView("#negociacoesView")
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacaoView.update(this.negociacoes)

    }
    adiciona(): void {

        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        this.negociacaoView.update(this.negociacoes)
        this.mensagemView.update('Negociação cadastrada com sucesso')

        this.limparFormulario();

    }
    criaNegociacao(): Negociacao {
        const exp = "/-/g";
        const data = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);

    }
    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = ''
        this.inputData.focus
    }
}