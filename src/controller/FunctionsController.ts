import { Request, Response } from "express";
import { SalesReportInterface } from "../dtos/SalesReportInterface";


const FunctionsController = {
    teste: async (req: Request, res: Response) => {
        try {
            res.json({ message: 'Hello, world!' });
        } catch (error) {
            console.log('Erro: ', error)
        } finally {
            console.log('Teste concluído com sucesso.\n Api funcionbando perfeitamente.')
        }
    },
    getAllReport: async (req: Request, res: Response) => {
        try {
            const jsonAllReport: SalesReportInterface[] = [
                { "category": "Food", "product": "Cereals", "brand": "Kellogs", "January": 120, "February": 110, "March": 130, "April": 140 },
                { "category": "Food", "product": "Cereals", "brand": "Nestle", "January": 80, "February": 90, "March": 75, "April": 95 },
                { "category": "Food", "product": "Cereals", "brand": "General Mills", "January": 150, "February": 160, "March": 170, "April": 180 },
                { "category": "Food", "product": "Snacks", "brand": "Lay's", "January": 200, "February": 190, "March": 210, "April": 220 },
                { "category": "Food", "product": "Snacks", "brand": "Doritos", "January": 180, "February": 170, "March": 190, "April": 180 },
                { "category": "Beverages", "product": "Soda", "brand": "Coca Cola", "January": 300, "February": 280, "March": 310, "April": 290 },
                { "category": "Beverages", "product": "Soda", "brand": "Pepsi", "January": 280, "February": 270, "March": 260, "April": 250 },
                { "category": "Beverages", "product": "Juice", "brand": "Minute Maid", "January": 130, "February": 140, "March": 150, "April": 145 },
                { "category": "Beverages", "product": "Juice", "brand": "Tropicana", "January": 120, "February": 130, "March": 125, "April": 135 },
                { "category": "Electronics", "product": "Smartphones", "brand": "Apple", "January": 500, "February": 450, "March": 550, "April": 530 },
                { "category": "Electronics", "product": "Smartphones", "brand": "Samsung", "January": 450, "February": 460, "March": 470, "April": 480 },
                { "category": "Electronics", "product": "Laptops", "brand": "Dell", "January": 250, "February": 260, "March": 270, "April": 280 },
                { "category": "Electronics", "product": "Laptops", "brand": "HP", "January": 240, "February": 250, "March": 245, "April": 255 },
                { "category": "Automobiles", "product": "Cars", "brand": "Toyota", "January": 600, "February": 610, "March": 620, "April": 630 },
                { "category": "Automobiles", "product": "Cars", "brand": "Ford", "January": 350, "February": 360, "March": 370, "April": 380 },
                { "category": "Automobiles", "product": "Motorcycles", "brand": "Harley Davidson", "January": 200, "February": 210, "March": 220, "April": 230 },
                { "category": "Automobiles", "product": "Motorcycles", "brand": "Honda", "January": 250, "February": 260, "March": 270, "April": 280 },
                { "category": "Clothing", "product": "Men's Wear", "brand": "Levi's", "January": 300, "February": 310, "March": 320, "April": 330 },
                { "category": "Clothing", "product": "Women's Wear", "brand": "Gucci", "January": 250, "February": 260, "March": 250, "April": 270 },
                { "category": "Clothing", "product": "Sportswear", "brand": "Nike", "January": 400, "February": 410, "March": 420, "April": 430 }
            ]
            res.send(jsonAllReport);
        } catch (error) {
            console.log('Erro: ', error)
            res.json({ error: 'Erro ao se conectar ao banco de dados' });
        }
    },

    /* 
        Poderia criar rotas para receber parametro e filtrar aqui mas 
        não seria otimizado e por esse motivo que coloquei o filtro 
        diretamente no front e para mostrar que como sei realizar 
        requisição e construir um backend fiz uma rota para retornar
        todos os dados necessários para gerar o gráfico
    */

}

export default () => FunctionsController