import {Injectable} from '@nestjs/common';
import {compareSync, genSaltSync, hashSync} from 'bcryptjs';

@Injectable()
export class BcryptService {
    hashValue(value: string): string {
        const salt = genSaltSync(11);
        return hashSync(value, salt);
    }

    compareValue(value: string, hash: string): boolean {
        return compareSync(value, hash);
    }
}