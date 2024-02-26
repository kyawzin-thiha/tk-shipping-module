import { Module } from '@nestjs/common';
import { BoxController } from './box.controller';
import { BoxService } from './box.service';
import { HelperModule } from '../../helper/helper.module';
import { DbModule } from '../../db/db.module';

@Module({
	imports: [HelperModule, DbModule],
	controllers: [BoxController],
	providers: [BoxService],
})
export class BoxModule {}
