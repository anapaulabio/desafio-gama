import { IAddressesEntity } from '../../domain/entities/users/addresses.entity';

export interface Cep {
    buscaEndereco(cep: string): Promise<IAddressesEntity | undefined>;
}