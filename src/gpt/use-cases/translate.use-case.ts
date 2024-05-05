import OpenAI from "openai";

interface Options {
    prompt: string;
    lang: string;
}


export const translateUseCase = async( openai: OpenAI, options: Options ) => {
    const { prompt, lang } = options;

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            { 
                role: 'system', 
                content: `
                Traduce el siguiente texto al idioma ${lang}:${ prompt }
                `,
            },
        ],
        //Estos son ejemplos de otros parámetros y configuración que se puede utilizar..
        //..pero que están sujetos a que lo utilice el modelo en cuestión
        temperature: 0.2,
        //max_tokens: 500,
      });
    return {
        message: response.choices[0].message.content
    };

}