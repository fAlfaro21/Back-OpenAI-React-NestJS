import { Injectable } from '@nestjs/common';

import OpenAI from 'openai';

import { orthographyCkeckUseCase } from './use-cases';
import { OrthographyDto } from './dtos';

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

}