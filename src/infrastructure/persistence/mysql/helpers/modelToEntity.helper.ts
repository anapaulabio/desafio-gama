import { ClientsEntity } from "../../../../domain/entities/users/client.entity";
import { IVetsEntity } from "../../../../domain/entities/users/vets.entity";

export default function (people: any): ClientsEntity | undefined {
    if(!people)
    return;
    
    const users: ClientsEntity = {
        userId: people.userId,
        name: people.name,
        code: people.code,
        email: people.email,
        password: people.email,
        phoneNumber: people.phoneNumber,
        whatsappLink: people.whatsappLink
    }

    if(people.address){
        users.address = {
            code: people.addresses.code,
            address: people.addresses.address,
            complement: people.addresses.complement,
            district: people.addresses.district,
            city: people.addresses.city,
            state: people.addresses.state
        }
    }

    if(people.vets){
        (users as IVetsEntity).specialty = people.vets.specialty;
        (users as IVetsEntity).crmv = people.vets.crmv;
        (users as IVetsEntity).queryValue = people.vets.queryValue;
        (users as IVetsEntity).formation = people.vets.formation;
        (users as IVetsEntity).experience = people.vets.experience;
        (users as IVetsEntity).teleconsultation = people.vets.teleconsultation;
    } else {
        return;
    }

    return (users as ClientsEntity);
}