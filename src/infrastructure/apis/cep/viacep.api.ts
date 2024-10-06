import { IAddressesEntity } from '../../../domain/entities/users/addresses.entity';
import { Cep } from '../../../adapter/connectors/cep.interface';
import fetch from "node-fetch";

export class ViaCep implements Cep {
    public async buscaEndereco(cep: string): Promise<IAddressesEntity | undefined> {
        try{
            const responseCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        
            if(responseCep.status != 200)
                return;
    
            const dataCep = await responseCep.json();
            
            if('erro' in dataCep)
                return;
    
            return {
                code: dataCep.cep,
                address: dataCep.logradouro,
                complement: dataCep.complemento,
                district: dataCep.bairro,
                city: dataCep.localidade,
                state: dataCep.uf
            };
        } catch(error) {
            return;
        }
    }
        
}