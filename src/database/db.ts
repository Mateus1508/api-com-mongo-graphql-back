import mongoose from "mongoose";

const url: string = `mongodb+srv://mateus:${process.env.PASSWORD}@universitycluster.ysd21q8.mongodb.net/?retryWrites=true&w=majority`;
const options: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
export const dbConnection = async () => {
    try {
        await mongoose.connect(url, options);
        console.log('Database connected!')
    }
    catch(err) {
        console.log('Erro: ' + err);
    }
}