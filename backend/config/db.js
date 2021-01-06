import mongoose from 'mongoose'

const connectDB = async ( ) => {
    try {
        const conn = await mongoose.connect("mongodb+srv://admin:gPagNJCeJVoAxQFj@cluster0.igshi.mongodb.net/products", {
            useNewUrlParser: true,
            useCreateIndex: true, 
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Errror: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB