import { Request, Response } from "express";


const FunctionsController = {
    teste: async (req: Request, res: Response) => {
        try {
            res.json({ message: 'Hello, world!' });
        } catch (error) {
            console.log('Erro: ', error)
        } finally {
            console.log('Teste concluído com sucesso.\n Api funcionbando perfeitamente.')
        }
    }



}

export default () => FunctionsController