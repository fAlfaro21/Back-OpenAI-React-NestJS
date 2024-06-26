import { Injectable } from '@nestjs/common';

import OpenAI from 'openai';

import { 
    orthographyCkeckUseCase, 
    prosConsDiscusserUseCase, 
    prosConsDiscusserStreamUseCase,
    translateUseCase,
 } from './use-cases';
import { OrthographyDto, ProsConsDiscusserDto, TranslateDto } from './dtos';

@Injectable()
export class GptService {

    private openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    })

    //Solo va a llamar casos de uso

    async orthographyCheck( orthographyDto: OrthographyDto ){
        return await orthographyCkeckUseCase( this.openai, {
            prompt: orthographyDto.prompt
        });
    }

    async prosConsDiscusser( prosConsDiscusserDto: ProsConsDiscusserDto ){
        return await prosConsDiscusserUseCase( this.openai, {
            prompt: prosConsDiscusserDto.prompt
        });
    }

    async prosConsDiscusserStream( prosConsDiscusserDto: ProsConsDiscusserDto ){
        return await prosConsDiscusserStreamUseCase( this.openai, {
            prompt: prosConsDiscusserDto.prompt
        });
    }

    async translateText( translateDto: TranslateDto ){
        return await translateUseCase( this.openai, {
            prompt: translateDto.prompt,
            lang: translateDto.lang,
        });
    }

}
