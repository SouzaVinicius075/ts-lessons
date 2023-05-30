import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoView {
    private elemento: HTMLElement
    constructor(private seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <th>
                        DATA
                    </th>
                    <th>
                        QUANTIDADE
                    </th>
                    <th>
                        VALOR
                    </th>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <td> ${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td> ${negociacao.quantidade}</td>
                            <td> ${negociacao.valor}</td>
                        </tr>
                            `
        }).join(' ')}
                </tbody>
            </table>
        `
    }
    update(model: Negociacoes): void {
        console.log(model.lista());

        const template = this.template(model)
        console.log(template);
        this.elemento.innerHTML = template;
    }


}