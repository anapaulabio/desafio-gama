import { ClientsEntity } from "../../../../domain/entities/users/client.entity"

export default function (client: ClientsEntity) {
    const users = {
        userId: client.userId,
        name: client.name,
        code: client.code,
        email: client.email,
        password: client.password,
        phoneNumber: client.phoneNumber,
        whatsappLink: client.whatsappLink
    }

    let vets = undefined
    if ('crmv' in client){
        vets = {
            userId: undefined,
            avatar: client.avatar,
            specialty: client.specialty,
            crmv: client.crmv,
            formation: client.formation,
            experience: client.experience,
            teleconsultation: client.teleconsultation
        }
    }

    let addresses = undefined
    if ('address' in client){
        addresses = {...client.address, ...{userId: undefined} }
    }

    return {
        users: users,
        vets: vets,
        addresses: addresses
    }
}