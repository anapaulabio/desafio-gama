import { Cep } from './cep.interface';
import { IAddressesEntity } from '../../domain/entities/users/addresses.entity';

export abstract class CepFactory {
    public abstract factoryMethod(): Cep;

    public preencheEndereco(cep: string): Promise<IAddressesEntity | undefined> {
        const cepProvider = this.factoryMethod();

        return cepProvider.buscaEndereco(cep);
    }
}