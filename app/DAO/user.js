export default function UserDao({ name, password, email}){
    this.name = name
    this.email = email
    this.password = password
    this.updatedAt = new Date()
}