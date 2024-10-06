import { IAddressesEntity } from '../../../domain/entities/users/addresses.entity';
import { Cep } from '../../../adapter/connectors/cep.interface';
import fetch from "node-fetch";

export class ApiCep implements Cep {
    public async buscaEndereco(cep: string): Promise<IAddressesEntity | undefined> {
        try{
            const responseCep = await fetch(`https://cdn.apicep.com/file/apicep/${cep.slice(0, 5)}-${cep.slice(5, 8)}.json`);
            
            if(responseCep.status != 200)
                return;

            const dataCep = await responseCep.json();

            return {
                code: dataCep.code,
                address: dataCep.address,
                district: dataCep.district,
                city: dataCep.city,
                state: dataCep.state
            };
        } catch(error) {
            return;
        }
    }
}