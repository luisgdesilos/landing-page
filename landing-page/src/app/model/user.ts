import { EmailValidator } from '@angular/forms';

export interface User {
    name: string;
    lasName: string;
    email: EmailValidator;
    city: string;
    phone: number;
}
