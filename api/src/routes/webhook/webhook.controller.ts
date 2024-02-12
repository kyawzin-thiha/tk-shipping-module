import {Controller, Post, Request} from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
    @Post('')
    async webhook(@Request() req: any) {
        console.log("enter")
        console.log(req.body);
        return true;
    }
}
