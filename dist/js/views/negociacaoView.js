import { view } from "./view.js";
export class NegociacaoView extends view {
    template(model) {
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
                            `;
        }).join(' ')}
                </tbody>
            </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
