import { Cep } from '../../../adapter/connectors/cep.interface';
import { CepFactory } from '../../../adapter/connectors/cepfactory.api';
import { ViaCep } from './viacep.api';

export class ViaCepFactory extends CepFactory {
    public factoryMethod(): Cep {
        return new ViaCep();
    }
}