import {Module} from '@nestjs/common';
import {HelperModule} from '../helper/helper.module';
import {UserRepository} from './user.repository';

@Module({
    imports: [HelperModule],
    providers: [UserRepository],
    exports: [UserRepository],
})
export class DbModule {}
