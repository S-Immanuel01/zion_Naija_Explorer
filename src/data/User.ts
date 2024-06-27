class User {
    email: string;
    phone: string;
    photoUrl: string
    location: string

    constructor(email: string, phone: string, photoUrl: string, location: string) {
        this.email = email;
        this.phone = phone;
        this.photoUrl = photoUrl;
        this.location = location;
    }

}

export {User}