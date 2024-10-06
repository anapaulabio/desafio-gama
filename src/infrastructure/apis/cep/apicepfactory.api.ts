import { Cep } from '../../../adapter/connectors/cep.interface';
import { CepFactory } from '../../../adapter/connectors/cepfactory.api';
import { ApiCep } from './apicep.api';

export class ApiCepFactory extends CepFactory {
    public factoryMethod(): Cep {
        return new ApiCep();
    }
}