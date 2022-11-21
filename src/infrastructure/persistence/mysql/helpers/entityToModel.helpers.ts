import { ClientsEntity } from "../../../../domain/entities/users/client.entity"

export default function (client: ClientsEntity) {
    const users = {
        userId: client.userId,
        name: client.name,
        code: client.code,
        email: client.email,
        password: client.password,
        phoneNumber: client.phoneNumber,
    }

    let vets = undefined
    if ('crmv' in client){
        vets = {
            userId: undefined,
            avatar: client.avatar,
            specialty: client.specialty,
            crmv: client.crmv,
            aboutMe: client.aboutMe,
            queryValue: client.queryValue,
            queryDutyValue: client.queryDutyValue,
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