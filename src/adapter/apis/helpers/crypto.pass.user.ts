import bcrypt from 'bcrypt'

export default function (password: string) {
    const passSecure = bcrypt.hashSync(password, 10);
    return passSecure;
}