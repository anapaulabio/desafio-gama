import { IAddressesEntity } from "../../../../domain/entities/users/addresses.entity";
import { ClientsEntity } from "../../../../domain/entities/users/client.entity";
import { IUsersEntity } from "../../../../domain/entities/users/users.entity";
import { IVetsEntity } from "../../../../domain/entities/users/vets.entity";

export default function (people: any): ClientsEntity | undefined {
    if(!people)
    return;
    
    let vets: IVetsEntity = {
        userId: people.userId,
        avatar: people.avatar,
        crmv: people.crmv,
        specialty: people.specialty,
        queryValue: people.queryValue,
        formation: people.formation,
        experience: people.experience,
        teleconsultation: people.teleconsultation,
        name: people.name,
        code: people.code,
        email: people.email,
        password: people.password,
        phoneNumber: people.phoneNumber,
        whatsappLink: people.whatsappLink
    }

    if (people.users){
        (vets as IUsersEntity).name = people.users.name;
        (vets as IUsersEntity).code = people.users.code;
        (vets as IUsersEntity).email = people.users.email;
        (vets as IUsersEntity).phoneNumber = people.users.phoneNumber;
        
 
    }
    if(people.addresses){
        vets.address = {
            code: people.addresses.code,
            address: people.addresses.address,
            complement: people.addresses.complement,
            district: people.addresses.district,
            city: people.addresses.city,
            state: people.addresses.state
        }
    }

    return (vets as ClientsEntity);
}