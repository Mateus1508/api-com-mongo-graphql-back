import mongoose from "mongoose";

const options: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export const dbConnection = async (PASSWORD: string) => {
    const url: string = `mongodb+srv://mateus:${PASSWORD}@universitycluster.ysd21q8.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(url, options);
        console.log('Database connected!')
    }
    catch(err) {
        console.log('Erro: ' + err);
    }
}